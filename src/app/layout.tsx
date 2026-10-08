import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";
import { coaching, programs } from "@/content/offer";
import { formatEUR } from "@/lib/format";
import { Analytics } from "@/components/consent/Analytics";
import { WorldWashListener } from "@/components/world/WorldWashListener";

const archivo = localFont({
  src: "../../node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const viewport: Viewport = {
  themeColor: "#0f0d0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Domcast · Personal trainer a Frattamaggiore e online",
    template: "%s · Domcast",
  },
  description:
    "Domenico Castaldo, personal trainer laureato in Scienze Motorie: allenamento su misura nello studio di Frattamaggiore (NA), coaching online e Pilates Reformer.",
  applicationName: "Domcast",
  authors: [{ name: site.coach }],
  creator: site.coach,
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Domcast",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: "Tt39x11mhUVXOTHtTkGRe_dz4tWf2MyTWHvVKjlk6nU",
  },
};

const prices = [...programs.map((p) => p.price), ...Object.values(coaching.prices)];

/** Sito, studio e Domenico in un unico grafo: le pagine li richiamano con gli `@id`. */
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.brand,
      alternateName: site.googleBusinessName,
      url: site.url,
      inLanguage: "it-IT",
      publisher: { "@id": `${site.url}/#studio` },
    },
    {
      "@type": "ExerciseGym",
      "@id": `${site.url}/#studio`,
      name: site.googleBusinessName,
      alternateName: site.brand,
      description: metadata.description,
      url: site.url,
      logo: `${site.url}/apple-icon`,
      image: [`${site.url}/sfondo.webp`, `${site.url}/Dom.jpeg`],
      email: site.email,
      telephone: site.phoneDisplay.replace(/\s/g, ""),
      priceRange: `${formatEUR(Math.min(...prices))} – ${formatEUR(Math.max(...prices))}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        postalCode: site.address.postalCode,
        addressRegion: site.address.province,
        addressCountry: site.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
      hasMap: site.mapsCidUrl,
      areaServed: [site.address.city, ...site.nearbyTowns].map((name) => ({ "@type": "City", name })),
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.openingHoursSpec.days,
        opens: site.openingHoursSpec.opens,
        closes: site.openingHoursSpec.closes,
      },
      sameAs: [site.instagram.url, site.facebook.url, site.mapsCidUrl],
      founder: { "@id": `${site.url}/#domenico` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#domenico`,
      name: site.coach,
      jobTitle: "Personal trainer",
      url: `${site.url}/qualifiche`,
      image: `${site.url}/Dom.jpeg`,
      worksFor: { "@id": `${site.url}/#studio` },
      sameAs: [site.instagram.url],
      hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Laurea in Scienze Motorie" },
      knowsAbout: ["Personal training", "Forza e condizionamento", "Ricomposizione corporea", "Pilates Reformer", "Coaching online"],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={archivo.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        {children}
        <WorldWashListener />
        <Analytics />
      </body>
    </html>
  );
}
