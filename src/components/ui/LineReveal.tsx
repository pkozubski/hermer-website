import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LineRevealProps {
  lines: string[];
  className?: string;
  classNameLine?: string;
  delay?: number;
}

export const LineReveal = ({
  lines,
  className = "",
  classNameLine = "",
  delay = 0,
}: LineRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className={`flex flex-col ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden ${classNameLine}`}>
          <motion.span
            className="block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.1,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
