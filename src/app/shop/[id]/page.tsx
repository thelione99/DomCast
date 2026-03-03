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
            images: [
                {
                    url: product.image,
                    width: 1000,
                    height: 1000,
                    alt: product.alt,
                },
            ],
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
        "image": `https://domcast.it${product.image}`,
        "url": `https://domcast.it/shop/${id}`,
        "brand": { "@type": "Brand", "name": "Domcast Training" },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.aggregateRating.toString(),
            "reviewCount": product.ratingCount.toString(),
            "bestRating": "5",
            "worstRating": "1",
        },
        "review": product.reviews.map((review) => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": review.author },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5",
                "worstRating": "1",
            },
            "reviewBody": review.body,
        })),
        "offers": {
            "@type": "Offer",
            "price": product.price.toFixed(2),
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": product.priceValidUntil,
            "url": `https://domcast.it/shop/${id}`,
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
