import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

const toDataUrl = (file: Buffer, type: string) => `data:${type};base64,${file.toString("base64")}`;

export async function ogFonts() {
  const [heavy, light] = await Promise.all([
    readFile(join(process.cwd(), "node_modules/@fontsource/archivo/files/archivo-latin-800-normal.woff")),
    readFile(join(process.cwd(), "node_modules/@fontsource/archivo/files/archivo-latin-300-normal.woff")),
  ]);
  return [
    { name: "Archivo", data: heavy, weight: 800 as const, style: "normal" as const },
    { name: "Archivo", data: light, weight: 300 as const, style: "normal" as const },
  ];
}

export async function studioPhoto() {
  return toDataUrl(await readFile(join(process.cwd(), "public/sfondo.jpeg")), "image/jpeg");
}

export async function logoFull() {
  return toDataUrl(await readFile(join(process.cwd(), "public/Logo_Domcast-2.png")), "image/png");
}

export async function logoMark() {
  return toDataUrl(await readFile(join(process.cwd(), "public/Logo_Domcast-3.png")), "image/png");
}
