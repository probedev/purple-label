/**
 * Information architecture. Single source for Header, MegaMenu, and Footer so navigation
 * never drifts from the IA. Header order (2026-06-28): Platform · Rx · Pricing · Developers.
 * "Rx" is the consumer-facing label for the programs menu (route + data stay /programs); it
 * leads with the lowest-cost medication catalog. Solutions was dropped — its pages never
 * existed, and its use-cases live under Platform and the Managed plan.
 */
import { PROGRAMS_DATA } from './programs';

export interface NavItem {
  label: string;
  href: string;
  desc?: string;
  /** lucide icon name (no prefix) for the shadcn-style mega-menu item. */
  icon?: string;
}

export interface NavGroup {
  label: string;
  /** Optional overview link for the group label itself. */
  href?: string;
  items: NavItem[];
}

export const PLATFORM: NavGroup = {
  label: 'Platform',
  href: '/platform',
  items: [
    {
      label: 'Intake',
      href: '/platform/intake',
      icon: 'clipboard-list',
      desc: 'Agent- and API-first intake with identity verification built in.',
    },
    {
      label: 'Visits & E-Prescribing',
      href: '/platform/visits',
      icon: 'stethoscope',
      desc: 'Sync + async visits, certified e-prescribing, provider routing.',
    },
    {
      label: 'Patient Management',
      href: '/platform/patients',
      icon: 'users',
      desc: 'One longitudinal record, messaging, and care coordination.',
    },
    {
      label: 'Pharmacy & Fulfillment',
      href: '/platform/pharmacy-fulfillment',
      icon: 'pill',
      desc: 'Nationwide 503A/503B network, lowest-in-class pricing, 50 states.',
    },
    {
      label: 'Payments',
      href: '/platform/payments',
      icon: 'credit-card',
      desc: 'Telehealth merchant accounts, subscriptions, and refunds.',
    },
    {
      label: 'Analytics & Growth',
      href: '/platform/analytics',
      icon: 'trending-up',
      desc: 'Cohorts, retention, order economics, and conversion as data.',
    },
    {
      label: 'Security & Compliance',
      href: '/security',
      icon: 'shield-check',
      desc: 'HIPAA-compliant data layer, encryption, three cleared audits.',
    },
    {
      label: 'LegitScript',
      href: '/legitscript',
      icon: 'badge-check',
      desc: 'Enterprise Partner — the gate to ads, payments, and patient trust.',
    },
    {
      label: 'Architecture',
      href: '/architecture',
      icon: 'git-merge',
      desc: 'Under the hood: the patient journey and the durable order saga.',
    },
  ],
};

// Labeled "Rx" in the UI; the route and underlying data stay /programs. The menu leads the
// consumer story with the lowest-cost medication catalog.
export const PROGRAMS: NavGroup = {
  label: 'Rx',
  href: '/programs',
  items: PROGRAMS_DATA.map((p) => ({
    label: p.title,
    href: `/programs/${p.slug}`,
    icon: p.icon,
    desc: p.navDesc,
  })),
};

export const DEVELOPERS: NavGroup = {
  label: 'Developers',
  href: '/developers',
  items: [
    {
      label: 'API reference',
      href: '/developers#api-reference',
      icon: 'code',
      desc: 'The programmable surface for every module.',
    },
    {
      label: 'Architecture',
      href: '/architecture',
      icon: 'git-merge',
      desc: 'A glimpse under the hood: the order saga & event backbone.',
    },
    {
      label: 'Agent-ready docs',
      href: '/developers#agent-ready-docs',
      icon: 'book-open',
      desc: 'Documentation formatted for AI agents to act on.',
    },
    {
      label: 'MCP servers',
      href: '/developers#mcp-servers',
      icon: 'plug',
      desc: 'Connect your agents to the platform — no glue code.',
    },
    {
      label: 'Prompt library',
      href: '/developers#prompt-library',
      icon: 'sparkles',
      desc: 'Customizable prompts to build and operate each module.',
    },
    {
      label: 'Webhooks & events',
      href: '/developers#webhooks',
      icon: 'webhook',
      desc: 'Automate on order.created, visit.completed, and more.',
    },
    {
      label: 'Integrations',
      href: '/developers#integrations',
      icon: 'blocks',
      desc: 'Connect pharmacies, providers, labs, and CRMs.',
    },
  ],
};

// Outcome-first bar: Platform + Rx as mega-menus, then Pricing and Developers as plain
// trailing links. Solutions was removed (its routes never existed); those use-cases now live
// under Platform and the Managed plan.
export const HEADER_GROUPS: NavGroup[] = [PLATFORM, PROGRAMS];

export const HEADER_LINKS: NavItem[] = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Developers', href: '/developers' },
];

export const FOOTER_COLUMNS: NavGroup[] = [
  PLATFORM,
  // Dead links pruned per CONTENT-REVIEW-2026-07-21 G3: Customers, Blog, Careers,
  // Changelog, and System Status return when their destinations are real.
  {
    label: 'Developers',
    items: [
      { label: 'API reference', href: '/developers#api-reference' },
      { label: 'Architecture', href: '/architecture' },
      { label: 'Agent-ready docs', href: '/developers#agent-ready-docs' },
      { label: 'MCP servers', href: '/developers#mcp-servers' },
      { label: 'Prompt library', href: '/developers#prompt-library' },
      { label: 'Webhooks', href: '/developers#webhooks' },
      { label: 'Integrations', href: '/developers#integrations' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Legal', href: '/legal/terms' },
    ],
  },
  {
    label: 'Legal',
    items: [
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'HIPAA', href: '/legal/hipaa' },
      { label: 'Do Not Sell', href: '/legal/do-not-sell' },
    ],
  },
];

/**
 * Trust badges shown in the footer trust row (§5.4). Status per Gregg, 2026-06-25:
 * HIPAA (compliant, audit cleared), LegitScript (certified), and Surescripts (connected) are
 * confirmed; SOC 2 is in progress (shown qualified, never as achieved).
 */
export const TRUST_BADGES = [
  { label: 'HIPAA', status: 'confirmed' },
  { label: 'LegitScript', status: 'confirmed' },
  { label: 'Surescripts', status: 'confirmed' },
  { label: 'SOC 2', status: 'in-progress' },
] as const;

// Dashboard CTA removed per CONTENT-REVIEW-2026-07-21 G10 — /login is a non-functional
// mock; the header button returns when the real portal ships.
export const CTA = {
  consult: { label: 'Book a consult', href: '/contact' },
  pricing: { label: 'See pricing', href: '/pricing' },
  build: { label: 'Start building', href: '/developers' },
} as const;
