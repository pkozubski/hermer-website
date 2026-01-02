import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MaskedRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const MaskedReveal = ({
  text,
  className = "",
  delay = 0,
}: MaskedRevealProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%" }}
          animate={isInView ? { y: 0 } : { y: "110%" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.03,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};
