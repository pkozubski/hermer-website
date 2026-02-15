'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrambleText } from './ui/ScrambleText';
import { PROJECTS } from '@/data/projects';

const MotionLink = motion(Link);

type ProjectType = (typeof PROJECTS)[0];

interface ProjectCardProps {
  project: ProjectType;
  index: number;
  isMockup?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isMockup = false,
}) => {
  const destinationHref = project.link;
  const isExternal = destinationHref.startsWith('http');

  return (
    <div>
      <MotionLink
        href={destinationHref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        data-project-card
        className="group block"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.div
          className={`relative mb-6 ${
            isMockup
              ? 'aspect-auto w-full'
              : 'aspect-4/3 md:aspect-16/10 rounded-3xl overflow-hidden'
          }`}
          initial={{
            scale: 0.9,
            opacity: 0.8,
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image.src}
            alt={project.title}
            className={`webgl-image block ${
              isMockup
                ? 'relative w-full h-auto object-contain'
                : 'absolute inset-0 w-full h-full object-cover rounded-3xl'
            }`}
            crossOrigin="anonymous"
            draggable={false}
          />
        </motion.div>

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
            <motion.div
              variants={{
                rest: { width: 0, opacity: 0, x: -10, marginRight: 0 },
                hover: {
                  width: 'auto',
                  opacity: 1,
                  x: 0,
                  marginRight: 8,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    mass: 0.5,
                  },
                },
              }}
              className="overflow-hidden flex items-center justify-center text-white"
            >
              <ArrowRight size={32} strokeWidth={2.5} />
            </motion.div>

            <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight group-hover:text-neutral-200 transition-colors flex overflow-hidden">
              {project.title.split('').map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '-100%' }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: Math.abs(i - project.title.length / 2) * 0.04,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                </span>
              ))}
            </h3>
          </div>
        </div>
      </MotionLink>
    </div>
  );
};
