# Purple Label MD — Master Build Prompt

> **How to use this file.** Paste everything below the line into a fresh Claude Code / agent session opened in an empty repo, alongside `spec/design.md`, `spec/sitemap.md`, and `spec/content.md`. It is written to drive the entire build autonomously: scaffold → design system → components → pages → motion → QA → deploy. Work in the order given, commit after each phase, and stop at the checkpoints to let Gregg review.

---

## ROLE & MANDATE

You are a senior front-end engineer and design technologist building the marketing website for **Purple Label MD** (`purplelabelmd.com`), an enterprise white-label telemedicine platform. Your output must read as a deliberately engineered, human-grade product site — never as an AI template. The audience is sophisticated digital-health buyers who will reject anything generic.

**Non-negotiables:**
1. **`spec/design.md` is law.** Every value (color, type, spacing, radius, motion timing) comes from its tokens. No arbitrary values, no bespoke per-component styling. If you need a value that isn't a token, add it to the system first, then use it.
2. **Follow `spec/sitemap.md` for IA** and **`spec/content.md` for copy.** Do not invent metrics, certifications, customer names, or testimonials. Render every `[CONFIRM]` item as a clearly marked placeholder component (`<Unconfirmed>`) that is visually obvious in a draft build and trivially greppable.
3. **Motion lives inside the §6 GSAP rulebook.** Approved vocabulary only. `prefers-reduced-motion` is mandatory.
4. **Quality gates in design.md §9–10 must pass** before you call the site done.

---

## TECH STACK (fixed)

- **Astro** (latest, static output) — content-driven, ships ~zero JS by default.
- **Tailwind CSS** via `@astrojs/tailwind`, theme extended to map `design.md` tokens (design.md §8). Arbitrary values disallowed.
- **TypeScript** throughout.
- **GSAP + ScrollTrigger** for motion, lazy-loaded, centralized in `src/lib/motion/`.
- **Fonts self-hosted** (`@fontsource` or local woff2): Geist (display), Inter (body), Geist Mono (mono). No external font CDN.
- **Icons:** `lucide` (astro-compatible), single weight.
- **Images:** `astro:assets` for optimization (AVIF/WebP, explicit dimensions).
- **SEO:** `@astrojs/sitemap`, per-page meta component, JSON-LD, OG/Twitter cards.
- **Lint/format:** ESLint + Prettier + Stylelint; add a rule/check that flags arbitrary Tailwind values.
- **Deploy target:** Cloudflare Pages (static) from GitHub. Do **not** add a server adapter unless a feature requires it.

---

## REPOSITORY STRUCTURE (create exactly)

```
purplelabelmd/
├─ README.md                 # setup, scripts, deploy, where the design system lives
├─ astro.config.mjs          # site URL, tailwind, sitemap, trailing-slash policy
├─ tailwind.config.ts        # theme.extend mapping design.md tokens (§8)
├─ tsconfig.json
├─ package.json
├─ .editorconfig / .prettierrc / .eslintrc / .stylelintrc
├─ .github/workflows/ci.yml  # typecheck, lint, build, Lighthouse CI budget
├─ public/
│  ├─ fonts/                  # self-hosted woff2
│  ├─ favicon.svg, og/        # social images
│  └─ robots.txt
├─ src/
│  ├─ styles/
│  │  ├─ tokens.css           # ALL design.md custom properties (light + dark)
│  │  └─ global.css           # base/reset, font-face, prose defaults
│  ├─ lib/
│  │  ├─ motion/
│  │  │  ├─ config.ts         # EASE / DUR / STAGGER constants (design.md §6.1)
│  │  │  ├─ gsap.ts           # register plugins once; reduced-motion guard
│  │  │  └─ reveals.ts        # section reveal, count-up, hero timeline, pinned flow
│  │  └─ seo.ts               # meta + JSON-LD helpers
│  ├─ components/
│  │  ├─ primitives/          # Button, Eyebrow, SectionHeader, Card, StatCard, Badge, Prose
│  │  ├─ layout/              # Header, MegaMenu, Footer, Container, Section, ThemeToggle
│  │  ├─ marketing/           # Hero, ProofBar, CapabilityGrid, FlowScroll, ScaleStrip,
│  │  │                       # TestimonialCarousel, IntegrationGrid, PricingTable, FAQ, CTABand,
│  │  │                       # FeatureSplit, LogoMarquee, BrowserFrame, CodeBlock, Unconfirmed
│  │  └─ media/               # LazyVideo, Figure
│  ├─ content/                # (optional) content collections for blog + page data
│  ├─ layouts/
│  │  ├─ BaseLayout.astro     # html shell, head/meta, skip-link, header/footer
│  │  └─ PageLayout.astro     # standard marketing page wrapper
│  └─ pages/
│     ├─ index.astro
│     ├─ platform/index.astro + builder, emr-eprescribing, pharmacy-fulfillment, payments, analytics
│     ├─ integrations.astro
│     ├─ security.astro
│     ├─ solutions/index.astro (+ launch-dtc, virtual-clinic, enterprise, developers)
│     ├─ pricing.astro
│     ├─ about.astro
│     ├─ customers.astro, contact.astro, blog/[...].astro
│     ├─ legal/*.astro
│     └─ 404.astro
```

---

## BUILD PHASES (do in order; commit + checkpoint where noted)

### Phase 0 — Scaffold
Initialize Astro + TypeScript + Tailwind. Configure `astro.config.mjs` (`site: 'https://purplelabelmd.com'`, sitemap, trailing-slash policy). Set up lint/format/CI. Verify dev server + production build run clean. **Commit:** `chore: scaffold`.

### Phase 1 — Design system foundation *(checkpoint)*
1. Translate **every** token from `design.md` into `src/styles/tokens.css` (light + `[data-theme="dark"]`).
2. Map tokens into `tailwind.config.ts` `theme.extend` (§8). No arbitrary values anywhere.
3. Install + self-host fonts; wire `@font-face` with `font-display: swap`.
4. Build `primitives/`: Button (4 variants + states), Eyebrow, SectionHeader (eyebrow+H2+lead lockup), Card, StatCard, Badge, Prose. Include focus-visible rings and reduced-motion-safe transitions.
5. Build `layout/`: Container, Section (with standard vertical rhythm), Header + MegaMenu (per sitemap groupings), Footer (5 columns + trust row + status pill), ThemeToggle.
6. **Deliverable: a `/styleguide` route** rendering the full system — palette, type scale, spacing, all primitives and states, all motion demos. This is the visual contract; review it before building pages. **Commit:** `feat: design system + styleguide`. **→ STOP for Gregg review.**

### Phase 2 — Motion engine
Implement `lib/motion/`: centralized GSAP registration, the reduced-motion guard (wrap all timelines), and the approved reveals — section reveal, staggered siblings, hero timeline (line-mask headline), metric count-up, the single pinned end-to-end flow, logo marquee. Expose as small directives/utilities components call. Verify 60fps and instant final-state under reduced motion. **Commit:** `feat: motion engine`.

### Phase 3 — Homepage *(checkpoint)*
Assemble `index.astro` from the sitemap blueprint and content.md §1, using only existing components. Wire the hero timeline, pinned flow, count-up scale strip (with `<Unconfirmed>` on figures), testimonial carousel (placeholder until verified), integration marquee. Full responsive pass (mobile-first). Run Lighthouse — must hit design.md §9 targets. **Commit:** `feat: homepage`. **→ STOP for Gregg review.**

### Phase 4 — Platform + feature pages
Build `/platform` and the six module pages from content.md §2–7 using `FeatureSplit`, `BrowserFrame`, `CodeBlock`, `Card`. Consistent section rhythm and the eyebrow/header lockup throughout. Cross-link per sitemap. **Commit per page.**

### Phase 5 — Integrations, Security, Solutions
`/integrations` (filterable IntegrationGrid + API/webhook CodeBlocks), `/security` (trust pillars + certifications row, all `[CONFIRM]`-gated), `/solutions` hub + templated sub-pages. **Commit per page.**

### Phase 6 — Pricing, About, system pages
`/pricing` (3-tier PricingTable + FAQ accordion, every answer `[CONFIRM]`-gated), `/about`, `/contact` (form posts to a Cloudflare-friendly endpoint or form service — placeholder action documented), `/customers`, `/blog` (content collection + one sample post), `/legal/*`, `404`. **Commit per page.**

### Phase 7 — SEO, polish, QA *(checkpoint)*
Per-page titles/descriptions/canonical/OG; JSON-LD (Organization + SoftwareApplication on home, FAQPage on pricing, BreadcrumbList on deep pages); `sitemap.xml`, `robots.txt`. Run the full **design.md §9 quality gates and §10 anti-slop checklist** on every page. Fix all AA contrast/focus issues. Verify reduced-motion site-wide. **Commit:** `chore: seo + qa`. **→ STOP for Gregg review.**

### Phase 8 — Deploy
Follow the deploy section below. **Commit:** `chore: deploy config`.

---

## CONTENT & INTEGRITY GUARDRAILS
- Render all `[CONFIRM]` items via `<Unconfirmed reason="...">` so they're visually flagged in draft and greppable (`rg "Unconfirmed"`). Never let an unverified metric/cert/quote ship as fact.
- Do not copy phrasing from any competitor site; use only the original copy in `content.md` (rewrite further if anything reads generic).
- Customer logos / partner logos: leave as labeled placeholders until Gregg supplies licensed assets.

## DEFINITION OF DONE
- `npm run build` clean; `npm run typecheck` and lint pass; CI green.
- `/styleguide` reflects the live system; no component uses off-token values.
- Lighthouse (mobile, home): Perf ≥ 95, A11y 100, Best Practices ≥ 95, SEO 100.
- Every page passes design.md §10 anti-slop checklist (include a filled checklist in the PR).
- Reduced-motion verified; keyboard-only nav verified; dark mode verified.
- All `[CONFIRM]`/placeholder items inventoried in `README.md` under "Before launch."

---

# GitHub + Cloudflare Pages deployment

### A. GitHub
1. `git init`, commit per phase above. Create repo `purplelabelmd` (private is fine).
2. `git remote add origin … && git push -u origin main`.
3. CI (`.github/workflows/ci.yml`): on PR/push run `install → typecheck → lint → build → Lighthouse CI` against the budget. Block merge on failure.

### B. Cloudflare Pages (recommended path — Git integration)
1. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
2. Build settings: **Framework preset: Astro** · Build command `npm run build` · Output dir `dist` · Node version `20` (set `NODE_VERSION=20` env var).
3. Deploy. Cloudflare auto-builds `main` (production) and every PR (preview URLs — great for the review checkpoints).
4. **Custom domain:** Pages project → Custom domains → add `purplelabelmd.com` + `www`. If the domain is on Cloudflare DNS, records are added automatically; otherwise point DNS as instructed. SSL is automatic.
5. Add a redirect rule for apex↔www canonicalization (pick one canonical host; match `astro.config` `site`).

### C. Alternative (CLI / no Git integration)
- `npm i -D wrangler`; `npx wrangler pages deploy dist --project-name purplelabelmd`. Useful for manual/CI-driven deploys; the Git integration is simpler for ongoing work.

### D. Post-deploy checks
- Verify the live `sitemap.xml`/`robots.txt`, OG previews (LinkedIn/X/Slack unfurl), 404, and Lighthouse on the deployed URL. Confirm caching headers (Cloudflare handles static caching; set long cache on hashed assets).

---

## NOTES FOR THE AGENT
- Prefer fewer, well-composed components over many one-off sections. Reuse `Section`, `SectionHeader`, `FeatureSplit`, `Card` relentlessly — consistency is the aesthetic.
- When in doubt on a visual decision, choose the more restrained option and cite the design.md rule you're applying.
- Keep JS minimal: Astro islands only where interactivity is real (menu, accordion, carousel, theme toggle, motion). Everything else is static HTML/CSS.
- Document any deviation from this prompt in the PR description with a one-line rationale.
```