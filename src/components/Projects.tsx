import React from "react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import FluidButton from "./ui/FluidButton";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardScrollShaderOverlay } from "./ProjectCardScrollShader";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-transparent relative z-10 w-full"
    >
      <ProjectCardScrollShaderOverlay />
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <SplitRevealTitle
            line1="Wybrane"
            line2="Realizacje"
            className="text-5xl md:text-8xl text-white tracking-tighter"
          />
          <LineReveal
            lines={[
              "Zobacz realizacje, które najlepiej",
              "pokazują, jak zamieniamy potrzeby",
              "klientów w dopracowane i skuteczne",
              "strony oraz sklepy internetowe.",
            ]}
            className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {PROJECTS.slice(0, 8).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Sticky Fluid Button */}
      <FluidButton label="Wszystkie realizacje" href="/realizacje" />
    </section>
  );
}
