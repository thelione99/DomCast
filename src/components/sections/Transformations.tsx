"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Star } from "lucide-react";

export function Transformations() {
    const plugin = useRef(
        Autoplay({ delay: 3500, stopOnInteraction: true })
    )

    const transformations = [
        { id: 1, name: "Marco", result: "-15kg in 12 settimane", image: "/assets/transform1.jpg", quote: "Non pensavo di farcela in così poco tempo." },
        { id: 2, name: "Giulia", result: "+5kg massa magra", image: "/assets/transform2.jpg", quote: "Finalmente mi vedo tonica." },
        { id: 3, name: "Luca", result: "Performance atletica", image: "/assets/transform3.jpg", quote: "I miei massimali sono esplosi." },
        { id: 4, name: "Sara", result: "Recupero post-parto", image: "/assets/transform4.jpg", quote: "Mi sento di nuovo me stessa." },
    ];

    return (
        <section className="py-24 bg-[#221910] text-white overflow-hidden relative border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-screen-xl relative z-10 mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Storie di Successo</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
                        Risultati <span className="text-primary font-extrabold text-4xl md:text-6xl">Reali</span>
                    </h2>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-6xl mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {transformations.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="h-full">
                                    <Card className="bg-transparent border-0 shadow-none h-full">
                                        <CardContent className="flex flex-col p-6 bg-[#2a2018] rounded-2xl border border-white/5 h-full relative group hover:border-primary/30 transition-colors">

                                            <div className="flex gap-1 mb-4">
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                                ))}
                                            </div>

                                            <p className="text-gray-300 italic mb-6 flex-grow leading-relaxed">
                                                &quot;{item.quote}&quot;
                                            </p>

                                            <div className="flex items-center gap-4 mt-auto">
                                                <div className="w-12 h-12 rounded-full bg-gray-700 relative overflow-hidden">
                                                    {/* Placeholder for Client Image */}
                                                    <div className="absolute inset-0 bg-gray-600 flex items-center justify-center text-xs font-bold text-gray-400">IMG</div>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white text-lg leading-none">{item.name}</h3>
                                                    <p className="text-sm text-primary font-medium mt-1">{item.result}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:flex justify-end gap-2 mt-8 pr-4">
                        <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 hover:bg-primary hover:text-[#221910] hover:border-primary" />
                        <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 hover:bg-primary hover:text-[#221910] hover:border-primary" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
