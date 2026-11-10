/**
 * Information architecture. Single source for Header, MegaMenu, and Footer so navigation
 * never drifts from the IA.
 *
 * Nov 2026 refresh (plan §3): the site sells a white-label digital
 * health care experience, so the header is Platform (grouped by the Health Loop planes) ·
 * Solutions (by audience) · Care programs (the Rx catalog, route stays /programs) ·
 * Developers · Pricing. Module and audience entries are derived from src/lib/modules.ts and
 * src/lib/solutions.ts so the menus can't drift from the pages.
 */
import { PROGRAMS_DATA } from './programs';
import { MODULES, PLANES, OWN_EXTRAS, modulesInPlane } from './modules';
import { SOLUTIONS } from './solutions';

/** The public docs property (confirmed by Gregg 2026-07-23). */
export const DOCS_URL = 'https://docs.purplelabelmd.com';

export interface NavItem {
  label: string;
  href: string;
  desc?: string;
  /** lucide icon name (no prefix) for the shadcn-style mega-menu item. */
  icon?: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export interface NavGroup {
  label: string;
  /** Optional overview link for the group label itself. */
  href?: string;
  /** Overview-link label in the mega-menu footer (defaults to "Explore {label}"). */
  hrefLabel?: string;
  /** Flat list — used by the mobile accordion and the footer. */
  items: NavItem[];
  /** Optional labeled columns for the desktop mega-menu. */
  sections?: NavSection[];
}

const moduleItem = (slug: string): NavItem => {
  const m = MODULES.find((x) => x.slug === slug)!;
  return { label: m.name, href: `/platform/${m.slug}`, icon: m.icon, desc: m.navDesc };
};

const PLATFORM_SECTIONS: NavSection[] = PLANES.map((plane) => ({
  label: plane.label,
  items: [
    ...modulesInPlane(plane.id).map((m) => moduleItem(m.slug)),
    ...(plane.id === 'own'
      ? OWN_EXTRAS.map((x) => ({ label: x.name, href: x.href, icon: x.icon, desc: x.navDesc }))
      : []),
  ],
}));

export const PLATFORM: NavGroup = {
  label: 'Platform',
  href: '/platform',
  hrefLabel: 'See the whole health loop',
  sections: PLATFORM_SECTIONS,
  items: PLATFORM_SECTIONS.flatMap((s) => s.items),
};

const SOLUTION_ITEMS: NavItem[] = SOLUTIONS.map((s) => ({
  label: s.audience,
  href: `/solutions/${s.slug}`,
  icon: s.icon,
  desc: s.navDesc,
}));

export const SOLUTIONS_NAV: NavGroup = {
  label: 'Solutions',
  href: '/solutions',
  hrefLabel: 'Explore all solutions',
  sections: [
    { label: 'By audience', items: SOLUTION_ITEMS },
    {
      label: 'By how you launch',
      items: [
        {
          label: 'Build on the platform',
          href: '/developers',
          icon: 'code',
          desc: 'Your team and agents, on our API and site kit.',
        },
        {
          label: 'Managed',
          href: '/managed',
          icon: 'headset',
          desc: 'We build and run it for you.',
        },
        {
          label: 'Enterprise',
          href: '/pricing#enterprise',
          icon: 'building',
          desc: 'Dedicated infrastructure and data controls.',
        },
      ],
    },
  ],
  items: SOLUTION_ITEMS,
};

// Route and data stay /programs; the label is "Care programs" (was "Rx").
export const PROGRAMS: NavGroup = {
  label: 'Care programs',
  href: '/programs',
  hrefLabel: 'See every care program',
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
      label: 'Documentation',
      href: DOCS_URL,
      icon: 'book-open',
      desc: 'Guides, quickstart, and the full API reference.',
    },
    {
      label: 'API overview',
      href: '/developers#api',
      icon: 'code',
      desc: 'One contract-first API for the whole platform.',
    },
    {
      label: 'Webhooks & events',
      href: '/developers#webhooks',
      icon: 'webhook',
      desc: 'Signed events for every step of the member journey.',
    },
    {
      label: 'Build your front end',
      href: '/developers#front-ends',
      icon: 'layout-template',
      desc: 'Site kit, AI-built storefronts, or fully headless.',
    },
    {
      label: 'Agents & MCP',
      href: '/developers#agents',
      icon: 'bot',
      desc: 'Docs and tools your AI agents can act on.',
    },
    {
      label: 'Architecture',
      href: '/architecture',
      icon: 'git-merge',
      desc: 'Under the hood: the durable member journey.',
    },
  ],
};

export const HEADER_GROUPS: NavGroup[] = [PLATFORM, SOLUTIONS_NAV, PROGRAMS, DEVELOPERS];

export const HEADER_LINKS: NavItem[] = [{ label: 'Pricing', href: '/pricing' }];

export const FOOTER_COLUMNS: NavGroup[] = [
  {
    label: 'Platform',
    href: '/platform',
    items: [
      { label: 'The health loop', href: '/platform' },
      ...MODULES.map((m) => ({ label: m.name, href: `/platform/${m.slug}` })),
      { label: 'Privacy & Security', href: '/security' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      ...SOLUTION_ITEMS.map(({ label, href }) => ({ label, href })),
      { label: 'Managed', href: '/managed' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    label: 'Care programs',
    items: PROGRAMS_DATA.map((p) => ({ label: p.title, href: `/programs/${p.slug}` })),
  },
  {
    label: 'Developers',
    items: [
      { label: 'Documentation', href: DOCS_URL },
      { label: 'API overview', href: '/developers#api' },
      { label: 'Webhooks & events', href: '/developers#webhooks' },
      { label: 'Agents & MCP', href: '/developers#agents' },
      { label: 'Architecture', href: '/architecture' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'LegitScript', href: '/legitscript' },
      { label: 'See it under your brand', href: '/preview' },
      { label: 'Contact', href: '/contact' },
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'HIPAA', href: '/legal/hipaa' },
      { label: 'Do Not Sell', href: '/legal/do-not-sell' },
    ],
  },
];

/**
 * Trust badges shown in the footer trust row (§5.4). Status per Gregg, 2026-06-25: HIPAA and
 * LegitScript confirmed; SOC 2 in progress (shown qualified, never as achieved). Surescripts
 * removed in the Nov 2026 refresh — e-prescribing routes through the clinician network, so
 * the badge implied a direct certification we don't hold (refresh plan §8).
 */
export const TRUST_BADGES = [
  { label: 'HIPAA', status: 'confirmed' },
  { label: 'LegitScript', status: 'confirmed' },
  { label: 'SOC 2', status: 'in-progress' },
] as const;

// Dashboard CTA removed per CONTENT-REVIEW-2026-07-21 G10 — /login is a non-functional
// mock; the header button returns when the real portal ships.
export const CTA = {
  consult: { label: 'Book a demo', href: '/contact' },
  preview: { label: 'See it under your brand', href: '/preview' },
  pricing: { label: 'See pricing', href: '/pricing' },
  build: { label: 'Read the docs', href: DOCS_URL },
} as const;
