import { u as TEAM } from "./site-data-Dsr53ZtP.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./site-shell-htF023zy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-s3TB50My.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		t: "Client-centred",
		d: "You set the direction. Therapy provides structure, safety and perspective."
	},
	{
		t: "Evidence-based",
		d: "Approaches with research behind them, adapted to who you are."
	},
	{
		t: "Unhurried",
		d: "No fixed programme and no rush — the pace is yours."
	},
	{
		t: "For everyone",
		d: "All backgrounds, cultures, faiths and identities are welcome here."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "About",
		title: "Care that is warm, thoughtful and unhurried",
		lead: "A private counselling psychology practice in Lynnwood Glen, Pretoria, offering support to adolescents, young adults, adults and couples, in person and online."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-6 py-16 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Neela Psychological Services was built around a simple idea: people do their best work when they feel genuinely heard. Sessions are collaborative and confidential, and the first meeting is as much about whether the fit feels right as it is about where to begin." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We work with anxiety, depression, burnout, trauma and grief, relationship difficulties and the everyday adjustments that quietly take a toll. Alongside individual work, small facilitated groups make support more affordable and less isolating." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You are welcome to bring as much or as little as you are ready to share. Nothing here needs to be tidy before you arrive." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg",
							children: v.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: v.d
						})]
					}, v.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "Meet the team"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8 sm:grid-cols-2",
					children: TEAM.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.photo,
								alt: `${t.name}, ${t.role} at Neela Psychological Services`,
								loading: "lazy",
								decoding: "async",
								width: t.width,
								height: t.height,
								className: "aspect-[3/4] w-full rounded-xl object-cover object-top"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-xl",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary",
								children: t.role
							}),
							t.bio.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: para
							}, para))
						]
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/booking",
					className: "inline-block rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-opacity hover:opacity-90",
					children: "Book a session"
				})
			})
		]
	})] });
}
//#endregion
export { AboutPage as component };
