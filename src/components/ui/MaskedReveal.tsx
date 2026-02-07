import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

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
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={{ y: "110%" }}
          animate={isInView ? { y: 0 } : { y: "110%" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.025,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};
