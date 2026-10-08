/** Una molla del reformer, nel colore della sua resistenza. */
export function SpringGlyph({ color }: { color: string }) {
  let d = "M2 8";
  for (let x = 6, i = 0; x <= 46; x += 4, i++) d += ` L${x} ${i % 2 === 0 ? 3 : 13}`;
  d += " L50 8";
  return (
    <svg aria-hidden viewBox="0 0 52 16" className="h-4 w-[3.25rem]" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

export const springColors = ["#c4245a", "#d9971f", "#3f67ad"] as const;
