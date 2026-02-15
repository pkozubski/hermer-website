import React, { useEffect, useMemo, useRef, useState } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const words = useMemo(() => text.split(" "), [text]);
  const wordsWithIndices = useMemo(() => {
    let globalIndex = 0;
    return words.map((word) =>
      word.split("").map((char) => ({ char, index: globalIndex++ })),
    );
  }, [words]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px -100px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap ${className}`}
    >
      {wordsWithIndices.map((word, i) => (
        <span key={i} className="whitespace-nowrap inline-block mr-[0.25em]">
          {word.map(({ char, index }) => (
            <span
              key={index}
              className="inline-block will-change-[transform,opacity]"
              style={{
                transform: isInView ? "translateY(0%)" : "translateY(100%)",
                opacity: isInView ? 1 : 0,
                filter: blur
                  ? isInView
                    ? "blur(0px)"
                    : "blur(8px)"
                  : undefined,
                transitionProperty: blur
                  ? "transform, opacity, filter"
                  : "transform, opacity",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${delay + index * stagger}s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};
