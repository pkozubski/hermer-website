"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactSquiggle() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "center center"], // Slightly slower: completes when section is centered
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Ensure full visibility quickly
  const opacity = useTransform(smoothProgress, [0, 0.05], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 left-1/2 -translate-x-1/2 w-screen -z-10 pointer-events-none overflow-visible"
    >
      <svg
        className="absolute w-full h-full opacity-60"
        viewBox="0 0 1430 911"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1427.37 243.001C1389.04 235.001 1304.07 190.901 1270.87 78.501C1229.37 -61.999 914.37 33.001 981.37 243.001C1048.37 453.001 1204.37 195.501 1217.37 475.501C1230.37 755.501 741.87 280.001 648.87 525.501C555.87 771.001 557.37 771.501 539.37 677.001C521.37 582.501 612.37 56.501 442.87 418.501C273.37 780.501 133.87 797.501 145.87 642.501C155.47 518.501 70.8696 873.501 4.36963 899.501"
          stroke="#52D8EA"
          strokeWidth="24"
          strokeLinecap="round"
          style={{ pathLength: smoothProgress, opacity }}
        />
      </svg>
    </div>
  );
}
