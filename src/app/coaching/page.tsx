"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send } from "lucide-react";

export default function CoachingPage() {
    return (
        <div className="min-h-screen bg-[#221910] text-white pt-24 pb-20">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary tracking-wider uppercase text-sm font-[family-name:var(--font-anton)]">Candidatura ESCLUSIVA</span>
                    <h1 className="text-4xl md:text-6xl tracking-tight text-white mb-4 mt-2 font-[family-name:var(--font-anton)] uppercase">
                        Elite <span className="text-primary text-5xl md:text-7xl">Coaching</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed font-light">
                        Strategie personalizzate costruite attorno al tuo stile di vita e ai tuoi obiettivi unici.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Info Side */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white">Perché il Coaching Online?</h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                Non ricevi solo una scheda di allenamento. Hai un coach al tuo angolo 24/7. Analizziamo la tua tecnica, adattiamo la tua nutrizione e ti manteniamo responsabile in ogni passo del percorso.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">Cosa è incluso:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Programma di Allenamento Personalizzato",
                                    "Protocollo Nutrizionale Su Misura",
                                    "Check Settimanali & Adattamenti",
                                    "Supporto WhatsApp 24/7",
                                    "Analisi Tecnica Video",
                                    "Accesso alla Community Privata"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-300 text-lg">
                                        <div className="bg-primary/10 p-1 rounded-full mr-4">
                                            <Check className="h-5 w-5 text-primary" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 bg-[#2a2018] rounded-2xl border border-white/5">
                            <p className="text-gray-400 italic">
                                "Il miglior investimento che abbia mai fatto per la mia salute. Domenico non ti lascia mai solo."
                            </p>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="w-10 h-10 rounded-full bg-gray-700" />
                                <div>
                                    <p className="font-bold text-white text-sm">Alessandro B.</p>
                                    <p className="text-xs text-primary">Cliente da 6 mesi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact/Booking Form */}
                    <Card className="bg-[#2a2018] border-white/5 shadow-2xl shadow-black/20 order-1 lg:order-2">
                        <CardHeader className="pb-6 border-b border-white/5">
                            <CardTitle className="text-2xl font-bold uppercase text-white">Invia la tua candidatura</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name" className="text-gray-400">Nome</Label>
                                        <Input id="first-name" placeholder="Mario" className="bg-[#221910] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name" className="text-gray-400">Cognome</Label>
                                        <Input id="last-name" placeholder="Rossi" className="bg-[#221910] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-gray-400">Email</Label>
                                    <Input id="email" placeholder="mario@esempio.it" type="email" className="bg-[#221910] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="goal" className="text-gray-400">Obiettivo Principale</Label>
                                    <Input id="goal" placeholder="Perdita peso, Ipertrofia, etc." className="bg-[#221910] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-gray-400">Parlami di te</Label>
                                    <Textarea id="message" placeholder="Routine attuale, infortuni, esperienza..." className="bg-[#221910] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 min-h-[120px]" />
                                </div>
                                <Button type="submit" className="w-full font-bold text-lg bg-primary text-[#221910] hover:bg-primary/90 h-14 rounded-xl" size="lg">
                                    Invia Candidatura <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
