import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public/Logo_Domcast-3.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0d0b",
          borderRadius: 14,
        }}
      >
        <img src={src} width={48} height={11} alt="" />
      </div>
    ),
    size,
  );
}
