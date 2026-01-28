"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugin (required in Next.js/React)
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

      // Get all line elements
      const lineElements = lineRefs.current.filter(
        Boolean,
      ) as HTMLSpanElement[];

      if (lineElements.length === 0) return;

      // Set initial state - elements start hidden (translated down)
      gsap.set(lineElements, { yPercent: 100 });

      // Create ScrollTrigger that replays on each scroll unless once is true
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 95%",
        end: "bottom 5%",
        once,
        onEnter: () => {
          gsap.to(lineElements, {
            yPercent: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            delay: delay,
          });
        },
        onLeaveBack: once
          ? undefined
          : () => {
              // Reset elements when scrolling back up past the trigger
              gsap.set(lineElements, { yPercent: 100 });
            },
      });
    },
    { scope: containerRef, dependencies: [delay, lines, once] },
  );

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden ${classNameLine}`}>
          <span
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className="block will-change-transform"
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
};
