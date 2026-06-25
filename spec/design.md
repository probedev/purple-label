# Purple Label MD — Design System (`design.md`)

> **Single source of truth.** Every component, page, and animation is built from the tokens and rules in this file. No bespoke, hand-tuned values in components. If a value isn't a token here, it doesn't ship. This is the contract that prevents "AI-template" drift and keeps the site looking deliberately engineered.

---

## 0. Design philosophy

**Audience:** enterprise buyers in digital health — founders scaling DTC telehealth brands, heads of product/clinical ops, compliance and IT decision-makers. They are sophisticated and allergic to anything that reads as generic, gradient-soaked SaaS slop.

**The credibility thesis:** restraint reads as enterprise; decoration reads as template. We win trust through *typographic discipline, generous whitespace, a tight palette, real data density, and motion that is felt but rarely noticed.* Think the engineered calm of Stripe, Linear, Vercel, and Ramp — adapted for regulated healthcare.

**Five rules that govern everything:**

1. **One idea per section.** Never stack three competing messages. Whitespace is a feature.
2. **Type does the work.** Hierarchy comes from scale, weight, and spacing — not from boxes, borders, and color.
3. **Color is earned.** The page is mostly ink-on-paper. Purple appears with intent: brand marks, primary CTAs, one accent per view.
4. **Motion is choreography, not confetti.** Every animation has a job (reveal, guide, confirm). If it's decorative, it's cut.
5. **Evidence over adjectives.** Numbers, logos, certifications, and specifics — not "revolutionary," "cutting-edge," "seamless" stacked five deep.

---

## 1. Color tokens

Defined as CSS custom properties on `:root`. Tailwind maps to these (see §8). The system is **light-first** with a fully specified dark mode.

### 1.1 Brand — Purple ("the Label")

A deep, refined plum-violet. Sophisticated, not neon. This is the signature.

```css
--pl-purple-50:  #F4F0FB;
--pl-purple-100: #E7DDF6;
--pl-purple-200: #CBB6EA;
--pl-purple-300: #AC8BDC;
--pl-purple-400: #8B5FCC;
--pl-purple-500: #6E3DB8;  /* base brand */
--pl-purple-600: #5A2C9E;  /* primary actions */
--pl-purple-700: #471F7E;  /* hover / pressed */
--pl-purple-800: #341659;
--pl-purple-900: #21103A;  /* deep plum, near-ink */
```

### 1.2 Ink & Paper (neutrals — purple-tinted, not pure gray)

```css
--pl-ink-900: #100B1A;  /* primary text, near-black with violet cast */
--pl-ink-700: #2A2335;  /* headings on paper */
--pl-ink-500: #564E63;  /* body text */
--pl-ink-400: #7C7589;  /* secondary / captions */
--pl-ink-300: #A8A2B3;  /* disabled / hint */
--pl-line:    #E6E2EC;  /* hairlines, dividers, borders */
--pl-paper:   #FBFAFD;  /* page background, warm off-white */
--pl-surface: #FFFFFF;  /* cards, elevated surfaces */
--pl-surface-sunken: #F4F2F8; /* wells, code blocks, insets */
```

### 1.3 Accent (single, used sparingly for data/health signals)

A clinical, trustworthy teal — appears in charts, status dots, and small highlights ONLY. Never competes with purple for CTAs.

```css
--pl-teal-400: #2DD4BF;
--pl-teal-500: #14B8A6;
--pl-teal-600: #0D9488;
```

### 1.4 Semantic

```css
--pl-success: #0D9488;
--pl-warning: #B45309;
--pl-danger:  #B42318;
--pl-info:    #5A2C9E;
```

### 1.5 Dark mode (`:root[data-theme="dark"]`)

```css
--pl-paper:   #0C0814;  /* deep plum-black */
--pl-surface: #150F22;
--pl-surface-sunken: #0A0611;
--pl-ink-900: #F6F4FB;  /* inverted text */
--pl-ink-700: #D8D3E2;
--pl-ink-500: #A39CB2;
--pl-ink-400: #7E7790;
--pl-line:    #271F38;
/* Purple brightens slightly so it holds contrast on dark */
--pl-purple-500: #9A6CE8;
--pl-purple-600: #8B5FCC;
```

**Contrast law:** all body text ≥ 4.5:1, large text ≥ 3:1 (WCAG AA). Purple CTAs use white text; verify `--pl-purple-600` on white passes AA for button labels.

---

## 2. Typography

**Two typefaces, no more.** A distinctive contemporary grotesque for display + a neutral workhorse for body. This pairing is the single biggest anti-slop lever.

- **Display / headings:** **Geist** (or **General Sans** via Fontshare as alt). Modern, engineered, credible — not the over-used Inter-for-everything look.
- **Body / UI:** **Inter** — proven, legible at small sizes, excellent for dense enterprise content.
- **Mono (stats, code, API):** **Geist Mono** (or **JetBrains Mono**). Used for big metric numbers and code samples — this gives the "real infrastructure" feel.

Self-host via `@fontsource` / local `woff2` for performance and privacy (no Google Fonts CDN call — matters for a HIPAA-adjacent brand). `font-display: swap`.

### 2.1 Type scale (modular, ratio ≈ 1.25, fluid with `clamp`)

```css
--fs-display:  clamp(2.75rem, 1.6rem + 4.2vw, 4.5rem);   /* hero H1 */
--fs-h1:       clamp(2.25rem, 1.6rem + 2.4vw, 3.25rem);
--fs-h2:       clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem);
--fs-h3:       clamp(1.375rem, 1.15rem + 0.8vw, 1.75rem);
--fs-h4:       1.25rem;
--fs-body-lg:  1.125rem;   /* lead paragraphs */
--fs-body:     1rem;       /* default 16px */
--fs-sm:       0.9375rem;
--fs-xs:       0.8125rem;  /* captions, eyebrows */
--fs-stat:     clamp(2.5rem, 1.5rem + 3.5vw, 4rem); /* mono metric numbers */
```

### 2.2 Weights, leading, tracking

- Display/H1–H2: weight **600**, `line-height: 1.05–1.1`, `letter-spacing: -0.02em` (tighten large type — key polish detail).
- H3–H4: weight **600**, `line-height: 1.2`, `-0.01em`.
- Body: weight **400**, `line-height: 1.6`, `letter-spacing: 0`.
- Lead: weight **400**, `line-height: 1.5`.
- Eyebrow/overline: weight **600**, `font-size: var(--fs-xs)`, `letter-spacing: 0.12em`, `text-transform: uppercase`, color `--pl-purple-600`.
- Stat numbers: Mono, weight **500**, `letter-spacing: -0.02em`.

**Measure:** body copy max width **65–72ch**. Never full-bleed paragraphs.

---

## 3. Spacing & layout

**8-point grid.** 4px is the smallest unit; everything is a multiple of 4, preferring multiples of 8.

```css
--space-1: 0.25rem;  /*  4 */
--space-2: 0.5rem;   /*  8 */
--space-3: 0.75rem;  /* 12 */
--space-4: 1rem;     /* 16 */
--space-6: 1.5rem;   /* 24 */
--space-8: 2rem;     /* 32 */
--space-12: 3rem;    /* 48 */
--space-16: 4rem;    /* 64 */
--space-24: 6rem;    /* 96 */
--space-32: 8rem;    /* 128 — section rhythm */
--space-40: 10rem;   /* 160 — major section breaks */
```

**Section vertical rhythm:** desktop sections use `--space-32` to `--space-40` top/bottom padding. This generous spacing is non-negotiable — it's what separates "engineered" from "cramped template."

### 3.1 Grid & container

- Max content width: **1200px** (`--container: 75rem`), with a wide variant **1320px** for full-bleed feature canvases.
- 12-column grid, **24px gutters** desktop / 16px mobile.
- Outer page padding: `clamp(1.25rem, 5vw, 2rem)`.
- Breakpoints (Tailwind defaults, do not invent new ones): `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.

---

## 4. Radius, borders, elevation

```css
--radius-sm: 8px;
--radius-md: 12px;   /* default for cards, inputs, buttons */
--radius-lg: 16px;   /* large feature cards */
--radius-xl: 24px;   /* hero media, big canvases */
--radius-full: 9999px;
```

- **Borders:** 1px `--pl-line`. Hairlines do most structural work — prefer a border over a shadow.
- **Elevation:** shadows are soft, low, and rare. Two levels only.

```css
--shadow-sm: 0 1px 2px rgba(16,11,26,0.04), 0 1px 3px rgba(16,11,26,0.06);
--shadow-md: 0 8px 24px -8px rgba(16,11,26,0.12), 0 2px 6px rgba(16,11,26,0.05);
/* Purple glow reserved exclusively for primary CTA hover */
--shadow-cta: 0 8px 28px -6px rgba(90,44,158,0.45);
```

No more than **one elevated layer** visible per viewport. Flat + hairline is the default.

---

## 5. Component specs

All components are tokens-only. Built as Astro components (`src/components/`) with class-based styling. States: default / hover / focus-visible / active / disabled.

### 5.1 Buttons

| Variant | Use | Style |
|---|---|---|
| **Primary** | One per section max ("Request a demo") | bg `--pl-purple-600`, text white, radius `md`, `--shadow-cta` on hover, lifts `translateY(-1px)` |
| **Secondary** | "Talk to sales", "Explore platform" | transparent bg, 1px `--pl-line` border, text `--pl-ink-900`, hover bg `--pl-surface-sunken` |
| **Ghost** | Inline / nav | no border, text `--pl-ink-700`, hover text `--pl-purple-600` |
| **Link-arrow** | "Learn more →" | text link with animated arrow (translateX 4px on hover) |

- Height: 44px (`--space-12` minus padding), padding `0 var(--space-6)`, font weight 600, `--fs-sm`.
- **Focus-visible:** 2px outline `--pl-purple-500`, 2px offset. Never remove focus rings.
- Min tap target 44×44.

### 5.2 Cards

- Surface `--pl-surface`, 1px `--pl-line`, radius `lg`, padding `--space-6`/`--space-8`.
- Hover (interactive cards only): border → `--pl-purple-200`, `--shadow-md`, 150ms.
- **Feature card:** icon (24px, `--pl-purple-600`, stroke 1.5) → H4 → body `--pl-ink-500`.
- **Stat card:** mono `--fs-stat` number → label eyebrow → one-line caption.

### 5.3 Navigation (sticky header)

- Height 72px, `--pl-paper` at 80% opacity + `backdrop-filter: blur(12px)`, 1px bottom hairline that appears only after scroll > 8px.
- Logo left · mega-menu center (Platform, Solutions, Resources, Pricing) · "Sign in" ghost + "Request a demo" primary right.
- Mega-menu: grouped columns (see sitemap), opens on hover (desktop) / tap (mobile) with 200ms fade+rise. Items = title + one-line description.
- Mobile: full-screen sheet, sections as accordions.

### 5.4 Footer

- `--pl-ink-900` background, `--pl-ink-300` text, purple link hovers.
- 5 columns: Platform · Solutions · Developers · Company · Legal. Trust row: HIPAA, SOC 2, LegitScript, Surescripts badges + system-status pill ("All systems operational" with teal dot).

### 5.5 Forms / inputs

- Height 44px, radius `md`, 1px `--pl-line`, bg `--pl-surface`. Focus: border `--pl-purple-500` + 3px ring `--pl-purple-100`. Floating or top-aligned labels. Inline validation, never alert() patterns.

### 5.6 Eyebrow + section header pattern (used everywhere)

```
[EYEBROW — uppercase purple]
H2 headline (tight tracking)
Lead paragraph (max 60ch, --pl-ink-500)
```

This three-part lockup is the repeating spine of every section. Consistency here is what makes it feel designed, not assembled.

### 5.7 Iconography

- **One icon set only: Lucide** (1.5px stroke, 24px). No mixed sets, no emoji, no random illustrations. Icons are `--pl-ink-700` or `--pl-purple-600`, never multicolor.

### 5.8 Logos / proof bar

- Customer logos rendered monochrome (`--pl-ink-400`), equal optical height (~28px), grayscale by default → full ink on hover. Even baseline. This restraint is critical — colored logo soup is a top slop tell.

---

## 6. Motion & GSAP system

> Motion is the differentiator that proves a human-grade build — but only inside a tight rulebook. **Every animation declares a purpose. Decorative motion is rejected in review.**

### 6.1 Global constants

```js
// motion.config.js — the ONLY place timings/eases are defined
export const EASE = {
  out:    'power3.out',     // entrances
  inOut:  'power2.inOut',   // moves
  expo:   'expo.out',       // hero / large reveals
};
export const DUR = {
  fast: 0.3, base: 0.6, slow: 0.9, hero: 1.2,
};
export const STAGGER = 0.08; // sibling reveal cadence
```

### 6.2 Allowed motion vocabulary (and nothing else)

1. **Section reveal** — on scroll into view (once): `opacity 0→1`, `y 24px→0`, `DUR.base`, `EASE.out`. Staggered for sibling cards (`STAGGER`).
2. **Hero sequence** — on load: eyebrow → headline (per-line clip-reveal via SplitText-style line masks) → lead → CTAs → media, choreographed timeline, `EASE.expo`, total ≤ 1.6s.
3. **Metric count-up** — stat numbers tween from 0 → value when scrolled into view, `DUR.slow`, with thousands formatting. (The $1B+ / patients / orders strip.)
4. **Sticky / pinned scroll-tell** — at most ONE per page (e.g., "Consultation → Prescription → Fulfillment → Delivery" pinned horizontal step sequence). Uses ScrollTrigger pin + scrub.
5. **Micro-interactions** — button lift, arrow nudge, card border/elevation, nav blur-in. CSS transitions (not GSAP) where possible.
6. **Marquee** — optional slow, pausable logo/integration marquee, linear, ≥ 30s loop, pauses on hover.

Anything beyond this list (parallax storms, 3D tilt on everything, mouse-follow blobs, scroll-jacking, autoplaying loud video) is **banned**.

### 6.3 Implementation rules

- GSAP + ScrollTrigger only. Register once in a single `gsap.init.ts`. Lazy-load GSAP; never block first paint.
- All scroll reveals: `once: true`, `start: 'top 85%'`. No re-trigger on scroll-up (jitter = cheap).
- **`prefers-reduced-motion`:** hard requirement. When set, kill all transforms/timelines — content appears instantly at final state (set `opacity:1`, no `y`). Wrap every GSAP call behind this check.
- Respect performance budget: animate only `transform` and `opacity`. Never animate layout properties (width/height/top/left).
- No CLS: reserve space for all animated/lazy media. Animated elements start visible to crawlers (progressive enhancement) — JS only adds the motion.
- 60fps target; test on mid-tier hardware. If a timeline can't hold 60fps, simplify it.

### 6.4 Video

- Background/feature videos: muted, `playsinline`, `preload="metadata"`, lazy via IntersectionObserver, `poster` always set. Provide `webm` + `mp4`. Pause when offscreen. Decorative only — never essential content.

---

## 7. Imagery & content art direction

- **No generic stock photos of smiling doctors.** Prefer: real product UI (dashboards, builder, EMR screens) shown in clean device/browser frames; abstract structured graphics (grids, nodes, data viz) built from brand tokens; restrained custom diagrams.
- Product screenshots sit in a consistent "browser chrome" frame component with subtle `--shadow-md`.
- If illustration is used: single-line, monochrome-purple, geometric — one consistent style, never mixed.
- Photography (if any): desaturated with a subtle purple duotone wash to unify; consistent grain/treatment.
- Every image: explicit `width`/`height`, `loading="lazy"` (except LCP hero), modern formats (`avif`/`webp`), descriptive `alt`.

---

## 8. Tailwind mapping (config contract)

Tokens are exposed to Tailwind so utilities stay on-system. Do not use arbitrary values (`text-[#xxxxxx]`, `mt-[37px]`) — extend the theme instead.

```js
// tailwind.config — theme.extend (illustrative)
colors: {
  purple: { 50:'var(--pl-purple-50)', /* …through 900 */ },
  ink:    { 900:'var(--pl-ink-900)', 700:'var(--pl-ink-700)', 500:'var(--pl-ink-500)', 400:'var(--pl-ink-400)', 300:'var(--pl-ink-300)' },
  paper:'var(--pl-paper)', surface:'var(--pl-surface)', line:'var(--pl-line)',
  teal: { 400:'var(--pl-teal-400)', 500:'var(--pl-teal-500)', 600:'var(--pl-teal-600)' },
},
borderRadius: { sm:'8px', md:'12px', lg:'16px', xl:'24px' },
fontFamily: { display:['Geist','sans-serif'], sans:['Inter','sans-serif'], mono:['Geist Mono','monospace'] },
maxWidth: { container:'75rem', wide:'82.5rem', prose:'68ch' },
boxShadow: { sm:'var(--shadow-sm)', md:'var(--shadow-md)', cta:'var(--shadow-cta)' },
```

ESLint/Stylelint rule: **flag arbitrary Tailwind values in review.** Tokens or nothing.

---

## 9. Accessibility & quality gates (must pass before "done")

- WCAG 2.1 AA: contrast, focus order, visible focus, skip-link, landmark regions, labelled controls.
- Full keyboard operability (menus, accordions, carousels, dialogs). ARIA only where semantics need it.
- `prefers-reduced-motion` honored everywhere (§6.3).
- Lighthouse targets: **Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100** on the homepage (mobile profile).
- Core Web Vitals: LCP < 2.0s, CLS < 0.05, INP < 200ms.
- Semantic HTML first; one `<h1>` per page; logical heading order.
- All interactive states defined; no dead hovers; no layout shift on hover.

---

## 10. Anti-slop checklist (review gate for every page)

- [ ] Palette holds: mostly ink-on-paper; purple used with intent; ≤ 1 accent moment per view.
- [ ] Type hierarchy via scale/weight/space — not boxes and rainbow color.
- [ ] Section rhythm uses the large spacing tokens; nothing cramped.
- [ ] Only Lucide icons, single weight. No emoji. No mixed illustration styles.
- [ ] Logos/screenshots monochrome-disciplined, equal optical sizing.
- [ ] Copy is specific and evidence-led; no stacked buzzwords; no "seamless/revolutionary/cutting-edge" pileups.
- [ ] Motion is from the approved vocabulary only; reduced-motion verified.
- [ ] No arbitrary Tailwind values; everything traces to a token.
- [ ] One primary CTA per section.
- [ ] Real measure on text (≤ 72ch); no full-bleed paragraphs.
```