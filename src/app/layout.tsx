import type { Metadata, Viewport } from "next";
import { Lexend, Caveat, Anton } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700", "800"]
});



const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"]
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

export const viewport: Viewport = {
  themeColor: "#f48c25",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://domcast.it'), // Replace with actual domain when live
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    default: "Domcast | Elite Personal Training & Online Coaching",
    template: "%s | Domcast Training"
  },
  description: "Trasforma il tuo corpo con Domenico Castaldo. Programmi di allenamento personalizzati, nutrizione sportiva e coaching online per ipertrofia e dimagrimento.",
  keywords: ["Personal Trainer", "Online Coaching", "Scheda Allenamento", "Ipertrofia", "Dimagrimento", "Allenamento Forza", "Costruzione Glutei", "Allenamento a Casa", "Domenico Castaldo", "Domcast", "Fitness Italia", "Personal Trainer Online"],
  authors: [{ name: "Domenico Castaldo" }],
  creator: "Domenico Castaldo",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://domcast.it",
    title: "Domcast | Supera i tuoi limiti",
    description: "Coaching online d'élite e programmi di allenamento su misura. Inizia la tua trasformazione oggi.",
    siteName: "Domcast Training",
    images: [
      {
        url: "/Dom.jpeg", // Using the coach image as OG image for now
        width: 1200,
        height: 630,
        alt: "Domenico Castaldo - Domcast Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domcast | Elite Personal Training",
    description: "Trasforma il tuo fisico e la tua mente. Coaching personalizzato per risultati reali.",
    images: ["/Dom.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Tt39x11mhUVXOTHtTkGRe_dz4tWf2MyTWHvVKjlk6nU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    "name": "Domenico Castaldo",
    "alternateName": "Domcast",
    "url": "https://domcast.it",
    "image": "https://domcast.it/Dom.jpeg",
    "jobTitle": "Personal Trainer Certificato ISSA",
    "description": "Personal Trainer con oltre 13 anni di esperienza, specialista certificato in forza, condizionamento e nutrizione sportiva. Coaching online e schede personalizzate per ipertrofia e dimagrimento.",
    "knowsAbout": [
      "Personal Training",
      "Ipertrofia Muscolare",
      "Dimagrimento",
      "Nutrizione Sportiva",
      "Forza e Condizionamento",
      "Coaching Online"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Italia"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Massimo Stanzione, 4",
      "addressLocality": "Frattamaggiore",
      "postalCode": "80027",
      "addressRegion": "NA",
      "addressCountry": "IT"
    },
    "priceRange": "€€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Domcast Training",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Schede Allenamento",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scheda Allenamento Personalizzata" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Online Coaching",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Coaching Elite" } }
          ]
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/domcast.coach/",
      "https://www.facebook.com/domcastfit/"
    ]
  };

  return (
    <html lang="it" className="dark" style={{ backgroundColor: '#1a140e' }}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lexend.variable} ${caveat.variable} ${anton.variable} font-display antialiased flex flex-col min-h-screen bg-background text-foreground`} style={{ backgroundColor: '#1a140e', color: '#ffffff' }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2B12KM11FY"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2B12KM11FY');
          `}
        </Script>
        <Navbar isFixed={true} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
