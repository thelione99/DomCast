"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "./consent-store";

const GA_ID = "G-2B12KM11FY";

type Gtag = (...args: unknown[]) => void;

export function Analytics() {
  const consent = useConsent();

  useEffect(() => {
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    if (consent === "denied" && gtag) gtag("consent", "update", { analytics_storage: "denied" });
  }, [consent]);

  if (consent !== "granted") return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
