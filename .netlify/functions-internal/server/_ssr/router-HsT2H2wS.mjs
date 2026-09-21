import { r as __toESM } from "../_runtime.mjs";
import { a as FAQS, c as SERVICES, i as EMAIL, n as ALL_PHONE_NUMBERS, r as CONTACTS, u as TEAM } from "./site-data-Dsr53ZtP.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteFooter, r as SiteHeader } from "./site-shell-htF023zy.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-HsT2H2wS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CHsM24uq.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var SITE_URL = "https://neelapsychology.co.za";
var SITE_NAME = "Neela Psychological Services";
var OG_IMAGE = `${SITE_URL}/og-image.jpg`;
var absoluteUrl = (path) => path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? path : `/${path.replace(/^\/+/, "")}`}`;
var ADDRESS_OBJECT = {
	"@type": "PostalAddress",
	streetAddress: "72 Alcade Road",
	addressLocality: "Lynnwood Glen, Pretoria",
	addressRegion: "Gauteng",
	addressCountry: "ZA"
};
var medicalBusinessSchema = () => ({
	"@context": "https://schema.org",
	"@type": "MedicalBusiness",
	"@id": `${SITE_URL}/#organization`,
	name: SITE_NAME,
	slogan: "A space for compassionate, client-centred care",
	url: SITE_URL,
	logo: OG_IMAGE,
	image: OG_IMAGE,
	email: EMAIL,
	telephone: ALL_PHONE_NUMBERS,
	contactPoint: CONTACTS.map((c) => ({
		"@type": "ContactPoint",
		contactType: c.whatsappOnly ? "WhatsApp bookings" : "bookings and enquiries",
		telephone: c.tel,
		availableLanguage: ["English", "Afrikaans"],
		areaServed: "ZA"
	})),
	openingHoursSpecification: [{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday"
		],
		opens: "08:00",
		closes: "17:00"
	}],
	medicalSpecialty: "Psychotherapy",
	address: ADDRESS_OBJECT,
	geo: {
		"@type": "GeoCoordinates",
		latitude: -25.7746,
		longitude: 28.2785
	},
	areaServed: [
		"Pretoria",
		"Gauteng",
		"South Africa"
	],
	priceRange: "R200–R1000",
	employee: TEAM.map((t) => ({
		"@type": "Person",
		name: t.name,
		jobTitle: t.role
	})),
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Therapy services",
		itemListElement: SERVICES.map((s, i) => ({
			"@type": "Offer",
			position: i + 1,
			name: s.title,
			description: s.body,
			priceCurrency: "ZAR",
			price: s.inPerson.replace(/[^0-9 ]/g, "").trim().replace(/\s/g, ""),
			priceValidUntil: `${(/* @__PURE__ */ new Date()).getFullYear() + 1}-12-31`
		}))
	}
});
var webSiteSchema = () => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SITE_URL}/#website`,
	name: SITE_NAME,
	url: SITE_URL,
	publisher: { "@id": `${SITE_URL}/#organization` },
	inLanguage: "en-ZA"
});
var breadcrumbSchema = (items) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [{
		"@type": "ListItem",
		position: 1,
		name: "Home",
		item: absoluteUrl("/")
	}, ...items.map((it, i) => ({
		"@type": "ListItem",
		position: i + 2,
		name: it.name,
		item: absoluteUrl(it.path)
	}))]
});
var SHARE_META = {
	ogImage: OG_IMAGE,
	ogLocale: "en_ZA",
	twitterTitle: "Neela Psychological Services | Therapy in Pretoria",
	twitterDescription: "Compassionate, client-centred therapy in Lynnwood Glen, Pretoria, in person or online."
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1"
			},
			{ title: SITE_NAME },
			{
				name: "description",
				content: "A space for compassionate, client-centred care in Lynnwood Glen, Pretoria."
			},
			{
				name: "theme-color",
				content: "#c76b8f"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: SHARE_META.ogLocale
			},
			{
				property: "og:title",
				content: `${SITE_NAME} | Therapy in Pretoria`
			},
			{
				property: "og:description",
				content: SHARE_META.twitterDescription
			},
			{
				property: "og:image",
				content: SHARE_META.ogImage
			},
			{
				property: "og:image:alt",
				content: "A calm therapy consulting room at Neela Psychological Services"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: SHARE_META.twitterTitle
			},
			{
				name: "twitter:description",
				content: SHARE_META.twitterDescription
			},
			{
				name: "twitter:image",
				content: SHARE_META.ogImage
			},
			{
				name: "geo.region",
				content: "ZA-GP"
			},
			{
				name: "geo.placename",
				content: "Lynnwood Glen, Pretoria"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Karla:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "canonical",
				href: absoluteUrl("/")
			},
			{
				rel: "sitemap",
				type: "application/xml",
				href: "/sitemap.xml"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(webSiteSchema())
		}, {
			type: "application/ld+json",
			children: JSON.stringify(medicalBusinessSchema())
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-Hxg4bTxK.mjs");
var Route$5 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		meta: [
			{ title: "Counselling Psychologists in Lynnwood Glen, Pretoria | Neela Psychological Services" },
			{
				name: "description",
				content: "Compassionate, client-centred therapy in Lynnwood Glen, Pretoria, for adolescents, young adults, adults and couples, in person, online or in a small group."
			},
			{
				property: "og:title",
				content: "Neela Psychological Services | Therapy in Pretoria"
			},
			{
				property: "og:description",
				content: "A space for compassionate, client-centred care in Lynnwood Glen, Pretoria."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: absoluteUrl("/")
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/")
		}]
	})
});
var $$splitComponentImporter$4 = () => import("./about-s3TB50My.mjs");
var Route$4 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: "About the practice | Neela Psychological Services, Pretoria" },
			{
				name: "description",
				content: "Neela Psychological Services is a private counselling psychology practice in Lynnwood Glen, Pretoria, offering warm, evidence-based, client-centred care for adolescents, young adults, adults and couples."
			},
			{
				property: "og:title",
				content: "About Neela Psychological Services"
			},
			{
				property: "og:description",
				content: "A warm, client-centred counselling psychology practice in Lynnwood Glen, Pretoria."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: absoluteUrl("/about")
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "The Neela Psychological Services therapy room"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/about")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "About",
				path: "/about"
			}]))
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./booking-FbUpwLka.mjs");
var Route$3 = createFileRoute("/booking")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "Book a session | Neela Psychological Services, Pretoria" },
			{
				name: "description",
				content: "Request a therapy appointment in Lynnwood Glen, Pretoria, with your preferred times. Booking terms, cancellation policy and fees explained."
			},
			{
				property: "og:title",
				content: "Book a therapy session in Pretoria"
			},
			{
				property: "og:description",
				content: "Request an appointment online with your preferred times."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: absoluteUrl("/booking")
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "The Neela Psychological Services therapy room"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/booking")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Booking",
				path: "/booking"
			}]))
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./contact-DKfm0b4a.mjs");
var Route$2 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: "Contact & book | Neela Psychological Services, Lynnwood Glen" },
			{
				name: "description",
				content: "Book a therapy session in Lynnwood Glen, Pretoria, by phone, WhatsApp or a booking request online."
			},
			{
				property: "og:title",
				content: "Contact Neela Psychological Services"
			},
			{
				property: "og:description",
				content: "72 Alcade Road, Lynnwood Glen, Pretoria. Call or email to book a session."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: absoluteUrl("/contact")
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "The Neela Psychological Services therapy room"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/contact")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Contact",
				path: "/contact"
			}]))
		}]
	})
});
var $$splitComponentImporter$1 = () => import("./faq-uigjVIlg.mjs");
var Route$1 = createFileRoute("/faq")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Therapy FAQs: fees, booking & medical aid | Neela Psychological Services" },
			{
				name: "description",
				content: "Answers to 15 common questions about therapy in Lynnwood Glen, Pretoria: session fees, online therapy, medical aid claims, booking, cancellations, group sessions and confidentiality."
			},
			{
				property: "og:title",
				content: "Therapy questions answered | Neela Psychological Services"
			},
			{
				property: "og:description",
				content: "Fees, booking, medical aid, online sessions, group therapy and confidentiality — answered plainly."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: absoluteUrl("/faq")
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "The Neela Psychological Services therapy room"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/faq")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				name: "Therapy FAQs | Neela Psychological Services",
				inLanguage: "en-ZA",
				speakable: {
					"@type": "SpeakableSpecification",
					cssSelector: ["summary > span h2"]
				},
				mainEntity: FAQS.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "/"
				}, {
					"@type": "ListItem",
					position: 2,
					name: "FAQs",
					item: "/faq"
				}]
			})
		}]
	})
});
var $$splitComponentImporter = () => import("./services-YzG1NVdn.mjs");
var Route = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Therapy services & session fees | Neela Psychological Services" },
			{
				name: "description",
				content: "Individual, couple, student and group therapy in Lynnwood Glen, Pretoria, in person or online, with clear per-session fees from R550."
			},
			{
				property: "og:title",
				content: "Therapy services in Pretoria | Neela Psychological Services"
			},
			{
				property: "og:description",
				content: "Individual, couple, student and group therapy, in person or online, with clear fees."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: absoluteUrl("/services")
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "The Neela Psychological Services therapy room"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/services")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Services",
				path: "/services"
			}]))
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Therapy services",
				itemListElement: SERVICES.map((s, i) => ({
					"@type": "ListItem",
					position: i + 1,
					item: {
						"@type": "Service",
						name: s.title,
						description: s.body,
						serviceType: "Psychotherapy"
					}
				}))
			})
		}]
	})
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	BookingRoute: Route$3.update({
		id: "/booking",
		path: "/booking",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	FaqRoute: Route$1.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$6
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
