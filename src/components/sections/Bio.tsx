"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function Bio() {
    return (
        <section className="py-12 sm:py-24 lg:py-32 mt-0 lg:-mt-20 relative z-10 bg-[#221910] text-white overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_150px,black_100%)]">
            {/* Background Texture/Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 max-w-screen-xl relative z-10 mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center space-y-8 lg:order-1 order-2"
                    >
                        <div className="space-y-2">
                            <span className="text-primary tracking-wider uppercase text-sm font-[family-name:var(--font-anton)]">Il tuo Coach</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight font-[family-name:var(--font-anton)] uppercase">
                                Domenico <br /> <span className="text-primary text-5xl md:text-6xl lg:text-7xl">Castaldo</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                Ciao sono <strong className="text-white font-medium">Domenico Castaldo</strong>, un Personal Trainer con più di 13 anni di esperienza nel settore fitness, specialista certificato di forza, condizionamento e nutrizione.
                            </p>
                            <p>
                                Il fitness è ciò che mi spinge ogni giorno a raggiungere nuove vette. Il mio obiettivo da coach è costruire programmi di allenamento personalizzati, supportandoti costantemente durante il percorso che cominceremo insieme!
                            </p>
                            <p className="italic text-primary/90 font-medium border-l-2 border-primary pl-4 py-1">
                                "Non è mai troppo tardi per essere ciò che avresti voluto essere"
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                            <div className="space-y-1">
                                <h3 className="text-4xl tracking-tight text-white font-[family-name:var(--font-anton)]">13+</h3>
                                <p className="text-xs text-primary uppercase tracking-wider font-medium">Anni di Esperienza</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-4xl tracking-tight text-white font-[family-name:var(--font-anton)]">500+</h3>
                                <p className="text-xs text-primary uppercase tracking-wider font-medium">Vite Trasformate</p>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <Button className="bg-white text-[#221910] hover:bg-gray-200 font-bold px-8 py-6 rounded-xl text-lg w-full sm:w-auto" asChild>
                                <Link href="/coaching">Inizia il tuo percorso</Link>
                            </Button>
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl text-lg w-full sm:w-auto" asChild>
                                <Link href="/qualifiche">Scopri le MIE Qualifiche</Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto w-full max-w-md lg:max-w-full aspect-[3/4] lg:order-2 order-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 z-0" />
                        <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 bg-[#2a2018] z-10 border border-white/5 group">
                            <Image
                                src="/Dom.jpeg"
                                alt="Domenico Castaldo, Personal Trainer a Frattamaggiore, Napoli, Campania"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={80}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Floating badge */}
                            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl max-w-[200px]">
                                <div className="flex items-center gap-2 mb-1">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-sm">Certificato ISSA</span>
                                </div>
                                <p className="text-xs text-gray-300">Personal Trainer Qualificato</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
