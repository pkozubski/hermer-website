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
}

export const SplitRevealTitle = ({
  line1,
  line2,
  className = "",
  classNameLine1 = "",
  classNameLine2 = "",
}: SplitRevealTitleProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Set initial state - elements start hidden
      gsap.set(line1Ref.current, { yPercent: 100 });
      gsap.set(line2Ref.current, { yPercent: -100 });

      // Create ScrollTrigger that replays on each scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 95%",
        end: "bottom 5%",
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(line1Ref.current, {
            yPercent: 0,
            duration: 1,
            ease: "elastic.out(1, 1)",
          }).to(
            line2Ref.current,
            {
              yPercent: 0,
              duration: 1,
              ease: "elastic.out(1, 1)",
            },
            "<0.15", // Opóźnienie 0.15s względem początku poprzedniej animacji
          );
        },
        onLeaveBack: () => {
          // Reset elements when scrolling back up past the trigger
          gsap.set(line1Ref.current, { yPercent: 100 });
          gsap.set(line2Ref.current, { yPercent: -100 });
        },
      });
    },
    { scope: containerRef },
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
