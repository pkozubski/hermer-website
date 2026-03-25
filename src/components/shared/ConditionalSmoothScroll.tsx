"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SmoothScroll = dynamic(
  () => import("./SmoothScroll").then((m) => ({ default: m.SmoothScroll })),
  { ssr: false },
);

/**
 * Wraps children in SmoothScroll (Lenis) EXCEPT for:
 * - /studio routes (Sanity Studio manages its own scroll)
 * - Mobile devices (native scroll is faster and better for INP)
 */
export const ConditionalSmoothScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable smooth scroll on desktop (1024px+)
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  if (isStudio || !isDesktop) {
    return <>{children}</>;
  }

  return <SmoothScroll>{children}</SmoothScroll>;
};
