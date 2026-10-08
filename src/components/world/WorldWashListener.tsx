"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { settleWorldWash } from "./world-wash";

export function WorldWashListener() {
  const pathname = usePathname();
  useEffect(() => {
    settleWorldWash();
  }, [pathname]);
  return null;
}
