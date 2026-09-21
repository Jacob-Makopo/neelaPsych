import { a as FAQS, i as EMAIL, r as CONTACTS, t as ADDRESS } from "./site-data-Dsr53ZtP.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./site-shell-htF023zy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-uigjVIlg.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Questions",
		title: "Therapy questions, answered plainly",
		lead: "Fees, booking, medical aid, online sessions and confidentiality — the things people usually want to know before reaching out."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-6 py-16 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border rounded-2xl border border-border bg-card",
			children: FAQS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group px-5 py-5 sm:px-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer list-none text-base leading-snug marker:hidden sm:text-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-base sm:text-lg",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "mt-1 shrink-0 text-primary transition-transform group-open:rotate-45",
							children: "+"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: f.a
				})]
			}, f.q))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 rounded-2xl border border-border bg-secondary/40 p-7 text-sm text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base text-foreground",
					children: "Still have a question?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: ADDRESS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-1",
					children: [CONTACTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [c.phone, c.whatsappOnly ? " (WhatsApp only)" : ""] }, c.tel)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "break-all",
						children: EMAIL
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/booking",
					className: "mt-6 inline-block rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90",
					children: "Book a session"
				})
			]
		})]
	})] });
}
//#endregion
export { FaqPage as component };
