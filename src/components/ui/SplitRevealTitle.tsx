"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Rejestracja pluginu (wymagane w Next.js/React)
gsap.registerPlugin(ScrollTrigger);

interface SplitRevealTitleProps {
  line1: string;
  line2: string;
  className?: string;
  classNameLine1?: string;
  classNameLine2?: string;
  once?: boolean;
}

export const SplitRevealTitle = ({
  line1,
  line2,
  className = "",
  classNameLine1 = "",
  classNameLine2 = "",
  once = false,
}: SplitRevealTitleProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Set initial state - elements start hidden, use force3D for GPU acceleration
      gsap.set(line1Ref.current, { yPercent: 100, force3D: true });
      gsap.set(line2Ref.current, { yPercent: -100, force3D: true });

      // Create ScrollTrigger that can replay on scroll unless `once` is enabled.
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 95%",
        end: "bottom 5%",
        once,
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(line1Ref.current, {
            yPercent: 0,
            duration: 0.9,
            ease: "power3.out",
            force3D: true,
          }).to(
            line2Ref.current,
            {
              yPercent: 0,
              duration: 0.9,
              ease: "power3.out",
              force3D: true,
            },
            "<0.12",
          );
        },
        onLeaveBack: once
          ? undefined
          : () => {
              // Reset elements when scrolling back up past the trigger
              gsap.killTweensOf([line1Ref.current, line2Ref.current]);
              gsap.set(line1Ref.current, { yPercent: 100, force3D: true });
              gsap.set(line2Ref.current, { yPercent: -100, force3D: true });
            },
      });
    },
    { scope: containerRef, dependencies: [once] },
  );

  return (
    <h2
      ref={containerRef}
      className={`font-medium tracking-tight leading-[1] ${className}`}
    >
      {/* 
         Line 1 Wrapper
         Dodajemy minimalny padding (py), aby fonty nie były przycięte przez overflow-hidden 
      */}
      <span
        className={`block overflow-hidden pt-[0.2em] pb-[0.2em] ${classNameLine1}`}
      >
        <span ref={line1Ref} className="block will-change-transform">
          {line1}
        </span>
      </span>

      {/* 
         Line 2 Wrapper 
         Dodajemy margin-top i padding, aby zachować odstępy i bezpieczeństwo znaków
      */}
      <span
        className={`block overflow-hidden pt-[0.1em] pb-[0.3em] mt-[-0.1em] ${classNameLine2}`}
      >
        <span ref={line2Ref} className="block will-change-transform">
          {line2}
        </span>
      </span>
    </h2>
  );
};
