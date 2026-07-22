/**
 * Claims registry — CONTENT-REVIEW-2026-07-21 §G1. The single source for every metric,
 * count, or proof number rendered on the site. Pages import from here; no literal stats
 * in page files. Each entry records WHOSE number it is (`entity`), where it came from
 * (`source`), and when it was last stood behind (`asOf`) — so heritage proof,
 * partner-network volume, and platform numbers can never blur into one unlabeled claim.
 *
 * Entries whose source carries [GREGG-CONFIRM] ship with the proposed label pending
 * Gregg's word; the open list lives in the review's §5 register.
 */

export type StatEntity =
  /** The team's prior white-label operation — proof of the operators, not product age. */
  | 'operators-heritage'
  /** Partner 503A/503B pharmacy-network volume — not solely ours. */
  | 'pharmacy-network'
  /** Purple Label MD, the product. */
  | 'platform'
  /** Industry context numbers — estimates, not our claims. */
  | 'market-estimate';

export interface Stat {
  value: string;
  label: string;
  caption: string;
  entity: StatEntity;
  source: string;
  asOf: string;
}

/**
 * The one standardized proof phrase (review E3): use this everywhere instead of
 * "three cleared audits" variants. Exact "audit" nouns are counsel-gated; this
 * "reviews" form is the safe wording until counsel confirms.
 */
export const PROOF_LINE = 'cleared HIPAA, state pharmacy-board, and payment-processor reviews';

/** Heritage frame inputs (G2). Years from the former /platform "3 years" claim. */
export const HERITAGE = {
  years: 'three',
  source: 'Former /platform "run in production for 3 years" claim; [GREGG-CONFIRM] exact span',
  asOf: '2026-07-21',
} as const;

/**
 * Home-hero odometer: lifetime Rx filled by the operators' platforms. The page script
 * seeds from the anchor so the number keeps climbing across sessions.
 */
export const RX_ODOMETER = {
  anchorCount: 728_487,
  anchorDateUtc: Date.UTC(2026, 5, 28),
  avgPerDay: 60_000,
  label: 'Rx filled on platform',
  caption: "By our operators' platforms to date",
  entity: 'operators-heritage',
  source: 'Founder anchor 2026-06-28; [GREGG-CONFIRM] figure + label',
  asOf: '2026-06-28',
} as const;

export const STATS = {
  rxMonthly: {
    value: '1M+',
    label: 'Prescriptions filled monthly',
    caption: 'Across the partner pharmacy network',
    entity: 'pharmacy-network',
    source: 'WLMD live marketing site 2026-07; [GREGG-CONFIRM] figure + attribution',
    asOf: '2026-07-21',
  },
  ordersWeekly: {
    value: '10,000+',
    label: 'Orders shipped weekly',
    caption: 'Platform-wide, end to end',
    entity: 'platform',
    source: 'WLMD live marketing site 2026-07; [GREGG-CONFIRM]',
    asOf: '2026-07-21',
  },
  providerNetwork: {
    value: '50-State',
    label: 'Provider network',
    caption: 'Board-certified, licensed nationwide',
    entity: 'platform',
    source: 'Founder-confirmed network claim; [GREGG-CONFIRM] phrasing with clinical owner',
    asOf: '2026-06-25',
  },
  deviceIntegrations: {
    value: '300+',
    label: 'Device integrations',
    caption: 'Rings, watches, CGMs, scales & more',
    entity: 'platform',
    source: 'WLMD live marketing site 2026-07; [GREGG-CONFIRM] (review C14)',
    asOf: '2026-07-21',
  },
  legitscriptCerts: {
    value: '250+',
    label: 'LegitScript certifications',
    caption: 'As an enterprise partner',
    entity: 'operators-heritage',
    source: 'Enterprise partnership founder-confirmed 2026-06-25; count per WLMD site',
    asOf: '2026-06-25',
  },
  legitscriptTier: {
    value: 'Enterprise',
    label: 'LegitScript partner tier',
    caption: 'Fast-tracked approval',
    entity: 'operators-heritage',
    source: 'Founder-confirmed 2026-06-25',
    asOf: '2026-06-25',
  },
  statesCovered: {
    value: '50',
    label: 'States covered',
    caption: 'Nationwide operation',
    entity: 'platform',
    source: 'Founder-confirmed network claim',
    asOf: '2026-06-25',
  },
  brandsLaunched: {
    value: '100+',
    label: 'Branded telehealth launches',
    caption: 'By our operators — and counting',
    entity: 'operators-heritage',
    source: 'Heritage lifetime figure; fixes the wrong "last 6 months" caption. [GREGG-CONFIRM]',
    asOf: '2026-07-21',
  },
  launchDays: {
    value: '~30 days',
    label: 'To launch',
    caption: 'From kickoff to live',
    entity: 'platform',
    source: 'Managed-launch operating claim, founder-confirmed',
    asOf: '2026-06-25',
  },
  zeroMarkup: {
    value: '$0',
    label: 'Markup on medication',
    caption: 'Pass-through pricing',
    entity: 'platform',
    source: 'Pricing-model commitment, founder-confirmed',
    asOf: '2026-06-25',
  },
  diyCost: {
    value: '$500K+',
    label: 'Typical DIY build cost',
    caption: 'Industry estimate',
    entity: 'market-estimate',
    source: 'WLMD comparison table; typical industry estimate, not our claim',
    asOf: '2026-07-21',
  },
  diyTimeline: {
    value: '6–12 months',
    label: 'Typical DIY timeline',
    caption: 'Industry estimate',
    entity: 'market-estimate',
    source: 'WLMD comparison table; typical industry estimate, not our claim',
    asOf: '2026-07-21',
  },
} satisfies Record<string, Stat>;
