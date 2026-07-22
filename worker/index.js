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

/** Client-generated id from the two-step form; used to upsert partial → complete. */
const LEAD_ID_RE = /^[a-zA-Z0-9-]{8,64}$/;

/**
 * Verify the email's domain can receive mail: MX lookup, then A-record fallback (a
 * bare A record is a valid implicit MX), over DNS-over-HTTPS. Fails OPEN on resolver
 * trouble — losing a real lead to a DNS hiccup is worse than storing a fake one.
 */
async function emailDomainAcceptsMail(email) {
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain || !domain.includes('.')) return false;
  try {
    for (const type of ['MX', 'A']) {
      const response = await fetch(
        `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=${type}`,
        { headers: { accept: 'application/dns-json' } },
      );
      if (!response.ok) return true;
      const data = await response.json();
      if (Array.isArray(data.Answer) && data.Answer.length > 0) return true;
    }
    return false;
  } catch {
    return true;
  }
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

  const now = new Date().toISOString();
  const leadId = field(form, 'lead_id');
  const stage = field(form, 'stage') === 'partial' ? 'partial' : 'complete';

  const lead = {
    name: field(form, 'name'),
    email: field(form, 'email'),
    phone: field(form, 'phone'),
    company: field(form, 'company'),
    website: field(form, 'website'),
    message: field(form, 'message'),
    consent: field(form, 'consent'),
    stage,
    submittedAt: now,
    firstSeenAt: now,
    userAgent: request.headers.get('user-agent') ?? '',
    country: request.cf?.country ?? '',
  };

  if (!lead.name || !lead.email) {
    return json({ ok: false, error: 'Name and email are required' }, 422);
  }

  if (!(await emailDomainAcceptsMail(lead.email))) {
    return json(
      {
        ok: false,
        error: 'email_domain',
        message: "That email domain can't receive mail — double-check the address.",
      },
      422,
    );
  }

  // Step 1 and step 2 of the same visit share a lead_id, so the complete submission
  // overwrites its own partial instead of duplicating it. A partial never overwrites
  // a complete (e.g. a stray retry after submit).
  let key;
  if (LEAD_ID_RE.test(leadId)) {
    key = `lead:${leadId}`;
    const existing = await env.LEADS.get(key, 'json');
    if (existing) {
      if (stage === 'partial' && existing.stage === 'complete') return redirectOrJson(request);
      lead.firstSeenAt = existing.firstSeenAt ?? existing.submittedAt ?? now;
    }
  } else {
    key = `lead:${now}:${crypto.randomUUID()}`;
  }

  await env.LEADS.put(key, JSON.stringify(lead));
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
