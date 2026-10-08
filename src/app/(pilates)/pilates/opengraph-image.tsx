import { ImageResponse } from "next/og";
import { logoMark, ogFonts, ogSize } from "@/lib/og";

export const alt = "Pilates Reformer a Frattamaggiore · Domcast";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [fonts, logo] = await Promise.all([ogFonts(), logoMark()]);

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
          background: "#f4c4cd",
          color: "#3b0d23",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", alignSelf: "flex-start", padding: "16px 22px", borderRadius: 999, background: "#3b0d23" }}>
          <img src={logo} alt="" width={104} height={24} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 300, lineHeight: 0.98, letterSpacing: -3 }}>
          <span>Pilates Reformer</span>
          <span style={{ color: "#6b3049" }}>a Frattamaggiore</span>
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {["#c4245a", "#d9971f", "#3f67ad"].map((color) => (
            <div key={color} style={{ display: "flex", width: 64, height: 6, borderRadius: 3, background: color }} />
          ))}
          <span style={{ marginLeft: 16, fontSize: 28 }}>con Domenico Castaldo</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
