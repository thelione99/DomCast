import type { Metadata } from "next";
import { ProductContent } from "@/components/pages/ProductContent";

// Dynamic metadata generation based on product ID
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;

    // In a real app, fetch product data here
    return {
        title: `Programma Elite #${id}`,
        description: `Scopri il Programma Elite di Domcast Training. Una guida completa per trasformare il tuo fisico con piano di allenamento dettagliato, libreria video e guida nutrizionale.`,
        openGraph: {
            title: `Programma Elite | Domcast Training`,
            description: "Programma di allenamento completo per atleti intermedi e avanzati.",
            url: `https://domcast.it/shop/${id}`,
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Programma Elite",
        "description": "Una guida completa per trasformare il tuo fisico. Programma per atleti intermedi e avanzati.",
        "url": `https://domcast.it/shop/${id}`,
        "brand": { "@type": "Brand", "name": "Domcast Training" },
        "offers": {
            "@type": "Offer",
            "price": "49.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductContent productId={id} />
        </>
    );
}
