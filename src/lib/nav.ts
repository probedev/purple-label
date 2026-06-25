/**
 * Information architecture (sitemap.md). Single source for Header, MegaMenu, and Footer
 * so navigation never drifts from the IA.
 */

export interface NavItem {
  label: string;
  href: string;
  desc?: string;
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
      label: 'Experience Builder',
      href: '/platform/builder',
      desc: 'No-code intake, patient portals, and branded storefronts.',
    },
    {
      label: 'EMR & E-Prescribing',
      href: '/platform/emr-eprescribing',
      desc: 'Clinical workspace with certified electronic prescribing.',
    },
    {
      label: 'Pharmacy & Fulfillment',
      href: '/platform/pharmacy-fulfillment',
      desc: 'Nationwide 503A/503B network, or bring your own pharmacy.',
    },
    {
      label: 'Payments & Commerce',
      href: '/platform/payments',
      desc: 'Telehealth merchant accounts, subscriptions, and refunds.',
    },
    {
      label: 'Analytics & Insights',
      href: '/platform/analytics',
      desc: 'Cohorts, retention, and order economics that matter.',
    },
    {
      label: 'Security & Compliance',
      href: '/security',
      desc: 'HIPAA, encryption, access control, and governance.',
    },
  ],
};

export const SOLUTIONS: NavGroup = {
  label: 'Solutions',
  href: '/solutions',
  items: [
    {
      label: 'Launch a DTC telehealth brand',
      href: '/solutions/launch-dtc',
      desc: 'Concept to live storefront, fast.',
    },
    {
      label: 'Run a virtual clinic',
      href: '/solutions/virtual-clinic',
      desc: 'Scheduling, providers, async + video visits.',
    },
    {
      label: 'Scale on our engine',
      href: '/solutions/enterprise',
      desc: 'Inherit proven, high-volume infrastructure.',
    },
    {
      label: 'Build with our API',
      href: '/solutions/developers',
      desc: 'Developer-first, headless integration.',
    },
  ],
};

export const RESOURCES: NavGroup = {
  label: 'Resources',
  items: [
    { label: 'Integrations & API', href: '/integrations', desc: 'Off-the-shelf + developer API.' },
    { label: 'Security & Compliance', href: '/security', desc: 'How we protect PHI.' },
    { label: 'About', href: '/about', desc: 'The team and the mission.' },
    { label: 'Blog / Insights', href: '/blog', desc: 'Notes on building in virtual care.' },
    { label: 'Customers', href: '/customers', desc: 'Who builds on Purple Label MD.' },
    { label: 'System Status', href: '/status', desc: 'Live platform availability.' },
  ],
};

export const HEADER_GROUPS: NavGroup[] = [PLATFORM, SOLUTIONS, RESOURCES];

export const HEADER_LINKS: NavItem[] = [{ label: 'Pricing', href: '/pricing' }];

export const FOOTER_COLUMNS: NavGroup[] = [
  PLATFORM,
  SOLUTIONS,
  {
    label: 'Developers',
    items: [
      { label: 'Integrations', href: '/integrations' },
      { label: 'API & Docs', href: '/docs' },
      { label: 'Changelog', href: '/blog' },
      { label: 'System Status', href: '/status' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Customers', href: '/customers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/about' },
      { label: 'Contact', href: '/contact' },
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

/** Trust badges shown in the footer trust row (§5.4). All gated until substantiated. */
export const TRUST_BADGES = ['HIPAA', 'SOC 2', 'LegitScript', 'Surescripts'] as const;

export const CTA = {
  primary: { label: 'Request a demo', href: '/contact' },
  secondary: { label: 'Talk to sales', href: '/contact' },
  signin: { label: 'Sign in', href: '/contact' },
} as const;
