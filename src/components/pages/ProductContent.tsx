"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Check, ArrowLeft, MessageCircle } from "lucide-react";
import { getProductById } from "@/data/products";
interface ProductContentProps {
    productId: string;
}

export function ProductContent({ productId }: ProductContentProps) {
    const product = getProductById(productId);

    if (!product) {
        return <div>Prodotto non trovato</div>;
    }

    const mockFeatures = [
        "Piano dettagliato della scheda",
        "Video esecuzione esercizi",
        "App per tracciare i progressi",
        "Suggerimenti sull'intensità"
    ];

    const whatsappMessage = encodeURIComponent(`Ciao Domenico, sono interessato al pacchetto: ${product.name}`);
    const whatsappUrl = `https://wa.me/393924683142?text=${whatsappMessage}`;

    return (
        <div className="container py-20 px-4 md:px-6 max-w-screen-xl mx-auto">
            <Link href="/shop" className="flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Torna allo Shop
            </Link>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="aspect-square bg-muted rounded-xl relative flex items-center justify-center border border-border">
                    <span className="text-muted-foreground font-bold text-xl">IMMAGINE PRODOTTO {productId}</span>
                    <Badge className="absolute top-4 right-4 bg-primary text-black font-bold text-lg">
                        Più Venduto
                    </Badge>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">{product.name}</h1>
                        <p className="text-2xl font-bold text-primary">€{product.price.toFixed(2)}</p>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {product.description}
                    </p>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Cosa è Incluso:</h2>
                        <ul className="space-y-3">
                            {mockFeatures.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <span className="mr-3 flex-shrink-0 text-lg">✅</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button size="lg" className="w-full font-bold text-lg mt-8 bg-green-600 hover:bg-green-700 text-white border-0 shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] transition-all" asChild>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-5 w-5" /> Richiedi su WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
