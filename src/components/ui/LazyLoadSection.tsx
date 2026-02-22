'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LazyLoadSectionProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({
  children,
  threshold = 0,
  rootMargin = '200px',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      style={{ minHeight: '1px' }}
      className={className}
    >
      {isVisible ? children : null}
    </div>
  );
};
