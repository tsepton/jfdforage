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

/** Hero stat strip. */
export const HERO_HIGHLIGHTS: { value: string; label: string }[] = [
  { value: "12 ans", label: "d’expérience du forage" },
  { value: "Clé sur porte", label: "du devis au raccordement" },
  { value: "Énergie renouvelable", label: "respectueuse de l’environnement" },
];
