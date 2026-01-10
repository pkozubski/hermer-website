import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Layers, Zap, Leaf } from "lucide-react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import { ScrambleText } from "./ui/ScrambleText";
import FluidButton from "./ui/FluidButton";

import broenergiaImg from "@/assets/realizations/broenergia.jpeg";
import nexonpharmaImg from "@/assets/realizations/nexonpharma.jpeg";
import gsatolaImg from "@/assets/realizations/gsatola.jpeg";
import unipelletImg from "@/assets/realizations/unipellet.jpeg";

// --- KONFIGURACJA I DANE ---

const PROJECTS = [
  {
    id: 1,
    title: "Broenergia",
    category: "Odnawialne Źródła Energii",
    description:
      "Kompleksowy serwis korporacyjny dla lidera branży fotowoltaicznej. Projekt skupiony na konwersji i edukacji klienta.",
    image: broenergiaImg,
    link: "https://broenergia.pl/",
    tags: ["Design", "Development", "3D"],
  },
  {
    id: 2,
    title: "Nexon Pharma",
    category: "Farmacja & Medycyna",
    description:
      "Platforma B2B dla producenta farmaceutycznego. Zaawansowany system filtrowania i strefa partnera.",
    image: nexonpharmaImg,
    link: "https://nexonpharma.pl/",
    tags: ["Platforma B2B", "System", "Integracja"],
  },
  {
    id: 3,
    title: "G. Satola",
    category: "Architektura & Design",
    description:
      "Minimalistyczne portfolio architektoniczne. Surowy, skandynawski design podkreślający jakość realizacji.",
    image: gsatolaImg,
    link: "http://gsatola.no/",
    tags: ["Portfolio", "Minimalizm", "Animacje"],
  },
  {
    id: 4,
    title: "Unipellet",
    category: "E-commerce",
    description:
      "Nowoczesny sklep internetowy. Intuicyjny proces zakupowy i pełna optymalizacja pod urządzenia mobilne.",
    image: unipelletImg,
    link: "https://unipellet.pl/",
    tags: ["E-commerce", "UX/UI", "Optymalizacja"],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Effect: REMOVED for alignment

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
          viewport={{ once: true, amount: 0.2 }}
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
                    viewport={{ once: true }}
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

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-transparent relative z-10 w-full"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <SplitRevealTitle
            line1="Wybrane"
            line2="Realizacje"
            className="text-5xl md:text-8xl text-white"
          />
          <LineReveal
            lines={[
              "Wybór naszych najbardziej pasjonujących",
              "projektów zrealizowanych dla klientów",
              "na przestrzeni lat.",
            ]}
            className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Sticky Fluid Button */}
      <FluidButton label="Wszystkie realizacje" />
    </section>
  );
}
