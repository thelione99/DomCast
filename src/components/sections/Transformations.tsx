"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { allGoogleReviews } from "@/data/google-reviews";
import { GoogleReviewCard } from "@/components/ui/GoogleReviewCard";

export function Transformations() {
    const plugin = useRef(
        Autoplay({ delay: 3500, stopOnInteraction: true })
    )

    return (
        <section className="py-24 bg-[#221910] text-white overflow-hidden relative border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-screen-xl relative z-10 mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary tracking-wider uppercase text-sm font-[family-name:var(--font-anton)]">Storie di Successo</span>
                    <h2 className="text-3xl md:text-5xl tracking-tight text-white mt-2 font-[family-name:var(--font-anton)] uppercase">
                        Risultati <span className="text-primary text-4xl md:text-6xl">Reali</span>
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
                        {allGoogleReviews.map((review, i) => (
                            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="h-full">
                                    <GoogleReviewCard review={review} />
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
