import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { EMAIL, ADDRESS, CONTACTS } from "@/components/site-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & book | Neela Psychological Services, Lynnwood Glen" },
      {
        name: "description",
        content:
          "Book a therapy session at 72 Alcade Road, Lynnwood Glen, Pretoria. Call Khetsiwe on 076 608 1912 or Lesedi on 072 433 5270, or email us.",
      },
      { property: "og:title", content: "Contact Neela Psychological Services" },
      {
        property: "og:description",
        content: "72 Alcade Road, Lynnwood Glen, Pretoria. Call or email to book a session.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const mapQuery = encodeURIComponent(ADDRESS);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach out when you're ready"
        lead="Call, WhatsApp or email a short note about what you're looking for and we'll find a time that works."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5 text-primary" /> Phone
            </h2>
            <ul className="mt-4 space-y-2">
              {CONTACTS.map((c) => (
                <li key={c.tel}>
                  <a
                    href={
                      c.whatsappOnly ? `https://wa.me/${c.tel.replace(/\D/g, "")}` : `tel:${c.tel}`
                    }
                    {...(c.whatsappOnly ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {c.phone}
                    {c.whatsappOnly ? " (WhatsApp only)" : ""}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-primary" /> Email
            </h2>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 block break-all text-muted-foreground hover:text-primary"
            >
              {EMAIL}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-primary" /> Practice address
            </h2>
            <p className="mt-4 text-muted-foreground">{ADDRESS}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-primary underline underline-offset-4"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-primary" /> Hours
            </h2>
            <p className="mt-4 text-muted-foreground">
              By appointment, weekdays and selected Saturday mornings. Send us a message for current
              availability.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Map showing 72 Alcade Road, Lynnwood Glen, Pretoria"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            className="h-full min-h-[420px] w-full"
          />
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center text-sm text-muted-foreground">
          If you are in immediate danger or crisis, contact SADAG on 0800 567 567 or emergency
          services on 10177.
        </div>
      </section>
    </>
  );
}
