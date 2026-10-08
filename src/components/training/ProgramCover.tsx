import type { Program } from "@/content/offer";
import { LogoMark } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

/**
 * Copertina della scheda: una collana tipografica coerente,
 * al posto delle foto stock. L'obiettivo occupa la copertina.
 */
export function ProgramCover({ program, className }: { program: Program; className?: string }) {
  // La parola occupa sempre la larghezza utile della copertina, qualunque sia la sua lunghezza.
  const goalSize = `min(17cqi, ${(84 / (program.goal.length * 0.86)).toFixed(2)}cqi)`;
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[6px] bg-raised p-[7%] [container-type:inline-size]",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <LogoMark className="h-[5cqi] text-ink/80" />
        <span className="tabular text-[4.2cqi] font-semibold text-muted [font-stretch:112%]">4 SETT.</span>
      </div>
      <div>
        <span className="mb-[4cqi] block h-[1.2cqi] w-[18cqi] bg-accent" />
        <p className="t-display leading-[0.9]" style={{ fontSize: goalSize }}>
          {program.goal}
        </p>
      </div>
    </div>
  );
}
