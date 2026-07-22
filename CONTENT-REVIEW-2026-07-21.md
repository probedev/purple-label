# purplelabelmd.com — Formal Content Review & Edit Plan

**Reviewer:** Chief Architect seat (Purple fleet) · **Date:** 2026-07-21
**Reviewed:** live site (purplelabelmd.com, fetched 2026-07-21) + full `src/` source + `spec/` package + nav/claims inventory, cross-checked against the actual next-gen platform build (intake/clinical/pharmacy/commerce/docs lanes, competitive teardowns, and the Site-Kit GTM direction).
**For:** the executing Claude agent session working in the `purplelabelmd` repo.

---

## 0. How to use this file

1. Read §1 (strategy) once — it explains _why_ every edit below exists. Do not restate it on the site.
2. Apply §2 global directives (G1–G10) first; they touch every page and several change shared files (`src/lib/nav.ts`, new `src/lib/stats.ts`).
3. Then work §3 page-by-page (E-numbered edits). Where replacement copy is given in a blockquote, use it verbatim or better — never weaker.
4. §5 is the claims/counsel register. Anything marked **COUNSEL-GATE** must ship inside `<Unconfirmed reason="…">` (or not at all) until Gregg clears it. Anything marked **[GREGG-CONFIRM]** needs his word; put it in your PR description as an open list.
5. Obey §6 (hard guardrails) without exception. §7 is your acceptance checklist — run it before calling the work done.
6. House rules still apply: `spec/design.md` tokens are law, `npm run check` must pass, `<Unconfirmed>` for anything new and unverified, commit per section.

**Verdict up front:** the site's positioning is _right_ and much of the copy is strong — "telemedicine infrastructure for the agent era," build-vs-managed, pass-through pricing, and the /architecture page are keepers. The three things standing between this and a corpus that convinces a CTO **and** a CEO are: (1) a claims layer that contradicts itself and outruns substantiation, (2) ~10 dead routes in the site chrome including every legal page, and (3) a developer surface that speaks in generic present tense about things that are roadmap, while staying silent about the _real, concrete, differentiated_ machinery we have actually built. Fix those three and this site is genuinely formidable.

---

## 1. The strategy the content must execute

### 1.1 Two buyers, one corpus

- **Developers / technical founders** buy specifics: contracts, guarantees, semantics, and evidence that the platform was built by people who have operated the thing. Generic API marketing ("REST endpoints, scoped tokens, sandbox") is _table stakes_ and reads as vapor. What converts them: named event contracts, delivery guarantees, idempotency semantics, a real docs link, and an architecture story that matches how they'd build it themselves.
- **C-suite / trust buyers** buy risk-removal: time-to-revenue, unit economics, ownership, and "will this survive an audit / a processor review / an ad-network check." They need the story in business English with numbers that reconcile.
- The site already routes these audiences well (Platform vs Developers vs Managed). Keep the routing; upgrade the substance on both tracks.

### 1.2 The honest frame that is also the strongest frame: heritage × next-gen

Today the copy blurs two different true stories into one fuzzy claim set:

- **Heritage (proof):** the operators behind this platform ran a national white-label telehealth operation for years — real volumes, real pharmacy-board inspections, real LegitScript enterprise partnership, real payment-processor clearances.
- **Next-gen (product):** Purple Label MD is a ground-up, API-and-agent-first rebuild of that machine: a durable order saga, an event backbone, catalog-as-data, sealed clinical authority.

Blurring them produces claims like "the same architecture that's run in production for 3 years" sitting next to "the agent-era platform" — a sophisticated buyer smells the seam. **Separated, they're stronger:** "we ran the old machine at national scale; this is the machine we built because we knew where it breaks." That sentence closes both audiences and requires zero exaggeration. Apply it everywhere via G2.

### 1.3 The four differentiators to sharpen (all true, all under-sold today)

1. **Economic alignment:** pass-through medication pricing with transparent platform fees — vs. competitors' markups and rev-share skims. (Managed is rev-share by design; frame it as "success-aligned" and keep Platform = flat, transparent fees.)
2. **Compliance as architecture, not paperwork:** clinical authority is sealed — dose changes are clinician events, never funnel logic; the audit trail is a property of the event log, not a binder. Competitors literally let marketing funnels pick titration schedules. Sell this hard (without naming competitors).
3. **Certification velocity:** LegitScript enterprise partnership + pre-certified rails = the single longest pole in launching (ads + payments) compressed. This is a C-suite time-to-revenue story and it is real.
4. **Ownership without hostage-taking:** brand, patients, data — and increasingly _code_ (fork-and-own storefronts) — belong to the client. "Infrastructure, not a middleman" is the right line; extend it to exit rights (export, portability) which Enterprise already lists.

### 1.4 Tense discipline (the credibility rule)

One rule fixes most trust leaks: **live capabilities in present tense; designed-but-unshipped in "at launch / on the roadmap" framing; nothing invented.** The developer surface currently violates this in both directions — present tense for roadmap items (MCP "the tools are typed and discoverable") and silence about real, buildable specifics (journey-status states, webhook delivery guarantees, entry links). Rebalance per §3.

---

## 2. Global edit directives

### G1 — Create a single claims registry and route every number through it

Create `src/lib/stats.ts`: every metric/certification used anywhere on the site becomes one exported constant with `{ value, label, caption, source, entity, asOf }`. Pages import from it; no literal stats in page files. Then reconcile the current contradictions (all **[GREGG-CONFIRM]**):

- Hero "Rx filled on platform: **728,487**" vs "**1M+** prescriptions a month" (home, /platform, /managed) vs "**10,000+** orders a week" (≈43k/mo). These cannot coexist unlabeled. Proposed labeling: platform-lifetime Rx (728,487 — the odometer stat, great, keep it live-feeling), pharmacy-network monthly volume (1M+ _across the partner network_, if true), platform weekly orders (10k+). Every stat states _whose_ number it is.
- "/platform: **100+ brands launched — in the last 6 months**" vs home "infrastructure behind 100+ telehealth brands." The 6-month caption is almost certainly wrong; heritage brand count is a lifetime figure. Fix caption to "and counting" or the true period.
- "/platform: run in production for **3 years**" — heritage claim; move it into the heritage frame (G2), not the next-gen platform's own age.
- "**250+** LegitScript certifications", "**300+** wearable/device integrations", "**$500K+** DIY cost", "6–12 months DIY" — sources into the registry or `<Unconfirmed>`.

### G2 — Install the heritage×next-gen frame (one reusable block)

Add a `Heritage` section/component used on Home (replacing the vaguer parts of "Why now"), /platform ("Inherit our scale"), and the new /about. Copy to adapt:

> **Built by the operators, rebuilt for agents.**
> For [N] years our team ran one of the largest white-label telehealth operations in the country — [X]+ branded launches, hundreds of thousands of prescriptions, cleared pharmacy-board, HIPAA, and payment-processor reviews. Purple Label MD is what we built next: the same regulated machine, redesigned from the first line of code to be driven by APIs and AI agents — so your team inherits the proof without inheriting the legacy.
> ([N]/[X] from the registry; entity naming per G8.)

### G3 — Kill every dead route (credibility + counsel blocker)

`src/lib/nav.ts` footer links to routes with **no page in `src/pages/`**: `/integrations`, `/changelog`, `/status`, `/about`, `/customers`, `/blog`, `/legal/terms`, `/legal/privacy`, `/legal/hipaa`, `/legal/do-not-sell` (and Careers → `/about`). `/developers` and `/architecture` body links also point at `/integrations`. Resolution:

- **Build now (§4):** `/about` (small but real), `/legal/*` (counsel-gated skeletons — see G8; a telehealth sales site with 404 legal links is disqualifying for the exact buyer we court), `404.astro` if absent.
- **Remove from nav until real:** `/customers`, `/blog`, `/changelog`, Careers.
- **`/status`:** link the real status page if one exists, else remove the link AND the footer "All systems operational" pill (an evergreen-static "operational" claim is a fake signal a CTO will test). **[GREGG-CONFIRM status provider]**
- **`/integrations`:** either build the small partner-ecosystem grid page or retarget those links to `/developers#webhooks` + `/architecture` (partners section). Do not leave a primary-nav-adjacent 404.

### G4 — Resolve the two ⚠ flags rendering on the LIVE architecture page

`/architecture` currently ships visible `<Unconfirmed>` warnings to the public (step 06 EPCS wording; compliance/PCI wording). Policy: `<Unconfirmed>` is a _draft_ device. Either (a) counsel clears the wording and the wrapper comes off, or (b) the sentence is rewritten to the safe form now and the wrapper comes off. Safe forms:

- Step 06: "E-prescription routed to a partner pharmacy — with prescribing rules enforced per medication and per state." (Drop the controlled-substance/EPCS specifics from public copy until confirmed.)
- Compliance card: keep field-encryption + append-only audit log + client-side tokenization; state PCI posture as "tokenized client-side so card data never touches our servers" and hold "SAQ-A" until confirmed.
  Same policy check across /managed (two flags) and /legitscript (timeline flag): resolve or reword — no visible ⚠ on production pages.

### G5 — Superlative hygiene (FTC + processor optics)

"Lowest-in-class pricing," "the lowest cost on every medication," "lowest-cost medication catalog" — unprovable superlatives invite challenge (ad networks and processors read these pages during the exact reviews we brag about passing). Keep the _provable mechanism_ and demote the superlative: pass-through pricing, zero markup, "our cost is your cost." Where a superlative survives, hedge: "among the lowest medication costs in telehealth — because we pass volume pricing straight through." Apply site-wide (home hero/moat/toolkit, /platform module card, nav descs, /managed economics, /pricing, programs).

### G6 — One medication-claims pattern, and never the word "equivalents"

`src/lib/programs.ts` + `/glp-1-weight-loss` say "semaglutide, tirzepatide, and **compounded equivalents**." "Equivalent" is the specific word that draws manufacturer lawsuits and regulator attention in the GLP-1 compounding fight. Replace everywhere with:

> "GLP-1 therapies such as semaglutide and tirzepatide — and, **where permitted by law and clinically appropriate, compounded formulations** prepared by licensed 503A/503B pharmacies."
> Keep the existing eligibility disclaimer line and extend it: "Compounded medications are not FDA-approved; availability follows FDA, state, and clinical rules." **COUNSEL-GATE** the final phrasing, but make this swap immediately — the current wording is strictly worse.

### G7 — Tense discipline on the developer surface

Every capability statement gets one of three registers: **live** (present tense, linkable), **at launch** (badged, future-framed copy — no present-tense mechanics), **roadmap** (named as such). Today: agent-ready docs = live (real docs exist — wire the link, [GREGG-CONFIRM public docs URL]); MCP servers = at-launch (fix "the tools are typed and discoverable" → "will be typed and discoverable"); prompt library = at-launch; API sandbox self-serve = **not yet** — /pricing says "Self-serve a sandbox and API keys today," which is false today; change to "Sandbox access starts with your consult" until self-serve exists.

### G8 — Legal entity naming + certification attribution

Marketing brand = Purple Label MD (correct, keep). But: legal pages, Terms/BAA references, and certification claims must carry the **legal entity name** (counsel's caption — "White Label MD, LLC" / current MSO entity per counsel; **COUNSEL-GATE**, sign-off Gregg + counsel). Add one footer line: "Purple Label MD is a product of [legal entity]." Certifications (LegitScript enterprise partnership, Surescripts connection, cleared reviews) belong to the operating entity — the /about and /legal/hipaa pages state that plainly. This preempts the diligence question instead of losing to it.

### G9 — Testimonials: WLMD-branded quotes on a Purple-branded site

The home testimonial says "WLMD helped us…" with no explanation of what WLMD is — a seam G2 fixes: once heritage is explicit, retitle the section "From the operators' first platform" and keep the quote (permission status **[GREGG-CONFIRM]**; the /managed Rachel L. quote is already flagged unconfirmed — resolve or cut). Kill the visible placeholder line "More customer stories — added once permitted" (move intent to a code comment).

### G10 — CTA truthing

"Dashboard" (header) → `/login`: confirm the login page is a real door, not an embarrassment; if it's a stub, drop the header CTA until the portal ships. "Request access" (developers) currently means "contact us" — fine, but say "Request API access" and set expectations ("we provision sandbox tenants with your consult"). "Start building" should eventually land on real docs, not `/developers` circularly — wire when docs URL is confirmed.

---

## 3. Page-by-page review

### 3.1 Home `/` — verdict: KEEP with claim surgery (strongest page after /architecture)

What works: hero promise, "Why now" thesis, the moat framing ("Anyone can generate a telehealth site. Almost no one can pass a state pharmacy-board inspection." — best line on the site), two-ways-to-launch, ownership section, FAQ battery.

- **E1 (hero sub):** "the proven infrastructure behind 100+ telehealth brands" → per G2: "from the team behind 100+ branded telehealth launches — rebuilt API-first for the agent era" (registry-sourced count).
- **E2 (hero stat):** keep the 728,487 odometer; caption it "Rx filled by our operators' platforms to date" **[GREGG-CONFIRM figure + label]**; if a live counter is feasible later, even better.
- **E3 (moat section):** keep, but "three cleared audits" → the defined proof line everywhere: "cleared HIPAA, state pharmacy-board, and payment-processor reviews" (G1 registry entry with who/when behind it).
- **E4 (toolkit):** module cards fine; apply G5 to the pharmacy card; the wearables sub-section ships only if 300+ is real **[GREGG-CONFIRM]**, else cut the block (it currently reads as borrowed SaaS copy).
- **E5 (two ways to launch):** keep; in "Build it with agents," swap the flat tool list for the concrete: "API tokens, agent-ready docs, working entry links, webhooks with signed deliveries — and a storefront you fork and own, not rent." (Fork-and-own teaser contingent on G-SK below.)
- **E6 (ownership):** keep — it's the CPOM-safe structure told correctly ("you carry the brand, not the clinical license"). Add the fourth ownership card when Site Kit ships: **Your code** — "storefronts are repos you fork and own; leave anytime and the site still runs."
- **E7 (FAQ):** strong. Fix the two claim-bearing answers per G5/G6; the "Is a doctor still involved if AI is doing the work?" answer is excellent — promote that Q higher in the accordion; it's the question every 2026 buyer has.
- **E8 (testimonial):** per G9.

### 3.2 `/architecture` — verdict: KEEP, polish, and weaponize (this page is the dev-closer)

It already mirrors the real machine (8-step journey, saga semantics, event backbone, DB-per-service, outbox, RLS multi-tenancy, adapters). Genuinely rare for a marketing site; a strong engineer will trust the whole company more after this page.

- **E9:** resolve both ⚠ flags per G4.
- **E10 (add — the titration-authority paragraph, our sharpest architectural differentiator):** place after the saga "Net effect" block:
  > **Dose changes are clinical decisions, not funnel logic.** On Purple Label, titration is authorized by the treating clinician and recorded as a clinical event on the patient's timeline — marketing can shape the journey, but it can never write the dose. Elsewhere in this market, funnel builders can route a patient into a titration schedule from a quiz answer. We consider that a compliance defect, not a feature.
- **E11 (add — journey status as a consumable surface):** one short block naming the read-model the partner actually gets: "Every order exposes a versioned status enum — RECEIVED → … → REFILL_DUE — as API reads and webhook events, so your storefront and your agents always know exactly where a patient is." (States **[GREGG-CONFIRM final enum naming]** — keep to ~5 exemplar states, not the full internal list.)
- **E12 (add — catalog-as-data, the anti-clone story):** in Decision Rationale: "One catalog, many brands. Offerings, pricing, and programs are data bound to your brand — not 2,500 SKUs cloned per storefront. Change a program once; every surface that consumes it updates." (No internal repo names.)
- **E13:** "serves reporting and your agents' MCP read queries" → tense per G7 ("will serve … over MCP" or drop MCP here).
- **E14:** closing "The whole pipeline — as API and MCP" → "as an API today; MCP connectors at launch" (or per Gregg's roadmap word).

### 3.3 `/developers` — verdict: REWRITE the middle; keep the frame

Current state is the weakest of the key pages relative to its audience: generic bullets, illustrative snippets, roadmap in present tense — while our real, concrete contracts go unmentioned.

- **E15 (hero):** keep headline; sub gains one proof clause: "…This is the spine of the platform, not a side door — the same API our own storefronts and internal agents run on."
- **E16 (API section):** replace the three generic bullets with concrete guarantees: published rate limits; idempotency keys with documented 409 conflict semantics; cursor pagination; consistent error envelope; versioned events and endpoints (semver, changelog). These are decided contract law for the platform and they read like a team that has been burned before — exactly the trust signal.
- **E17 (replace the fake intake snippet):** the `POST /v1/intake/flows` sample invents an API shape. Replace with the _entry-link_ story (real contract): a snippet showing a branded entry URL carrying offering/prefill/promo context into a hosted intake, plus one webhook delivery sample with a signature header. Label honestly: "Shapes shown are illustrative until the public reference is live — [Read the docs]."
- **E18 (webhooks section):** upgrade to the delivery guarantees that make devs relax: HMAC-signed deliveries with key rotation, retries with backoff + dead-letter + replay, per-client subscriptions, both thin-and-full payload modes. Event names: use the architecture page's set (`patient.qualified`, `order.created`, `visit.completed`, `rx.prescribed`, `shipment.updated`) — drop `prescription.sent` (inconsistent naming).
- **E19 (MCP + prompt library):** per G7 tense fix; consider merging into one "Agent pack" section: skills/prompt playbooks first (near-term real), MCP connectors at launch — "your agents get a playbook on day one, and a socket soon after."
- **E20 (docs link):** every "docs" CTA on this page points at a real docs property once confirmed **[GREGG-CONFIRM public docs URL]** — until then, "Request API access" framing per G10.
- **E21 (add — Site Kit teaser, pending Gregg):** see G-SK in §4.

### 3.4 `/pricing` — verdict: KEEP structure; fix three claims

The two-axis story (sovereignty ≠ security; same audited floor) is excellent and unusual. Matrix is clean.

- **E22:** "Self-serve a sandbox and API keys today" → per G7.
- **E23:** Platform tier "MCP servers" bullet → "agent-ready docs + agent pack (MCP at launch)" per G7.
- **E24:** add the fee-model sentence C-suite is pricing-shopping for: "Platform pricing is flat and itemized — platform fees, per-transaction costs, and pass-through medication pricing are each stated line-item; no revenue share outside Managed." **[GREGG-CONFIRM against the signed rate-plan model before shipping]**
- **E25:** security-parity banner: swap "three cleared audits" phrasing per E3's defined proof line.

### 3.5 `/managed` — verdict: KEEP (best C-suite page); tighten claims

The WLMD concierge fold-in works: comparison table, 30-day roadmap, economics. Edits: resolve the two `<Unconfirmed>` blocks (Rachel L. testimonial; five-partners-per-month cap) — confirm or cut per G4; apply G5 to "The lowest cost on every medication" header → "Pass-through pricing on every medication"; "1M+ Rx filled monthly — across the network" stays only with registry sourcing (G1); the "$500K+ / 6–12 months DIY" contrast numbers get registry entries or `<Unconfirmed>`; keep the controlled-substance/compounding disclaimer line exactly as is.

### 3.6 `/programs` + `/programs/[slug]` + `/glp-1-weight-loss` — verdict: KEEP; apply G5/G6 globally

The catalog is a real asset (nine verticals, per-program FAQs, journey proof). Edits: G6 medication-claims pattern in `programs.ts` (weight-loss `offerings` + FAQ) and the GLP-1 landing FAQ; G5 on "lowest-cost medication catalog" nav framing; ownership + doctor FAQs are exactly right — keep on every program; verify each program's `whyItWorks` economics lines don't promise outcomes ("high retention" is fine as category observation; avoid "you will…"). The GLP-1 page is correctly B2B-voiced — keep it that way (never let patient-facing language creep in; this site sells to operators).

### 3.7 `/security` — verdict: KEEP; make evidence concrete

- **E26:** pillars are fine but generic; append one architecture-backed line each where true (field-level PHI encryption; append-only audit log "compliance evidence by construction"; org-per-tenant identity with per-agent machine clients; RLS enforced in the database). Cross-link /architecture — the two pages should feel like one story at two altitudes.
- **E27:** "We've already passed the audits" section: per E3 defined proof line + registry; add "documentation available under NDA on your consult" — the actual next step a compliance buyer wants.
- **E28:** SOC 2 stays "in progress" everywhere (already correct — never let it badge as achieved).

### 3.8 `/legitscript` — verdict: KEEP (unique asset; no competitor tells this story this well)

Edits: resolve the timeline `<Unconfirmed>` (3–4 months → 4–6 weeks claim) with a confirmed range or reframe qualitatively ("months compressed to weeks"); "we certify the entire stack" → "we take the entire stack through certification" (LegitScript owns the verb "certify"; **COUNSEL-GATE** phrasing); 250+ registry entry; keep the four-step process and FAQs.

### 3.9 Platform module pages (`/platform/*`) — verdict: KEEP pattern; inject one concrete beat each

Shared edit **E29**: each module page gets one specific, true, differentiating detail (tense per G7): **Intake** — two-layer design: marketing-editable qualification vs. clinician-governed clinical modules; versioned instruments; entry links that carry offering/prefill context; ID verification as a legal gate. **Visits** — state-aware provider routing; async + sync; every visit lands on the longitudinal record (resolve the EPCS flag per G4). **Patients** — the record is API + events, not an EMR silo. **Pharmacy** — 503A/503B routing by state/therapy/cost via adapter layer; pass-through pricing (G5). **Payments** — client-side tokenization, subscriptions, refunds wired into the saga ("a refund is a first-class journey event, not a support ticket"); resolve PCI flag per G4. **Analytics** — events → read models → your warehouse; "your data as data" is the right line, keep.

### 3.10 `/contact`, `/login`, `/thank-you` — verdict: functional; verify the plumbing

Form promise "just a reply" is good voice. Confirm the form posts somewhere monitored **[GREGG-CONFIRM]**; closing stats on the form repeat registry claims (G1). `/login`: per G10.

### 3.11 `spec/` — verdict: STALE; update after edits

`spec/sitemap.md` + `spec/content.md` predate the current site (no /programs, /managed, /architecture, /legitscript; still list /solutions). After applying this plan, regenerate both to match reality (or mark superseded at top with a pointer to the live IA in `nav.ts`) so future agents don't rebuild from the wrong map. Keep `spec/design.md` untouched — it remains law.

---

## 4. New pages / sections to add

### N1 — `/about` (small, real, closes the diligence loop) — REQUIRED (G3)

Sections: mission (one paragraph, no fluff) → the heritage block (G2, full version with the story beats: years operating, launches, inspections passed) → the care model (who practices medicine: licensed providers; who runs rails: us; who owns the brand: you) → leadership **[GREGG-CONFIRM who is named]** → entity disclosure line (G8) → contact CTA.

### N2 — `/legal/terms`, `/legal/privacy`, `/legal/hipaa`, `/legal/do-not-sell` — REQUIRED skeletons (G3, COUNSEL-GATE)

Ship counsel-approved documents only. Until delivered: real routes with an honest holding state ("Our standard agreements are provided during your consult; published versions are being finalized with counsel.") — a labeled holding page beats a 404; placeholder legalese is forbidden. Entity caption per G8. Flag to Gregg: this is a GRSM work-order item (T&C/consent template pack is already on the counsel touchpoint list).

### N3 — Site Kit teaser (**G-SK**) — [GREGG-DECIDE before building]

The fork-and-own storefront kit is in active build and is the most differentiated developer story we have ("your storefront is a repo you own — certification-ready pages, entry links, webhooks receiver wired — fork it, theme it, ship it; leave anytime and it still runs"). Marketing may preview it as "coming" without violating the docs-lane document-only-what-exists rule, but that's Gregg's call. If yes: a section on /developers + a card in home's "Build it with agents," explicitly badged. If no: keep entirely off-site until the template repo ships.

### N4 — `/integrations` (small) — OPTIONAL (else retarget links per G3)

One filterable grid: Pharmacies (503A/503B network), Provider network, Labs & diagnostics, Wearables (if confirmed), Payments. **No partner logos or names without written permission** — categories and counts only. Vendor naming policy is Gregg's call (**[GREGG-CONFIRM]**; default = do not name pharmacy/provider/identity vendors publicly).

---

## 5. Claims & counsel-gate register (single source for the PR description)

| #   | Claim                                                                              | Where                              | Status                                      | Action                                                                                    |
| --- | ---------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------- |
| C1  | 728,487 Rx filled on platform                                                      | home hero                          | [GREGG-CONFIRM]                             | registry + entity label (G1)                                                              |
| C2  | 1M+ prescriptions/month                                                            | home, /platform, /managed          | [GREGG-CONFIRM]                             | label "across the pharmacy network" or cut                                                |
| C3  | 10,000+ orders/week                                                                | home, /platform                    | [GREGG-CONFIRM]                             | registry                                                                                  |
| C4  | 100+ brands ("last 6 months" on /platform)                                         | home, /platform, /managed, contact | [GREGG-CONFIRM]                             | fix caption; registry                                                                     |
| C5  | "3 years in production"                                                            | /platform                          | heritage claim                              | move into G2 frame                                                                        |
| C6  | Cleared HIPAA / pharmacy-board / payment-processor audits ("three cleared audits") | site-wide                          | founder-confirmed 06-25                     | standardize wording (E3); keep who/when in registry; **COUNSEL-GATE** exact "audit" nouns |
| C7  | LegitScript Enterprise Partner; 250+ certifications; fast-track 4–6 wks            | /legitscript, /security, home      | partnership confirmed; timeline unconfirmed | registry; resolve timeline flag; "certify" verb **COUNSEL-GATE**                          |
| C8  | Surescripts (badge)                                                                | footer, /security                  | founder-confirmed 06-25                     | keep; attribute entity (G8)                                                               |
| C9  | SOC 2 in progress                                                                  | footer, /security                  | correct                                     | never "achieved" until it is                                                              |
| C10 | "Compounded equivalents" of semaglutide/tirzepatide                                | programs.ts, /glp-1                | **must change now**                         | G6 rewrite; **COUNSEL-GATE** final wording                                                |
| C11 | EPCS / controlled-substance prescribing                                            | /architecture, /platform/visits    | flagged, publicly visible                   | G4 safe rewrite until confirmed                                                           |
| C12 | PCI SAQ-A scope                                                                    | /architecture, /platform/payments  | flagged                                     | G4 safe rewrite until confirmed                                                           |
| C13 | "Lowest" superlatives                                                              | site-wide                          | unprovable as stated                        | G5 hedge to pass-through mechanism                                                        |
| C14 | 300+ wearable integrations                                                         | home, /managed                     | no evidence in platform record              | confirm or cut section                                                                    |
| C15 | Board-certified 50-state provider network                                          | site-wide                          | network claim                               | registry; confirm phrasing with clinical owner                                            |
| C16 | Testimonials (Garret S. / Rachel L.)                                               | home, /managed                     | permissions unconfirmed                     | G9: confirm or cut                                                                        |
| C17 | "Self-serve sandbox today"                                                         | /pricing                           | false today                                 | G7 fix now                                                                                |
| C18 | "All systems operational" static pill                                              | footer                             | fake-signal risk                            | G3: real status or remove                                                                 |
| C19 | Managed cap "five partners/month"                                                  | /managed                           | flagged                                     | confirm or cut                                                                            |
| C20 | $500K+ / 6–12 months DIY contrast                                                  | /managed                           | market estimate                             | registry as "typical industry estimate" or `<Unconfirmed>`                                |

---

## 6. Hard guardrails for the executing agent

1. **Never invent** a metric, certification, customer, partner, or timeline. New unverified copy ships inside `<Unconfirmed>` or not at all.
2. **Internal names stay internal:** no fleet/lane/WI numbers, no internal codenames ("Purple" alone as platform codename, repo names, "spine/ledger/gates"), no vendor names (pharmacy, provider network, identity, auth, docs host) unless Gregg explicitly clears each (**[GREGG-CONFIRM vendor-naming policy]**), no competitor names anywhere on the site.
3. **No patient-facing voice.** This site sells to operators. No treatment outcome promises, no "lose weight fast," no before/afters, ever.
4. **CPOM line stays intact everywhere:** the platform/MSO runs business rails; licensed providers exclusively direct clinical care; clients own brands, not medicine. Never write copy where "we" prescribe, treat, or practice.
5. **Don't weaken the voice.** The site's confident, specific tone is an asset. Edits here remove _unsubstantiated_ claims, not confidence. Never replace a sharp true sentence with compliance mush — hedge the claim, keep the blade.
6. **Design system is law** (`spec/design.md`, no arbitrary Tailwind values); `npm run check` green; commit per section; document deviations in the PR.
7. **Don't touch** `dist/`, `archive/`, or `worker/` for content edits; edit source + `src/lib` data files only.

---

## 7. Acceptance checklist (run before done)

- [ ] `rg -n "equivalents" src/` → zero hits in medication contexts (G6)
- [ ] `rg -n "lowest" src/` → only hedged/mechanism forms remain (G5)
- [ ] Every `href` in `nav.ts` + page bodies resolves to a real route (script it: extract hrefs, diff against `src/pages/`) (G3)
- [ ] `rg -n "[0-9]{3,}\+|728,487|three cleared" src/pages src/components` → only `stats.ts` imports render numbers (G1)
- [ ] Zero `<Unconfirmed>` rendering on production pages — `rg -n "<Unconfirmed" src/pages` inventory matches the agreed draft-only set (G4)
- [ ] Present-tense scan of /developers + /pricing for MCP/prompt-library/sandbox claims (G7)
- [ ] `/about` + `/legal/*` routes live (holding states allowed for legal) (N1/N2)
- [ ] JSON-LD still valid on changed pages; titles ≤60 chars; descriptions ≤155
- [ ] `npm run check` + build green; Lighthouse targets hold on home
- [ ] PR description includes: the §5 register with each item's disposition + the open **[GREGG-CONFIRM]** list

---

## 8. Open questions for Gregg (blocking items only)

1. Stat set + labels for the registry (C1–C4) — one authoritative set, with entity attribution.
2. Public docs URL — is the docs property ready to take marketing traffic? (Wires E20/G7.)
3. Site Kit teaser on the marketing site now, or only after the template repo ships? (N3)
4. Vendor-naming policy for the public site (default: no names). (§6.2)
5. Status page + changelog: real destinations or remove links? (G3/C18)
6. Testimonial permissions (C16) and the Managed capacity cap (C19).
7. Legal pages: green-light the GRSM work order for Terms/Privacy/HIPAA/DNS + entity captions? (N2/G8)
8. The "audits" nouns (C6): who performed them and when — one-line provenance for the registry.

— end of review —
