"use client";
import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToTop } from "./ui/ScrollToTop";
import { usePathname } from "next/navigation";
import { CustomScrollbar } from "./CustomScrollbar";

gsap.registerPlugin(ScrollTrigger);

function LenisScrollTriggerBridge() {
  useLenis((lenis) => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    // Ensure ScrollTrigger uses the correct scroller measurements
    ScrollTrigger.refresh();
  }, []);

  return null;
}

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  useEffect(() => {
    if (isStudio) return;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // Disable lag smoothing in GSAP to prevent jumpy scrolling
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [isStudio]);

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
        autoRaf: false, // We control the RAF manually via GSAP ticker
      }}
    >
      <LenisScrollTriggerBridge />
      <ScrollToTop />
      <CustomScrollbar />
      {children}
    </ReactLenis>
  );
};
