"use client";
import React from 'react';

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function Services() {
    const [coachingDuration, setCoachingDuration] = React.useState<1 | 3 | 6>(3);

    const coachingPricing = {
        1: { price: "129.99", period: "mese", savings: 0, label: "Mensile", fullPrice: 130 },
        3: { price: "349.99", period: "3 mesi", savings: 40, label: "Trimestrale", fullPrice: 390 },
        6: { price: "589.99", period: "6 mesi", savings: 190, label: "Semestrale", fullPrice: 780 }
    };

    const plans = [
        {
            name: "Scheda Allenamento",
            price: "49.99",
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
            // Dynamic properties handled in render
            isDynamic: true,
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
                    <span className="text-primary tracking-wider uppercase text-sm font-[family-name:var(--font-anton)]">I Miei Servizi</span>
                    <h2 className="text-3xl md:text-5xl tracking-tight text-white font-[family-name:var(--font-anton)] uppercase">
                        Scegli il Tuo <span className="text-primary text-4xl md:text-6xl">Percorso</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Seleziona il piano adatto al tuo stile di vita e ai tuoi obiettivi. Nessun costo nascosto, solo risultati concreti.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {plans.map((plan, index) => {
                        const isCoaching = plan.name === "Online Coaching";
                        const currentPrice = isCoaching ? coachingPricing[coachingDuration].price : plan.price;
                        const currentPeriod = isCoaching ? coachingPricing[coachingDuration].period : plan.period;
                        const savings = isCoaching ? coachingPricing[coachingDuration].savings : 0;
                        const fullPrice = isCoaching ? coachingPricing[coachingDuration].fullPrice : 0;
                        const monthlyPrice = isCoaching ? Math.round(parseInt(coachingPricing[coachingDuration].price) / coachingDuration) : null;

                        return (
                            <Card key={index} className={`relative flex flex-col border-0 transition-transform duration-300 hover:-translate-y-2 py-8 px-6 ${plan.popular ? 'bg-[#221910] ring-1 ring-primary shadow-2xl shadow-primary/10' : 'bg-[#221910]/50'}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#221910] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg z-10">
                                        Più Popolare
                                    </div>
                                )}
                                <CardHeader className="pb-6 p-0">
                                    <CardTitle className="text-xl font-bold text-white transition-all duration-300">{plan.name}</CardTitle>
                                    <CardDescription className="text-gray-400 text-sm mt-1 mb-2">{plan.description}</CardDescription>

                                    {isCoaching && (
                                        <div className="flex bg-[#1a140e] p-1.5 rounded-lg mt-6 mb-4 border border-white/5">
                                            {[1, 3, 6].map((duration) => (
                                                <button
                                                    key={duration}
                                                    onClick={() => setCoachingDuration(duration as 1 | 3 | 6)}
                                                    className={`flex-1 py-2 text-xs font-medium rounded-md transition-all duration-300 ${coachingDuration === duration
                                                        ? "bg-primary text-[#221910] shadow-sm"
                                                        : "text-gray-400 hover:text-white"
                                                        }`}
                                                >
                                                    {duration === 1 ? '1 Mese' : `${duration} Mesi`}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </CardHeader>
                                <CardContent className="flex-1 pb-8">
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-1">
                                            {/* @ts-ignore */}
                                            {plan.priceLabel && <span className="text-sm text-gray-400 font-medium mr-1">{plan.priceLabel}</span>}
                                            <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight transition-all duration-300">
                                                {currentPrice !== "Lista Attesa" ? `€${currentPrice}` : currentPrice}
                                            </span>
                                            {currentPeriod && <span className="text-gray-500 text-sm font-medium">/{currentPeriod}</span>}
                                        </div>

                                        {isCoaching && (
                                            <div className="flex flex-col mt-2 space-y-1">
                                                <div className="flex items-center gap-2 text-sm">
                                                    {savings > 0 && (
                                                        <span className="text-gray-500 line-through decoration-red-500/50 decoration-1 text-xs">
                                                            €{fullPrice}
                                                        </span>
                                                    )}
                                                    {monthlyPrice && coachingDuration > 1 && (
                                                        <span className="text-gray-400 text-xs">
                                                            (€{monthlyPrice}/mese)
                                                        </span>
                                                    )}
                                                </div>
                                                {savings > 0 && (
                                                    <span className="text-primary text-xs font-bold uppercase tracking-wide bg-primary/10 w-fit px-2 py-0.5 rounded">
                                                        Risparmi €{savings}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full h-px bg-white/5 mb-6" />
                                    <ul className="space-y-5">
                                        {plan.features.map((feature, i) => {
                                            const coachingEmojis = ["🏋️‍♂️", "📈", "🎥", "📱", "⚙️"];
                                            return (
                                                <li key={i} className="flex items-start text-sm text-gray-300">
                                                    {isCoaching ? (
                                                        <span className="text-lg mr-3 flex-shrink-0 -mt-0.5">{coachingEmojis[i] || "✅"}</span>
                                                    ) : (
                                                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                                    )}
                                                    <span className="leading-snug">{feature}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-4">
                                    <Button className={`w-full font-bold h-12 rounded-xl text-base transition-all duration-300 ${plan.popular ? 'bg-primary text-[#221910] hover:bg-primary/90' : 'bg-white/5 text-white hover:bg-white/10 hover:text-primary border border-white/5'}`} asChild>
                                        <Link href={isCoaching ? `${plan.link}?durata=${coachingDuration}` : plan.link} className="flex items-center justify-center gap-2 group">
                                            {plan.buttonText}
                                            {plan.popular && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
