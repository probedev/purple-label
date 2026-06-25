# Purple Label MD

Marketing website for **Purple Label MD** (`purplelabelmd.com`) — an enterprise white-label
telemedicine platform. Astro (static) + Tailwind CSS v4 + GSAP, deploying to Cloudflare Pages.

The build is driven by [`BUILD-PROMPT.md`](./BUILD-PROMPT.md) and the spec package in
[`spec/`](./spec): `design.md` (the design system — law), `sitemap.md` (IA), `content.md` (copy).

## Status

| Phase | Scope                                               | State                                          |
| :---- | :-------------------------------------------------- | :--------------------------------------------- |
| 0     | Scaffold, tooling, CI                               | ✅ done                                        |
| 1     | Design system + `/styleguide`                       | ✅ done — **checkpoint: review `/styleguide`** |
| 2     | Motion engine (GSAP)                                | ⬜ next                                        |
| 3     | Homepage                                            | ⬜                                             |
| 4–6   | Platform, feature, solutions, pricing, system pages | ⬜                                             |
| 7     | SEO, polish, QA                                     | ⬜                                             |
| 8     | Deploy                                              | ⬜                                             |

## Commands

| Command                           | Action                                                   |
| :-------------------------------- | :------------------------------------------------------- |
| `npm run dev`                     | Dev server at `localhost:4321`                           |
| `npm run build`                   | Production build to `./dist/`                            |
| `npm run preview`                 | Preview the production build                             |
| `npm run typecheck`               | `astro check` (TS + template diagnostics)                |
| `npm run lint`                    | ESLint + Stylelint                                       |
| `npm run lint:classes`            | **Fails on arbitrary Tailwind values** (design.md §8)    |
| `npm run format` / `format:check` | Prettier                                                 |
| `npm run check`                   | typecheck + lint + lint:classes + format:check (CI gate) |

## Where the design system lives

- **`src/styles/tokens.css`** — every `design.md` token as CSS custom properties (light +
  `:root[data-theme="dark"]`). The single source of truth.
- **`src/styles/global.css`** — Tailwind import, the `@theme inline` mapping (tokens → utilities),
  base reset, focus rings, reduced-motion guard, and `.prose`.
- **`src/components/primitives/`** — Button, Eyebrow, SectionHeader, Card, StatCard, Badge, Prose.
- **`src/components/layout/`** — Container, Section, Header, MegaMenu, Footer, ThemeToggle, Logo.
- **`src/lib/`** — `seo.ts` (meta + JSON-LD), `nav.ts` (IA shared by Header/Footer).
- **`/styleguide`** — the rendered visual contract (noindex). Review it before building pages.

## Deviation from BUILD-PROMPT (documented per the prompt's rules)

- **Tailwind v4 via `@tailwindcss/vite`** instead of v3 + `@astrojs/tailwind`. Reason: the installed
  Astro (v7) is not supported by `@astrojs/tailwind` (peer caps at Astro 5 / Tailwind 3). v4 is the
  supported path. Tokens map through `@theme inline` in `global.css` rather than `tailwind.config.ts`;
  the §8 "no arbitrary values" rule is enforced by `scripts/check-arbitrary-classes.mjs` in CI.
- **Icons via `astro-icon` + `@iconify-json/lucide`** (single Lucide set, build-time inline SVG,
  stroke set to 1.5px per §5.7). `@lucide/astro` caps at Astro 6, so this avoids peer friction.
- **Fonts** self-hosted via `@fontsource-variable/*` (Geist, Geist Mono, Inter) — Vite bundles the
  woff2, only the Latin subset is fetched at runtime (`unicode-range`), `font-display: swap`. No CDN.

## Before launch

**Replace placeholders / verify `[CONFIRM]` claims** (everything wrapped in `<Unconfirmed>` — find
with `rg "Unconfirmed"` / `rg "\[CONFIRM\]" spec`):

- Logo + final brand assets (current wordmark in `Logo.astro` is a placeholder).
- Scale-strip metrics (patients / orders / transactions).
- Certifications: HIPAA, SOC 2, LegitScript, Surescripts (footer trust row is gated).
- E-prescribing partner (e.g., DoseSpot) and provider-network claims.
- Customer names, logos, testimonials (with written permission).
- Pricing: tier names, inclusions, processing rates, fees, contract terms; every Pricing FAQ answer.
- Pharmacy fulfillment fee model and shipping terms.
- Product screenshots/UI for BrowserFrame, or commit to abstract token-built graphics.

**Deploy decisions (Cloudflare Pages):**

- Demo/contact form destination (form service or endpoint).
- Apex vs. `www` canonical host; confirm the domain is on Cloudflare DNS; add the redirect rule.
- `og/` social images; `@purplelabelmd` Twitter handle in `src/lib/seo.ts`.
