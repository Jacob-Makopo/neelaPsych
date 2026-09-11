import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, Check } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { EMAIL, SERVICES, CALENDAR_URL, CONTACTS } from "@/components/site-data";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book a session | Neela Psychological Services, Pretoria" },
      {
        name: "description",
        content:
          "Request a therapy appointment in Lynnwood Glen, Pretoria, or book straight into our calendar. Booking terms, cancellation policy and fees explained.",
      },
      { property: "og:title", content: "Book a therapy session in Pretoria" },
      {
        property: "og:description",
        content: "Request an appointment online or book directly into our calendar.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/booking" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
});

type Errs = { name?: string; email?: string; phone?: string; terms?: string };

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
    const preferred = get("preferred");
    const notes = get("notes").slice(0, 1000);

    const next: Errs = {};
    if (!name || name.length > 100) next.name = "Please enter your name (max 100 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      next.email = "Please enter a valid email address.";
    if (!phone || phone.length > 30) next.phone = "Please enter a contact number.";
    if (!fd.get("terms")) next.terms = "Please accept the booking terms.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Format: ${format}`,
      `Preferred day/time: ${preferred}`,
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
        lead="Choose a time in our calendar, or send a booking request and we'll come back to you with the next available slot."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            <CalendarDays className="h-4 w-4" /> Book in our Google Calendar
          </a>

          <h2 className="mt-12 text-2xl">Or send a booking request</h2>
          {sent ? (
            <p className="mt-6 rounded-2xl border border-border bg-card p-7 text-muted-foreground">
              Your email should have opened with the request filled in — send it and we'll reply
              with a confirmed time. You can also call{" "}
              {CONTACTS.map((c) => `${c.name} on ${c.phone}`).join(" or ")}.
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
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
                <label className="block text-sm">
                  Phone
                  <input name="phone" maxLength={30} className={field} />
                  {errors.phone && (
                    <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>
                  )}
                </label>
                <label className="block text-sm">
                  Preferred day & time
                  <input
                    name="preferred"
                    maxLength={100}
                    placeholder="e.g. Tuesday mornings"
                    className={field}
                  />
                </label>
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
                className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
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
        </aside>
      </section>
    </>
  );
}
