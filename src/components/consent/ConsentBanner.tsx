"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COOKIE_PREFERENCES_EVENT, setConsent, useConsent } from "./consent-store";

/**
 * Banner cookie: "Accetta" e "Rifiuta" hanno lo stesso peso (linee guida Garante 2021).
 * Google Analytics parte solo dopo un consenso esplicito.
 */
export function ConsentBanner() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(COOKIE_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, open);
  }, []);

  if (consent === "unknown" || (consent !== "unset" && !reopened)) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setReopened(false);
    if (value === "denied") clearAnalyticsCookies();
  };

  return (
    <section
      aria-label="Preferenze cookie"
      className="fixed inset-x-3 bottom-3 z-[60] max-w-[26rem] rounded-2xl border border-line-strong bg-raised p-5 text-[0.9375rem] text-ink shadow-[0_18px_50px_-12px_rgb(0_0_0/0.45)] sm:inset-x-auto sm:left-5 sm:bottom-5"
    >
      <p className="leading-relaxed">
        Uso Google Analytics solo per contare le visite e capire cosa migliorare. Lo attivo?{" "}
        <Link href="/privacy#cookie" className="text-muted underline hover:text-ink">
          Dettagli
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => choose("denied")} className="btn btn-secondary min-h-11">
          Rifiuta
        </button>
        <button type="button" onClick={() => choose("granted")} className="btn btn-secondary min-h-11">
          Accetta
        </button>
      </div>
    </section>
  );
}

function clearAnalyticsCookies() {
  const host = window.location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    for (const domain of ["", `; domain=.${host}`, `; domain=${host}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  });
}
