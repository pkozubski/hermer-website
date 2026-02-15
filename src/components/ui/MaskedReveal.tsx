import gsap from "gsap";
import { useRef, useMemo, useEffect, useState } from "react";

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
  const containerRef = useRef<HTMLSpanElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isInView, setIsInView] = useState(false);
  const chars = useMemo(() => text.split(""), [text]);

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

  useEffect(() => {
    const elements = charRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (elements.length === 0) return;

    gsap.killTweensOf(elements);
    gsap.to(elements, {
      y: isInView ? "0%" : "110%",
      duration: 0.7,
      ease: "power3.out",
      delay,
      stagger: 0.025,
    });
  }, [delay, isInView, text]);

  return (
    <span ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
      {chars.map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            charRefs.current[i] = el;
          }}
          className="inline-block will-change-transform"
          style={{ transform: "translateY(110%)" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};
