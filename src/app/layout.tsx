import type { Metadata, Viewport } from "next";
import { Lexend, Dancing_Script, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700", "800"]
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: ["400", "700"]
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"]
});

export const viewport: Viewport = {
  themeColor: "#f48c25",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://domcast.it'), // Replace with actual domain when live
  title: {
    default: "Domcast | Elite Personal Training & Online Coaching",
    template: "%s | Domcast Training"
  },
  description: "Trasforma il tuo corpo con Domenico Castaldo. Programmi di allenamento personalizzati, nutrizione sportiva e coaching online per ipertrofia e dimagrimento.",
  keywords: ["Personal Trainer", "Online Coaching", "Scheda Allenamento", "Ipertrofia", "Dimagrimento", "Domenico Castaldo", "Domcast", "Fitness Italia"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Domenico Castaldo",
    "alternateName": "Domcast",
    "url": "https://domcast.it",
    "image": "https://domcast.it/Dom.jpeg",
    "jobTitle": "Personal Trainer",
    "description": "Specialista in forza, condizionamento e nutrizione sportiva con oltre 13 anni di esperienza.",
    "sameAs": [
      "https://instagram.com", // Add actual links
      "https://facebook.com"
    ]
  };

  return (
    <html lang="it" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lexend.variable} ${dancingScript.variable} ${caveat.variable} font-display antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <Navbar isFixed={true} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
