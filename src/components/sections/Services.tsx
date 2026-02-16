"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function Services() {
    const plans = [
        {
            name: "Scheda Allenamento",
            price: "49",
            priceLabel: "A partire da ",
            period: "mese",
            description: "Programma personalizzato per i tuoi obiettivi.",
            features: ["Blocco di allenamento 4 settimane", "Video dimostrativi esercizi", "App per tracciare i progressi", "Supporto via Email"],
            buttonText: "Inizia Ora",
            link: "/shop",
            popular: false,
        },
        {
            name: "Online Coaching",
            price: "130",
            period: "mese",
            description: "Guida completa e feedback settimanali.",
            features: ["Allenamento & Nutrizione Personalizzati", "Check settimanali", "Analisi video esecuzioni", "Supporto WhatsApp giornaliero", "Correzione tecnica"],
            buttonText: "Candidati",
            link: "/coaching",
            popular: true,
        },
        {
            name: "1-on-1 Training",
            price: "Lista Attesa",
            period: "",
            description: "Sessioni dal vivo per la massima precisione.",
            features: ["Sessioni private 60 min", "Feedback in tempo reale", "Guida nutrizionale inclusa", "Attrezzatura fornita", "Priorità di prenotazione"],
            buttonText: "Entra in Lista",
            link: "/contact",
            popular: false,
        },
    ];

    return (
        <section className="py-24 bg-[#1a140e] text-white relative" id="services">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container px-4 md:px-6 max-w-screen-xl relative z-10 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">I Miei Servizi</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        Scegli il Tuo <span className="text-primary font-extrabold text-4xl md:text-6xl">Percorso</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Seleziona il piano adatto al tuo stile di vita e ai tuoi obiettivi. Nessun costo nascosto, solo risultati concreti.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {plans.map((plan, index) => (
                        <Card key={index} className={`relative flex flex-col border-0 transition-transform duration-300 hover:-translate-y-2 py-2 ${plan.popular ? 'bg-[#221910] ring-1 ring-primary shadow-2xl shadow-primary/10' : 'bg-[#221910]/50'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#221910] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Più Popolare
                                </div>
                            )}
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl font-bold text-white">{plan.name}</CardTitle>
                                <CardDescription className="text-gray-400 text-sm mt-2">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 pb-6">
                                <div className="mb-6 flex items-baseline gap-1">
                                    {/* @ts-ignore */}
                                    {plan.priceLabel && <span className="text-sm text-gray-400 font-medium mr-1">{plan.priceLabel}</span>}
                                    <span className="text-4xl lg:text-5xl font-bold text-white">{plan.price !== "Lista Attesa" ? `€${plan.price}` : plan.price}</span>
                                    {plan.period && <span className="text-gray-500 text-sm">/{plan.period}</span>}
                                </div>
                                <div className="w-full h-px bg-white/5 mb-6" />
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300">
                                            <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-2">
                                <Button className={`w-full font-bold h-12 rounded-xl text-base ${plan.popular ? 'bg-primary text-[#221910] hover:bg-primary/90' : 'bg-white/5 text-white hover:bg-white/10 hover:text-primary border border-white/5'}`} asChild>
                                    <Link href={plan.link} className="flex items-center justify-center gap-2 group">
                                        {plan.buttonText}
                                        {plan.popular && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
