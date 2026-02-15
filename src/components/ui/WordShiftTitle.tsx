import React, { useEffect, useMemo, useRef, useState } from "react";

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
  const [isInView, setIsInView] = useState(false);
  const wordsLine1 = useMemo(() => line1.split(" "), [line1]);
  const totalWords = wordsLine1.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={containerRef}
      className={`font-medium tracking-tight text-white leading-[0.9] ${className}`}
    >
      {/* Line 1 - Words reveal up, THEN shift right one by one */}
      <div className="flex flex-wrap">
        {wordsLine1.map((word, i) => (
          <span
            key={i}
            className="block mr-[0.25em] will-change-transform"
            style={{
              transform: isInView ? "translateX(15vw)" : "translateX(0)",
              transitionProperty: "transform",
              transitionDuration: "1s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${0.8 + (totalWords - 1 - i) * 0.15}s`,
            }}
          >
            <span className="block overflow-hidden pt-[0.15em] pb-[0.1em]">
              <span
                className="block will-change-transform"
                style={{
                  transform: isInView ? "translateY(0)" : "translateY(100%)",
                  transitionProperty: "transform",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                {word}
              </span>
            </span>
          </span>
        ))}
      </div>

      {/* Line 2 - Grows Down (Reveal only) */}
      <span className="block overflow-hidden pb-[0.15em] mt-[0.1em]">
        <span
          className="block will-change-transform"
          style={{
            transform: isInView ? "translateY(0)" : "translateY(-100%)",
            transitionProperty: "transform",
            transitionDuration: "0.8s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.15s",
          }}
        >
          {line2}
        </span>
      </span>
    </h2>
  );
};
