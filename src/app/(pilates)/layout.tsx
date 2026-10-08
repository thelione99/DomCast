import type { Viewport } from "next";
import { WorldShell } from "@/components/site/WorldShell";

export const viewport: Viewport = {
  themeColor: "#f4c4cd",
};

export default function PilatesLayout({ children }: { children: React.ReactNode }) {
  return <WorldShell world="pilates">{children}</WorldShell>;
}
