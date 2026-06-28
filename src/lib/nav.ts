/**
 * Information architecture. Single source for Header, MegaMenu, and Footer so navigation
 * never drifts from the IA. Header order (2026-06-28): Platform · Programs · Solutions ·
 * Developers · Pricing — Programs promoted to balance the bar toward consumer/conversion.
 */

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
  ],
};

export const PROGRAMS: NavGroup = {
  label: 'Programs',
  href: '/programs',
  items: [
    {
      label: 'Weight loss',
      href: '/programs',
      icon: 'activity',
      desc: 'GLP-1 & metabolic care — the flagship.',
    },
    {
      label: "Men's health",
      href: '/programs',
      icon: 'user',
      desc: 'ED, testosterone, hair, and wellness.',
    },
    {
      label: "Women's health",
      href: '/programs',
      icon: 'heart-pulse',
      desc: 'Hormones, wellness, and longevity.',
    },
    {
      label: 'TRT',
      href: '/programs',
      icon: 'dumbbell',
      desc: 'Testosterone therapy with labs built in.',
    },
    { label: 'HRT', href: '/programs', icon: 'droplets', desc: 'Hormone therapy with monitoring.' },
    { label: 'ED', href: '/programs', icon: 'heart', desc: 'Discreet, recurring treatment.' },
    {
      label: 'Hair & skin',
      href: '/programs',
      icon: 'scissors',
      desc: 'Hair-loss and dermatology.',
    },
    {
      label: 'Peptides',
      href: '/programs',
      icon: 'flask-conical',
      desc: 'Recovery and longevity protocols.',
    },
    {
      label: 'Labs & diagnostics',
      href: '/programs',
      icon: 'microscope',
      desc: 'Panels ordered and resulted in-journey.',
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
      href: '/integrations',
      icon: 'blocks',
      desc: 'Connect pharmacies, providers, labs, and CRMs.',
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
      icon: 'rocket',
      desc: 'Concept to live, agent-built brand.',
    },
    {
      label: 'Run a virtual clinic',
      href: '/solutions/virtual-clinic',
      icon: 'video',
      desc: 'Scheduling, providers, async + video visits.',
    },
    {
      label: 'Add prescribing & fulfillment',
      href: '/solutions/prescribing-fulfillment',
      icon: 'pill',
      desc: 'Bolt e-Rx and pharmacy onto an existing brand.',
    },
    {
      label: 'Scale on our engine',
      href: '/solutions/enterprise',
      icon: 'server',
      desc: 'Inherit proven, high-volume infrastructure.',
    },
    {
      label: 'Fully managed (done-for-you)',
      href: '/pricing',
      icon: 'headset',
      desc: 'We build, run, and grow it for you — revenue share.',
    },
    {
      label: 'Build with our API & agents',
      href: '/solutions/developers',
      icon: 'code',
      desc: 'For developer- and agent-first teams.',
    },
  ],
};

export const HEADER_GROUPS: NavGroup[] = [PLATFORM, PROGRAMS, SOLUTIONS, DEVELOPERS];

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
  consult: { label: 'Book a consult', href: '/contact' },
  dashboard: { label: 'Dashboard', href: '/login' },
} as const;
