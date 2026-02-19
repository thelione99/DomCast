"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";

interface ProductContentProps {
    productId: string;
}

export function ProductContent({ productId }: ProductContentProps) {
    // Mock data fetch based on ID
    const product = {
        id: productId,
        name: "Programma Elite",
        price: 49.00,
        description: "Una guida completa per trasformare il tuo fisico. Questo programma è progettato per atleti intermedi e avanzati che vogliono superare i propri limiti.",
        features: [
            "Piano dettagliato di 4 settimane",
            "Accesso alla libreria video",
            "Guida nutrizionale",
            "Tracciamento tramite app"
        ]
    };

    return (
        <div className="container py-20 px-4 md:px-6 max-w-screen-xl">
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
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <Check className="h-5 w-5 text-primary mr-3" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button size="lg" className="w-full font-bold text-lg mt-8">Aggiungi al Carrello</Button>
                </div>
            </div>
        </div>
    );
}
