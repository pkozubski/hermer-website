import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  blur?: boolean;
  stagger?: number;
}

const charVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const charVariantsBlur = {
  hidden: {
    y: "100%",
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const RevealText = ({
  text,
  className = "",
  delay = 0,
  blur = true,
  stagger = 0.03,
}: RevealTextProps) => {
  const words = useMemo(() => text.split(" "), [text]);
  const variants = blur ? charVariantsBlur : charVariants;

  return (
    <motion.div
      key={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      className={`flex flex-wrap ${className}`}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="whitespace-nowrap inline-block mr-[0.25em]">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className="inline-block will-change-[transform,opacity]"
              variants={variants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};
