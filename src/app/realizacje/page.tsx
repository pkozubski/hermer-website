"use client";

import React from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ProjectCard } from "@/components/homepage/ProjectCard";
import { ProjectCardScrollShaderOverlay } from "@/components/homepage/ProjectCardScrollShader";
import { PROJECTS } from "@/data/projects";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

export default function RealizacjePage() {
  return (
    <div
      data-realizations-root
      className="min-h-screen bg-neutral-900 text-white overflow-x-clip"
    >
      <ProjectCardScrollShaderOverlay scopeSelector="[data-realizations-zoom-target]" />

      <Header allowVisibility={true} />

      <main className="relative z-10 pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header Section matching Projects.tsx style */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
            <SplitRevealTitle
              line1="Wszystkie"
              line2="Realizacje"
              as="h1"
              className="text-5xl md:text-8xl text-white"
            />
            <div className="max-w-xs md:max-w-sm">
              <p className="text-neutral-400 text-xs md:text-sm uppercase tracking-wide leading-relaxed">
                Przegląd naszych projektów, gdzie technologia spotyka się z
                designem. Zobacz kompleksowe realizacje stron i sklepów, które
                pomagają markom rosnąć.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div
            data-realizations-zoom-target
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
