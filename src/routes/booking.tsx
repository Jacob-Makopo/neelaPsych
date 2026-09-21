import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { EMAIL, SERVICES, CONTACTS, ADDRESS } from "@/components/site-data";
import { OG_IMAGE, breadcrumbSchema, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book a session | Neela Psychological Services, Pretoria" },
      {
        name: "description",
        content:
          "Request a therapy appointment in Lynnwood Glen, Pretoria, with your preferred times. Booking terms, cancellation policy and fees explained.",
      },
      { property: "og:title", content: "Book a therapy session in Pretoria" },
      {
        property: "og:description",
        content: "Request an appointment online with your preferred times.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/booking") },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "The Neela Psychological Services therapy room" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/booking") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Booking", path: "/booking" }])),
      },
    ],
  }),
});

type Errs = {
  name?: string;
  email?: string;
  phone?: string;
  terms?: string;
  preferred?: string;
};

const TERMS = [
  "Sessions are 50–60 minutes (couples 60 minutes, groups 90 minutes) and start at the booked time.",
  "Please give at least 24 hours' notice to cancel or reschedule. Late cancellations and no-shows are charged in full.",
  "Payment is due on the day of the session by EFT or card. An invoice with medical aid codes is provided on request.",
  "Group sessions run once at least five people have confirmed for that topic.",
  "Everything discussed is confidential, except where the law requires disclosure or there is risk of serious harm.",
  "A booking request is confirmed only once you receive a reply from us by email or phone.",
];

function BookingPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errs>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const service = get("service");
    const format = get("format");
    const pref1 = get("pref1");
    const pref2 = get("pref2");
    const notes = get("notes").slice(0, 1000);

    const next: Errs = {};
    if (!name || name.length > 100) next.name = "Please enter your name (max 100 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      next.email = "Please enter a valid email address.";
    if (!phone || phone.length > 30) next.phone = "Please enter a contact number.";
    if (!pref1 && !pref2)
      next.preferred = "Please choose at least one preferred time (first or second choice).";
    if (!fd.get("terms")) next.terms = "Please accept the booking terms.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const pretty = (value: string) =>
      new Date(value).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Format: ${format}`,
      `Preferred time (first choice): ${pref1 ? pretty(pref1) : "Not provided"}`,
      `Preferred time (second choice): ${pref2 ? pretty(pref2) : "Not provided"}`,
      "",
      notes,
      "",
      "I have read and accept the booking terms.",
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Booking request — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary";

  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book a session"
        lead="Send a booking request with your preferred times and we'll come back to you with the next available slot."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div>
          <h2 className="text-2xl">Send a booking request</h2>
          {sent ? (
            <p className="mt-6 rounded-2xl border border-border bg-card p-7 text-muted-foreground">
              Your email should have opened with the request filled in — send it and we'll reply
              with a confirmed time. You can also call {CONTACTS.map((c) => c.phone).join(" or ")}.
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-8">
              <fieldset className="space-y-5">
                <legend className="font-display text-lg">Your details</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm">
                    Full name
                    <input name="name" maxLength={100} className={field} />
                    {errors.name && (
                      <span className="mt-1 block text-xs text-destructive">{errors.name}</span>
                    )}
                  </label>
                  <label className="block text-sm">
                    Email
                    <input name="email" type="email" maxLength={255} className={field} />
                    {errors.email && (
                      <span className="mt-1 block text-xs text-destructive">{errors.email}</span>
                    )}
                  </label>
                </div>
                <label className="block text-sm">
                  Phone
                  <input name="phone" maxLength={30} className={field} />
                  {errors.phone && (
                    <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>
                  )}
                </label>
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="font-display text-lg">Your session</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm">
                    Session type
                    <select
                      name="service"
                      className={field}
                      defaultValue="Standard individual session"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.slug}>{s.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm">
                    Format
                    <select name="format" className={field}>
                      <option>In person (Lynnwood Glen)</option>
                      <option>Online</option>
                    </select>
                  </label>
                </div>
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="font-display text-lg">Preferred times</legend>
                <div>
                  <label htmlFor="pref1" className="block text-sm">
                    First choice
                  </label>
                  <input id="pref1" name="pref1" type="datetime-local" className={field} />
                </div>
                <div>
                  <label htmlFor="pref2" className="block text-sm">
                    Second choice
                  </label>
                  <input id="pref2" name="pref2" type="datetime-local" className={field} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    We'll match the closest of these times. You only need to give one.
                  </p>
                  {errors.preferred && (
                    <p className="text-xs text-destructive">{errors.preferred}</p>
                  )}
                </div>
              </fieldset>

              <label className="block text-sm">
                Anything you'd like us to know (optional)
                <textarea name="notes" rows={4} maxLength={1000} className={field} />
              </label>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" name="terms" className="mt-1 h-4 w-4 accent-current" />
                <span>I have read and accept the booking terms below.</span>
              </label>
              {errors.terms && <p className="text-xs text-destructive">{errors.terms}</p>}
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                Send booking request
              </button>
            </form>
          )}
        </div>

        <aside className="rounded-3xl border border-border bg-secondary/40 p-8">
          <h2 className="text-2xl">Terms of booking</h2>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            {TERMS.map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-6 text-sm">
            <p className="font-display text-base">Fees at a glance</p>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  {s.title}: {s.inPerson} in person · {s.online} online
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 border-t border-border pt-6">
            <p className="font-display text-base">Find us</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.google.com/maps?q=72+Alcade+Road,+Lynnwood+Glen,+Pretoria&output=embed"
                title="Map showing Neela Psychological Services at 72 Alcade Road, Lynnwood Glen, Pretoria"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-60 w-full border-0"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=72%20Alcade%20Road%2C%20Lynnwood%20Glen%2C%20Pretoria"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-muted-foreground underline underline-offset-4 hover:text-primary"
            >
              {ADDRESS}
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
