"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimatedArcProps {
  scrollYProgress: MotionValue<number>;
}

export default function AnimatedArc({ scrollYProgress }: AnimatedArcProps) {
  // Delay start: map 0.45-0.7 scroll to 0-1 path
  const pathProgress = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);

  // Hide the dot when not drawing (opacity 0 when progress is near 0)
  const opacity = useTransform(pathProgress, [0, 0.01], [0, 1]);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden translate-y-32">
      <svg
        className="absolute w-[108%] h-full"
        viewBox="0 0 1001 696"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* Darker Purple Start */}
            <stop offset="0%" stopColor="#4B0082" />
            {/* Lighter Purple End */}
            <stop offset="100%" stopColor="#916AFF" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0.674316 11.981C213.519 23.9604 374.105 305.398 284.532 500.897C194.958 696.396 -76.5936 486.577 147.101 378.257C370.796 269.937 580.108 386.896 657.845 492.435C735.582 597.973 802.529 481.763 880.174 521.481C957.819 561.199 905.674 692.981 949.174 692.981"
          stroke="url(#arc-gradient)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength: pathProgress, opacity }}
        />
      </svg>
    </div>
  );
}
