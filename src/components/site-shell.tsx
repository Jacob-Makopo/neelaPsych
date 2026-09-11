import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, MapPin } from "lucide-react";
import logo from "@/assets/neela-logo.png";
import { NAV, EMAIL, ADDRESS, CONTACTS } from "./site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Neela Psychological Services logo" className="h-11 w-11" />
          <span className="font-display text-base leading-tight">
            Neela
            <span className="block text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Psychological Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90 sm:inline-block"
          >
            Book a session
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-6 py-4 lg:hidden">
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <img src={logo} alt="" aria-hidden className="h-12 w-12" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A space for compassionate, client-centred care in Lynnwood Glen, Pretoria.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-display text-base">Visit us</p>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {ADDRESS}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-start gap-2 break-all text-muted-foreground hover:text-primary"
          >
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {EMAIL}
          </a>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-display text-base">Speak to us</p>
          <p className="pt-2 text-xs text-muted-foreground">
            In an emergency, call SADAG on 0800 567 567 or 10177.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Neela Psychological Services
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs tracking-[0.24em] text-primary uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.1] md:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-xl text-lg text-muted-foreground">{lead}</p>}
      </div>
    </section>
  );
}
