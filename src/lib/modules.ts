/**
 * Platform modules — single source for the Platform mega-menu, the /platform overview, the
 * home "four planes" section, and every /platform/[slug] page (Nov 2026 refresh, see
 * the Nov 2026 refresh plan §2.2).
 *
 * The product system is the Health Loop: KNOW the member (context) → UNDERSTAND them
 * (intelligence) → ACT (care) → track and retest → KNOW again — all on an OWN IT layer
 * (brand, money, operations, privacy, developer platform) that makes it white-label.
 *
 * Copy rules (Gregg, Nov 2026): future
 * state, marketing altitude — no vendor / pharmacy / lab names, no status chips, no invented
 * metrics. CPOM line intact: licensed clinicians make every clinical decision.
 */

export type PlaneId = 'know' | 'understand' | 'act' | 'own';

export interface Plane {
  id: PlaneId;
  label: string;
  /** Short verb-led name used in the loop diagram. */
  verb: string;
  icon: string;
  summary: string;
}

export const PLANES: Plane[] = [
  {
    id: 'know',
    label: 'Know',
    verb: 'Know every member',
    icon: 'scan-heart',
    summary:
      'Labs, wearables, intake, and history flow into one longitudinal record — the full context behind every decision.',
  },
  {
    id: 'understand',
    label: 'Understand',
    verb: 'Understand what it means',
    icon: 'brain',
    summary:
      'Biomarker insights, a health score with your name on it, and clinician-reviewed protocols that turn data into a plan.',
  },
  {
    id: 'act',
    label: 'Act',
    verb: 'Act on it',
    icon: 'stethoscope',
    summary:
      'Licensed clinicians, prescriptions, pharmacy fulfillment, and a branded member app — care that actually happens.',
  },
  {
    id: 'own',
    label: 'Own it',
    verb: 'Own the whole experience',
    icon: 'tag',
    summary:
      'Your brand, domains, payments, operations, and privacy controls underneath it all. The member is yours.',
  },
];

export interface ModuleFeature {
  icon: string;
  title: string;
  body: string;
}

export interface ModuleFaq {
  q: string;
  a: string;
}

export interface PlatformModule {
  slug: string;
  plane: PlaneId;
  /** Nav + card title. */
  name: string;
  icon: string;
  /** One line for the mega-menu. */
  navDesc: string;
  /** Two lines for overview cards. */
  cardBody: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  /** What the member sees — the consumer-centric view. */
  memberView: { title: string; points: string[] };
  /** What the brand controls — the white-label view. */
  brandControls: { title: string; points: string[] };
  features: ModuleFeature[];
  /** Slugs of adjacent modules in the loop. */
  connects: string[];
  faqs: ModuleFaq[];
}

export const MODULES: PlatformModule[] = [
  // ───────────────────────────── KNOW ─────────────────────────────
  {
    slug: 'labs',
    plane: 'know',
    name: 'Labs & Diagnostics',
    icon: 'microscope',
    navDesc: 'Physician-ordered panels — at home or at a draw site.',
    cardBody:
      'Comprehensive biomarker panels, physician-ordered and resulted straight into the member record.',
    metaTitle: 'Labs & Diagnostics — white-label lab testing for your brand',
    metaDescription:
      'Offer comprehensive, physician-ordered lab panels under your brand — at-home collection or nationwide draw sites, resulted directly into each member’s health record.',
    headline: 'Lab testing your members order from you.',
    lead: 'Comprehensive biomarker panels — baseline, follow-up, and condition-specific — ordered by licensed clinicians, collected at home or at a nearby draw site, and resulted straight into the member’s record under your brand.',
    memberView: {
      title: 'What your members get',
      points: [
        'A baseline panel that covers heart, metabolic, hormone, thyroid, nutrient, and inflammation markers',
        'At-home collection kits or a walk-in draw site near them',
        'Results in their branded member app — explained in plain language',
        'Follow-up and add-on tests whenever their protocol calls for it',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Which panels you offer, how they’re bundled, and what they cost',
        'At-home, draw-site, or both',
        'Retest cadence for each program',
        'How results feed your protocols and care programs',
      ],
    },
    features: [
      {
        icon: 'clipboard-check',
        title: 'Physician-ordered, end to end',
        body: 'A licensed clinician orders every requisition and reviews every result. Your brand never practices medicine — it delivers the experience.',
      },
      {
        icon: 'map-pin',
        title: 'At home or nearby',
        body: 'Mail-out kits and a nationwide network of draw sites, so members test the way that suits them.',
      },
      {
        icon: 'layers',
        title: 'Panels that fit your programs',
        body: 'From a broad baseline to targeted panels for hormones, metabolic health, fertility, and longevity — composed for each program you run.',
      },
      {
        icon: 'database',
        title: 'Results become data',
        body: 'Every result lands in the longitudinal record as structured data — ready for insights, scoring, protocols, and eligibility.',
      },
      {
        icon: 'bell-ring',
        title: 'Critical-value escalation',
        body: 'Out-of-range results route to a clinician for follow-up, so no important finding sits unread.',
      },
      {
        icon: 'refresh-cw',
        title: 'Built for retesting',
        body: 'Scheduled follow-up panels show members their progress — the moment that keeps them coming back to your brand.',
      },
    ],
    connects: ['health-record', 'insights', 'protocols', 'clinical-care'],
    faqs: [
      {
        q: 'Who orders the labs?',
        a: 'A licensed clinician in the provider network orders every panel and reviews every result. Your brand offers the experience; clinicians direct the care.',
      },
      {
        q: 'Can members test at home?',
        a: 'Yes. Offer at-home collection, nationwide draw sites, or both — configured per program.',
      },
      {
        q: 'Do lab results drive prescribing?',
        a: 'They can. Programs like TRT and HRT are lab-native: results flow into the eligibility rules and the clinician’s review, so care is prescribed from data, not just a questionnaire.',
      },
    ],
  },
  {
    slug: 'wearables',
    plane: 'know',
    name: 'Wearables & Devices',
    icon: 'watch',
    navDesc: 'Rings, watches, CGMs, and scales in one clinical view.',
    cardBody:
      'Members connect the devices they already wear; sleep, activity, glucose, and weight stream into their record.',
    metaTitle: 'Wearables & Devices — connected health data under your brand',
    metaDescription:
      'Let members connect rings, watches, CGMs, and smart scales. Sleep, activity, heart, glucose, and weight data stream into one longitudinal record your programs act on.',
    headline: 'Every device your members wear, in one record.',
    lead: 'Members connect the rings, watches, glucose monitors, and scales they already own. Sleep, activity, heart, glucose, and weight data stream continuously into the same record their labs and care live in — so your programs see the whole picture between visits.',
    memberView: {
      title: 'What your members get',
      points: [
        'One-tap connection for the devices they already use',
        'Their sleep, activity, and recovery trends next to their lab results',
        'Progress they can see — weight, glucose, and resting heart rate over time',
        'Nudges and check-ins that respond to their real data',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Which devices and data types you offer',
        'Which metrics appear in your member app and protocols',
        'Thresholds that trigger check-ins or clinician review',
        'Device programs bundled with your care programs',
      ],
    },
    features: [
      {
        icon: 'plug-zap',
        title: 'Broad device coverage',
        body: 'Rings, watches, fitness trackers, continuous glucose monitors, smart scales, and blood-pressure cuffs — through one integration.',
      },
      {
        icon: 'activity',
        title: 'Normalized metrics',
        body: 'Sleep, HRV, steps, heart rate, glucose, and weight arrive as consistent, comparable data — whatever device they came from.',
      },
      {
        icon: 'line-chart',
        title: 'Trends, not snapshots',
        body: 'Continuous data fills the gaps between labs and visits, so protocols adapt to how members are actually doing.',
      },
      {
        icon: 'stethoscope',
        title: 'Clinically useful',
        body: 'Weight and glucose trends inform titration and follow-up, surfacing to clinicians when it matters.',
      },
    ],
    connects: ['health-record', 'insights', 'protocols'],
    faqs: [
      {
        q: 'Which devices are supported?',
        a: 'The major ring, watch, tracker, CGM, scale, and blood-pressure ecosystems. You choose which to offer your members.',
      },
      {
        q: 'Where does the data go?',
        a: 'Into each member’s longitudinal record — encrypted per member and owned by your brand, never resold.',
      },
    ],
  },
  {
    slug: 'intake',
    plane: 'know',
    name: 'Smart Intake',
    icon: 'clipboard-list',
    navDesc: 'Branded screening on a physician-governed medical core.',
    cardBody:
      'Your brand shapes the questions; a physician-locked medical questionnaire keeps every answer clinically sound.',
    metaTitle: 'Smart Intake — branded, clinically governed patient intake',
    metaDescription:
      'Adaptive, one-question-at-a-time intake: your brand designs the screening experience while a physician-governed medical questionnaire, identity verification, and eligibility rules keep it safe.',
    headline: 'Intake that feels like your brand and thinks like a clinician.',
    lead: 'An adaptive, one-question-at-a-time experience your brand designs — on top of a physician-governed medical questionnaire that marketing can never rewrite. Identity verification, eligibility rules, and answer-once pre-fill are built in.',
    memberView: {
      title: 'What your members get',
      points: [
        'A fast, conversational flow that asks one thing at a time',
        'Answer once — details carry from checkout into intake and back',
        'Photo and video capture when a program needs it',
        'Identity verification in a single, secure step',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Screening and qualification questions, copy, and order',
        'Your own question library — fork, reorder, and publish',
        'Pay-first or questions-first, per program',
        'Theme and voice throughout',
      ],
    },
    features: [
      {
        icon: 'shield-check',
        title: 'A medical core marketing can’t touch',
        body: 'Two layers by design: brands edit screening, clinicians govern the medical questionnaire. Medical content is rejected from brand-authored questions automatically.',
      },
      {
        icon: 'git-branch',
        title: 'Adaptive and server-driven',
        body: 'The platform owns sequence, branching, and completion — so every member sees exactly the next right question, on any front end.',
      },
      {
        icon: 'scale',
        title: 'Rules-as-code eligibility',
        body: 'Versioned eligibility and dose rules evaluate every submission, with state rules applied by default and every decision replayable.',
      },
      {
        icon: 'id-card',
        title: 'Identity built in',
        body: 'Identity verification happens on a hardened, hosted step — your storefront never handles ID images.',
      },
      {
        icon: 'history',
        title: 'Versioned and auditable',
        body: 'Every questionnaire version is pinned to the decisions it produced. Change the flow without reshuffling members already in it.',
      },
      {
        icon: 'trending-down',
        title: 'Drop-off you can see',
        body: 'Abandonment is captured step by step, so you can recover members and improve the flow.',
      },
    ],
    connects: ['health-record', 'clinical-care', 'payments'],
    faqs: [
      {
        q: 'Can we customize the questions?',
        a: 'Yes — screening and qualification questions are yours to write, order, and publish. The medical questionnaire is physician-governed and versioned, so the clinical substance stays sound.',
      },
      {
        q: 'Does intake work with our own website?',
        a: 'Yes. Intake is served by the platform, so it runs on your storefront, an AI-built site, our site kit, or fully headless through the API.',
      },
    ],
  },
  {
    slug: 'health-record',
    plane: 'know',
    name: 'Health Record',
    icon: 'folder-heart',
    navDesc: 'One longitudinal record per member, encrypted per member.',
    cardBody:
      'Labs, devices, intake, prescriptions, and protocols in one timeline — encrypted per member, owned by your brand.',
    metaTitle: 'Health Record — one longitudinal record per member',
    metaDescription:
      'Every lab, device reading, intake answer, prescription, and protocol in one longitudinal record per member — encrypted with per-member keys and owned by your brand.',
    headline: 'One record. Every result. A lifetime of context.',
    lead: 'Labs, wearable data, intake answers, prescriptions, protocols, and messages live in one longitudinal timeline per member — the context that makes every recommendation personal, encrypted with a key that belongs to that member alone.',
    memberView: {
      title: 'What your members get',
      points: [
        'Their whole health story in one place — not scattered across apps',
        'Past lab reports and records they can bring with them',
        'Trends across every test and device, over time',
        'Export or delete their data whenever they choose',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Which data sources each program collects',
        'How the record appears in your member app',
        'Data ownership — it’s your brand’s, never ours to sell',
        'Retention, export, and deletion policies',
      ],
    },
    features: [
      {
        icon: 'key-round',
        title: 'Per-member encryption',
        body: 'Every member’s health data is encrypted with its own key. Erasure is provable: destroy the key and the data is unrecoverable.',
      },
      {
        icon: 'upload',
        title: 'Bring-your-own history',
        body: 'Members can add prior lab reports and records, so the picture starts complete instead of empty.',
      },
      {
        icon: 'git-commit-horizontal',
        title: 'One timeline across modules',
        body: 'Intake, labs, devices, visits, prescriptions, and shipments share one identity and one history — no integration tax between your own modules.',
      },
      {
        icon: 'eye-off',
        title: 'Minimum necessary, by design',
        body: 'Operational events and webhooks carry references, not health data — so PHI stays in the record, where it belongs.',
      },
    ],
    connects: ['labs', 'wearables', 'insights', 'clinical-care'],
    faqs: [
      {
        q: 'Who owns the data?',
        a: 'Your brand and your members. We run the infrastructure; we never sell member data — identified or de-identified.',
      },
      {
        q: 'Can a member delete their data?',
        a: 'Yes. Each member’s data is encrypted with its own key, so erasure is complete and provable.',
      },
    ],
  },

  // ─────────────────────────── UNDERSTAND ───────────────────────────
  {
    slug: 'insights',
    plane: 'understand',
    name: 'Insights & Health Score',
    icon: 'gauge',
    navDesc: 'Biomarker insights, a branded score, and a member AI.',
    cardBody:
      'Plain-language biomarker insights, a health score with your name on it, and an AI guide in your brand’s voice.',
    metaTitle: 'Insights & Health Score — biomarker intelligence under your brand',
    metaDescription:
      'Turn lab and device data into plain-language insights, a branded health score, and an AI health guide in your brand’s voice — clinician-reviewed and guardrailed.',
    headline: 'Turn every result into something members understand.',
    lead: 'Each biomarker is explained in plain language, rolled up into health areas, and summarized in a health score that carries your brand’s name. An AI guide in your brand’s voice answers questions with the member’s full context — and hands off to a clinician when it should.',
    memberView: {
      title: 'What your members get',
      points: [
        'Every marker explained — what it is, where they stand, why it matters',
        'A single score and health-area grades they can watch improve',
        'An AI guide that knows their results and speaks in your voice',
        'A clear handoff to a clinician whenever a question needs one',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'The score’s name, look, and which health areas it covers',
        'Your range philosophy and how results are framed',
        'The AI guide’s persona, tone, and scope',
        'Which insights link to programs, tests, or products',
      ],
    },
    features: [
      {
        icon: 'book-open',
        title: 'A clinical knowledge base',
        body: 'A clinician-reviewed library of biomarkers, ranges, and health areas — the medical knowledge behind every explanation.',
      },
      {
        icon: 'gauge',
        title: 'A score with your name on it',
        body: 'Versioned, explainable scoring recomputed with every new result — branded as yours, not ours.',
      },
      {
        icon: 'message-square-heart',
        title: 'Member AI, guardrailed',
        body: 'Grounded in the member’s own record and the knowledge base, with clinical guardrails, escalation to a clinician, and a full audit trail.',
      },
      {
        icon: 'history',
        title: 'Replayable by design',
        body: 'Scores and insights are versioned like our eligibility rules — every output can be traced to the data and model that produced it.',
      },
    ],
    connects: ['labs', 'wearables', 'protocols', 'member-app'],
    faqs: [
      {
        q: 'Is the AI giving medical advice?',
        a: 'No. The AI guide explains results and the member’s plan within clinical guardrails, and escalates to a licensed clinician for anything that requires medical judgment.',
      },
      {
        q: 'Can we name the score?',
        a: 'Yes — the score, its look, and the health areas it covers are yours to brand.',
      },
    ],
  },
  {
    slug: 'protocols',
    plane: 'understand',
    name: 'Protocols',
    icon: 'list-checks',
    navDesc: 'Clinician-reviewed plans that adapt as results change.',
    cardBody:
      'Personalized, clinician-reviewed protocols — nutrition, activity, supplements, tests, and Rx — that update with new data.',
    metaTitle: 'Protocols — personalized, clinician-reviewed care plans',
    metaDescription:
      'Personalized protocols generated from labs, devices, and goals — reviewed by licensed clinicians, linked to tests, products, and prescriptions, and updated as results change.',
    headline: 'A personal plan for every member — that keeps up with them.',
    lead: 'Protocols turn results into prioritized, time-bound actions: what to do today, what you’re working on, and what to consider next. They’re generated from each member’s data, reviewed by licensed clinicians, and revised automatically as new labs and device data arrive.',
    memberView: {
      title: 'What your members get',
      points: [
        'Clear next steps — today’s actions, current focus, and what’s next',
        'Nutrition, activity, sleep, supplement, and test recommendations',
        'Prescription options when a clinician finds them appropriate',
        'A plan that changes as their results do',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Your protocol library and the philosophy behind it',
        'Which recommendations link to your products, tests, and programs',
        'Review policy and cadence',
        'Voice, format, and how protocols appear in your app',
      ],
    },
    features: [
      {
        icon: 'sparkles',
        title: 'Personalized from data',
        body: 'Built from biomarkers, device trends, intake, and goals — not a generic template.',
      },
      {
        icon: 'user-check',
        title: 'Clinician-reviewed',
        body: 'Safety rules run deterministically; licensed clinicians review and approve before anything clinical reaches a member.',
      },
      {
        icon: 'shopping-bag',
        title: 'Actionable in one tap',
        body: 'Every recommendation can link to a test, a product, or a care program — so the plan and the purchase are the same moment.',
      },
      {
        icon: 'refresh-ccw',
        title: 'Adaptive',
        body: 'New results revise the plan automatically and show members what changed, and why.',
      },
    ],
    connects: ['insights', 'clinical-care', 'pharmacy-fulfillment', 'member-app'],
    faqs: [
      {
        q: 'Can we bring our own protocols?',
        a: 'Yes. Encode your philosophy in your protocol library — our safety rules and clinician review keep it clinically sound.',
      },
      {
        q: 'Do protocols include prescriptions?',
        a: 'They can suggest a care program; a licensed clinician makes every prescribing decision.',
      },
    ],
  },

  // ─────────────────────────────── ACT ───────────────────────────────
  {
    slug: 'clinical-care',
    plane: 'act',
    name: 'Clinical Care & E-Prescribing',
    icon: 'stethoscope',
    navDesc: '50-state licensed clinicians, async and video, e-Rx.',
    cardBody:
      'A 50-state network of licensed clinicians for async review and video visits, with electronic prescribing built in.',
    metaTitle: 'Clinical Care & E-Prescribing — a 50-state licensed network',
    metaDescription:
      'A 50-state network of licensed, board-certified clinicians for async review and video visits, with electronic prescribing — your brand out front, clinicians directing care.',
    headline: 'Licensed clinicians in all 50 states, behind your brand.',
    lead: 'A board-certified, 50-state clinician network reviews intake and labs, holds async and video visits, messages members, and prescribes electronically — under your brand, with every clinical decision made by an independent licensed provider.',
    memberView: {
      title: 'What your members get',
      points: [
        'Fast async review, and video visits when care calls for one',
        'Secure messaging with their care team',
        'Prescriptions informed by their labs and history',
        'Follow-ups, titration, and refills on a schedule that fits them',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Which programs and states you offer',
        'Async, video, or both — per program',
        'Use our network or bring your own providers',
        'How the care team appears in your member app',
      ],
    },
    features: [
      {
        icon: 'badge-check',
        title: 'Credentialed nationwide',
        body: 'Board-certified clinicians licensed in all 50 states, routed by licensure and availability.',
      },
      {
        icon: 'video',
        title: 'Async and video',
        body: 'Most care happens asynchronously; video visits are there when a program or a state requires one.',
      },
      {
        icon: 'file-check',
        title: 'Prescribed from data',
        body: 'Clinicians see intake, labs, device trends, and history together — prescribing from the whole record, not just a questionnaire.',
      },
      {
        icon: 'shield-check',
        title: 'Safety walls',
        body: 'The prescribed medication must match what the member purchased before anything ships, and every qualification produces a locked order only an audited action can change.',
      },
    ],
    connects: ['intake', 'labs', 'protocols', 'pharmacy-fulfillment'],
    faqs: [
      {
        q: 'Am I the doctor?',
        a: 'No. Independent licensed clinicians direct all clinical care and make every prescribing decision. You own the brand and the member relationship.',
      },
      {
        q: 'Can we use our own providers?',
        a: 'Yes. Use the 50-state network, bring your own clinicians, or combine them.',
      },
    ],
  },
  {
    slug: 'pharmacy-fulfillment',
    plane: 'act',
    name: 'Pharmacy & Fulfillment',
    icon: 'pill',
    navDesc: 'Multi-pharmacy 503A/503B network, pass-through pricing.',
    cardBody:
      'A multi-pharmacy 503A/503B network with licensure-aware routing, pass-through pricing, and tracked delivery to all 50 states.',
    metaTitle: 'Pharmacy & Fulfillment — a 503A/503B network at pass-through pricing',
    metaDescription:
      'A multi-pharmacy 503A/503B network with licensure-aware routing, branded packaging, tracked delivery to all 50 states, and medication at pass-through pricing.',
    headline: 'Prescriptions filled, packaged, and delivered — as you.',
    lead: 'A multi-pharmacy 503A/503B network with licensure-aware routing, branded packaging, and tracked delivery to all 50 states — at pass-through pricing, so your cost is our cost.',
    memberView: {
      title: 'What your members get',
      points: [
        'Medication shipped to their door, in your packaging',
        'Tracking from the pharmacy to their mailbox',
        'Refills that arrive on time, automatically',
        'One app for orders, shipments, and questions',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Your formulary and retail pricing',
        'Branded packaging and inserts',
        'Custom formulations with compounding partners',
        'Refill cadence per program',
      ],
    },
    features: [
      {
        icon: 'route',
        title: 'Licensure-aware routing',
        body: 'Every order routes to a pharmacy licensed for the member’s state and stocked for the therapy — with the reason recorded.',
      },
      {
        icon: 'circle-dollar-sign',
        title: 'Pass-through pricing',
        body: 'Network volume pricing passed straight through, zero markup. Keep the margin or pass the savings to members.',
      },
      {
        icon: 'shield-check',
        title: 'Sent once. Exactly once.',
        body: 'One fill is dispatched at most once, a refunded order can never ship, and a backordered line is never billed.',
      },
      {
        icon: 'truck',
        title: 'Tracked to the door',
        body: 'Shipment status flows back into the member app and your webhooks, end to end.',
      },
      {
        icon: 'flask-conical',
        title: 'Every dosage form',
        body: 'Injectables, capsules, troches, creams, gummies, and sprays — plus custom formulations and branded packaging where compliant.',
      },
      {
        icon: 'replace',
        title: 'Add pharmacies without re-integrating',
        body: 'Each pharmacy sits behind one normalized model, so adding or changing a partner never ripples into your storefront.',
      },
    ],
    connects: ['clinical-care', 'payments', 'member-app'],
    faqs: [
      {
        q: 'Which medications can we offer?',
        a: 'GLP-1 weight loss, TRT, HRT, peptides, sexual health, hair and skin, longevity, and more — through 503A and 503B partners, including custom formulations.',
      },
      {
        q: 'Is there a markup on medication?',
        a: 'No. Medication is priced at pass-through — our cost is your cost.',
      },
    ],
  },
  {
    slug: 'member-app',
    plane: 'act',
    name: 'Member App',
    icon: 'smartphone',
    navDesc: 'The branded health home — on your domain.',
    cardBody:
      'Results, score, protocol, orders, messages, and billing in one branded health home on your domain.',
    metaTitle: 'Member App — your brand’s digital health home',
    metaDescription:
      'A branded digital health home on your domain: results, health score, protocol, care team messages, orders, and billing — the consumer health experience, under your brand.',
    headline: 'Your members’ digital health home — with your name on the door.',
    lead: 'Results, score, protocol, care team, orders, refills, and billing in one consumer-grade experience on your own domain. Members open your app to see how they’re doing — not someone else’s.',
    memberView: {
      title: 'What your members get',
      points: [
        'One home for results, score, protocol, and care',
        'Plain-language status for every order — “we’re reviewing your answers”, “shipped”, “refill due”',
        'Plan controls: pause, resume, or change on their own',
        'Notifications when results are ready or a refill is due',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Logo, palette, type, and voice throughout',
        'Your sign-in and member domains',
        'Which modules appear, and in what order',
        'Support email, phone, and help content',
      ],
    },
    features: [
      {
        icon: 'palette',
        title: 'Fully themed',
        body: 'Your brand tokens drive every screen. Members never see ours.',
      },
      {
        icon: 'globe',
        title: 'On your domains',
        body: 'Sign-in and the member app run on your own domains, with certificates managed for you.',
      },
      {
        icon: 'message-circle',
        title: 'Care in the same place',
        body: 'Messages with the care team sit next to the results and plan they’re about.',
      },
      {
        icon: 'credit-card',
        title: 'Self-serve plans',
        body: 'Pause, resume, cancel, update a card, or reorder — without a support ticket.',
      },
    ],
    connects: ['insights', 'protocols', 'pharmacy-fulfillment', 'payments'],
    faqs: [
      {
        q: 'Does the app carry our brand?',
        a: 'Entirely — your logo, colors, voice, and domains. Members experience your brand, never ours.',
      },
      {
        q: 'Can we use our own front end instead?',
        a: 'Yes. Everything the app does is available through the API, so you can build your own experience or extend ours.',
      },
    ],
  },

  // ─────────────────────────────── OWN ───────────────────────────────
  {
    slug: 'payments',
    plane: 'own',
    name: 'Payments & Billing',
    icon: 'credit-card',
    navDesc: 'Checkout, subscriptions, refunds, and payouts.',
    cardBody:
      'Hosted checkout, subscriptions and renewals, refunds, and payouts — engineered so money never gets ahead of care.',
    metaTitle: 'Payments & Billing — healthcare-grade checkout and subscriptions',
    metaDescription:
      'Hosted checkout, subscriptions, renewals, refunds, statements, and payouts built for regulated health commerce — idempotent, auditable, and never ahead of the care.',
    headline: 'Money that moves exactly as care does.',
    lead: 'Hosted checkout, subscriptions with renewals and recovery, staff refunds, statements, and payouts — built for regulated health commerce, where a status never runs ahead of the money and a member is never charged twice.',
    memberView: {
      title: 'What your members get',
      points: [
        'A fast, secure checkout — cards never touch your storefront',
        'Subscriptions that renew on their medication schedule',
        'Promo codes, clear receipts, and self-serve card updates',
        'Refunds handled quickly and cleanly',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Your retail pricing and promotions',
        'Pay-first or questions-first, per program',
        'Use your own merchant account or ours',
        'Statements and payouts on a monthly close',
      ],
    },
    features: [
      {
        icon: 'lock',
        title: 'Hosted, secure checkout',
        body: 'Payment details are collected on a hardened hosted step, keeping your storefront out of card scope.',
      },
      {
        icon: 'repeat',
        title: 'Subscriptions and recovery',
        body: 'Renewals, pause, resume, cancel, and bounded recovery for failed payments that re-checks authorization before it retries.',
      },
      {
        icon: 'shield-check',
        title: 'Never double-charged',
        body: 'Every charge is idempotent. Approved only shows after the payment is actually authorized — “stuck beats double-charged”.',
      },
      {
        icon: 'landmark',
        title: 'Statements and payouts',
        body: 'A monthly close with statements and payouts, so you always know what you earned and why.',
      },
    ],
    connects: ['member-app', 'pharmacy-fulfillment', 'operations'],
    faqs: [
      {
        q: 'Can we use our own merchant account?',
        a: 'Yes — run on your own account or ours, depending on how you launch.',
      },
      {
        q: 'Do you support subscriptions?',
        a: 'Yes: renewals timed to each medication’s supply, pause, resume, cancel, and failed-payment recovery.',
      },
    ],
  },
  {
    slug: 'operations',
    plane: 'own',
    name: 'Operations & Analytics',
    icon: 'layout-dashboard',
    navDesc: 'Your admin console, roles, go-live, and reporting.',
    cardBody:
      'One console for brands, catalog, orders, refunds, roles, and go-live — with reporting on growth and retention.',
    metaTitle: 'Operations & Analytics — run your health brand from one console',
    metaDescription:
      'Run every brand from one console: catalog and pricing, orders and refunds, staff roles, a tracked path to go-live, and reporting on conversion, retention, and revenue.',
    headline: 'Run the whole business from one console.',
    lead: 'Brands, catalog and pricing, orders and refunds, staff roles, and a tracked path from contract to go-live — plus reporting on conversion, retention, and revenue. Your team follows every order without ever opening a member’s health answers.',
    memberView: {
      title: 'What your team gets',
      points: [
        'Every order’s timeline in one view — paid, reviewed, shipped, delivered',
        'Refunds and exceptions handled in a click, fully attributed',
        'A guided go-live with every step, owner, and deadline tracked',
        'Reporting on funnel, retention, and revenue',
      ],
    },
    brandControls: {
      title: 'What you control',
      points: [
        'Multiple brands under one account',
        'Staff roles and access',
        'Catalog, pricing, and what’s ready to sell',
        'Data exports to your own warehouse',
      ],
    },
    features: [
      {
        icon: 'list-checks',
        title: 'Readiness, computed',
        body: 'The platform tells you exactly what still blocks each offering from selling — and keeps live offerings honest automatically.',
      },
      {
        icon: 'rocket',
        title: 'A tracked path to go-live',
        body: 'Agreements, payments, domains, compliance, and certification steps tracked with owners and deadlines.',
      },
      {
        icon: 'users-round',
        title: 'Roles and audited access',
        body: 'Staff roles, invitations, and an audit trail on every sensitive read.',
      },
      {
        icon: 'bar-chart-3',
        title: 'Growth reporting',
        body: 'Conversion, drop-off, retention, and revenue — in the console and as data you can take anywhere.',
      },
    ],
    connects: ['payments', 'member-app', 'intake'],
    faqs: [
      {
        q: 'Can we run multiple brands?',
        a: 'Yes. One account holds many brands, each with its own identity, domains, pricing, and catalog.',
      },
      {
        q: 'Can our team see patient health data?',
        a: 'Operations views are built so staff can follow and resolve orders without opening health answers; clinical data stays with clinicians.',
      },
    ],
  },
];

export const moduleBySlug = (slug: string) => MODULES.find((m) => m.slug === slug);
export const modulesInPlane = (plane: PlaneId) => MODULES.filter((m) => m.plane === plane);

/** Pages outside /platform/[slug] that belong to the Own-it plane in nav and overview. */
export const OWN_EXTRAS = [
  {
    name: 'Privacy & Security',
    href: '/security',
    icon: 'shield-check',
    navDesc: 'Privacy by architecture, under every module.',
    cardBody:
      'Per-member encryption, tenant isolation, PHI-free events, and an audit trail that fails closed.',
  },
  {
    name: 'Developer Platform',
    href: '/developers',
    icon: 'code',
    navDesc: 'Public API, webhooks, and the site kit.',
    cardBody:
      'A contract-first public API, signed webhooks, and a site kit — build any front end on the platform.',
  },
  {
    name: 'LegitScript',
    href: '/legitscript',
    icon: 'badge-check',
    navDesc: 'Enterprise Partner — certification support built in.',
    cardBody: 'As a LegitScript Enterprise Partner, certification support is part of every launch.',
  },
] as const;
