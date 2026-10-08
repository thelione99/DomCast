"use client";

import type { useRouter } from "next/navigation";

type Router = ReturnType<typeof useRouter>;

let pendingResolve: (() => void) | null = null;

/** Chiamata dal listener in layout quando la nuova rotta è montata. */
export function settleWorldWash() {
  pendingResolve?.();
  pendingResolve = null;
}

/**
 * Naviga verso l'altro mondo: il nuovo colore si allarga a cerchio
 * dal punto del click (View Transitions). Senza supporto o con
 * "riduci movimento" la navigazione è immediata.
 */
export function navigateWithWash(router: Router, href: string, origin: { x: number; y: number }) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("startViewTransition" in document) || reduceMotion) {
    router.push(href);
    return;
  }

  const { innerWidth: w, innerHeight: h } = window;
  const radius = Math.hypot(Math.max(origin.x, w - origin.x), Math.max(origin.y, h - origin.y));
  const root = document.documentElement;
  root.style.setProperty("--wash-x", `${origin.x}px`);
  root.style.setProperty("--wash-y", `${origin.y}px`);
  root.style.setProperty("--wash-r", `${Math.ceil(radius)}px`);

  const transition = document.startViewTransition(
    () =>
      new Promise<void>((resolve) => {
        const fallback = window.setTimeout(() => {
          pendingResolve = null;
          resolve();
        }, 2500);
        pendingResolve = () => {
          window.clearTimeout(fallback);
          resolve();
        };
        router.push(href);
      }),
  );
  // Se il browser salta la transizione (scheda nascosta, nuova navigazione) la pagina cambia comunque.
  const ignore = () => {};
  transition.ready.catch(ignore);
  transition.finished.catch(ignore);
  transition.updateCallbackDone.catch(ignore);
}

/** Origine del cerchio: il punto del click, o il centro dell'elemento se attivato da tastiera. */
export function washOrigin(event: React.MouseEvent<HTMLElement>) {
  if (event.clientX || event.clientY) return { x: event.clientX, y: event.clientY };
  const rect = event.currentTarget.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}
