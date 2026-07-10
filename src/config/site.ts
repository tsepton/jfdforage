/**
 * Structured, non-prose site data (contact details, navigation order, brand
 * facts). Display copy lives in `src/translations/fr.js`; this file holds the
 * values that used to be hardcoded across components.
 */

export const CONTACT = {
  phoneDisplay: "+32 476 48 32 99",
  phoneHref: "tel:+32476483299",
  email: "info@jfdforage.be",
  emailHref: "mailto:info@jfdforage.be",
  addressLines: ["Rue de la Ferme 7B", "5377 Noiseux, Belgique"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rue+de+la+Ferme+7B+5377+Noiseux",
  postalAddress: {
    street: "Rue de la Ferme 7B",
    postalCode: "5377",
    city: "Noiseux",
    country: "BE",
  },
} as const;

/** Canonical site identity used for SEO metadata and structured data. */
export const SITE = {
  url: "https://jfdforage.be",
  name: "JFD forage",
  locale: "fr_BE",
  description:
    "JFD forage, entreprise spécialisée dans le forage géothermique vertical en Belgique et au Luxembourg.",
  ogImage: "/img/cover.webp",
  ogImageWidth: 1430,
  ogImageHeight: 954,
  themeColor: "#066B7F",
} as const;

export const CREDIT = {
  name: "tsepton",
  url: "http://tsepton.be",
} as const;

/** Base folder for gallery photos (filenames come from gallerie_files.json). */
export const GALLERY_PATH = "/img/gallerie/";

export type NavSection = {
  /** DOM id of the target section, also used as the anchor (`#id`). */
  id: string;
  /** Dotted key into the translator for the link label. */
  labelKey: string;
};

/** Clickable nav links (in order). "home" and "contact" are handled separately. */
export const NAV_SECTIONS: NavSection[] = [
  { id: "presentation", labelKey: "navbar.presentation" },
  { id: "geothermal", labelKey: "navbar.geothermal" },
  { id: "services", labelKey: "navbar.services" },
  { id: "permit", labelKey: "navbar.permit" },
  { id: "photo", labelKey: "navbar.pic" },
];

/** Every section id top-to-bottom, used by the scroll-spy. */
export const ALL_SECTION_IDS = [
  "home",
  "presentation",
  "geothermal",
  "services",
  "permit",
  "photo",
  "contact",
] as const;

/**
 * Year Jean-François started in the drilling trade. Experience is derived from
 * this so the figure stays accurate over time (12 years when the site launched
 * in 2022, 16 in 2026, ...).
 */
export const EXPERIENCE_SINCE_YEAR = 2010;

/** Years of drilling experience as of the given date (defaults to now). */
export function yearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - EXPERIENCE_SINCE_YEAR;
}

/** Hero stat strip (experience is computed, so it stays current). */
export function heroHighlights(): { value: string; label: string }[] {
  return [
    { value: `${yearsOfExperience()} ans`, label: "d’expérience du forage" },
    { value: "Clé sur porte", label: "du devis au raccordement" },
    { value: "Énergie renouvelable", label: "respectueuse de l’environnement" },
  ];
}
