import { ImageResponse } from "next/og";
import { programBySlug, programs } from "@/content/offer";
import { formatEUR } from "@/lib/format";
import { logoMark, ogFonts, ogSize } from "@/lib/og";

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

/**
 * La copertina della scheda (vedi ProgramCover) in formato Open Graph: serve ai social e come immagine
 * del prodotto per Google. È una route normale e non un `opengraph-image`, che dentro un gruppo come
 * (training) riceve un suffisso casuale nell'indirizzo: qui l'URL resta /shop/<scheda>/copertina.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programBySlug(slug);
  if (!program) return new Response(null, { status: 404 });
  const [fonts, logo] = await Promise.all([ogFonts(), logoMark()]);
  // Come in ProgramCover: la parola riempie la larghezza utile (1056 px) senza uscire, qualunque sia la sua lunghezza.
  const goalSize = Math.min(168, Math.floor(1056 / (program.goal.length * 0.7)));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#221e1a",
          color: "#f3ede5",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse disegna un <img>, next/image qui non esiste */}
          <img src={logo} alt="" width={156} height={36} />
          <span style={{ fontSize: 30, fontWeight: 800, color: "#aaa093" }}>4 SETT.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 140, height: 10, background: "#f48c25", marginBottom: 32 }} />
          <span style={{ fontSize: goalSize, fontWeight: 800, lineHeight: 0.9, letterSpacing: -4, textTransform: "uppercase" }}>
            {program.goal}
          </span>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 36, fontSize: 36, fontWeight: 300 }}>
            <span>Scheda {program.name}</span>
            <span style={{ fontWeight: 800 }}>{formatEUR(program.price)}</span>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
