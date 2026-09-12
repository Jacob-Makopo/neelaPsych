import khetsiwePhoto from "@/assets/khetsiwe.jpg";
import lesediPhoto from "@/assets/lesedi.jpg";

export const EMAIL = "Neelapsychologicalservices@gmail.com";
export const ADDRESS = "72 Alcade Road, Lynnwood Glen, Pretoria";
export const CONTACTS: {
  name: string;
  phone: string;
  tel: string;
  whatsappOnly?: boolean;
}[] = [
  { name: "Khetsiwe", phone: "076 608 1912", tel: "+27766081912" },
  { name: "Lesedi", phone: "072 433 5270", tel: "+27724335270" },
  { name: "WhatsApp", phone: "072 123 4566", tel: "+27721234566", whatsappOnly: true },
  { name: "Reception", phone: "+27 62 497 8206", tel: "+27624978206" },
];

export const ALL_PHONE_NUMBERS = CONTACTS.map((c) => c.tel);

/** Replace with the practice's public Google Calendar appointment link. */
export const CALENDAR_URL = "https://calendar.google.com/calendar/u/0/r";

export const TEAM = [
  {
    name: "Khetsiwe",
    role: "Psychologist",
    photo: khetsiwePhoto,
    phone: "076 608 1912",
    tel: "+27766081912",
    bio: "Works with anxiety, burnout, trauma and grief, with a warm, steady style that makes hard conversations feel possible.",
  },
  {
    name: "Lesedi",
    role: "Psychologist",
    photo: lesediPhoto,
    phone: "072 433 5270",
    tel: "+27724335270",
    bio: "Supports young adults, couples and clients navigating change, with a practical, collaborative approach.",
  },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/booking", label: "Booking" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "individual",
    title: "Standard individual session",
    body: "One-on-one therapy at your pace, working with anxiety, depression, burnout, self-esteem and life transitions.",
    inPerson: "R850",
    online: "R700",
    duration: "50–60 min",
  },
  {
    slug: "couple",
    title: "Standard couple session",
    body: "Space for two people to be heard, understand recurring patterns and rebuild connection and communication.",
    inPerson: "R1 000",
    online: "R850",
    duration: "60 min",
  },
  {
    slug: "student",
    title: "Student session",
    body: "Reduced-fee individual therapy for registered students facing study pressure, anxiety and adjustment.",
    inPerson: "R650",
    online: "R550",
    duration: "50 min",
  },
  {
    slug: "group",
    title: "Group sessions",
    body: "Small facilitated groups on emotional regulation, grief and adjustment — affordable, shared support.",
    inPerson: "R200 pp",
    online: "R200 pp",
    duration: "90 min · minimum 5 people",
  },
];

export const FOCUS_AREAS = [
  "Anxiety & panic",
  "Depression & low mood",
  "Burnout & work stress",
  "Trauma",
  "Grief & bereavement",
  "Relationship difficulties",
  "Self-esteem & identity",
  "Life adjustment & change",
];

export const GROUPS = [
  {
    title: "Emotional regulation",
    body: "Practical, body-aware tools for noticing, naming and settling strong feelings before they take over.",
  },
  {
    title: "Grief",
    body: "A held space to speak about loss alongside others who understand, without pressure to move on.",
  },
  {
    title: "Adjustment",
    body: "Support through change — new roles, relocation, diagnosis, separation — while you find your footing.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Where is Neela Psychological Services based?",
    a: "We are at 72 Alcade Road, Lynnwood Glen, Pretoria, Gauteng, with easy access from Lynnwood, Menlo Park, Faerie Glen and the wider Pretoria east area. Online sessions are available anywhere in South Africa.",
  },
  {
    q: "How much does a therapy session cost in Pretoria?",
    a: "A standard individual session is R850 in person and R700 online. Couples are R1 000 in person and R850 online, students pay R650 in person and R550 online, and group sessions are R200 per person.",
  },
  {
    q: "Do you offer online therapy?",
    a: "Yes. Every service is available as a secure video session, at a lower fee than the in-person rate, which suits clients outside Pretoria or with tight schedules.",
  },
  {
    q: "How do I book a first appointment?",
    a: "Use the booking page to send a request, WhatsApp us on 072 123 4566, or call 076 608 1912, 072 433 5270 or +27 62 497 8206. We reply with available times and confirm your slot.",
  },
  {
    q: "How long is a therapy session?",
    a: "Individual sessions run 50 to 60 minutes, couple sessions 60 minutes, and group sessions 90 minutes.",
  },
  {
    q: "Can I claim therapy from my medical aid?",
    a: "Fees are the same whether you pay cash or claim. We issue an invoice with the relevant practice and procedure codes so you can submit it to your medical aid for reimbursement, subject to your plan's benefits.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Please give at least 24 hours' notice to cancel or reschedule. Late cancellations and missed appointments are charged in full.",
  },
  {
    q: "Is what I say in therapy confidential?",
    a: "Yes. Everything discussed stays confidential, except where the law requires disclosure or where there is a risk of serious harm to you or someone else.",
  },
  {
    q: "What issues do you help with?",
    a: "Anxiety and panic, depression and low mood, burnout and work stress, trauma, grief and bereavement, relationship difficulties, self-esteem and identity, and adjustment to life change.",
  },
  {
    q: "Do you offer group therapy, and how does it work?",
    a: "We run small facilitated groups on emotional regulation, grief and adjustment at R200 per person for 90 minutes. A group starts once at least five people have confirmed for that topic.",
  },
  {
    q: "Do you have a student rate?",
    a: "Yes. Registered students pay R650 in person or R550 online for a 50-minute individual session. Bring proof of registration to your first session.",
  },
  {
    q: "Do you see couples?",
    a: "Yes. Couple sessions are 60 minutes at R1 000 in person or R850 online, focused on communication, recurring patterns and rebuilding connection.",
  },
  {
    q: "What happens in the first session?",
    a: "We talk through what brought you in, your history and what you want to change, then agree together on a way forward. It is also a chance to see whether the fit feels right.",
  },
  {
    q: "How often will I need to come?",
    a: "Most clients start weekly or fortnightly and space sessions out as things settle. There is no fixed programme; the rhythm is agreed with you.",
  },
  {
    q: "What should I do in a mental health emergency?",
    a: "If you or someone else is in immediate danger, call emergency services on 10177 or SADAG's 24-hour helpline on 0800 567 567. Our practice does not provide after-hours crisis cover.",
  },
];
