import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { reviews, reviewBy } from "@/content/reviews";
import { ReviewRail } from "@/components/site/ReviewRail";

export function Reviews() {
  const featured = reviewBy("Arianna Rubino");
  const others = reviews.filter((r) => r.author !== featured.author && r.author !== "Nina Lidia Moccia");

  return (
    <section id="risultati" className="section-y overflow-hidden">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <h2 className="t-display text-[clamp(2rem,3.6vw,3.25rem)] lg:col-span-5">Lo scrivono loro</h2>
        <figure className="lg:col-span-7">
          <blockquote className="t-quote text-[clamp(1.5rem,3vw,2.375rem)] leading-[1.22] text-ink">
            &ldquo;{featured.pull}&rdquo;
          </blockquote>
          <figcaption className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9375rem] text-muted">
            <span>
              <span className="font-semibold text-ink">{featured.author}</span> · Google
            </span>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink underline decoration-line-strong underline-offset-4 hover:decoration-current"
            >
              Tutte le {site.google.reviewCount} recensioni
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </figcaption>
        </figure>
      </div>

      <div className="mt-16">
        <ReviewRail reviews={others} label="Recensioni Google" />
      </div>
    </section>
  );
}
