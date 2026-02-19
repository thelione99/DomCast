import type { Metadata } from "next";
import { CoachingContent } from "@/components/pages/CoachingContent";

export const metadata: Metadata = {
    title: "Elite Coaching Online",
    description: "Candidati al programma di coaching online con Domenico Castaldo. Allenamento personalizzato, nutrizione su misura e supporto WhatsApp 24/7 per ipertrofia e dimagrimento.",
    openGraph: {
        title: "Elite Coaching Online | Domcast Training",
        description: "Coaching personalizzato con Domenico Castaldo. Programmi di allenamento, nutrizione e supporto continuo per raggiungere i tuoi obiettivi.",
        url: "https://domcast.it/coaching",
        images: [{ url: "/Dom.jpeg", width: 1200, height: 630, alt: "Domenico Castaldo - Elite Coaching Online" }],
    },
};

export default function CoachingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Elite Coaching Online",
        "provider": {
            "@type": "Person",
            "name": "Domenico Castaldo",
            "url": "https://domcast.it",
        },
        "description": "Programma di coaching online personalizzato con allenamento, nutrizione e supporto continuo.",
        "url": "https://domcast.it/coaching",
        "areaServed": "IT",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Piani Coaching",
            "itemListElement": [
                { "@type": "Offer", "name": "Mensile", "price": "130", "priceCurrency": "EUR" },
                { "@type": "Offer", "name": "Trimestrale", "price": "350", "priceCurrency": "EUR" },
                { "@type": "Offer", "name": "Semestrale", "price": "590", "priceCurrency": "EUR" },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CoachingContent />
        </>
    );
}
