/**
 * Worker entry — serves the static site through the ASSETS binding and handles the
 * /contact lead form at POST /api/lead, storing each submission in the LEADS KV
 * namespace (see wrangler.jsonc to provision it). Until LEADS is bound, the route
 * answers 503 so nothing silently swallows a lead.
 *
 * Reading submissions:
 *   npx wrangler kv key list --binding LEADS --remote
 *   npx wrangler kv key get --binding LEADS --remote "<key>"
 */

const MAX_FIELD = 2000;

function field(form, name) {
  const value = form.get(name);
  return typeof value === 'string' ? value.slice(0, MAX_FIELD).trim() : '';
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

/** The no-JS form POST expects a redirect; the fetch() path expects JSON. */
function redirectOrJson(request) {
  const accepts = request.headers.get('accept') ?? '';
  if (!accepts.includes('application/json')) {
    return new Response(null, { status: 303, headers: { location: '/thank-you' } });
  }
  return json({ ok: true });
}

async function handleLead(request, env) {
  if (!env.LEADS) {
    return json({ ok: false, error: 'Lead intake is not provisioned yet' }, 503);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Expected form data' }, 400);
  }

  // Honeypot tripped: report success so bots learn nothing, store nothing.
  if (field(form, '_gotcha')) return redirectOrJson(request);

  const lead = {
    name: field(form, 'name'),
    email: field(form, 'email'),
    phone: field(form, 'phone'),
    referral: field(form, 'referral'),
    message: field(form, 'message'),
    consent: field(form, 'consent'),
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get('user-agent') ?? '',
    country: request.cf?.country ?? '',
  };

  if (!lead.name || !lead.email) {
    return json({ ok: false, error: 'Name and email are required' }, 422);
  }

  await env.LEADS.put(`lead:${lead.submittedAt}:${crypto.randomUUID()}`, JSON.stringify(lead));
  return redirectOrJson(request);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/lead' && request.method === 'POST') {
      return handleLead(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
