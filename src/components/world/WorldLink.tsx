"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { navigateWithWash, washOrigin } from "./world-wash";

/** Link che porta nell'altro mondo con il passaggio di colore. */
export function WorldLink({ href, onClick, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        navigateWithWash(router, href, washOrigin(event));
      }}
      {...props}
    />
  );
}
