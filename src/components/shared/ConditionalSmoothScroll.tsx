"use client";

import { usePathname } from "next/navigation";
import { SmoothScroll } from "./SmoothScroll";

/**
 * Wraps children in SmoothScroll (Lenis) EXCEPT for /studio routes.
 * Sanity Studio manages its own scroll — Lenis would break it.
 */
export const ConditionalSmoothScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return <SmoothScroll>{children}</SmoothScroll>;
};
