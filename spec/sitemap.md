> **SUPERSEDED (2026-07-21).** This document predates the current site (no /programs,
> /managed, /architecture, /legitscript, /about, /legal/*; still lists /solutions). The live
> IA's source of truth is `src/lib/nav.ts`; the claims registry is `src/lib/stats.ts`; the
> governing edit plan is `CONTENT-REVIEW-2026-07-21.md`. Do not rebuild from this map.
> `spec/design.md` remains law.

# Purple Label MD — Sitemap & Information Architecture

> **Positioning rewrite (2026-06-24).** This IA is steered by `memory/purplelabel-positioning.md` (AI-agent-first / developer-first, modular, "Purple Label" = the tailored AI version of white label). When this file and the old bask-derived structure conflict, the positioning wins. Locked decisions baked in: (1) Intake is agent/API-first — no no-code/builder language; (2) **Developers** is a primary nav group; (3) category line is **"Telemedicine infrastructure for the agent era."**

**Product:** Purple Label MD — a modular, API-first telemedicine platform delivered as code. Customers get API tokens, agent-ready docs, MCP servers, and a customizable prompt library, so their own AI agents can stand up, operate, and extend a branded virtual-care business (intake → visit → e-prescribe → fulfill → deliver) on infrastructure that already runs at scale.

**Primary buyers (two audiences, one site):**
- **Builder / technical buyer** — founders, product/eng leaders, and the AI agents they run. They evaluate the API, MCP, docs, and prompt library. The **Developers** surface speaks to them.
- **Business / trust buyer** — clinical, compliance, legal, and commercial leaders who hold veto power and are *not* agent-fluent. They evaluate security, scale, pricing, and the care model. The three differentiators + Security + Pricing speak to them. **Both stories must stay legible; never bury the trust story under the API story.**

**Conversion goals (priority order):** (1) Request a demo / talk to sales, (2) Read the docs / request API access, (3) Read the platform, security & pricing story deeply enough to shortlist us.

---

## Global navigation

**Header (sticky):** Logo · Platform ▾ · Developers ▾ · Solutions ▾ · Pricing · [Sign in] · **[Request a demo]**
*(Hero and Developers pages add a secondary "Read the docs" CTA for the technical audience.)*

### Platform ▾ (the modular toolkit — best-of-breed, already scaled)
- **Intake** — agent/API-first patient intake: condition-aware questionnaires from tested components + prompts, assembled and run by your agents.
- **Visits & E-Prescribing** — synchronous + async telemedicine visits with certified electronic prescribing.
- **Patient Management** — one longitudinal record, secure messaging, care coordination across modules.
- **Pharmacy & Fulfillment** — nationwide 503A/503B network, lowest-in-class drug pricing, ships all 50 states.
- **Payments** — telehealth merchant accounts, subscriptions, refunds — callable from your stack.
- **Analytics & Growth** — cohorts, retention, order economics, conversion, and BI as data + endpoints (not locked dashboards).
- **Security & Compliance** — HIPAA-ready controls, encryption, access governance under every module.
- → **Platform overview** (`/platform`)

### Developers ▾ (the agent / programmable spine — primary group, locked decision #2)
- **API reference** — the programmable surface for every module; scoped tokens.
- **Agent-ready docs** — documentation formatted for AI agents to consume and act on. `[CONFIRM ships at launch]`
- **MCP servers** — connect your agents directly to the platform over MCP, no glue code. `[CONFIRM ships at launch]`
- **Prompt library** — curated, customizable prompts to build and operate each module. `[CONFIRM ships at launch]`
- **Webhooks & events** — automate on events (e.g., `order.created`, `visit.completed`).
- **Integrations** — partner ecosystem (pharmacies, providers, labs, analytics, CRMs). → `/integrations`
- **Changelog · Status**
- → **Developers overview** (`/developers`)

> **Developers vs. Integrations (resolved):** *Developers* owns our programmable surface — API, MCP, agent docs, prompts, webhooks (how you build **on** us). *Integrations* owns the partner ecosystem we connect **out** to (pharmacies, labs, providers, CRMs). API/MCP/webhooks live in **Developers** only; Integrations links in from the Developers menu.

### Solutions ▾ (by job / outcome)
- **Launch a DTC telehealth brand** — concept to live, agent-built brand.
- **Run a virtual clinic** — scheduling, providers, async + video visits.
- **Add prescribing & fulfillment** — bolt e-Rx + pharmacy onto an existing brand.
- **Scale on our engine (Enterprise)** — inherit proven, high-volume infrastructure.
- **Build with our API & agents** — for developer / agent-first teams (→ Developers).

### Pricing
Top-level link (no menu).

> **Resources** is removed from the top nav (slimmed per the two-audience model). Its items move to the footer: About / Customers / Blog under **Company**; Security stays reachable as a Platform module and a footer trust link; Docs/Changelog/Status live under **Developers**.

**Footer (5 columns):**
- **Platform** — the 7 modules.
- **Developers** — API reference · Agent-ready docs · MCP servers · Prompt library · Webhooks · Integrations · Changelog · Status.
- **Solutions** — the 5 jobs.
- **Company** — About · Customers · Blog · Careers · Contact.
- **Legal** — Terms · Privacy · HIPAA · Do Not Sell.

Trust badges: HIPAA · SOC 2 · LegitScript · Surescripts `[CONFIRM each — render via <Unconfirmed> until substantiated]` · "All systems operational" status pill.

---

## Page inventory (14 primary pages)

| #  | Page | Route | Type | Audience | Purpose / primary CTA |
|----|------|-------|------|----------|----------------------|
| 1  | **Home** | `/` | Landing | Both | Category + agent-first story + trust proof → Request a demo / Read the docs |
| 2  | **Platform** (overview) | `/platform` | Pillar | Both | The modular toolkit, one source of truth → Request a demo |
| 3  | **Intake** | `/platform/intake` | Feature | Builder | Agent/API-first intake (components + prompts) → Read the intake docs |
| 4  | **Visits & E-Prescribing** | `/platform/visits` | Feature | Both | Sync/async visits + certified e-Rx → Talk to sales |
| 5  | **Patient Management** | `/platform/patients` | Feature | Both | Longitudinal record, messaging, coordination → Request a demo |
| 6  | **Pharmacy & Fulfillment** | `/platform/pharmacy-fulfillment` | Feature | Both | Nationwide network, lowest-in-class pricing, 50 states → Talk to sales |
| 7  | **Payments** | `/platform/payments` | Feature | Builder | Telehealth merchant accounts, subscriptions, callable → Read the docs |
| 8  | **Analytics & Growth** | `/platform/analytics` | Feature | Both | Cohorts, retention, order economics, conversion, BI as data → Request a demo |
| 9  | **Security & Compliance** | `/security` | Trust | Business | HIPAA, encryption, governance, attestations → Talk to sales |
| 10 | **Developers** (hub) | `/developers` | Pillar | Builder | API · MCP · agent docs · prompts · webhooks → Read the docs / Request access |
| 11 | **Integrations** | `/integrations` | Pillar | Builder | Partner ecosystem (pharmacies/providers/labs/CRMs) → Explore integrations |
| 12 | **Solutions** | `/solutions` (+ sub-pages) | Pillar/hub | Both | Route buyers by job → Request a demo |
| 13 | **Pricing** | `/pricing` | Conversion | Both | Tiers + FAQ → Request a demo / Read the docs |
| 14 | **About** | `/about` | Company | Business | Mission, scale story, care model, credibility → Contact |

**Changes vs. the bask-derived IA:**
- **Experience Builder → Intake.** No-code/drag-and-drop framing removed entirely (locked decision #1). `/platform/builder` route retired → `/platform/intake`.
- **EMR & E-Prescribing → Visits & E-Prescribing** (`/platform/visits`). The clinical *encounter* is the unit; the record splits out.
- **New: Patient Management** (`/platform/patients`) — the longitudinal record/messaging/coordination, previously implied inside EMR.
- **Analytics & Insights → Analytics & Growth** — absorbs the **BI + conversion-optimization** pillar (delivered as data + endpoints, not locked dashboards).
- **AI Assistant module retired.** A standalone "AI module" is incoherent when the *whole* platform is agent-first. The agent layer becomes the **Developers** surface + the prompt library, present on every module.
- **New: Developers hub** (`/developers`) — primary nav group and the spine of the story.
- **Integrations** scoped down to the partner ecosystem (API/MCP/webhooks moved to Developers).

**Supporting/system pages (lightweight):** `/contact`, `/customers`, `/blog` (index + posts), `/legal/*`, `/status` (link out), `404`. Solutions sub-pages (`/solutions/launch-dtc`, `/solutions/virtual-clinic`, `/solutions/enterprise`, `/solutions/developers`) share a templated layout.

---

## Per-page section blueprint

### 1. Home `/`
1. **Hero** — eyebrow ("Telemedicine infrastructure for the agent era"), H1 (product-form-forward), lead, dual CTA (Request a demo / Read the docs), ambient product/code media.
2. **Proof bar** — the scale line ("the engine behind brands managing hundreds of thousands of patients" `[CONFIRM]`) + permitted logo row.
3. **The thesis** — "White label was for the old web. Purple Label is for the agent era." Skip the builders & dashboards; give you the layer underneath.
4. **What you actually get** (the product form / spine) — API tokens · agent-ready docs + MCP servers · customizable prompt library. `[CONFIRM capability launch]` + the honest "where a human must act, there's a focused console" line.
5. **The modular toolkit** — 7 module cards (Intake, Visits & E-Rx, Patient Management, Pharmacy & Fulfillment, Payments, Analytics & Growth, Security).
6. **Why build on Purple Label** (the 3 differentiators — business-legible, prominent) — proven scale + top-tier security; lowest-in-class drug pricing; world-class US-based care. All `[CONFIRM]`.
7. **Scale strip** — count-up metrics. `[CONFIRM all figures]`
8. **Security teaser** → `/security`. (Trust buyer.)
9. **Developers teaser** → `/developers`. (Builder buyer.)
10. **Customer proof** — "Customer stories coming soon" until verified; never fabricate.
11. **Closing CTA** — "Build telemedicine your agents can run." Request a demo / Read the docs.

### 2. Platform `/platform`
Hero ("the modular toolkit, one source of truth") → "modular, not monolithic; every module is callable" → 7 module summaries with deep-links → the agent/Developers spine (API/MCP/prompts) → engine/scale section `[CONFIRM]` → security teaser → CTA.

### 3. Intake `/platform/intake`
Hero (assembled in code, run by agents) → composable condition-aware questionnaires (logic as data, assembled via API) → intake prompt library `[CONFIRM]` → clinical-grade components → eligibility & routing → versioning & analytics via API (no locked dashboard) → CTA (Read the intake docs).

### 4. Visits & E-Prescribing `/platform/visits`
Hero → synchronous + async visit infrastructure → certified electronic prescribing `[CONFIRM cert partner — e.g., DoseSpot/Surescripts-grade]` → your providers or our US-based network `[CONFIRM]` → visit records flow to Patient Management → all callable via API/agents → CTA (Talk to sales).

### 5. Patient Management `/platform/patients`
Hero → one longitudinal patient record → secure messaging & care coordination → provider groups & roles → record available as API + events → CTA.

### 6. Pharmacy & Fulfillment `/platform/pharmacy-fulfillment`
Hero → nationwide network (50 states) → **lowest-in-class drug pricing** (lead differentiator) `[CONFIRM]` → 503A vs 503B explainer → fulfillment automation (procure/warehouse/brand/ship) → bring-your-own-pharmacy + own shipping rates → transparent fees `[CONFIRM]` → CTA.

### 7. Payments `/platform/payments`
Hero → telehealth merchant accounts on demand → subscriptions & recurring care → refunds & dispute control → callable from your stack / embeddable elements (code sample) → CTA (Read the docs).

### 8. Analytics & Growth `/platform/analytics`
Hero ("your data, as data") → cohorts & retention → order economics → conversion optimization → BI / reporting → all as endpoints + exports, not a locked dashboard → CTA.

### 9. Security & Compliance `/security`
Hero ("enterprise-grade protection for PHI") → trust pillars (encryption in transit/at rest, MFA, RBAC) → HIPAA & PHI handling `[CONFIRM with counsel]` → identity/device mgmt, data ownership, governance → continuous compliance → attestations row (HIPAA · SOC 2 · LegitScript · Surescripts) `[CONFIRM each]` → CTA. **This page carries differentiator #1 (top-tier security) for the trust buyer.**

### 10. Developers `/developers`
Hero ("build and run telemedicine with your own agents") → API reference (every module, scoped tokens) → agent-ready docs `[CONFIRM]` → MCP servers `[CONFIRM]` → prompt library `[CONFIRM]` → webhooks & events (code/JSON sample) → environments/tokens/versioning → integrations link → CTA (Read the docs / Request access).

### 11. Integrations `/integrations`
Hero ("connect the rest of your stack") → partner ecosystem grid, filterable (Pharmacies · Providers · Labs · Analytics · CRM · Sales channels) `[CONFIRM counts + permitted logos]` → how integrations are wired (via API/webhooks → link to Developers) → CTA.

### 12. Solutions `/solutions`
Hub: 5 outcome cards → shared sub-page template (problem → how PLMD solves it with modules + agents → relevant modules → proof → CTA).

### 13. Pricing `/pricing`
Hero → 3 tiers (Start-up / Growth / Enterprise-Custom; API & MCP access called out per tier) with one highlighted → "what's included" capability grid → FAQ accordion `[CONFIRM every answer — commercial commitments]` → CTA.

### 14. About `/about`
Hero/mission → the story → **the scale + care model** (differentiators #1 and #3, in human terms) `[CONFIRM]` → what we believe (operating-partner ethos) → leadership/team `[CONFIRM]` → customers/credibility → careers teaser → contact CTA.

---

## URL & SEO conventions
- Lowercase, hyphenated, shallow (`/platform/<module>`). Trailing-slash off (enforced in `astro.config.mjs`, `trailingSlash: 'never'`).
- One `<h1>` per page; unique `<title>` (≤ 60 chars) and meta description (≤ 155) per page.
- Canonical tags, OpenGraph + Twitter cards per page, `sitemap.xml` + `robots.txt` (Astro integrations).
- JSON-LD: `Organization` + `SoftwareApplication` on home; `BreadcrumbList` on deep pages; `FAQPage` on Pricing. Consider `TechArticle`/`APIReference` schema on Developers.
- Internal linking: every feature page links up to `/platform`, across to `/security` + `/developers`, and (where relevant) `/integrations`.
- Two-audience SEO: target both "telemedicine platform / white-label telehealth" (business) and "telemedicine API / telehealth MCP server / build telehealth with AI agents" (builder) keyword sets.
