import React from "react";
import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  blur?: boolean;
  stagger?: number;
}

export const RevealText = ({
  text,
  className = "",
  delay = 0,
  blur = true,
  stagger = 0.03,
}: RevealTextProps) => {
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
      {text.split(" ").map((word, i) => (
        <span key={i} className="whitespace-nowrap inline-block mr-[0.25em]">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className="inline-block"
              variants={{
                hidden: {
                  y: "100%",
                  opacity: 0,
                  filter: blur ? "blur(10px)" : undefined,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  filter: blur ? "blur(0px)" : undefined,
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};
