import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Star, ChevronDown, CheckCircle2, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section aria-label="Hero — Domcast Personal Training" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden group">
            {/* SEO: Hidden h1 for search engines — visible content uses logo + h2 */}
            <h1 className="sr-only">Domcast — Elite Personal Training e Coaching Online con Domenico Castaldo</h1>

            {/* Background Images */}
            <div className="absolute inset-0 w-full h-full">
                {/* Solid color placeholder — visible instantly in SSR */}
                <div className="absolute inset-0 bg-[#221910]" />

                <Image
                    src="/sfondo.webp"
                    alt="Atleta che si allena con pesi in palestra"
                    fill
                    sizes="100vw"
                    quality={75}
                    className="object-cover object-center opacity-60"
                    priority
                    fetchPriority="high"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221910] via-transparent to-[#221910]/60 lg:bg-gradient-to-r lg:from-[#221910] lg:via-[#221910]/80 lg:to-[#221910]/40 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#221910] to-transparent pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12 sm:pt-20 flex flex-col justify-center h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7 space-y-4 lg:space-y-6 text-center lg:text-left">

                        {/* Logo & Headline — Immediate render for LCP optimization */}
                        <div
                            className="flex flex-col items-center lg:items-start space-y-2"
                        >
                            <div className="relative w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[700px] aspect-[3/1] lg:aspect-[4/1]">
                                <Image
                                    src="/Logo_Domcast-2.png"
                                    alt="Domcast Training — Personal Trainer Domenico Castaldo"
                                    fill
                                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 500px, 700px"
                                    className="object-contain object-center lg:object-left"
                                    priority
                                    fetchPriority="high"
                                />
                            </div>

                            {/* Cursive Subtitle */}
                            <h2 className="text-5xl sm:text-6xl lg:text-8xl text-center lg:text-left text-primary font-bold leading-tight font-[family-name:var(--font-caveat)] tracking-normal">
                                &quot;Supera i tuoi limiti&quot;
                            </h2>
                        </div>

                        <p
                            className="text-base md:text-xl text-center lg:text-left text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed px-4 lg:px-0 pt-2 animate-hero-fade-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Il tuo <strong className="font-semibold text-white">Personal Trainer a Frattamaggiore</strong> e Online. Programmi di allenamento scientifici e personalizzati per scolpire il tuo fisico.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 lg:gap-4 pt-4 lg:pt-6 px-4 sm:px-0 animate-hero-fade-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base lg:text-lg bg-primary hover:bg-primary/90 text-[#221910] font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-primary/25 group"
                                asChild
                            >
                                <Link href="/coaching">
                                    Prenota una consulenza
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base lg:text-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl"
                                asChild
                            >
                                <Link href="https://www.instagram.com/domcast.coach/" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="text-primary mr-2 w-5 h-5" />
                                    Guarda come lavoro
                                </Link>
                            </Button>
                        </div>

                        {/* Social Proof / Stats */}
                        <div
                            className="pt-6 lg:pt-8 border-t border-white/10 mt-6 lg:mt-8 flex flex-row flex-wrap justify-between sm:justify-start gap-4 md:gap-12 animate-hero-fade-in"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <div className="text-center lg:text-left flex-1 min-w-[80px] sm:min-w-0 sm:flex-none">
                                <p className="text-xl sm:text-2xl lg:text-3xl tracking-tight text-white font-[family-name:var(--font-anton)]">500+</p>
                                <p className="text-[10px] lg:text-sm text-gray-400 uppercase tracking-wider font-medium">Clienti Soddisfatti</p>
                            </div>
                            <div className="text-center lg:text-left flex-1 min-w-[80px] sm:min-w-0 sm:flex-none">
                                <p className="text-xl sm:text-2xl lg:text-3xl tracking-tight text-white font-[family-name:var(--font-anton)]">13+</p>
                                <p className="text-[10px] lg:text-sm text-gray-400 uppercase tracking-wider font-medium">Anni Esperienza</p>
                            </div>
                            <div className="text-center lg:text-left flex-1 min-w-[80px] sm:min-w-0 sm:flex-none">
                                <p className="text-xl sm:text-2xl lg:text-3xl tracking-tight text-white font-[family-name:var(--font-anton)]">100%</p>
                                <p className="text-[10px] lg:text-sm text-gray-400 uppercase tracking-wider font-medium">Impegno Richiesto</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Card - Adjusted placement */}
                    <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[400px]">
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-[#221910]/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl z-20 animate-hero-fade-in"
                            style={{ animationDelay: "0.6s" }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden relative shadow-lg shadow-primary/20 bg-blue-600 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">GG</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Gregorio Gondola</h4>
                                    <div className="flex text-primary text-xs">
                                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm italic leading-relaxed">
                                &quot;Grazie alla sua professionalità e bravura siamo riusciti insieme a raggiungere grandi obbiettivi. Nulla da aggiungere, il migliore!&quot;
                            </p>
                            <div className="mt-4 flex items-center justify-between text-xs text-gray-400 border-t border-white/10 pt-3">
                                <a href="https://maps.app.goo.gl/5Hx7iDc31yjmsKGd6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors"><CheckCircle2 className="w-3 h-3 text-primary" /> Pubblicata su Google</a>
                                <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">5 mesi fa</span>
                            </div>
                        </div>

                        {/* Abstract decorative elements */}
                        <div className="absolute top-10 right-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </div >

            {/* Scroll Indicator */}
            <div aria-hidden="true" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" >
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Scorri</span>
                <ChevronDown className="text-primary w-5 h-5" />
            </div >
        </section>
    );
}
