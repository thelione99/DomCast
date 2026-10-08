"use client";

import { openCookiePreferences } from "./consent-store";

export function CookiePreferencesButton() {
  return (
    <button type="button" onClick={openCookiePreferences} className="hover:text-ink hover:underline">
      Preferenze cookie
    </button>
  );
}
