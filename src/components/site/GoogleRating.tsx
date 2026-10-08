import { Star } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function GoogleRating({ className }: { className?: string }) {
  const rating = site.google.rating.toLocaleString("it-IT", { minimumFractionDigits: 1 });
  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group inline-flex items-center gap-2.5 text-[0.9375rem] text-muted no-underline", className)}
    >
      <span className="flex gap-0.5 text-spark" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-4 fill-current" strokeWidth={0} />
        ))}
      </span>
      <span className="group-hover:text-ink">
        <strong className="font-semibold text-ink">{rating}</strong> su Google ·{" "}
        <span className="underline decoration-line-strong underline-offset-4 group-hover:decoration-current">
          {site.google.reviewCount} recensioni
        </span>
      </span>
    </a>
  );
}
