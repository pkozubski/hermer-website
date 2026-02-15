'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrambleText } from './ui/ScrambleText';
import { PROJECTS } from '@/data/projects';

type ProjectType = (typeof PROJECTS)[0];

interface ProjectCardProps {
  project: ProjectType;
  index: number;
  isMockup?: boolean;
}

const CARD_ENTER_DURATION = 0.62;
const CARD_ENTER_DELAY_STEP = 0.02;
const CARD_ENTER_MAX_DELAY = 0.12;
const TITLE_CHAR_DURATION = 0.32;
const TITLE_CHAR_DELAY_STEP = 0.02;
const TITLE_CHAR_MAX_DELAY = 0.18;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isMockup = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const destinationHref = project.link;
  const isExternal = destinationHref.startsWith('http');
  const cardEnterDelay = Math.min(index * CARD_ENTER_DELAY_STEP, CARD_ENTER_MAX_DELAY);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0.08, rootMargin: '0px 0px -12% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef}>
      <Link
        href={destinationHref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        data-project-card
        className="group block"
      >
        <div
          className={`relative mb-6 ${
            isMockup
              ? 'aspect-auto w-full'
              : 'aspect-4/3 md:aspect-16/10 rounded-3xl overflow-hidden'
          }`}
          style={{
            transform: isInView ? 'scale(1)' : 'scale(0.965)',
            opacity: isInView ? 1 : 0.92,
            willChange: isInView ? 'auto' : 'transform, opacity',
            transitionProperty: 'transform, opacity',
            transitionDuration: `${CARD_ENTER_DURATION}s`,
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: `${cardEnterDelay}s`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image.src}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className={`webgl-image block ${
              isMockup
                ? 'relative w-full h-auto object-contain'
                : 'absolute inset-0 w-full h-full object-cover rounded-3xl'
            }`}
            crossOrigin="anonymous"
            draggable={false}
          />
        </div>

        <div className="flex flex-col gap-3">
          {/* Meta / Tags */}
          <div className="flex items-center gap-3 text-xs md:text-sm font-medium tracking-wide text-neutral-400 uppercase min-h-5">
            <span className="relative inline-block">
              <span className="invisible whitespace-nowrap">
                {project.tags.join(' • ')}
              </span>
              <ScrambleText
                text={project.tags.join(' • ')}
                speed={30}
                className="absolute inset-0 whitespace-nowrap"
              />
            </span>
          </div>

          {/* Title & Arrow */}
          <div className="flex items-center justify-start gap-2">
            {/* Animated Arrow - Slides in from left */}
            <div className="overflow-hidden flex items-center justify-center text-white w-0 opacity-0 -translate-x-2 mr-0 group-hover:w-8 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-2 transition-all duration-300">
              <ArrowRight size={32} strokeWidth={2.5} />
            </div>

            <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight group-hover:text-neutral-200 transition-colors flex overflow-hidden">
              {project.title.split('').map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <span
                    className="inline-block"
                    style={{
                      transform: isInView
                        ? 'translateY(0%)'
                        : 'translateY(-100%)',
                      transitionProperty: 'transform',
                      transitionDuration: `${TITLE_CHAR_DURATION}s`,
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                      transitionDelay: `${Math.min(
                        Math.abs(i - project.title.length / 2) * TITLE_CHAR_DELAY_STEP,
                        TITLE_CHAR_MAX_DELAY,
                      )}s`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                </span>
              ))}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
