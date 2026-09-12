import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroRoom from "@/assets/hero-room.jpg";
import { ADDRESS, SERVICES, TEAM, FOCUS_AREAS, CONTACTS, FAQS } from "@/components/site-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Psychologists in Lynnwood Glen, Pretoria | Neela Psychological Services" },
      {
        name: "description",
        content:
          "Compassionate, client-centred therapy in Lynnwood Glen, Pretoria. Individual from R850, couples from R1 000, students from R650 and group sessions at R200 pp.",
      },
      { property: "og:title", content: "Neela Psychological Services | Therapy in Pretoria" },
      {
        property: "og:description",
        content: "A space for compassionate, client-centred care in Lynnwood Glen, Pretoria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
              A space for compassionate, client-centred care
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
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8 text-sm">
              {[
                ["R850", "individual, in person"],
                ["R700", "individual, online"],
                ["R200", "per person in groups"],
              ].map(([a, b]) => (
                <div key={b}>
                  <dt className="font-display text-xl text-primary">{a}</dt>
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
              <h2 className="mt-4 text-3xl md:text-4xl">Ways we can work together</h2>
            </div>
            <Link to="/services" className="text-sm text-primary underline underline-offset-8">
              See all services and fees
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.slug} className="rounded-2xl bg-card p-7 shadow-soft">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                <p className="mt-6 text-sm text-primary">
                  {s.inPerson} in person · {s.online} online
                </p>
              </article>
            ))}
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
                <h3 className="text-xl">{t.name}</h3>
                <p className="text-sm text-primary">{t.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t.bio}</p>
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
            {FAQS.slice(0, 5).map((f) => (
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
