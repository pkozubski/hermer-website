"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

type ProjectType = (typeof PROJECTS)[0];

interface ProjectPreviewPanelProps {
  project: ProjectType;
  index: number;
  className?: string;
  fullScreen?: boolean;
  mediaClassName?: string;
}

export const ProjectPreviewPanel: React.FC<ProjectPreviewPanelProps> = ({
  project,
  index,
  className = "",
  fullScreen = false,
  mediaClassName = "",
}) => {
  const hasLiveLink = project.link.startsWith("http");

  return (
    <motion.article
      className={`relative overflow-hidden border-y border-white/10 bg-transparent ${
        fullScreen ? "h-full" : "min-h-[600px]"
      } ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_55%] xl:grid-cols-[1fr_60%]">
        {/* Aside: Info Mesh - Content aligns to container left */}
        <aside className="border-b lg:border-b-0 lg:border-r border-white/10 bg-transparent py-12 md:py-24 pl-4 md:pl-8 lg:pl-[calc((100vw-1536px)/2+2rem)] pr-10 flex flex-col justify-center">
          <div className="max-w-md">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#52D8EA] font-bold mb-4">
                Projekt / {String(project.id).padStart(2, '0')}
              </p>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.02] text-white tracking-tighter">
                {project.title}
              </h3>
            </div>
            
            <div className="h-px w-12 bg-[#52D8EA]/40 my-10" />
            
            <p className="text-lg md:text-xl leading-relaxed text-white/50 font-light">
              {project.description}
            </p>

            <div className="pt-10 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

                                        {/* Media Container: Pure Full-Width Visual */}

                                        <div className="relative min-w-0 w-full flex flex-col bg-transparent">

                                          {/* Top Bar Mesh - Subtle indicator & CTA */}

                                          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">

                                            <div className="border-b md:border-b-0 md:border-r border-white/10 px-10 py-10 flex items-center gap-5 bg-white/[0.01]">

                                              <div className="w-1.5 h-1.5 rounded-full bg-[#52D8EA]" />

                                              <span className="text-lg text-white/40 font-medium">

                                                Koncepcja wizualna / {project.title}

                                              </span>

                                            </div>

                                

                                            <motion.a

                                              href={project.link}

                                              target="_blank"

                                              rel="noopener noreferrer"

                                              className="group relative flex items-center justify-between px-10 py-10 overflow-hidden transition-colors cursor-pointer bg-white/[0.01]"

                                              initial="initial"

                                              whileHover="hover"

                                              animate="initial"

                                            >

                                              {/* Dot background expander (Reel Effect) */}

                                              <motion.span

                                                className="absolute left-10 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white z-0 pointer-events-none origin-center"

                                                variants={{

                                                  initial: { scale: 1 },

                                                  hover: { scale: 150 }

                                                }}

                                                transition={{ duration: 0.6, ease: [0.35, 0, 0, 1] }}

                                              />

                                

                                              {/* Text Label */}

                                              <motion.span

                                                className="relative z-10 text-lg font-medium pl-10"

                                                variants={{

                                                  initial: { x: 0, color: "rgba(255,255,255,0.4)" },

                                                  hover: { x: -15, color: "#000000" }

                                                }}

                                                transition={{ duration: 0.6, ease: [0.35, 0, 0, 1] }}

                                              >

                                                Odwiedź projekt online

                                              </motion.span>

                                

                                              {/* Sliding Arrow Icon */}

                                              <motion.div

                                                className="relative z-10 flex items-center justify-center text-black"

                                                variants={{

                                                  initial: { x: 20, opacity: 0 },

                                                  hover: { x: 0, opacity: 1 }

                                                }}

                                                transition={{ duration: 0.6, ease: [0.35, 0, 0, 1] }}

                                              >

                                                <ArrowUpRight className="h-6 w-6" />

                                              </motion.div>

                                            </motion.a>

                                          </div>                  {/* Full Width Image Content */}
                  <div
                    className={`relative overflow-hidden flex-1 ${
                      fullScreen ? "h-[calc(100vh-90px)]" : "h-[500px] md:h-[800px]"
                    } ${mediaClassName}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image.src}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
      {/* Reveal Curtains - sharp edges */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-40 w-1/2 bg-[#171717]"
        initial={{ x: 0 }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 z-40 w-1/2 bg-[#171717]"
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </motion.article>
  );
};
