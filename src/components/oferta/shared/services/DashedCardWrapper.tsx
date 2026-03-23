"use client";
import React, { useEffect, useRef, useState } from "react";

export const DashedCardWrapper = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative p-3 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.6s",
        transitionTimingFunction: "ease-out",
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Dashed border pseudo-element */}
      <div
        className="absolute inset-0 rounded-[48px] pointer-events-none"
        style={{
          border: "2px dashed rgba(255, 255, 255, 0.1)",
        }}
      />
      {children}
    </div>
  );
};
