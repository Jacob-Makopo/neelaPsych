import {
  EMAIL,
  ADDRESS,
  CONTACTS,
  ALL_PHONE_NUMBERS,
  TEAM,
  SERVICES,
} from "@/components/site-data";

/** UPDATE: set this to the live production domain once deployed. */
export const SITE_URL = "https://neelapsychologicalservices.co.za";
export const SITE_NAME = "Neela Psychological Services";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

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
    name: c.name,
    availableLanguage: ["English", "Afrikaans"],
    areaServed: "ZA",
  })),
  openingHours: "Mo-Fr 08:00-17:00",
  medicalSpecialty: "Psychiatric",
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
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-ZA",
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    ...items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: it.name,
      item: it.path,
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
