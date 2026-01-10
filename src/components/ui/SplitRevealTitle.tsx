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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Rozpocznij, gdy element wejdzie w 85% wysokości widoku
          end: "bottom top",
          toggleActions: "play none none reverse", // Graj przy wejściu, cofaj przy wyjściu (jak viewport={{ once: false }})
        },
      });

      tl.fromTo(
        line1Ref.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.4,
          ease: "power.out2",
        }
      ).fromTo(
        line2Ref.current,
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 0.4,
          ease: "power.out2",
        },
        "<0.15" // Opóźnienie 0.15s względem początku poprzedniej animacji
      );
    },
    { scope: containerRef }
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
        className={`block overflow-hidden pt-[0.15em] pb-[0.05em] ${classNameLine1}`}
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
        className={`block overflow-hidden pt-[0.05em] pb-[0.15em] mt-[0.1em] ${classNameLine2}`}
      >
        <span ref={line2Ref} className="block will-change-transform">
          {line2}
        </span>
      </span>
    </h2>
  );
};
