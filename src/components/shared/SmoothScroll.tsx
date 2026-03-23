"use client";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToTop } from "../ui/ScrollToTop";

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
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        autoRaf: true,
      }}
    >
      <LenisScrollTriggerBridge />
      <ScrollToTop />
      {children}
    </ReactLenis>
  );
};
