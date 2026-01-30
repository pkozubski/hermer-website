import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "../ProjectCard";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";

interface OfferProjectsProps {
  category: 'ecommerce' | 'website';
}

export const OfferProjects: React.FC<OfferProjectsProps> = ({ category }) => {
  // Filter projects based on category logic
  // ecommerce: Unipellet (4), Nexon Pharma (2)
  // website: Broenergia (1), G. Satola (3)
  const selectedProjects = category === 'ecommerce' 
    ? PROJECTS.filter(p => [4, 2].includes(p.id))
    : PROJECTS.filter(p => [1, 3].includes(p.id));

  return (
    <section className="py-24 bg-transparent border-t border-white/5">
       <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                  <SplitRevealTitle
                     line1="Wybrane"
                     line2="Realizacje"
                     className="text-white! text-4xl md:text-6xl lg:text-7xl"
                  />
              </div>
              <Link
                href="/realizacje"
                className="group flex items-center gap-2 text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <span className="text-sm font-medium">Zobacz wszystkie</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {selectedProjects.map((project, index) => (
                 <ProjectCard key={project.id} project={project} index={index} />
              ))}
           </div>
       </div>
    </section>
  );
};
