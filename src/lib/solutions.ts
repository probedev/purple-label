/**
 * Solutions — one entry per audience that owns a relationship with its members' health and
 * can launch a branded digital health care experience on Purple Label (Nov 2026 refresh,
 * refresh plan §2.3). Drives /solutions, /solutions/[slug], and the Solutions
 * mega-menu.
 *
 * The example brand on each page is ILLUSTRATIVE — a fictional name and palette used to
 * render the member-app mock. Never present one as a customer. The `theme` palettes are
 * brand-content data for those mock brands (not site design tokens), applied as CSS custom
 * properties on the mock only.
 */

/**
 * Which member-app screen a mock brand shows (Gregg 2026-11-10: each rotating brand
 * highlights a different track of the same toolset).
 *   health — health & fitness: score, wearables, biomarkers
 *   glp1   — GLP-1 weight loss: progress, dose titration, refills, care team
 *   orders — peptides: one order from ID check to cold-chain delivery
 *   trt    — TRT: hormone lab panel baseline → follow-up, next lab, vial shipment
 */
export type MockScreen = 'health' | 'glp1' | 'orders' | 'trt';

export interface MockBrandTheme {
  /** Fictional brand name shown in the member-app mock. */
  name: string;
  /** Primary brand color (hex) — the mock's accent. */
  primary: string;
  /** Soft tint of the primary for chips and fills. */
  tint: string;
  /** Short wordmark initials for the mock logo tile. */
  mark: string;
  /** Member-app screen to show (defaults to 'health'). */
  screen?: MockScreen;
}

export interface Solution {
  slug: string;
  /** Audience name — nav label and card title. */
  audience: string;
  icon: string;
  navDesc: string;
  metaTitle: string;
  metaDescription: string;
  /** "Your X already…" hook — the H1. */
  headline: string;
  lead: string;
  /** Why the loop matters to this audience. */
  why: { icon: string; title: string; body: string }[];
  /** Module slugs most relevant to this audience, in emphasis order. */
  modules: string[];
  /** Care program slugs that fit (from programs.ts). */
  programs: string[];
  /** What they launch, as a one-paragraph picture. */
  launchStory: string;
  example: MockBrandTheme;
  faqs: { q: string; a: string }[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'health-brands',
    audience: 'DTC health brands',
    icon: 'heart-pulse',
    navDesc: 'Turn a prescription business into a health relationship.',
    metaTitle: 'For DTC health brands — add labs, data, and protocols to your Rx',
    metaDescription:
      'Turn a one-product prescription business into a lasting health relationship: labs, wearables, a branded health score, and protocols around your GLP-1, TRT, and HRT programs.',
    headline: 'Your members came for one prescription. Give them a reason to stay.',
    lead: 'Wrap your GLP-1, TRT, HRT, and wellness programs in the full health experience — baseline labs, connected devices, a health score with your name on it, and protocols that adapt — so members stay for the relationship, not just the refill.',
    why: [
      {
        icon: 'refresh-cw',
        title: 'Retention built into the product',
        body: 'Retests, moving scores, and an evolving plan give members a reason to come back that a refill reminder never will.',
      },
      {
        icon: 'file-check',
        title: 'Prescribed from data',
        body: 'Lab-informed eligibility and follow-up make your programs safer and more defensible.',
      },
      {
        icon: 'layers',
        title: 'More to offer each member',
        body: 'Add-on tests, adjacent programs, and products surface naturally from each member’s own results.',
      },
    ],
    modules: ['labs', 'insights', 'protocols', 'clinical-care', 'pharmacy-fulfillment'],
    programs: ['weight-loss', 'trt', 'hrt', 'mens-health', 'womens-health'],
    launchStory:
      'A weight-loss brand adds a baseline metabolic panel at signup, connects members’ scales and CGMs, scores their progress, and adjusts protocols — and titration — as results come in.',
    example: {
      name: 'Northline Health',
      primary: '#2563eb',
      tint: '#e8effd',
      mark: 'N',
      screen: 'glp1',
    },
    faqs: [
      {
        q: 'Can we keep our existing storefront?',
        a: 'Yes. Intake, checkout, and the member app run on the platform behind your current site, an AI-built storefront, our site kit, or your own front end via the API.',
      },
      {
        q: 'Can we migrate existing patients?',
        a: 'Yes — we plan migrations with you so in-flight subscriptions and care continue without interruption.',
      },
    ],
  },
  {
    slug: 'fitness',
    audience: 'Gyms & fitness',
    icon: 'dumbbell',
    navDesc: 'Your members train with you. Now they test and get care with you.',
    metaTitle: 'For gyms & fitness brands — launch your own health platform',
    metaDescription:
      'Give your members labs, a health score, wearable insights, and clinician-led programs like GLP-1 and TRT — under your gym’s brand, not a referral link.',
    headline: 'Your members train with you. Their health lives somewhere else.',
    lead: 'Your members already buy labs, GLP-1s, and hormone care — just not from you. Launch a health platform under your gym’s brand: baseline labs, wearable insights, a health score next to their training data, and licensed care when they need it.',
    why: [
      {
        icon: 'watch',
        title: 'The data you already have',
        body: 'Pair the activity data your members generate with labs and clinical care — a picture no consumer app can match.',
      },
      {
        icon: 'trophy',
        title: 'Results they can measure',
        body: 'Retests and scores turn training goals into visible health progress your coaches can build on.',
      },
      {
        icon: 'wallet',
        title: 'A new line of business',
        body: 'Health programs extend the relationship beyond the membership fee — under your brand.',
      },
    ],
    modules: ['labs', 'wearables', 'insights', 'protocols', 'member-app'],
    programs: ['weight-loss', 'trt', 'peptides', 'labs'],
    launchStory:
      'A boutique fitness brand offers a baseline panel to every new member, shows a health score next to class history, and adds clinician-led weight-loss and hormone programs inside its own app.',
    example: { name: 'Peak Fitness Health', primary: '#ea580c', tint: '#fdece2', mark: 'P' },
    faqs: [
      {
        q: 'Do our coaches give medical advice?',
        a: 'No. Coaches keep coaching; licensed clinicians handle all clinical care and prescribing behind your brand.',
      },
      {
        q: 'Can it run inside our existing app?',
        a: 'Yes — use the branded member app on your domain, or bring the experience into your own app through the API.',
      },
    ],
  },
  {
    slug: 'clinics',
    audience: 'Clinics & med spas',
    icon: 'sparkles',
    navDesc: 'Longevity, concierge, and aesthetic clinics — between visits.',
    metaTitle: 'For longevity clinics & med spas — your digital health experience',
    metaDescription:
      'Extend your clinic between visits with a branded digital experience: labs, protocols, refills, wearables, and messaging — and reach patients beyond your locations.',
    headline: 'Your patients trust you in person. Be there between visits.',
    lead: 'Give longevity, concierge, aesthetic, and wellness clinics a digital tier: at-home labs, protocols, refills, connected devices, and messaging under your clinic’s brand — reaching patients far beyond your locations.',
    why: [
      {
        icon: 'calendar-heart',
        title: 'Care between appointments',
        body: 'Protocols, retests, and refills keep patients engaged in the weeks your doors are closed.',
      },
      {
        icon: 'map',
        title: 'Beyond your zip code',
        body: 'A 50-state clinician network and nationwide fulfillment let your brand reach patients you could never see in person.',
      },
      {
        icon: 'flask-conical',
        title: 'Your protocols, at scale',
        body: 'Encode your clinical philosophy once and deliver it consistently to every patient.',
      },
    ],
    modules: ['labs', 'protocols', 'clinical-care', 'pharmacy-fulfillment', 'member-app'],
    programs: ['peptides', 'hrt', 'trt', 'weight-loss', 'hair-skin'],
    launchStory:
      'A longevity clinic launches a digital membership tier — quarterly at-home labs, a clinician-reviewed protocol, peptide and hormone programs, and messaging — for patients nationwide.',
    example: {
      name: 'Lumen Longevity',
      primary: '#0f766e',
      tint: '#e1f2ef',
      mark: 'L',
      screen: 'orders',
    },
    faqs: [
      {
        q: 'Can our own providers deliver care?',
        a: 'Yes. Bring your clinicians, use the 50-state network where you’re not licensed, or combine them.',
      },
    ],
  },
  {
    slug: 'employers',
    audience: 'Employers & benefits',
    icon: 'building-2',
    navDesc: 'A prevention benefit with your name on it.',
    metaTitle: 'For employers & benefits platforms — a branded prevention benefit',
    metaDescription:
      'Offer labs, a health score, protocols, and clinician-led care as a branded benefit — for employers, benefits platforms, and brokers that want their own health product.',
    headline: 'A prevention benefit with your name on it — not a referral link.',
    lead: 'Employers, benefits platforms, and brokers can offer a full digital health experience — baseline labs, a health score, protocols, and licensed care — as their own branded benefit, with aggregate, privacy-preserving reporting.',
    why: [
      {
        icon: 'shield-plus',
        title: 'Prevention people use',
        body: 'Labs and a score give employees a reason to engage — and catch issues early.',
      },
      {
        icon: 'lock',
        title: 'Privacy by architecture',
        body: 'Per-member encryption and minimum-necessary design keep individual health data out of the employer’s view.',
      },
      {
        icon: 'badge-check',
        title: 'Your benefit, your brand',
        body: 'Benefits platforms and brokers ship their own product instead of sending members to someone else’s.',
      },
    ],
    modules: ['labs', 'insights', 'protocols', 'clinical-care', 'operations'],
    programs: ['labs', 'weight-loss', 'womens-health', 'mens-health'],
    launchStory:
      'A benefits platform launches a branded prevention program — annual labs, a health score, and access to clinician-led weight and hormone care — with sponsor-level reporting that never exposes an individual.',
    example: { name: 'Meridian Benefits', primary: '#4f46e5', tint: '#ebeafc', mark: 'M' },
    faqs: [
      {
        q: 'Can the employer see individual results?',
        a: 'No. Reporting is aggregate and privacy-preserving; individual health data stays between the member and their care team.',
      },
    ],
  },
  {
    slug: 'creators',
    audience: 'Creators & physicians',
    icon: 'mic',
    navDesc: 'Your protocol, as a real health product.',
    metaTitle: 'For creators & physicians — launch your own health product',
    metaDescription:
      'Turn your audience and your protocol into a real health product: labs, a branded score, your protocols, and clinician-led care — your brand, not an affiliate code.',
    headline: 'Your audience follows your protocol. Make it a real health product.',
    lead: 'Doctors with audiences, creators, coaches, and podcasters can launch a branded health experience built on their own protocols — labs, a score, personalized plans, and licensed care — instead of sending followers to someone else’s brand for a referral fee.',
    why: [
      {
        icon: 'user-round',
        title: 'Own the relationship',
        body: 'Your followers become your members, with your brand, your protocol, and your voice throughout.',
      },
      {
        icon: 'list-checks',
        title: 'Your method, encoded',
        body: 'Turn your philosophy into a protocol library that personalizes to every member.',
      },
      {
        icon: 'headset',
        title: 'We can run it for you',
        body: 'On Managed, our team builds and operates the business while you focus on your audience.',
      },
    ],
    modules: ['protocols', 'insights', 'labs', 'member-app', 'clinical-care'],
    programs: ['weight-loss', 'peptides', 'trt', 'womens-health'],
    launchStory:
      'A physician-creator launches a branded program — baseline labs, their own protocol, a health score, and clinician-led hormone and weight care — with our team running operations behind it.',
    example: { name: 'Dr. Rivera Method', primary: '#be185d', tint: '#fbe7f0', mark: 'R' },
    faqs: [
      {
        q: 'Do I need a technical team?',
        a: 'No. On the Managed plan our team builds, launches, and operates it with you.',
      },
    ],
  },
  {
    slug: 'wellness-brands',
    audience: 'Supplement & wellness brands',
    icon: 'leaf',
    navDesc: 'Test, personalize, retest — evidence behind every product.',
    metaTitle: 'For supplement & wellness brands — test, personalize, retest',
    metaDescription:
      'Put evidence behind your products: labs, personalized protocols that recommend your products, retests that show progress, and clinician-led programs when members need more.',
    headline: 'Put evidence behind every product you sell.',
    lead: 'Supplement and wellness brands can launch a test → personalize → retest experience: members get labs and a personalized protocol that recommends your products, see results on retest, and access clinician-led care when they need more.',
    why: [
      {
        icon: 'microscope',
        title: 'Personalization with proof',
        body: 'Recommendations grounded in each member’s biomarkers — not a quiz.',
      },
      {
        icon: 'trending-up',
        title: 'Progress members can see',
        body: 'Retests show what changed, giving members a reason to stay on their routine.',
      },
      {
        icon: 'pill',
        title: 'Rx adjacency',
        body: 'Clinician-led programs extend your brand into care when a member needs more than a supplement.',
      },
    ],
    modules: ['labs', 'protocols', 'insights', 'member-app'],
    programs: ['labs', 'peptides', 'weight-loss', 'hair-skin'],
    launchStory:
      'A supplement brand offers an at-home nutrient and hormone panel, generates protocols that recommend its products, and retests every 90 days to show members their progress.',
    example: { name: 'Verdant Labs', primary: '#15803d', tint: '#e3f3e8', mark: 'V' },
    faqs: [
      {
        q: 'Can protocols recommend our products?',
        a: 'Yes. Link recommendations to your catalog; clinical recommendations stay with licensed clinicians.',
      },
    ],
  },
  {
    slug: 'pharmacies',
    audience: 'Pharmacies & compounders',
    icon: 'pill',
    navDesc: 'From fulfillment to the patient relationship.',
    metaTitle: 'For pharmacies & compounders — launch a patient-facing brand',
    metaDescription:
      'Move up the value chain from fulfillment to the patient relationship: launch a branded digital health experience with intake, clinicians, labs, and refills on top of your pharmacy.',
    headline: 'You fill the prescriptions. Own the relationship, too.',
    lead: 'Pharmacies and compounders can launch their own patient-facing health brand — intake, licensed clinicians, labs, protocols, and refills — on top of the fulfillment they already do best.',
    why: [
      {
        icon: 'arrow-up-right',
        title: 'Move up the value chain',
        body: 'Capture the patient relationship, not just the fill.',
      },
      {
        icon: 'repeat',
        title: 'Refills you can count on',
        body: 'Protocols and retests drive adherence and recurring fills.',
      },
      {
        icon: 'shield-check',
        title: 'Compliance built in',
        body: 'Clinician network, governed intake, and LegitScript support come with the platform.',
      },
    ],
    modules: ['intake', 'clinical-care', 'labs', 'member-app', 'payments'],
    programs: ['weight-loss', 'trt', 'hrt', 'peptides'],
    launchStory:
      'A 503A compounder launches a branded weight-loss and hormone brand — intake, clinician review, labs, and refills — fulfilling its own prescriptions.',
    example: { name: 'Keystone Rx', primary: '#7c3aed', tint: '#f0e9fd', mark: 'K', screen: 'trt' },
    faqs: [
      {
        q: 'Can we fulfill our own prescriptions?',
        a: 'Yes — your pharmacy can be the fulfillment partner for your brand, alongside the network where you need coverage.',
      },
    ],
  },
];

export const solutionBySlug = (slug: string) => SOLUTIONS.find((s) => s.slug === slug);

/** Illustrative TRT brand for the hero rotation (men's health track). */
export const TRT_MOCK_BRAND: MockBrandTheme = {
  name: 'Ironwood Men’s Health',
  primary: '#334155',
  tint: '#e9edf2',
  mark: 'I',
  screen: 'trt',
};

/**
 * The home hero rotation: four illustrative brands, four tracks, one toolset —
 * health & fitness, GLP-1 weight loss, peptides, and TRT.
 */
export const HERO_MOCK_BRANDS: MockBrandTheme[] = [
  SOLUTIONS[1].example, // Peak Fitness Health — health
  SOLUTIONS[0].example, // Northline Health — glp1
  SOLUTIONS[2].example, // Lumen Longevity — orders (peptides)
  TRT_MOCK_BRAND, // Ironwood Men's Health — trt
];
