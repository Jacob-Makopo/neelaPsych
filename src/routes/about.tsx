import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site-shell";
import { TEAM } from "@/components/site-data";
import { OG_IMAGE, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About the practice | Neela Psychological Services, Pretoria" },
      {
        name: "description",
        content:
          "Neela Psychological Services is a private counselling psychology practice in Lynnwood Glen, Pretoria, offering warm, evidence-based, client-centred care for adolescents, young adults, adults and couples.",
      },
      { property: "og:title", content: "About Neela Psychological Services" },
      {
        property: "og:description",
        content:
          "A warm, client-centred counselling psychology practice in Lynnwood Glen, Pretoria.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "The Neela Psychological Services therapy room" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "About", path: "/about" }])),
      },
    ],
  }),
});

const values = [
  {
    t: "Client-centred",
    d: "You set the direction. Therapy provides structure, safety and perspective.",
  },
  { t: "Evidence-based", d: "Approaches with research behind them, adapted to who you are." },
  { t: "Unhurried", d: "No fixed programme and no rush — the pace is yours." },
  { t: "For everyone", d: "All backgrounds, cultures, faiths and identities are welcome here." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Care that is warm, thoughtful and unhurried"
        lead="A private counselling psychology practice in Lynnwood Glen, Pretoria, offering support to adolescents, young adults, adults and couples, in person and online."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-muted-foreground">
            <p>
              Neela Psychological Services was built around a simple idea: people do their best work
              when they feel genuinely heard. Sessions are collaborative and confidential, and the
              first meeting is as much about whether the fit feels right as it is about where to
              begin.
            </p>
            <p>
              We work with anxiety, depression, burnout, trauma and grief, relationship difficulties
              and the everyday adjustments that quietly take a toll. Alongside individual work,
              small facilitated groups make support more affordable and less isolating.
            </p>
            <p>
              You are welcome to bring as much or as little as you are ready to share. Nothing here
              needs to be tidy before you arrive.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg">{v.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl">Meet the team</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {TEAM.map((t) => (
              <article key={t.name} className="rounded-2xl border border-border bg-card p-6">
                <img
                  src={t.photo}
                  alt={`${t.name}, ${t.role} at Neela Psychological Services`}
                  loading="lazy"
                  decoding="async"
                  width={t.width}
                  height={t.height}
                  className="aspect-[3/4] w-full rounded-xl object-cover object-top"
                />
                <h3 className="mt-5 text-xl">{t.name}</h3>
                <p className="text-sm text-primary">{t.role}</p>
                {t.bio.map((para) => (
                  <p key={para} className="mt-3 text-sm text-muted-foreground">
                    {para}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Link
            to="/booking"
            className="inline-block rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Book a session
          </Link>
        </div>
      </section>
    </>
  );
}
