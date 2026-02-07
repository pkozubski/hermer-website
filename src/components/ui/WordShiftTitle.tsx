import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordShiftTitleProps {
  line1: string;
  line2: string;
  className?: string;
}

export const WordShiftTitle = ({
  line1,
  line2,
  className = "",
}: WordShiftTitleProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const wordsLine1 = useMemo(() => line1.split(" "), [line1]);
  const totalWords = wordsLine1.length;

  return (
    <h2
      ref={containerRef}
      className={`font-medium tracking-tight text-white leading-[0.9] ${className}`}
    >
      {/* Line 1 - Words reveal up, THEN shift right one by one */}
      <div className="flex flex-wrap">
        {wordsLine1.map((word, i) => (
          <motion.span
            key={i}
            className="block mr-[0.25em] will-change-transform"
            initial={{ x: 0 }}
            animate={isInView ? { x: "15vw" } : { x: 0 }}
            transition={{
              delay: 0.8 + (totalWords - 1 - i) * 0.15,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="block overflow-hidden pt-[0.15em] pb-[0.1em]">
              <motion.span
                className="block will-change-transform"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          </motion.span>
        ))}
      </div>

      {/* Line 2 - Grows Down (Reveal only) */}
      <span className="block overflow-hidden pb-[0.15em] mt-[0.1em]">
        <motion.span
          className="block will-change-transform"
          initial={{ y: "-100%" }}
          animate={isInView ? { y: 0 } : { y: "-100%" }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {line2}
        </motion.span>
      </span>
    </h2>
  );
};
