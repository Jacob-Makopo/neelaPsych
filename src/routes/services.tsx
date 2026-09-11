import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site-shell";
import { SERVICES, FOCUS_AREAS } from "@/components/site-data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Therapy services & session fees | Neela Psychological Services" },
      {
        name: "description",
        content:
          "Individual, couple, student and group therapy in Lynnwood Glen, Pretoria, in person or online, with clear per-session fees from R550.",
      },
      {
        property: "og:title",
        content: "Therapy services in Pretoria | Neela Psychological Services",
      },
      {
        property: "og:description",
        content:
          "Individual, couple, student and group therapy, in person or online, with clear fees.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Therapy services",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.body,
              serviceType: "Psychotherapy",
            },
          })),
        }),
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ways we can work together"
        lead="In-room in Lynnwood Glen or securely online anywhere in South Africa, at your pace."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-soft"
            >
              <h2 className="text-xl">{s.title}</h2>
              <p className="mt-3 flex-1 text-muted-foreground">{s.body}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.duration}</p>
              <div className="mt-6 flex gap-6 border-t border-border pt-4 text-sm">
                <span>
                  <span className="block text-xs text-muted-foreground uppercase">In person</span>
                  <span className="font-display text-lg text-primary">{s.inPerson}</span>
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground uppercase">Online</span>
                  <span className="font-display text-lg text-primary">{s.online}</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl">What we help with</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {FOCUS_AREAS.map((f) => (
              <li
                key={f}
                className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            to="/booking"
            className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Book a session
          </Link>
        </div>
      </section>
    </>
  );
}
