import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { products as allProducts } from "@/data/products";
import { getProductReviews, aggregateGoogleRating } from "@/data/google-reviews";

export const metadata: Metadata = {
    title: "Shop Programmi di Allenamento",
    description: "Acquista programmi di allenamento comprovati da Domenico Castaldo. Schede per definizione, forza, costruzione glutei e allenamento a casa, scaricabili istantaneamente.",
    openGraph: {
        title: "Shop | Domcast Training",
        description: "Programmi di allenamento personalizzati scaricabili istantaneamente. Definizione, forza, glutei e home fitness.",
        url: "https://domcast.it/shop",
    },
};

export default function ShopPage() {
    const products = allProducts;

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Shop Domcast Training",
            "url": "https://domcast.it/shop",
            "description": "Programmi di allenamento comprovati per ottenere risultati, scaricabili istantaneamente.",
            "mainEntity": {
                "@type": "ItemList",
                "itemListElement": products.map((product, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "Product",
                        "name": product.name,
                        "image": `https://domcast.it${product.image}`,
                        "description": product.description,
                        "brand": { "@type": "Brand", "name": "Domcast Training" },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": aggregateGoogleRating.ratingValue.toString(),
                            "reviewCount": aggregateGoogleRating.reviewCount.toString(),
                            "bestRating": "5",
                            "worstRating": "1",
                        },
                        "review": getProductReviews(product.id).map((review) => ({
                            "@type": "Review",
                            "author": { "@type": "Person", "name": review.author_name },
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": review.rating.toString(),
                                "bestRating": "5",
                                "worstRating": "1",
                            },
                            "reviewBody": review.text,
                        })),
                        "offers": {
                            "@type": "Offer",
                            "price": product.price.toFixed(2),
                            "priceCurrency": "EUR",
                            "availability": "https://schema.org/InStock",
                            "priceValidUntil": product.priceValidUntil,
                            "url": `https://domcast.it/shop/${product.id}`,
                            "hasMerchantReturnPolicy": {
                                "@type": "MerchantReturnPolicy",
                                "applicableCountry": "IT",
                                "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
                            },
                            "shippingDetails": {
                                "@type": "OfferShippingDetails",
                                "shippingRate": {
                                    "@type": "MonetaryAmount",
                                    "value": "0",
                                    "currency": "EUR",
                                },
                                "shippingDestination": {
                                    "@type": "DefinedRegion",
                                    "addressCountry": "IT",
                                },
                            },
                        },
                    },
                })),
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://domcast.it/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Shop",
                    "item": "https://domcast.it/shop"
                }
            ]
        }
    ];

    return (
        <div className="container py-20 px-4 md:px-6 max-w-screen-xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="text-center mb-20 relative">
                {/* Glow effect background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-primary/20 blur-[100px] -z-10 rounded-full" />

                <h1 className="text-6xl md:text-8xl tracking-tight uppercase mb-6 text-white font-[family-name:var(--font-anton)] drop-shadow-2xl animate-hero-fade-up">
                    IL MIO <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400 drop-shadow-none">SHOP</span>
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light opacity-0 animate-hero-fade-in" style={{ animationDelay: '0.2s' }}>
                    Programmi d'élite progettati per trasformare il tuo fisico. <br className="hidden md:block" /> Scegli il tuo percorso e inizia subito ottenere risultati reali.
                </p>
            </div>

            <div className="grid grid-cols-1 sc-md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <Card key={product.id} className="glass-card overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border-0 rounded-2xl">
                        <div className="aspect-square relative overflow-hidden bg-black/50">
                            <Image
                                src={product.image}
                                alt={product.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                                loading="lazy"
                            />
                            {/* Overlay gradient for text readability and cinematic feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                            <Badge className="absolute bottom-3 right-3 bg-primary text-black font-extrabold uppercase tracking-wider backdrop-blur-sm shadow-lg z-10 border-0 rounded-full px-3 py-1">
                                {product.category}
                            </Badge>

                            {/* Popular/Best Seller fake badge for specific products as visual flair */}
                            {product.id === 1 && (
                                <Badge className="absolute bottom-3 left-3 bg-white/90 text-black font-bold uppercase tracking-wider shadow-lg z-10 border-0 flex items-center gap-1 rounded-full px-3 py-1">
                                    <span className="text-xs">🔥</span> Top
                                </Badge>
                            )}
                            {product.id === 2 && (
                                <Badge className="absolute bottom-3 left-3 bg-white/90 text-black font-bold uppercase tracking-wider shadow-lg z-10 border-0 flex items-center gap-1 rounded-full px-3 py-1">
                                    <span className="text-xs">💪</span> Novità
                                </Badge>
                            )}
                        </div>
                        <CardHeader className="relative z-10 pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold truncate text-white uppercase font-[family-name:var(--font-anton)] tracking-wide">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 relative z-10">
                            <div className="flex items-end gap-3 mb-4">
                                <p className="text-4xl tracking-tight text-white font-[family-name:var(--font-anton)]">€{product.price.toFixed(2)}</p>
                            </div>

                            <div className="flex items-center gap-1 mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < Math.round(product.aggregateRating) ? 'fill-primary text-primary' : 'fill-gray-600 text-gray-600'}`} viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                                <span className="text-xs tracking-wider text-gray-400 font-medium ml-1">({product.ratingCount} RECENSIONI)</span>
                            </div>
                        </CardContent>
                        <CardFooter className="relative z-10 pt-0 pb-6">
                            <Button className="w-full font-bold text-lg h-12 rounded-xl bg-primary text-[#1a140e] hover:bg-white hover:text-[#1a140e] transition-colors duration-300 shadow-[0_0_15px_rgba(244,140,37,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] border-0" asChild>
                                <Link href={`/shop/${product.id}`}>Acquista Ora</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
