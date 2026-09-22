import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroRoom from "@/assets/hero-room.jpg";
import {
  ADDRESS,
  SESSION_FORMATS,
  TEAM,
  FOCUS_AREAS,
  CONTACTS,
  FAQS,
} from "@/components/site-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { absoluteUrl, faqPageSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Counselling Psychologists in Lynnwood Glen, Pretoria | Neela Psychological Services",
      },
      {
        name: "description",
        content:
          "Compassionate therapy in Lynnwood Glen, Pretoria with counselling psychologists Khetsiwe Nkosi and Lesedi, for adolescents, young adults, adults and couples, in person, online or in a small group.",
      },
      { property: "og:title", content: "Neela Psychological Services | Therapy in Pretoria" },
      {
        property: "og:description",
        content: "A space for compassionate, client-centred care in Lynnwood Glen, Pretoria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "neela, neela psychology, neela psychological services, neela psych, psychologist pretoria, therapist lynnwood glen, counselling psychologist pretoria, therapy pretoria, couples therapy pretoria, online therapy south africa",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(FAQS.slice(0, 5))),
      },
    ],
  }),
});

const steps = [
  { n: "01", t: "Reach out", d: "Call, WhatsApp or send a booking request with a short note." },
  {
    n: "02",
    t: "First session",
    d: "We meet, talk openly, and decide together what would help most.",
  },
  {
    n: "03",
    t: "Ongoing care",
    d: "Individual, couple or group work at a rhythm that suits your life.",
  },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 -z-10 h-96 w-96 rounded-full bg-secondary blur-3xl" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:py-28">
          <div>
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-secondary-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="min-w-0 break-words">{ADDRESS}</span>
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] md:text-6xl">
              Neela Psychological Services — a space for compassionate, client-centred care
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Therapy that starts with listening. Whether you come on your own, with a partner, or
              join a small group, you are met without judgement and at your own pace.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                Book a session <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8 text-sm">
              {[
                ["Adolescents, adults & couples", "who we see"],
                ["In person & online", "how we meet"],
                ["Individual, couple & group", "ways to work"],
              ].map(([a, b]) => (
                <div key={b}>
                  <dt className="font-display text-base leading-snug text-primary">{a}</dt>
                  <dd className="mt-1 text-muted-foreground">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary" />
            <img
              src={heroRoom}
              alt="Calm therapy consulting room with two soft armchairs and natural light"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="rounded-[1.75rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.24em] text-primary uppercase">Services</p>
              <h2 className="mt-4 text-3xl md:text-4xl">What we do</h2>
            </div>
            <Link to="/services" className="text-sm text-primary underline underline-offset-8">
              See all services
            </Link>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6 py-4 text-xs tracking-[0.14em] uppercase">
                    Format
                  </TableHead>
                  <TableHead className="px-6 py-4 text-xs tracking-[0.14em] uppercase">
                    What it involves
                  </TableHead>
                  <TableHead className="px-6 py-4 text-xs tracking-[0.14em] whitespace-nowrap uppercase">
                    Length
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {SESSION_FORMATS.map((f) => (
                  <TableRow key={f.name}>
                    <TableCell className="px-6 py-5 font-display text-lg text-primary">
                      {f.name}
                    </TableCell>
                    <TableCell className="px-6 py-5 text-muted-foreground">{f.detail}</TableCell>
                    <TableCell className="px-6 py-5 whitespace-nowrap text-muted-foreground">
                      {f.length}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs tracking-[0.24em] text-primary uppercase">Meet the team</p>
        <h2 className="mt-4 text-3xl md:text-4xl">The people you'll be sitting with</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {TEAM.map((t) => (
            <article key={t.name} className="flex gap-6 rounded-2xl border border-border p-6">
              <img
                src={t.photo}
                alt={`${t.name}, ${t.role} at Neela Psychological Services`}
                loading="lazy"
                decoding="async"
                width={t.width}
                height={t.height}
                className="h-28 w-24 shrink-0 rounded-xl object-cover object-top"
              />
              <div>
                <h3 className="text-xl">
                  <Link
                    to="/about"
                    hash={t.name.toLowerCase().replace(/\s+/g, "-")}
                    className="decoration-primary underline-offset-8 hover:underline"
                  >
                    {t.name}
                  </Link>
                </h3>
                <p className="text-sm text-primary">{t.role}</p>
                {t.bio.map((para) => (
                  <p key={para} className="mt-3 text-sm text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl">What we help with</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {FOCUS_AREAS.map((f) => (
            <li
              key={f}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {f}
            </li>
          ))}
        </ul>
        <h2 className="mt-20 text-3xl md:text-4xl">Getting started is simple</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-border pt-6">
              <span className="font-display text-2xl text-primary">{s.n}</span>
              <h3 className="mt-3 text-xl">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs tracking-[0.24em] text-primary uppercase">Common questions</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Before you book</h2>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border">
            {FAQS.filter((f) => !/cost|price|fee/i.test(f.q))
              .slice(0, 5)
              .map((f) => (
                <details key={f.q} className="group px-5 py-5 sm:px-7">
                  <summary className="cursor-pointer list-none marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-base sm:text-lg">{f.q}</h3>
                      <span aria-hidden className="mt-1 shrink-0 text-primary group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground sm:text-base">{f.a}</p>
                </details>
              ))}
          </div>
          <Link
            to="/faq"
            className="mt-8 inline-block text-sm text-primary underline underline-offset-8"
          >
            See all 15 questions
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl">Reach out when you're ready</h2>
          <p className="mt-4 text-muted-foreground">
            Call {CONTACTS[0]?.phone}, {CONTACTS[1]?.phone} or {CONTACTS[3]?.phone}, WhatsApp us on{" "}
            {CONTACTS[2]?.phone}, or send a booking request online.
          </p>
          <Link
            to="/booking"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Book a session
          </Link>
        </div>
      </section>
    </>
  );
}
