/**
 * Information architecture (sitemap.md, 2026-06-25 positioning rewrite). Single source for
 * Header, MegaMenu, and Footer so navigation never drifts from the IA.
 * Primary groups: Platform · Developers · Solutions · Pricing (two-audience, Stripe-shaped).
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
      label: 'Intake',
      href: '/platform/intake',
      desc: 'Agent- and API-first intake with identity verification built in.',
    },
    {
      label: 'Visits & E-Prescribing',
      href: '/platform/visits',
      desc: 'Sync + async visits, certified e-prescribing, provider routing.',
    },
    {
      label: 'Patient Management',
      href: '/platform/patients',
      desc: 'One longitudinal record, messaging, and care coordination.',
    },
    {
      label: 'Pharmacy & Fulfillment',
      href: '/platform/pharmacy-fulfillment',
      desc: 'Nationwide 503A/503B network, lowest-in-class pricing, 50 states.',
    },
    {
      label: 'Payments',
      href: '/platform/payments',
      desc: 'Telehealth merchant accounts, subscriptions, and refunds.',
    },
    {
      label: 'Analytics & Growth',
      href: '/platform/analytics',
      desc: 'Cohorts, retention, order economics, and conversion as data.',
    },
    {
      label: 'Security & Compliance',
      href: '/security',
      desc: 'HIPAA-compliant data layer, encryption, three cleared audits.',
    },
  ],
};

export const DEVELOPERS: NavGroup = {
  label: 'Developers',
  href: '/developers',
  items: [
    {
      label: 'API reference',
      href: '/developers#api-reference',
      desc: 'The programmable surface for every module.',
    },
    {
      label: 'Architecture',
      href: '/architecture',
      desc: 'A glimpse under the hood: the order saga & event backbone.',
    },
    {
      label: 'Agent-ready docs',
      href: '/developers#agent-ready-docs',
      desc: 'Documentation formatted for AI agents to act on.',
    },
    {
      label: 'MCP servers',
      href: '/developers#mcp-servers',
      desc: 'Connect your agents to the platform — no glue code.',
    },
    {
      label: 'Prompt library',
      href: '/developers#prompt-library',
      desc: 'Customizable prompts to build and operate each module.',
    },
    {
      label: 'Webhooks & events',
      href: '/developers#webhooks',
      desc: 'Automate on order.created, visit.completed, and more.',
    },
    {
      label: 'Integrations',
      href: '/integrations',
      desc: 'Connect pharmacies, providers, labs, and CRMs.',
    },
  ],
};

export const SOLUTIONS: NavGroup = {
  label: 'Solutions',
  href: '/solutions',
  items: [
    {
      label: 'Programs',
      href: '/programs',
      desc: 'Condition verticals your agents can launch — weight loss, TRT, peptides, labs.',
    },
    {
      label: 'Launch a DTC telehealth brand',
      href: '/solutions/launch-dtc',
      desc: 'Concept to live, agent-built brand.',
    },
    {
      label: 'Run a virtual clinic',
      href: '/solutions/virtual-clinic',
      desc: 'Scheduling, providers, async + video visits.',
    },
    {
      label: 'Add prescribing & fulfillment',
      href: '/solutions/prescribing-fulfillment',
      desc: 'Bolt e-Rx and pharmacy onto an existing brand.',
    },
    {
      label: 'Scale on our engine',
      href: '/solutions/enterprise',
      desc: 'Inherit proven, high-volume infrastructure.',
    },
    {
      label: 'Build with our API & agents',
      href: '/solutions/developers',
      desc: 'For developer- and agent-first teams.',
    },
  ],
};

export const HEADER_GROUPS: NavGroup[] = [PLATFORM, DEVELOPERS, SOLUTIONS];

export const HEADER_LINKS: NavItem[] = [{ label: 'Pricing', href: '/pricing' }];

export const FOOTER_COLUMNS: NavGroup[] = [
  PLATFORM,
  {
    label: 'Developers',
    items: [
      { label: 'API reference', href: '/developers#api-reference' },
      { label: 'Architecture', href: '/architecture' },
      { label: 'Agent-ready docs', href: '/developers#agent-ready-docs' },
      { label: 'MCP servers', href: '/developers#mcp-servers' },
      { label: 'Prompt library', href: '/developers#prompt-library' },
      { label: 'Webhooks', href: '/developers#webhooks' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'System Status', href: '/status' },
    ],
  },
  SOLUTIONS,
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

export const CTA = {
  primary: { label: 'Request a demo', href: '/contact' },
  secondary: { label: 'Read the docs', href: '/developers' },
  signin: { label: 'Sign in', href: '/contact' },
} as const;
