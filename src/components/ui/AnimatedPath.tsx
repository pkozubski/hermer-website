"use client";

import React, { useEffect, useRef, useId } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP registers the plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AnimatedPathProps {
  /** The SVG path d attribute */
  d: string;
  /** ViewBox of the SVG */
  viewBox: string;
  /** Visual thickness (adjust per viewBox to maintain uniform appearance, default 24) */
  strokeWidth?: number;
  /** Base color for the gradient. The end color will be a lighter shade of this. */
  baseColor: string;
  /** ClassName on the wrapper div */
  containerClassName?: string;
  /** ClassName on the SVG element */
  svgClassName?: string;
  /** SVG preserveAspectRatio property */
  preserveAspectRatio?: string;
  
  // Animation Behavior & Triggers
  /** Trigger element ID or ref for scroll animation */
  scrollTriggerElement?: React.RefObject<HTMLElement | null> | string;
  /** 'start' value for ScrollTrigger (default: "top 80%") */
  triggerStart?: string;
  /** 'end' value for ScrollTrigger (default: "center center") */
  triggerEnd?: string;
  /** Custom scrub value (default: 1) */
  scrub?: number | boolean;
  
  /** 
   * Ratio of progress (0 to 1) at which drawing starts. 
   * Useful to delay drawing. Default: 0 
   */
  drawStartRatio?: number;
  /** 
   * Ratio of progress (0 to 1) describing duration to draw. 
   * Default: 1 (draws across the whole scrub) 
   */
  drawDurationRatio?: number;
  /** 
   * Ratio of progress (0 to 1) to fade to full opacity. 
   * If 0, changes opacity to 1 instantly when drawing starts. Default: 0.05
   */
  fadeProgressRatio?: number;
  /** Vertical parallax offset in pixels. If provided, animates the container Y coordinate. */
  parallaxY?: number;
}

export function AnimatedPath({
  d,
  viewBox,
  strokeWidth = 24,
  baseColor,
  containerClassName = "absolute inset-0 w-screen z-0 pointer-events-none overflow-visible",
  svgClassName = "absolute w-full opacity-[0.15] scale-[1.3] md:scale-100 origin-center translate-y-24 md:translate-y-0",
  preserveAspectRatio = "xMidYMid slice",
  scrollTriggerElement,
  triggerStart = "top 80%",
  triggerEnd = "center center",
  scrub = 1,
  drawStartRatio = 0,
  drawDurationRatio = 1,
  fadeProgressRatio = 0.05,
  parallaxY,
}: AnimatedPathProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const gradientId = useId();
  // Strip special chars from useId to be a valid CSS selector string
  const cleanId = gradientId.replace(/[^a-zA-Z0-9_-]/g, "");

  // --- DEV WARNING: Walidacja ścieżki wektorowej ---
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const innerPath = d.trim().substring(1);
      if (/[Mm]/.test(innerPath)) {
        console.warn(
          "🚨 [AnimatedPath] OSTRZEŻENIE: Ścieżka SVG zawiera wewnętrzne komendy MoveTo (M/m).",
          "W konsekwencji animacja GSAP potraktuje to jako oddzielne fragmenty, rysując je naraz.",
          "Zalecenie: Połącz wektory w jedną, nieprzerwaną ścieżkę (jeden stroke) w programie graficznym."
        );
      }
    }
  }, [d]);

  useEffect(() => {
    const containerEl = containerRef.current;
    const pathEl = pathRef.current;
    if (!containerEl || !pathEl) return;

    const totalLength = pathEl.getTotalLength();

    gsap.set(pathEl, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
      opacity: 0,
    });

    let triggerRef: HTMLElement | string | null = containerEl;
    if (typeof scrollTriggerElement === "string") {
      triggerRef = document.getElementById(scrollTriggerElement) || scrollTriggerElement;
    } else if (scrollTriggerElement?.current) {
      triggerRef = scrollTriggerElement.current;
    }

    const trigger = ScrollTrigger.create({
      trigger: triggerRef,
      start: triggerStart,
      end: triggerEnd,
      scrub,
      onUpdate: (self) => {
        // Map native progress using start & duration
        const drawProgress = drawDurationRatio < 1 
          ? gsap.utils.clamp(0, 1, (self.progress - drawStartRatio) / drawDurationRatio)
          : self.progress;

        // Apply Opacity mapping
        let opacity = 0;
        if (fadeProgressRatio > 0) {
          opacity = gsap.utils.clamp(0, 1, drawProgress / fadeProgressRatio);
        } else {
          opacity = drawProgress > 0 ? 1 : 0;
        }

        gsap.set(pathEl, {
          strokeDashoffset: totalLength * (1 - drawProgress),
          opacity,
        });
      },
    });

    let parallaxTrigger: ScrollTrigger | null = null;
    if (parallaxY) {
      // Create a separate GSAP tween for the parallax movement
      const tween = gsap.to(containerEl, {
        y: parallaxY,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      parallaxTrigger = tween.scrollTrigger as ScrollTrigger;
    }

    return () => {
      trigger.kill();
      if (parallaxTrigger) parallaxTrigger.kill();
    };
  }, [
    scrollTriggerElement,
    triggerStart,
    triggerEnd,
    scrub,
    drawStartRatio,
    drawDurationRatio,
    fadeProgressRatio,
    parallaxY,
  ]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <svg
        className={svgClassName}
        viewBox={viewBox}
        fill="none"
        preserveAspectRatio={preserveAspectRatio}
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={cleanId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop stopColor={baseColor} />
            <stop offset="100%" stopColor={`color-mix(in srgb, ${baseColor}, white 50%)`} />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={d}
          stroke={`url(#${cleanId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
