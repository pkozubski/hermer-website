"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  trailLength?: number; // how many characters behind are still scrambling
}

export const ScrambleText = ({
  text,
  className = "",
  delay = 0,
  speed = 25,
  trailLength = 4,
}: ScrambleTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset animation when element leaves viewport
  useEffect(() => {
    if (!isInView) {
      setIsAnimating(false);
      setDisplayText("");
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView || isAnimating) return;

    setIsAnimating(true);
    let revealedCount = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        revealedCount++;

        const result = text
          .split("")
          .map((char, i) => {
            // Already revealed characters
            if (i < revealedCount - trailLength) {
              return char;
            }

            // Spaces and dots show immediately
            if (char === " " || char === "•") {
              return char;
            }

            // Characters in the scrambling trail
            if (i < revealedCount) {
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            }

            // Not yet reached
            return "";
          })
          .join("");

        setDisplayText(result);

        if (revealedCount >= text.length + trailLength) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay, speed, trailLength, isAnimating]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};
