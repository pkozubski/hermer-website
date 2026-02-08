import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectPreviewPanel } from "@/components/ProjectPreviewPanel";
import { ProjectDetailEntrance } from "@/components/ProjectDetailEntrance";
import { ProjectCardScrollShaderOverlay } from "@/components/ProjectCardScrollShader";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { LineReveal } from "@/components/ui/LineReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { PROJECTS } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const projectId = Number.parseInt(id, 10);

  if (Number.isNaN(projectId)) {
    notFound();
  }

  const project = PROJECTS.find((item) => item.id === projectId);

  if (!project) {
    notFound();
  }

  const words = project.title.split(" ");
  const midpoint = Math.max(1, Math.ceil(words.length / 2));
  const titleLine1 = words.slice(0, midpoint).join(" ");
  const titleLine2 = words.slice(midpoint).join(" ") || "Realizacja";
  
  const relatedProjects = PROJECTS.filter((item) => item.id !== project.id).slice(
    0,
    2,
  );
  const hasLiveLink = project.link.startsWith("http");

  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-x-clip font-sans">
      <ProjectCardScrollShaderOverlay />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-[#916AFF]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#52D8EA]/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <Header allowVisibility={true} />

      <ProjectDetailEntrance>
        <main className="relative z-10 pt-34 md:pt-40 pb-24 md:pb-32">
          {/* Header Section */}
          <section className="container mx-auto px-4 md:px-8">
            <Link
              href="/realizacje"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-white/70 transition-all hover:border-white/30 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Wróć do realizacji
            </Link>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:items-end">
              <div>
                <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#52D8EA] font-medium">
                  {project.category}
                </p>
                <SplitRevealTitle
                  line1={titleLine1}
                  line2={titleLine2}
                  className="text-6xl md:text-8xl xl:text-9xl text-white tracking-tighter"
                  once={true}
                />
              </div>

              <div className="space-y-8">
                <LineReveal
                  lines={[project.description]}
                  once={true}
                  className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light"
                />
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* THE CORE MESH BLOCK: Visual + Stats */}
          <section className="mt-16 md:mt-24 border-y border-white/10">
            {/* Visual */}
            <ProjectPreviewPanel
              project={project}
              index={0}
              className="border-none"
              mediaClassName="h-[60vh] md:h-[80vh]"
            />
            
            {/* Stats Grid - Borders touch edges, content follows container */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
              <div className="group border-b md:border-b-0 md:border-r border-white/10 bg-transparent py-10 md:py-16 pl-4 md:pl-8 lg:pl-[calc((100vw-1536px)/2+2rem)] pr-8 transition-colors hover:bg-white/[0.02]">
                <div className="max-w-full">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#52D8EA] font-bold mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#52D8EA]" />
                    Branża
                  </p>
                  <h4 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                    {project.category}
                  </h4>
                </div>
              </div>
              <div className="group border-b md:border-b-0 md:border-r border-white/10 bg-transparent py-10 md:py-16 px-8 md:px-12 transition-colors hover:bg-white/[0.02]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#52D8EA] font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#52D8EA]" />
                  Zakres prac
                </p>
                <h4 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                  {project.tags.slice(0, 3).join(" + ")}
                </h4>
              </div>
              <div className="group border-white/10 bg-transparent py-10 md:py-16 pl-8 pr-4 md:pr-8 lg:pr-[calc((100vw-1536px)/2+2rem)] transition-colors hover:bg-white/[0.02]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#52D8EA] font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#52D8EA]" />
                  Status
                </p>
                <h4 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                  {hasLiveLink ? "Live" : "W produkcji"}
                </h4>
              </div>
            </div>
          </section>

          {/* Bottom Content */}
          <section className="container mx-auto mt-24 md:mt-40 px-4 md:px-8">
            <div className="max-w-4xl">
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
                Podejście i realizacja
              </h3>
              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
                <p>
                  Każdy projekt w Hermer traktujemy jako unikalne wyzwanie biznesowe. Naszym celem nie jest tylko stworzenie estetycznej strony, ale przede wszystkim narzędzia, które realizuje konkretne cele.
                </p>
                <p>
                  W przypadku realizacji {project.title}, skupiliśmy się na harmonijnym połączeniu nowoczesnego designu z intuicyjną architekturą informacji.
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto mt-24 md:mt-48 px-4 md:px-8">
            <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
              <h3 className="text-4xl md:text-7xl font-medium tracking-tighter text-white">
                Kolejne realizacje
              </h3>
              <Link
                href="/realizacje"
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
              >
                Zobacz wszystkie
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
              {relatedProjects.map((item, index) => (
                <ProjectCard key={item.id} project={item} index={index} />
              ))}
            </div>
          </section>

          <CTASection 
            title="Twój projekt może być następny"
            subtitleLines={[
              "Podoba Ci się ta realizacja?",
              "Zaprojektujmy wspólnie system,",
              "który wyróżni Twój biznes.",
            ]}
          />
        </main>

        <Footer />
      </ProjectDetailEntrance>
    </div>
  );
}
