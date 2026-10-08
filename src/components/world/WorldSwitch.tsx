"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { navigateWithWash, washOrigin } from "./world-wash";

export type World = "training" | "pilates";

const worlds: { id: World; label: string; href: string }[] = [
  { id: "training", label: "Training", href: "/" },
  { id: "pilates", label: "Pilates", href: "/pilates" },
];

export function WorldSwitch({ world, className }: { world: World; className?: string }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(world === "training" ? "/pilates" : "/");
  }, [router, world]);

  return (
    <nav aria-label="Training o Pilates" className={cn("flex rounded-full border border-line-strong p-1", className)}>
      {worlds.map((item) => {
        const active = item.id === world;
        return (
          <Link
            key={item.id}
            href={item.href}
            aria-current={active ? "true" : undefined}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
              event.preventDefault();
              if (active) {
                if (window.location.pathname !== item.href) router.push(item.href);
                return;
              }
              navigateWithWash(router, item.href, washOrigin(event));
            }}
            className={cn(
              "relative inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-[0.8125rem] font-semibold tracking-[0.02em] transition-colors duration-200 sm:gap-2 sm:px-4",
              "[font-stretch:110%]",
              active ? "bg-ink text-bg" : "text-muted hover:text-ink",
            )}
          >
            {item.id === "pilates" && !active && (
              <span aria-hidden className="size-2 rounded-full bg-[#f4c4cd]" />
            )}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
