"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSquiggle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

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

    const trigger = ScrollTrigger.create({
      trigger: containerEl,
      start: "top 95%",
      end: "center center",
      scrub: 1,
      onUpdate: (self) => {
        const drawProgress = self.progress;
        const opacity = gsap.utils.clamp(0, 1, drawProgress / 0.05);

        gsap.set(pathEl, {
          strokeDashoffset: totalLength * (1 - drawProgress),
          opacity,
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-screen z-0 pointer-events-none overflow-visible"
    >
      <svg
        className="absolute w-full opacity-60"
        viewBox="0 0 1430 911"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M1427.37 243.001C1389.04 235.001 1304.07 190.901 1270.87 78.501C1229.37 -61.999 914.37 33.001 981.37 243.001C1048.37 453.001 1204.37 195.501 1217.37 475.501C1230.37 755.501 741.87 280.001 648.87 525.501C555.87 771.001 557.37 771.501 539.37 677.001C521.37 582.501 612.37 56.501 442.87 418.501C273.37 780.501 133.87 797.501 145.87 642.501C155.47 518.501 70.8696 873.501 4.36963 899.501"
          stroke="#52D8EA"
          strokeWidth="24"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
