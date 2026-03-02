import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { products as allProducts } from "@/data/products";

export const metadata: Metadata = {
    title: "Shop Programmi di Allenamento",
    description: "Acquista programmi di allenamento comprovati da Domenico Castaldo. Schede per dimagrimento, ipertrofia e allenamento a casa, scaricabili istantaneamente.",
    openGraph: {
        title: "Shop | Domcast Training",
        description: "Programmi di allenamento personalizzati scaricabili istantaneamente. Dimagrimento, ipertrofia e home fitness.",
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
                        "offers": {
                            "@type": "Offer",
                            "price": product.price.toFixed(2),
                            "priceCurrency": "EUR",
                            "availability": "https://schema.org/InStock",
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
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl tracking-tighter uppercase mb-4 text-white font-[family-name:var(--font-anton)]">
                    Il Mio <span className="text-primary">Shop</span>
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                    Programmi comprovati per ottenere risultati, scaricabili istantaneamente.
                </p>
            </div>

            <div className="grid grid-cols-1 sc-md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden bg-card border-border flex flex-col">
                        <div className="aspect-square bg-muted relative flex items-center justify-center group">
                            <span className="text-muted-foreground font-bold group-hover:scale-110 transition-transform duration-300">
                                PRODUCT IMAGE
                            </span>
                            <Badge className="absolute top-2 right-2 bg-primary text-black font-bold">
                                {product.category}
                            </Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg font-bold truncate">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-2xl tracking-tight text-white font-[family-name:var(--font-anton)]">€{product.price.toFixed(2)}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full font-bold" asChild>
                                <Link href={`/shop/${product.id}`}>Acquista Ora</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
