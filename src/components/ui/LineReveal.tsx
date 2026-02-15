"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface LineRevealProps {
  lines: string[];
  className?: string;
  classNameLine?: string;
  delay?: number;
  once?: boolean;
}

export const LineReveal = ({
  lines,
  className = "",
  classNameLine = "",
  delay = 0,
  once = false,
}: LineRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const els = lineRefs.current.filter(Boolean) as HTMLSpanElement[];
      if (els.length === 0) return;

      gsap.set(els, { yPercent: 100, visibility: "visible", force3D: true });

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

      tl.to(els, {
        yPercent: 0,
        duration: 1.0,
        ease: "power4.out",
        stagger: 0.08,
        delay,
        force3D: true,
      });
    },
    { scope: containerRef, dependencies: [delay, lines, once] },
  );

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`block overflow-hidden pb-[0.15em] ${classNameLine}`}
        >
          <span
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className="block"
            style={{ visibility: "hidden" }}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
};
