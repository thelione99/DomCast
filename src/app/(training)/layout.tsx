import { WorldShell } from "@/components/site/WorldShell";

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return <WorldShell world="training">{children}</WorldShell>;
}
