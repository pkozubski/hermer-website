import React from "react";
import { motion } from "framer-motion";

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
  const wordsLine1 = line1.split(" ");
  const totalWords = wordsLine1.length;

  return (
    <h2
      className={`font-medium tracking-tight text-white leading-[0.9] ${className}`}
    >
      {/* Line 1 - Words reveal up, THEN shift right one by one */}
      <div className="flex flex-wrap">
        {wordsLine1.map((word, i) => (
          // Outer wrapper for X-shift
          <motion.span
            key={i}
            className="block mr-[0.25em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { x: 0 },
              visible: {
                x: "15vw",
                transition: {
                  delay: 0.8 + (totalWords - 1 - i) * 0.15,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {/* Inner wrapper for Y-reveal */}
            <span className="block overflow-hidden pt-[0.15em] pb-[0.1em]">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  hidden: { y: "100%" },
                  visible: {
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="block"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { y: "-100%" },
            visible: {
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="block"
        >
          {line2}
        </motion.span>
      </span>
    </h2>
  );
};
