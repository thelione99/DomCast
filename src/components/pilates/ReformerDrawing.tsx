import { cn } from "@/lib/utils";

/**
 * Reformer visto di lato, disegnato a linea continua.
 * Il carrello scorre e le molle si allungano a ritmo di respiro (CSS, nessun JS).
 * Le molle hanno i colori delle molle vere, che sul reformer indicano la resistenza.
 */

const SPRING_START = 114;
const SPRING_END = 178;
const TRAVEL = 120;
const STRETCH = (SPRING_END - SPRING_START + TRAVEL) / (SPRING_END - SPRING_START);

function springPath(y: number) {
  const step = 4;
  const amp = 3;
  let d = `M${SPRING_START} ${y}`;
  for (let x = SPRING_START + step, i = 0; x <= SPRING_END; x += step, i++) {
    d += ` L${x} ${y + (i % 2 === 0 ? -amp : amp)}`;
  }
  return d;
}

const springs = [
  { y: 150, color: "#c4245a" },
  { y: 158, color: "#d9971f" },
  { y: 166, color: "#3f67ad" },
];

export function ReformerDrawing({ className, labels = true }: { className?: string; labels?: boolean }) {
  return (
    <figure className={cn("relative", className)}>
      {labels && (
        // Le parole del respiro stanno sopra le molle, che sono ciò che si allunga.
        <figcaption aria-hidden className="pointer-events-none absolute bottom-[48%] left-[16%] w-[14%]">
          <span className="relative block h-6">
            <span className="breath-in t-label absolute inset-x-0 text-center tracking-[0.18em] text-muted">espira</span>
            <span className="breath-out t-label absolute inset-x-0 text-center tracking-[0.18em] text-muted">inspira</span>
          </span>
        </figcaption>
      )}
      <svg
        viewBox="0 44 640 184"
        role="img"
        aria-label="Disegno di un reformer: il carrello scorre sui binari e le molle si allungano"
        className="h-auto w-full overflow-visible [&_*]:[vector-effect:non-scaling-stroke]"
        style={{ "--travel": `${TRAVEL}px`, "--stretch": STRETCH } as React.CSSProperties}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* pavimento */}
        <path d="M14 222 H626" strokeOpacity={0.22} />

        {/* gambe */}
        <path d="M76 196 V214 M62 216 H92" />
        <path d="M564 196 V214 M550 216 H580" />

        {/* telaio, con i tappi dei binari */}
        <rect x={40} y={176} width={560} height={20} rx={10} />
        <path d="M60 186 H580" strokeOpacity={0.3} />
        <path d="M50 181 V191 M590 181 V191" strokeOpacity={0.45} />

        {/* footbar con imbottitura */}
        <path d="M60 176 C62 150 72 124 86 106" />
        <path d="M70 176 C72 152 80 128 92 112" strokeOpacity={0.35} />
        <circle cx={90} cy={98} r={10} fill="var(--raised)" />
        <circle cx={90} cy={98} r={4} strokeOpacity={0.5} />

        {/* barra delle molle con i ganci */}
        <rect x={102} y={142} width={12} height={32} rx={6} fill="var(--raised)" />
        {springs.map((spring) => (
          <circle key={spring.y} cx={114} cy={spring.y} r={1.6} fill="currentColor" stroke="none" />
        ))}

        {/* molle */}
        <g className="reformer-spring" style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}>
          {springs.map((spring) => (
            <path key={spring.y} d={springPath(spring.y)} stroke={spring.color} strokeWidth={2.2} />
          ))}
        </g>

        {/* carrello: imbottitura, poggiaspalle, poggiatesta, rotelle, maniglie */}
        <g className="reformer-carriage">
          <circle cx={200} cy={174} r={3.5} fill="var(--bg)" />
          <circle cx={390} cy={174} r={3.5} fill="var(--bg)" />
          <rect x={178} y={138} width={236} height={34} rx={12} fill="var(--raised)" />
          <path d="M198 155 H394" strokeOpacity={0.25} />
          <rect x={344} y={110} width={14} height={30} rx={7} strokeOpacity={0.4} />
          <rect x={354} y={106} width={14} height={34} rx={7} fill="var(--raised)" />
          <path d="M384 140 L388 126 Q390 120 396 120 H414 Q420 120 420 126 V140" fill="var(--raised)" />
        </g>

        {/* montanti, pulegge e corde */}
        <path d="M594 176 V68" />
        <path d="M604 176 V76" strokeOpacity={0.35} />
        <circle cx={594} cy={60} r={8} fill="var(--raised)" />
        <circle cx={594} cy={60} r={2.5} strokeOpacity={0.5} />
        <path d="M601 64 C612 92 612 122 604 140" />
        <rect x={596} y={140} width={14} height={24} rx={7} />
      </svg>
    </figure>
  );
}
