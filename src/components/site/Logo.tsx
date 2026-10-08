import { cn } from "@/lib/utils";

/**
 * Il logo esiste solo in PNG bianco: lo usiamo come maschera così
 * prende il colore del testo (avorio nel Training, prugna nel Pilates).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("logo-mask block aspect-[1857/430]", className)}
      style={{ "--logo": "url(/Logo_Domcast-3.png)" } as React.CSSProperties}
    />
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("logo-mask block aspect-[2057/476]", className)}
      style={{ "--logo": "url(/Logo_Domcast-2.png)" } as React.CSSProperties}
    />
  );
}
