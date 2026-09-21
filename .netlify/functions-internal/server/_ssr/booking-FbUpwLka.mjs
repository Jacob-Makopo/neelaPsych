import { r as __toESM } from "../_runtime.mjs";
import { c as SERVICES, i as EMAIL, r as CONTACTS, t as ADDRESS } from "./site-data-Dsr53ZtP.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as Check } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./site-shell-htF023zy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-FbUpwLka.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TERMS = [
	"Sessions are 50–60 minutes (couples 60 minutes, groups 90 minutes) and start at the booked time.",
	"Please give at least 24 hours' notice to cancel or reschedule. Late cancellations and no-shows are charged in full.",
	"Payment is due on the day of the session by EFT or card. An invoice with medical aid codes is provided on request.",
	"Group sessions run once at least five people have confirmed for that topic.",
	"Everything discussed is confidential, except where the law requires disclosure or there is risk of serious harm.",
	"A booking request is confirmed only once you receive a reply from us by email or phone."
];
function BookingPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const get = (k) => String(fd.get(k) ?? "").trim();
		const name = get("name");
		const email = get("email");
		const phone = get("phone");
		const service = get("service");
		const format = get("format");
		const pref1 = get("pref1");
		const pref2 = get("pref2");
		const notes = get("notes").slice(0, 1e3);
		const next = {};
		if (!name || name.length > 100) next.name = "Please enter your name (max 100 characters).";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) next.email = "Please enter a valid email address.";
		if (!phone || phone.length > 30) next.phone = "Please enter a contact number.";
		if (!pref1 && !pref2) next.preferred = "Please choose at least one preferred time (first or second choice).";
		if (!fd.get("terms")) next.terms = "Please accept the booking terms.";
		setErrors(next);
		if (Object.keys(next).length) return;
		const pretty = (value) => new Date(value).toLocaleString(void 0, {
			dateStyle: "medium",
			timeStyle: "short"
		});
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
			"I have read and accept the booking terms."
		].join("\n");
		window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Booking request — ${name}`)}&body=${encodeURIComponent(body)}`;
		setSent(true);
	}
	const field = "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Booking",
		title: "Book a session",
		lead: "Send a booking request with your preferred times and we'll come back to you with the next available slot."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl",
			children: "Send a booking request"
		}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 rounded-2xl border border-border bg-card p-7 text-muted-foreground",
			children: [
				"Your email should have opened with the request filled in — send it and we'll reply with a confirmed time. You can also call ",
				CONTACTS.map((c) => c.phone).join(" or "),
				"."
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			noValidate: true,
			className: "mt-6 space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "font-display text-lg",
							children: "Your details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [
									"Full name",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										maxLength: 100,
										className: field
									}),
									errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-destructive",
										children: errors.name
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [
									"Email",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "email",
										type: "email",
										maxLength: 255,
										className: field
									}),
									errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-destructive",
										children: errors.email
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [
								"Phone",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "phone",
									maxLength: 30,
									className: field
								}),
								errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-destructive",
									children: errors.phone
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "font-display text-lg",
						children: "Your session"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: ["Session type", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "service",
								className: field,
								defaultValue: "Standard individual session",
								children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.title }, s.slug))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: ["Format", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "format",
								className: field,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "In person (Lynnwood Glen)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Online" })]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "font-display text-lg",
							children: "Preferred times"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "pref1",
							className: "block text-sm",
							children: "First choice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "pref1",
							name: "pref1",
							type: "datetime-local",
							className: field
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "pref2",
							className: "block text-sm",
							children: "Second choice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "pref2",
							name: "pref2",
							type: "datetime-local",
							className: field
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "We'll match the closest of these times. You only need to give one."
							}), errors.preferred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive",
								children: errors.preferred
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: ["Anything you'd like us to know (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "notes",
						rows: 4,
						maxLength: 1e3,
						className: field
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-start gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						name: "terms",
						className: "mt-1 h-4 w-4 accent-current"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I have read and accept the booking terms below." })]
				}),
				errors.terms && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive",
					children: errors.terms
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "w-full rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90",
					children: "Send booking request"
				})
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-3xl border border-border bg-secondary/40 p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Terms of booking"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-4 text-sm text-muted-foreground",
					children: TERMS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t border-border pt-6 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base",
						children: "Fees at a glance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1 text-muted-foreground",
						children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							s.title,
							": ",
							s.inPerson,
							" in person · ",
							s.online,
							" online"
						] }, s.slug))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t border-border pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base",
							children: "Find us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 overflow-hidden rounded-2xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: "https://www.google.com/maps?q=72+Alcade+Road,+Lynnwood+Glen,+Pretoria&output=embed",
								title: "Map showing Neela Psychological Services at 72 Alcade Road, Lynnwood Glen, Pretoria",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade",
								className: "block h-60 w-full border-0"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.google.com/maps/search/?api=1&query=72%20Alcade%20Road%2C%20Lynnwood%20Glen%2C%20Pretoria",
							target: "_blank",
							rel: "noreferrer",
							className: "mt-3 inline-block text-muted-foreground underline underline-offset-4 hover:text-primary",
							children: ADDRESS
						})
					]
				})
			]
		})]
	})] });
}
//#endregion
export { BookingPage as component };
