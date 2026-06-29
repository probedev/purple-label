/**
 * SEO helpers — per-page meta + JSON-LD (sitemap.md "URL & SEO conventions").
 * Keep titles ≤ 60 chars and descriptions ≤ 155 (enforced softly via dev warnings).
 */

export const SITE = {
  name: 'Purple Label MD',
  url: 'https://purplelabelmd.com',
  tagline: 'Launch and own a branded telehealth business.',
  twitter: '@purplelabelmd', // [CONFIRM handle]
  defaultOgImage: '/og/default.png',
} as const;

export interface SeoProps {
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/platform". Canonical is built from SITE.url. */
  path?: string;
  ogImage?: string;
  /** Set true on pages that should not be indexed (e.g. thank-you). */
  noindex?: boolean;
  /** JSON-LD objects to inject as <script type="application/ld+json">. */
  jsonLd?: Record<string, unknown>[];
}

/** Build an absolute canonical URL honoring the no-trailing-slash policy. */
export function canonical(path = '/'): string {
  if (path === '/') return SITE.url + '/';
  return SITE.url + '/' + path.replace(/^\/+|\/+$/g, '');
}

/** Organization JSON-LD — used on the homepage. */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    logo: SITE.url + '/favicon.svg',
  };
}

/** SoftwareApplication JSON-LD — used on the homepage. */
export function softwareApplicationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: SITE.tagline,
    url: SITE.url,
  };
}

/** BreadcrumbList JSON-LD for deep pages. Pass ordered [label, path] pairs. */
export function breadcrumbJsonLd(crumbs: [string, string][]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: canonical(path),
    })),
  };
}

/** FAQPage JSON-LD for the pricing page. */
export function faqJsonLd(qa: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
