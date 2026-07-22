/**
 * Programs — single source of truth for the /programs catalog AND the per-program deep
 * pages (/programs/[slug]). Folded from the legacy White Label MD program menu, revoiced
 * to Purple Label positioning: these are real verticals already running on the engine at
 * scale, that your AGENTS assemble from the same modules — not a done-for-you agency menu.
 * Ownership is explicit (you own the brand, patients, and data; licensed providers handle
 * clinical care). Controlled-substance and compounding wording is flagged for counsel.
 */

export interface ProgramFaq {
  q: string;
  a: string;
}

export interface ProgramJourneyStep {
  step: string;
  title: string;
  body: string;
}

export interface ProgramWhyItWorks {
  /** lucide icon name (no prefix). */
  icon: string;
  title: string;
  body: string;
}

export interface Program {
  slug: string;
  /** Display + nav label. */
  title: string;
  /** Short description for the mega-menu and catalog card. */
  cardBody: string;
  navDesc: string;
  /** lucide icon name (no prefix). */
  icon: string;
  flagship?: boolean;
  eyebrow: string;
  headline: string;
  intro: string;
  /**
   * The business case for the category (folded from the WLMD per-program pages):
   * why this vertical works for an operator — retention, demand, unit economics.
   */
  whyItWorks?: ProgramWhyItWorks[];
  /** "What this program can offer" bullets. */
  offerings: string[];
  faqs: ProgramFaq[];
  /** Per-program patient journey; pages fall back to DEFAULT_JOURNEY when unset. */
  journey?: ProgramJourneyStep[];
}

/** Trust line shown under every program hero. */
export const PROGRAM_TRUST = [
  'LegitScript-certified',
  'HIPAA-compliant',
  'Licensed providers in all 50 states',
];

/**
 * The standard Rx patient journey, rendered on every program page (WLMD showed this
 * flow on each of its program pages — it earns its keep as proof the pipeline is real).
 * Programs with a different shape (e.g. labs) override via `journey`.
 */
export const DEFAULT_JOURNEY: ProgramJourneyStep[] = [
  {
    step: '01',
    title: 'Intake & eligibility',
    body: 'The patient completes a branded intake and eligibility check.',
  },
  {
    step: '02',
    title: 'Provider consult',
    body: 'A licensed provider reviews — async or sync — and confirms the plan.',
  },
  {
    step: '03',
    title: 'Prescription',
    body: 'When clinically appropriate, the provider prescribes.',
  },
  {
    step: '04',
    title: 'Delivery',
    body: "Medication ships discreetly to the patient's door.",
  },
  {
    step: '05',
    title: 'Ongoing care & refills',
    body: 'Check-ins, titration, and automatic refills keep patients on track.',
  },
];

const OWNERSHIP_FAQ: ProgramFaq = {
  q: 'Do I own the brand and the patients?',
  a: 'Always. The brand, the patients, and the data are yours. The platform runs the back end; the customer relationship stays with you.',
};

const DOCTOR_FAQ: ProgramFaq = {
  q: 'Am I the doctor?',
  a: 'No. Licensed providers in the network handle clinical care and prescribing across all 50 states. You own the brand; they handle the medicine.',
};

export const PROGRAMS_DATA: Program[] = [
  {
    slug: 'weight-loss',
    title: 'Weight loss',
    cardBody:
      'GLP-1 and metabolic care — the fastest-growing category in telehealth. Recurring by design, with high retention. Our flagship.',
    navDesc: 'GLP-1 & metabolic care — the flagship.',
    icon: 'activity',
    flagship: true,
    eyebrow: 'Flagship · Weight loss',
    headline: 'Launch a GLP-1 weight-loss program under your brand.',
    intro:
      'The fastest-growing category in telehealth — GLP-1 and metabolic care, recurring by design. Your agents stand up the full program on the same compliant pipeline that already fills prescriptions at national scale.',
    whyItWorks: [
      {
        icon: 'trending-up',
        title: 'The biggest opportunity in consumer health',
        body: 'Demand for weight-loss treatment is surging, and patients want a trusted, branded experience.',
      },
      {
        icon: 'refresh-cw',
        title: 'Recurring by design',
        body: 'Titration, check-ins, and refills make weight loss a subscription business with high retention.',
      },
      {
        icon: 'activity',
        title: 'The flagship demand driver',
        body: 'The category pulling patients into telehealth — and into every adjacent program on your menu.',
      },
    ],
    offerings: [
      'GLP-1 therapies such as semaglutide and tirzepatide — and, where permitted by law and clinically appropriate, compounded formulations prepared by licensed 503A/503B pharmacies',
      'Eligibility checks, medical intake, and dosing / titration workflows',
      'Subscription billing, refills, and patient management under your brand',
      'Pass-through pricing on medication and fulfillment — zero markup',
      'Baseline and monitoring labs, ordered and resulted inside the journey',
    ],
    faqs: [
      {
        q: 'Which medications are prescribed?',
        a: 'Licensed providers prescribe GLP-1 therapies such as semaglutide and tirzepatide — and, where permitted by law and clinically appropriate, compounded formulations prepared by licensed 503A/503B pharmacies.',
      },
      DOCTOR_FAQ,
      {
        q: 'Do you mark up the medication?',
        a: 'No — pass-through pricing. Your cost is our cost, so the margin stays with you.',
      },
      {
        q: 'Is offering weight-loss treatment compliant?',
        a: 'On the same audited foundation — LegitScript-certified infrastructure, licensed prescribers, and 50-state coverage. Prescribing follows clinical eligibility and applicable state and federal rules.',
      },
      OWNERSHIP_FAQ,
    ],
  },
  {
    slug: 'mens-health',
    title: "Men's health",
    cardBody: 'ED, testosterone, hair, and general wellness — one branded program, one pipeline.',
    navDesc: 'ED, testosterone, hair, and wellness.',
    icon: 'user',
    eyebrow: "Men's health",
    headline: "Launch a men's health brand your agents run.",
    intro:
      'Sexual health, hormones, hair, and wellness under one branded program — licensed providers, pharmacy fulfillment, and compliance on the same pipeline your agents call directly.',
    whyItWorks: [
      {
        icon: 'trending-up',
        title: 'Surging demand',
        body: 'Men are turning to discreet, convenient online care for ED, hormones, and wellness in record numbers.',
      },
      {
        icon: 'refresh-cw',
        title: 'Recurring by design',
        body: 'Subscriptions and automatic refills create predictable, compounding revenue — not one-off sales.',
      },
      {
        icon: 'circle-dollar-sign',
        title: 'High lifetime value',
        body: "Men's health patients often add services over time, raising retention and lifetime value.",
      },
    ],
    offerings: [
      'ED and sexual-health treatments',
      'Testosterone and hormone optimization',
      'Hair-loss and skin treatments',
      'General wellness and longevity',
    ],
    faqs: [
      {
        q: 'Which treatments can I offer?',
        a: 'Anything legal and compliant — from ED and testosterone therapy to hair, skin, and wellness. Your agents compose the catalog from the same modules.',
      },
      DOCTOR_FAQ,
      OWNERSHIP_FAQ,
      {
        q: 'How fast can I launch?',
        a: 'Your branded storefront can be standing up in days, on infrastructure that has already cleared HIPAA, pharmacy-board, and payment-processor audits.',
      },
    ],
  },
  {
    slug: 'womens-health',
    title: "Women's health",
    cardBody: 'Hormones, wellness, and longevity care, fully branded under your name.',
    navDesc: 'Hormones, wellness, and longevity.',
    icon: 'heart-pulse',
    eyebrow: "Women's health",
    headline: "Launch a women's health brand your agents run.",
    intro:
      'Hormones, wellness, and longevity care, fully branded — on the same compliant pipeline that already runs at national scale.',
    whyItWorks: [
      {
        icon: 'users',
        title: 'Broad, loyal market',
        body: 'Women drive the majority of healthcare decisions and stay with brands they trust.',
      },
      {
        icon: 'refresh-cw',
        title: 'Multiple recurring lines',
        body: 'Hormones, weight, and skincare each run as recurring subscriptions on one platform.',
      },
      {
        icon: 'blocks',
        title: 'Cross-sell built in',
        body: 'Add labs and adjacent programs to deepen care and lift lifetime value.',
      },
    ],
    offerings: [
      'Hormone therapy and menopause support',
      'Weight management programs',
      'Hair, skin, and dermatology',
      'Sexual wellness and general health',
    ],
    faqs: [
      {
        q: "What can a women's health brand include?",
        a: 'Hormone therapy and menopause support, weight management, hair, skin, and dermatology, and sexual wellness — anything legal and compliant. Your agents shape the catalog from the same modules.',
      },
      DOCTOR_FAQ,
      OWNERSHIP_FAQ,
      {
        q: 'Is it compliant?',
        a: 'Every program runs on a LegitScript-certified, HIPAA-compliant foundation with licensed prescribers and 50-state coverage. Prescribing follows clinical eligibility and applicable rules.',
      },
    ],
  },
  {
    slug: 'trt',
    title: 'TRT',
    cardBody: 'Testosterone therapy with eligibility labs, dosing, and titration built in.',
    navDesc: 'Testosterone therapy with labs built in.',
    icon: 'dumbbell',
    eyebrow: 'TRT',
    headline: 'Launch a TRT program your agents run.',
    intro:
      'Testosterone therapy with eligibility labs, dosing, and titration built in — on a compliant pipeline with licensed prescribers in all 50 states.',
    whyItWorks: [
      {
        icon: 'refresh-cw',
        title: 'High retention',
        body: 'TRT is ongoing care — patients stay engaged and subscribed for the long term.',
      },
      {
        icon: 'microscope',
        title: 'Labs-driven trust',
        body: 'Integrated baseline and monitoring labs build credibility and clinical safety.',
      },
      {
        icon: 'circle-dollar-sign',
        title: 'Recurring revenue',
        body: 'Monthly dosing and refills make for predictable, compounding revenue.',
      },
    ],
    offerings: [
      'Provider-evaluated testosterone therapy',
      'Integrated baseline and monitoring labs',
      'Pharmacy fulfillment at pass-through pricing',
      'Recurring, subscription-based care',
    ],
    faqs: [
      DOCTOR_FAQ,
      {
        q: 'Is TRT compliant to offer?',
        a: 'Testosterone is a controlled substance, so prescribing follows clinical eligibility and applicable state and federal controlled-substance rules. Licensed providers make all clinical decisions on a LegitScript-certified foundation.',
      },
      OWNERSHIP_FAQ,
      {
        q: 'Are labs included?',
        a: 'Yes — baseline and monitoring labs are integrated into the program, ordered and resulted inside the branded journey.',
      },
    ],
  },
  {
    slug: 'hrt',
    title: 'HRT',
    cardBody: 'Hormone replacement therapy with monitoring panels and automatic refills.',
    navDesc: 'Hormone therapy with monitoring.',
    icon: 'droplets',
    eyebrow: 'HRT',
    headline: 'Launch an HRT program your agents run.',
    intro:
      'Hormone replacement therapy with monitoring panels and automatic refills — branded, recurring, and compliant from the first patient.',
    whyItWorks: [
      {
        icon: 'megaphone',
        title: 'Growing awareness',
        body: 'Menopause and hormone optimization are mainstream conversations driving real demand.',
      },
      {
        icon: 'refresh-cw',
        title: 'Recurring by nature',
        body: 'Ongoing dosing, labs, and refills make HRT a durable subscription business.',
      },
      {
        icon: 'users',
        title: 'Men and women',
        body: 'One platform serves hormone therapy across both audiences, widening your market.',
      },
    ],
    offerings: [
      'Provider-guided hormone optimization',
      'Integrated lab testing and monitoring',
      'Standard and compounded formulations',
      'Ongoing care and refills',
    ],
    faqs: [
      DOCTOR_FAQ,
      OWNERSHIP_FAQ,
      {
        q: 'Is it compliant?',
        a: 'Programs run on a LegitScript-certified, HIPAA-compliant foundation. Prescribing follows clinical eligibility and applicable state and federal rules; licensed providers manage all clinical care.',
      },
      {
        q: 'Who is HRT for?',
        a: 'Adults seeking provider-guided hormone optimization, evaluated for eligibility by licensed providers. Clinical decisions and prescribing stay with the provider network.',
      },
    ],
  },
  {
    slug: 'ed',
    title: 'ED',
    cardBody: 'Erectile-dysfunction treatment — discreet, recurring, and compliant.',
    navDesc: 'Discreet, recurring treatment.',
    icon: 'heart',
    eyebrow: 'ED',
    headline: 'Launch an ED program your agents run.',
    intro:
      'Discreet, recurring erectile-dysfunction treatment — licensed providers, direct-to-door fulfillment, and compliance on one pipeline.',
    whyItWorks: [
      {
        icon: 'trending-up',
        title: 'Proven, high-intent demand',
        body: 'ED is a large, search-driven market with patients ready to start treatment.',
      },
      {
        icon: 'lock',
        title: 'Discreet and recurring',
        body: 'Private, subscription-based care keeps patients engaged and refilling.',
      },
      {
        icon: 'blocks',
        title: 'Easy to cross-sell',
        body: 'ED patients frequently add hair, TRT, and wellness — raising lifetime value.',
      },
    ],
    offerings: [
      'Provider-evaluated ED treatments',
      'Discreet pharmacy fulfillment and delivery',
      'Subscription and refill management',
      'Branded, compliant patient experience',
    ],
    faqs: [
      DOCTOR_FAQ,
      {
        q: 'Do you mark up the medication?',
        a: 'No — pass-through pricing. Your cost is our cost, so the margin stays with you.',
      },
      OWNERSHIP_FAQ,
      {
        q: 'Is it discreet for patients?',
        a: 'Yes — discreet, branded fulfillment ships direct to the patient. The entire experience runs under your brand on a LegitScript-certified, HIPAA-compliant foundation.',
      },
    ],
  },
  {
    slug: 'hair-skin',
    title: 'Hair & skin',
    cardBody: 'Hair-loss and dermatology programs on compounded and commercial supply.',
    navDesc: 'Hair-loss and dermatology.',
    icon: 'scissors',
    eyebrow: 'Hair & skin',
    headline: 'Launch a hair & skin brand your agents run.',
    intro:
      'Hair-loss and dermatology programs on compounded and commercial supply — branded and recurring on a compliant pipeline.',
    whyItWorks: [
      {
        icon: 'users',
        title: 'Everyday, mass-market demand',
        body: 'Hair loss and skincare appeal to a broad audience across ages and genders.',
      },
      {
        icon: 'refresh-cw',
        title: 'Sticky subscriptions',
        body: 'Topicals and orals are used continuously, driving long retention.',
      },
      {
        icon: 'circle-dollar-sign',
        title: 'Strong margins',
        body: 'Pass-through pricing on medications keeps healthy margins with your brand.',
      },
    ],
    offerings: [
      'Hair-loss treatments, oral and topical',
      'Dermatology and skincare',
      'Provider evaluation and prescribing',
      'Subscription fulfillment and refills',
    ],
    faqs: [
      {
        q: 'Which treatments can I offer?',
        a: 'Hair-loss and dermatology protocols on compounded and commercial supply — anything legal and compliant. Your agents shape the catalog.',
      },
      DOCTOR_FAQ,
      OWNERSHIP_FAQ,
    ],
  },
  {
    slug: 'peptides',
    title: 'Peptides',
    cardBody: 'Recovery and longevity protocols on compliant, compounded supply.',
    navDesc: 'Recovery and longevity protocols.',
    icon: 'flask-conical',
    eyebrow: 'Peptides',
    headline: 'Launch a peptides program your agents run.',
    intro:
      'Recovery and longevity protocols on compounded supply — branded and recurring, with the compliance qualifiers built in.',
    whyItWorks: [
      {
        icon: 'rocket',
        title: 'Fast-emerging category',
        body: 'Recovery and longevity peptides are a rising, high-interest space with room to lead.',
      },
      {
        icon: 'heart',
        title: 'Engaged audience',
        body: 'Performance- and longevity-minded patients are loyal and proactive about care.',
      },
      {
        icon: 'refresh-cw',
        title: 'Recurring protocols',
        body: 'Ongoing protocols, monitoring, and refills support durable recurring revenue.',
      },
    ],
    offerings: [
      'Provider-evaluated peptide protocols',
      'Compounding-pharmacy sourcing',
      'Recovery, performance, and longevity focus',
      'Ongoing monitoring and refills',
    ],
    faqs: [
      {
        q: 'Are peptide protocols compliant?',
        a: 'Availability depends on clinical eligibility and applicable FDA, state, and compounding regulations. Programs are built with our 503A/503B compounding partners and licensed providers; your agents compose only what is permissible.',
      },
      DOCTOR_FAQ,
      OWNERSHIP_FAQ,
    ],
  },
  {
    slug: 'labs',
    title: 'Labs & diagnostics',
    cardBody: 'Baseline and monitoring panels, ordered and resulted inside the patient journey.',
    navDesc: 'Panels ordered and resulted in-journey.',
    icon: 'microscope',
    eyebrow: 'Labs & diagnostics',
    headline: 'Add integrated labs and diagnostics.',
    intro:
      'Order, track, and act on lab work inside the same branded journey — from baseline panels to ongoing monitoring, resulted back into your platform.',
    whyItWorks: [
      {
        icon: 'blocks',
        title: 'Attaches to everything',
        body: 'Labs pair with TRT, HRT, weight, and wellness — multiplying revenue across programs.',
      },
      {
        icon: 'refresh-cw',
        title: 'Recurring monitoring',
        body: 'Baseline plus ongoing panels create repeat, recurring diagnostics revenue.',
      },
      {
        icon: 'badge-check',
        title: 'Builds trust',
        body: 'Data-driven care signals credibility and improves patient outcomes and retention.',
      },
    ],
    offerings: [
      'Nationwide lab network integration',
      'At-home collection kits and in-person draw sites',
      'Baseline and monitoring panels',
      'Results inside your branded platform',
      'Provider review and follow-up',
    ],
    journey: [
      {
        step: '01',
        title: 'Order',
        body: 'A panel is ordered inside the branded journey — standalone or as part of a program.',
      },
      {
        step: '02',
        title: 'Collect',
        body: 'The patient uses an at-home kit or visits a nearby draw site.',
      },
      {
        step: '03',
        title: 'Result',
        body: 'Results flow back into your platform, structured and chart-ready.',
      },
      {
        step: '04',
        title: 'Provider review',
        body: 'A licensed provider reviews and signs off on every result.',
      },
      {
        step: '05',
        title: 'Act',
        body: 'Results trigger titration, follow-up, or a new care plan — labs drive the journey.',
      },
    ],
    faqs: [
      {
        q: 'Do labs run under my brand?',
        a: 'Yes. Ordering, results, and follow-up all happen inside your branded patient journey on one platform.',
      },
      {
        q: 'Can labs drive care?',
        a: 'Results flow back into the platform and can trigger titration, follow-up, or provider review — diagnostics are part of the journey, not a separate silo.',
      },
      OWNERSHIP_FAQ,
    ],
  },
];

/** Lookup helper for the dynamic route. */
export function getProgram(slug: string): Program | undefined {
  return PROGRAMS_DATA.find((p) => p.slug === slug);
}
