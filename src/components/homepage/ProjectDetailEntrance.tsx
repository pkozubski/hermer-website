'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ProjectDetailEntranceProps {
  children: React.ReactNode;
}

/**
 * Wraps the project detail page content and triggers a smooth
 * entrance animation that coordinates with the zoom-in transition
 * from ProjectCard.
 */
export const ProjectDetailEntrance: React.FC<ProjectDetailEntranceProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.set(containerRef.current, { opacity: 0 });
    const tween = gsap.to(containerRef.current, {
      opacity: 1,
      delay: 0.1,
      duration: 0.6,
      ease: 'power4.out',
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};
