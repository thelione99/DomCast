import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
    title: "Contattami",
    description: "Contatta Domenico Castaldo per informazioni su coaching online, schede di allenamento personalizzate e programmi di fitness. Risposta garantita entro 24 ore.",
    openGraph: {
        title: "Contatta Domcast Training",
        description: "Hai domande su coaching o allenamento? Scrivimi e ti rispondo entro 24 ore.",
        url: "https://domcast.it/contact",
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contatta Domcast Training",
        "url": "https://domcast.it/contact",
        "mainEntity": {
            "@type": "Person",
            "name": "Domenico Castaldo",
            "email": "info@domcast.it",
            "jobTitle": "Personal Trainer",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContactContent />
        </>
    );
}
