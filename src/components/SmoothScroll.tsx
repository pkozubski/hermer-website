"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Disable Lenis on mobile devices to avoid performance issues
    // iOS Safari has issues with custom scroll implementations
    const isMobile = window.innerWidth < 1024;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isMobile || isIOS) {
      return; // Don't initialize Lenis on mobile/iOS
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};
