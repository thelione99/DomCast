"use client";

import { useSyncExternalStore } from "react";

export type Consent = "granted" | "denied";
type Snapshot = Consent | "unset" | "unknown";

const KEY = "domcast-consent-v1";
const OPEN_EVENT = "domcast:cookie-preferences";
const listeners = new Set<() => void>();

function read(): Snapshot {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    return "unset";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* storage non disponibile: la scelta vale per questa pagina */
  }
  listeners.forEach((listener) => listener());
}

/** "unknown" sul server, così il banner non compare in SSR e non lampeggia. */
export function useConsent(): Snapshot {
  return useSyncExternalStore(subscribe, read, () => "unknown");
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export const COOKIE_PREFERENCES_EVENT = OPEN_EVENT;
