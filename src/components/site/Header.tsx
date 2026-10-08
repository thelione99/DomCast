"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { whatsappLink, messages } from "@/lib/links";
import { WorldSwitch, type World } from "@/components/world/WorldSwitch";
import { LogoMark } from "./Logo";
import { navByWorld } from "./nav";

export function Header({ world }: { world: World }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const items = navByWorld[world];
  const home = world === "pilates" ? "/pilates" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        "border-b",
        scrolled || open ? "border-line bg-bg" : "border-transparent bg-transparent",
      )}
    >
      <div className="container-x flex h-[4.5rem] items-center gap-2 sm:gap-6">
        <Link href={home} className="shrink-0 py-2" aria-label="Domcast, torna all'inizio">
          <LogoMark className="h-4 sm:h-5" />
        </Link>

        <WorldSwitch world={world} className="mx-auto lg:mx-0" />

        <nav aria-label="Principale" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="text-[0.9375rem] font-medium text-muted no-underline transition-colors hover:text-ink aria-[current=page]:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink(world === "pilates" ? messages.pilates : messages.consultation)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden min-h-10 px-5 text-[0.9375rem] lg:inline-flex"
        >
          Scrivimi
        </a>

        <MenuButton open={open} onToggle={() => setOpen((v) => !v)} />
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} world={world} items={items} />
    </header>
  );
}

function MenuButton({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="menu-mobile"
      aria-label={open ? "Chiudi il menu" : "Apri il menu"}
      className="-mr-2 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-2 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] [font-stretch:112%] lg:hidden"
    >
      <span aria-hidden className="hidden sm:inline">
        {open ? "Chiudi" : "Menu"}
      </span>
      <span aria-hidden className="relative block h-3 w-5">
        <span
          className={cn(
            "absolute left-0 top-0.5 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
            open && "translate-y-1 rotate-45",
          )}
        />
        <span
          className={cn(
            "absolute bottom-0.5 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
            open && "-translate-y-1 -rotate-45",
          )}
        />
      </span>
    </button>
  );
}

function MobileMenu({
  open,
  onClose,
  world,
  items,
}: {
  open: boolean;
  onClose: () => void;
  world: World;
  items: { label: string; href: string }[];
}) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const node = panel.current;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    node?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !node) return;
      const focusables = node.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      id="menu-mobile"
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-bg lg:hidden"
    >
      <div className="container-x flex min-h-full flex-col pb-10 pt-6">
        <ul className="divide-y divide-line border-y border-line">
          <li>
            <Link href={world === "pilates" ? "/pilates" : "/"} onClick={onClose} className="t-title flex min-h-16 items-center text-[1.75rem] no-underline">
              {world === "pilates" ? "Pilates Reformer" : "Home"}
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={onClose} className="t-title flex min-h-16 items-center text-[1.75rem] no-underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4 pt-10">
          <a
            href={whatsappLink(world === "pilates" ? messages.pilates : messages.consultation)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            Scrivimi su WhatsApp
          </a>
          <div className="flex items-center justify-between text-[0.9375rem] text-muted">
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 no-underline hover:text-ink">
              Instagram <ArrowUpRight aria-hidden className="size-4" />
            </a>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 no-underline hover:text-ink">
              Come arrivare <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        </div>
        <button type="button" onClick={onClose} className="sr-only focus:not-sr-only">
          <X aria-hidden className="size-4" /> Chiudi menu
        </button>
      </div>
    </div>
  );
}
