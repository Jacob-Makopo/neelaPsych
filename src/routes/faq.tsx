import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site-shell";
import { FAQS, EMAIL, ADDRESS, CONTACTS } from "@/components/site-data";
import { OG_IMAGE, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "Therapy FAQs: fees, booking & medical aid | Neela Psychological Services" },
      {
        name: "description",
        content:
          "Answers to 15 common questions about therapy in Lynnwood Glen, Pretoria: session fees, online therapy, medical aid claims, booking, cancellations, group sessions and confidentiality.",
      },
      {
        property: "og:title",
        content: "Therapy questions answered | Neela Psychological Services",
      },
      {
        property: "og:description",
        content:
          "Fees, booking, medical aid, online sessions, group therapy and confidentiality — answered plainly.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/faq" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "The Neela Psychological Services therapy room" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          name: "Therapy FAQs | Neela Psychological Services",
          inLanguage: "en-ZA",
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["summary > span h2"] },
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "FAQs", item: "/faq" },
          ],
        }),
      },
    ],
  }),
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Therapy questions, answered plainly"
        lead="Fees, booking, medical aid, online sessions and confidentiality — the things people usually want to know before reaching out."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-5 py-5 sm:px-7">
              <summary className="cursor-pointer list-none text-base leading-snug marker:hidden sm:text-lg">
                <span className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-base sm:text-lg">{f.q}</h2>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-7 text-sm text-muted-foreground">
          <p className="font-display text-base text-foreground">Still have a question?</p>
          <p className="mt-3">{ADDRESS}</p>
          <ul className="mt-3 space-y-1">
            {CONTACTS.map((c) => (
              <li key={c.tel}>
                {c.phone}
                {c.whatsappOnly ? " (WhatsApp only)" : ""}
              </li>
            ))}
            <li className="break-all">{EMAIL}</li>
          </ul>
          <Link
            to="/booking"
            className="mt-6 inline-block rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Book a session
          </Link>
        </div>
      </section>
    </>
  );
}
