import { ImageResponse } from "next/og";
import { logoFull, ogFonts, ogSize, studioPhoto } from "@/lib/og";

export const alt = "Domcast · Personal trainer a Frattamaggiore e online";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [fonts, studio, logo] = await Promise.all([ogFonts(), studioPhoto(), logoFull()]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", fontFamily: "Archivo", background: "#0f0d0b" }}>
        <img src={studio} alt="" width={1200} height={676} style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            backgroundImage: "linear-gradient(90deg, rgba(15,13,11,0.92) 0%, rgba(15,13,11,0.72) 50%, rgba(15,13,11,0.2) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, width: "100%" }}>
          <img src={logo} alt="" width={210} height={49} />
          <div style={{ display: "flex", flexDirection: "column", color: "#f3ede5", fontSize: 76, fontWeight: 800, lineHeight: 0.95, letterSpacing: -1 }}>
            <span>PERSONAL TRAINER</span>
            <span>A FRATTAMAGGIORE</span>
            <span style={{ color: "#f48c25" }}>E ONLINE</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
