# De-templating the Neela site — design

**Goal:** remove the "AI-generated" look by humanizing the design language and copy. Visual identity (Fraunces + Karla, warm mauve palette) stays. No new dependencies. SEO/meta/schema untouched.

## 1. Buttons — kill the pill

All `rounded-full` CTAs become `rounded-lg` (site radius 0.75rem). Every page, header, footer strip, and the booking submit button.

Focus-area chips (home + services) are replaced with editorial lists: home = two-column underline list; services = two-column check list.

## 2. Page heroes — differentiate

`PageHero` gains a `variant` prop:

- `soft` — current `bg-secondary/40` band (booking, faq, contact)
- `plain` — white background (about)
- `rules` — hairline top/bottom rules (services)

Kicker changes from uppercase tracking to a short rule + serif italic label. Title keeps Fraunces but tighter leading.

- Services hero adds an inline fee strip (R550–R1 000 per session)
- About hero adds a centered pullquote below the hero

## 3. Break the border-grid

- Services: bordered cards → `border-t` index rows, `01–04` serif numerals, fee right-aligned
- About: value cards → bare grid, `01–04` serif numerals
- FAQ: bordered accordion → full-bleed divided list
- Home team: photo-forward cards (no border, soft shadow)
- Home session table → three-column editorial band with top rules

## 4. Copy pass

- Remove repeated "compassionate, client-centred care" and "at your pace"
- Add concrete specifics: what happens in the first session, reply time, parking at 72 Alcade Road, what to bring
- Unique intro voice per page; home hero rewritten

## 5. CTA consolidation

One Book CTA in header + home bottom banner. Mid-page pills on services/about/faq become contextual "Talk to us" rows (call / WhatsApp / email) or link rows.

## 6. Rhythm variation

Mix `py-16/20/28`, asymmetric bands, varied heading sizes, right-aligned team header on home. Home closing banner becomes an inverted (`bg-foreground text-background`) conversion bar — distinct from every `bg-secondary/40` band.

## Files

`site-shell.tsx`, `index.tsx`, `services.tsx`, `about.tsx`, `faq.tsx`, `contact.tsx`, `booking.tsx`, `site-data.ts`.

## Verification

`npm run lint` (0 errors), `npm run build`.