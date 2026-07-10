import Head from "next/head";
import { CONTACT, SITE } from "@/config/site";

const TITLE = "JFD forage — Forage géothermique en Belgique & Luxembourg";
const KEYWORDS =
  "JFD, jfdforage, géothermique, puit, forage, pompe à chaleur, géothermie, forage géothermique, géothermie verticale, chaleur du sol";

const abs = (path: string) => `${SITE.url}${path}`;

/** LocalBusiness structured data, built from the shared site/contact config. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  name: SITE.name,
  url: SITE.url,
  logo: abs("/img/logo.webp"),
  image: abs(SITE.ogImage),
  description: SITE.description,
  telephone: CONTACT.phoneHref.replace("tel:", ""),
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.postalAddress.street,
    postalCode: CONTACT.postalAddress.postalCode,
    addressLocality: CONTACT.postalAddress.city,
    addressCountry: CONTACT.postalAddress.country,
  },
  areaServed: ["Belgique", "Luxembourg"],
  founder: { "@type": "Person", name: "Jean-François" },
};

export default function Seo() {
  const canonical = `${SITE.url}/`;
  const ogImage = abs(SITE.ogImage);

  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={SITE.description} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={SITE.themeColor} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/img/logo-squared.webp" />
      <link rel="apple-touch-icon" href="/img/logo-squared.webp" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={SITE.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content={String(SITE.ogImageWidth)} />
      <meta property="og:image:height" content={String(SITE.ogImageHeight)} />
      <meta
        property="og:image:alt"
        content="Chantier de forage géothermique JFD forage"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={SITE.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
