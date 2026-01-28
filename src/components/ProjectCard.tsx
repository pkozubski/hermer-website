"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrambleText } from "./ui/ScrambleText";
import { PROJECTS } from "@/data/projects";

type ProjectType = (typeof PROJECTS)[0];

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef}>
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.div
          className="relative aspect-4/3 md:aspect-16/10 overflow-hidden rounded-3xl bg-neutral-900 mb-6"
          initial={{
            scale: 0.9,
            opacity: 0.8,
            rotate: index % 2 === 0 ? -3 : 3,
          }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            rotate: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <div className="absolute inset-0 bg-neutral-800/50 animate-pulse" />
          <motion.img
            src={project.image.src}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        </motion.div>

        <div className="flex flex-col gap-3">
          {/* Meta / Tags */}
          <div className="flex items-center gap-3 text-xs md:text-sm font-medium tracking-wide text-neutral-400 uppercase">
            <ScrambleText text={project.tags.join(" • ")} speed={30} />
          </div>

          {/* Title & Arrow */}
          <div className="flex items-center justify-start gap-2">
            {/* Animated Arrow - Slides in from left */}
            <motion.div
              variants={{
                rest: { width: 0, opacity: 0, x: -10, marginRight: 0 },
                hover: {
                  width: "auto",
                  opacity: 1,
                  x: 0,
                  marginRight: 8,
                  transition: {
                    type: "spring",
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
              {project.title.split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "-100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: Math.abs(i - project.title.length / 2) * 0.04,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </span>
              ))}
            </h3>
          </div>
        </div>
      </motion.a>
    </div>
  );
};
