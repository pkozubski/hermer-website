import React from "react";
import { motion } from "framer-motion";

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
  return (
    <h2
      className={`font-medium tracking-tight text-white leading-[0.9] ${className}`}
    >
      {/* Line 1 - Grows Up (Reveals from below) */}
      <span className={`block overflow-hidden pt-[0.15em] ${classNameLine1}`}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { y: "100%" },
            visible: {
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="block"
        >
          {line1}
        </motion.span>
      </span>

      {/* Line 2 - Grows Down (Reveals from above) with slight delay */}
      <span
        className={`block overflow-hidden pb-[0.15em] mt-[0.1em] ${classNameLine2}`}
      >
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
