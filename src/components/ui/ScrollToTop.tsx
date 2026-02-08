"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export const ScrollToTop = () => {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // If lenis is active, use its scroll method
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to native window scroll
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};
