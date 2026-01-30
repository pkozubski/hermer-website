"use client";

import React, { useRef, useEffect, useState } from "react";

export const DashedCardWrapper = ({
  children,
  className = "",
  delay = 0,
  forceVisible = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  forceVisible?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(forceVisible);

  useEffect(() => {
    if (forceVisible) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Use native IntersectionObserver for better mobile performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay before showing
            setTimeout(() => {
              setIsVisible(true);
            }, delay * 1000);
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, forceVisible]);

  return (
    <div
      ref={ref}
      className={`relative p-3 transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
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
