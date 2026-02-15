"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      const l1 = line1Ref.current;
      const l2 = line2Ref.current;
      if (!l1 || !l2) return;

      gsap.set(l1, { yPercent: 100, visibility: "visible", force3D: true });
      gsap.set(l2, { yPercent: -100, visibility: "visible", force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          end: "bottom 5%",
          once,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });

      tl.to(l1, {
        yPercent: 0,
        duration: 1.2,
        ease: "power4.out",
        force3D: true,
      }).to(
        l2,
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power4.out",
          force3D: true,
        },
        "<0.18",
      );
    },
    { scope: containerRef, dependencies: [once] },
  );

  return (
    <h2
      ref={containerRef}
      className={`font-medium tracking-tight leading-none ${className}`}
    >
      <span className={`block overflow-hidden pb-[0.05em] ${classNameLine1}`}>
        <span ref={line1Ref} className="block" style={{ visibility: "hidden" }}>
          {line1}
        </span>
      </span>
      <span
        className={`block overflow-hidden pb-[0.05em] pt-[0.02em] ${classNameLine2}`}
      >
        <span ref={line2Ref} className="block" style={{ visibility: "hidden" }}>
          {line2}
        </span>
      </span>
    </h2>
  );
};
