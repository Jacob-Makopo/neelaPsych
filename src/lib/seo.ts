import { EMAIL, CONTACTS, ALL_PHONE_NUMBERS, TEAM, SERVICES, FAQS } from "@/components/site-data";

export const SITE_URL = "https://neelapsychology.co.za";
export const SITE_NAME = "Neela Psychological Services";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const SEO_ALIASES = [
  "neela",
  "niela psychology",
  "niela psychological services",
  "neela psych",
  "neela psychology",
  "neela psychological services",
  "neela therapy",
  "neela therapist",
  "neela counselling",
  "neela psychologists",
  "psychologist pretoria",
  "psychologist lynnwood glen",
  "therapist lynnwood glen",
  "counselling psychologist pretoria",
  "therapy pretoria",
  "counselling psychology lynnwood glen",
  "psychology practice pretoria",
  "couples therapy pretoria",
  "online therapy south africa",
  "student therapy pretoria",
];

const KEYWORDS = [
  ...SEO_ALIASES,
  "anxiety therapy pretoria",
  "depression therapy pretoria",
  "trauma therapy lynnwood glen",
  "grief counselling pretoria",
  "couples counselling lynnwood glen",
  "counselling psychologist south africa",
  "therapy near me mpumalanga",
  "therapy near me cullinan",
];

export const SEO_KEYWORDS = KEYWORDS;

export const absoluteUrl = (path: string) =>
  path.startsWith("http")
    ? path
    : `${SITE_URL}${path === "/" ? path : `/${path.replace(/^\/+/, "")}`}`;

const ADDRESS_OBJECT = {
  "@type": "PostalAddress",
  streetAddress: "72 Alcade Road",
  addressLocality: "Lynnwood Glen, Pretoria",
  addressRegion: "Gauteng",
  addressCountry: "ZA",
};

export const medicalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Neela Psychology", "Neela Psych", "Neela Counselling"],
  slogan: "A space for compassionate, client-centred care",
  url: SITE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  email: EMAIL,
  telephone: ALL_PHONE_NUMBERS,
  contactPoint: CONTACTS.map((c) => ({
    "@type": "ContactPoint",
    contactType: c.whatsappOnly ? "WhatsApp bookings" : "bookings and enquiries",
    telephone: c.tel,
    availableLanguage: ["English", "Afrikaans"],
    areaServed: "ZA",
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  medicalSpecialty: "Psychotherapy",
  knowsAbout: [
    "Counselling psychology",
    "Psychotherapy",
    "Anxiety treatment",
    "Depression treatment",
    "Trauma therapy",
    "Grief and bereavement counselling",
    "Relationship counselling",
    "Couples therapy",
    "Burnout and work stress",
    "Student mental health",
    "Online therapy",
    "Group therapy",
  ],
  keywords: SEO_KEYWORDS,
  address: ADDRESS_OBJECT,
  geo: {
    "@type": "GeoCoordinates",
    latitude: -25.7746,
    longitude: 28.2785,
  },
  areaServed: ["Pretoria", "Gauteng", "South Africa"],
  priceRange: "R200–R1000",
  employee: TEAM.map((t) => ({ "@type": "Person", name: t.name, jobTitle: t.role })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Therapy services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: s.title,
      description: s.body,
      priceCurrency: "ZAR",
      price: s.inPerson
        .replace(/[^0-9 ]/g, "")
        .trim()
        .replace(/\s/g, ""),
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    })),
  },
});

export const webSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: SEO_ALIASES,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-ZA",
});

export const personSchema = () =>
  TEAM.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.name,
    jobTitle: t.role,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    email: EMAIL,
    telephone: t.tel,
    knowsAbout: [
      "Counselling psychology",
      "Psychotherapy",
      "Trauma therapy",
      "Grief and loss",
      "Relationship counselling",
      "Anxiety and depression",
      "Adolescent and young adult mental health",
      "Life transitions",
    ],
    workLocation: {
      "@type": "Place",
      sameAs: `${SITE_URL}/about`,
      address: ADDRESS_OBJECT,
    },
  }));

export const faqPageSchema = (faqs: { q: string; a: string }[] = FAQS) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "Therapy FAQs | Neela Psychological Services",
  inLanguage: "en-ZA",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["summary > span h2"] },
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    ...items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  ],
});

export const SHARE_META = {
  ogImage: OG_IMAGE,
  ogLocale: "en_ZA",
  twitterTitle: "Neela Psychological Services | Therapy in Pretoria",
  twitterDescription:
    "Compassionate, client-centred therapy in Lynnwood Glen, Pretoria, in person or online.",
};
