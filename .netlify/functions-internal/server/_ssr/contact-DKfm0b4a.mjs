import { i as EMAIL, r as CONTACTS, t as ADDRESS } from "./site-data-Dsr53ZtP.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail, i as MapPin, n as Phone, o as Clock } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./site-shell-htF023zy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DKfm0b4a.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const mapQuery = encodeURIComponent(ADDRESS);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Reach out when you're ready",
			lead: "Call, WhatsApp or email us a short note about what you're looking for, and we'll find a time that works."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-primary" }), " Phone"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: CONTACTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: c.whatsappOnly ? `https://wa.me/${c.tel.replace(/\D/g, "")}` : `tel:${c.tel}`,
								...c.whatsappOnly ? {
									target: "_blank",
									rel: "noreferrer"
								} : {},
								className: "text-muted-foreground hover:text-primary",
								children: [c.phone, c.whatsappOnly ? " (WhatsApp only)" : ""]
							}) }, c.tel))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-primary" }), " Email"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${EMAIL}`,
							className: "mt-4 block break-all text-muted-foreground hover:text-primary",
							children: EMAIL
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "flex items-center gap-2 text-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-primary" }), " Practice address"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: ADDRESS
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-3 inline-block text-sm text-primary underline underline-offset-4",
								children: "Open in Google Maps"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-primary" }), " Hours"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "By appointment, weekdays and selected Saturday mornings. Send us a message for current availability."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map showing 72 Alcade Road, Lynnwood Glen, Pretoria",
					src: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
					loading: "lazy",
					className: "h-full min-h-[420px] w-full"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/60 bg-secondary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl px-6 py-14 text-center text-sm text-muted-foreground",
				children: "If you are in immediate danger or crisis, contact SADAG on 0800 567 567 or emergency services on 10177."
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
