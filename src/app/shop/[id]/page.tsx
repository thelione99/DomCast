import type { Metadata } from "next";
import { ProductContent } from "@/components/pages/ProductContent";
import { getProductById } from "@/data/products";

// Dynamic metadata generation based on product ID
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return {
            title: "Prodotto non trovato",
        };
    }

    return {
        title: `${product.name} | Domcast Training`,
        description: product.description,
        openGraph: {
            title: `${product.name} | Domcast Training`,
            description: product.description,
            url: `https://domcast.it/shop/${id}`,
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return <div>Prodotto non trovato</div>;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "url": `https://domcast.it/shop/${id}`,
        "brand": { "@type": "Brand", "name": "Domcast Training" },
        "offers": {
            "@type": "Offer",
            "price": product.price.toFixed(2),
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
