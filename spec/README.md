# Purple Label MD — Spec Package

The complete blueprint for building `purplelabelmd.com`: an enterprise white-label telemedicine platform site. Built Astro + Tailwind + GSAP, deployed GitHub → Cloudflare Pages.

## Files
- **`../BUILD-PROMPT.md`** — the master prompt. Paste into a fresh agent session (with the three files below) to run the build autonomously, phase by phase.
- **`design.md`** — the strict, token-driven design system. The law every component obeys; the anti-slop backbone.
- **`sitemap.md`** — information architecture, 12-page inventory, per-page section blueprints, SEO conventions.
- **`content.md`** — original, enterprise-grade copy for every page. `[CONFIRM]` markers gate anything that must be verified before launch.

## How to run the build
1. Confirm the open items below.
2. Create an empty repo. Copy `BUILD-PROMPT.md` + `spec/` into it.
3. Open a fresh agent session in the repo, paste `BUILD-PROMPT.md`, let it work through Phases 0→8, reviewing at the three checkpoints (styleguide, homepage, pre-deploy).

## Open items to confirm before launch (the "grill" list)
**Claims & evidence**
- Real metrics for the scale strip (patients / orders / transactions) — or remove until available.
- Which certifications are actually held/attestable: HIPAA posture, SOC 2, LegitScript, Surescripts.
- E-prescribing partner (e.g., DoseSpot) and provider-network claims (counts, states).
- Customer names, logos, and testimonials (with written permission).

**Commercial**
- Pricing: real tier names, what's included per tier, processing rates, fees, contract terms — every Pricing FAQ answer is a commitment.
- Pharmacy fulfillment fee model and shipping terms.

**Brand & assets**
- Logo (or brief to design one), final purple value confirmation, any existing brand assets.
- Product screenshots/UI to show in BrowserFrame, or whether to use abstract token-built graphics.

**Operational**
- Demo/contact form destination (form service or endpoint).
- Apex vs. www canonical host; is the domain already on Cloudflare DNS?
