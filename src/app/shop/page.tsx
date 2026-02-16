import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ShopPage() {
    const products = [
        {
            id: 1,
            name: "Definizione 4 Settimane",
            price: 49.00,
            category: "Dimagrimento",
            image: "placeholder-1",
        },
        {
            id: 3,
            name: "Costruzione Glutei",
            price: 59.00,
            category: "Specializzato",
            image: "placeholder-3",
        },
        {
            id: 4,
            name: "Guida Allenamento a Casa",
            price: 49.00,
            category: "Home Fitness",
            image: "placeholder-4",
        },
    ];

    return (
        <div className="container py-20 px-4 md:px-6 max-w-screen-xl">
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
