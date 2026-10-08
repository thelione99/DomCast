"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Review } from "@/content/reviews";

export function ReviewRail({ reviews, label }: { reviews: Review[]; label: string }) {
  const rail = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    const node = rail.current;
    if (!node) return;
    const item = node.firstElementChild as HTMLElement | null;
    const step = item ? item.offsetWidth + parseFloat(getComputedStyle(node).columnGap || "0") : node.clientWidth;
    node.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div>
      <div className="container-x mb-6 hidden justify-end gap-2 md:flex">
        <button type="button" onClick={() => scroll(-1)} aria-label="Recensione precedente" className="btn btn-secondary size-12 min-h-12 px-0">
          <ArrowLeft aria-hidden className="size-5" />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Recensione successiva" className="btn btn-secondary size-12 min-h-12 px-0">
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>
      <ul ref={rail} className="rail" aria-label={label} tabIndex={0}>
        {reviews.map((review) => (
          <li key={review.author}>
            <figure className="flex h-full flex-col border-t border-line-strong pt-6">
              <blockquote className="t-quote flex-1 text-[1.0625rem] text-ink/90">{review.text}</blockquote>
              <figcaption className="mt-6 text-[0.9375rem]">
                <span className="font-semibold">{review.author}</span>
                <span className="text-muted"> · Google</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
