import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutVision } from "@/components/about/AboutVision";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-neutral-900 font-sans text-white overflow-x-clip selection:bg-[#916AFF] selection:text-white">
      {/* Global Dark Background Layer */}
      <div className="fixed inset-0 w-full h-full bg-neutral-900 z-0 pointer-events-none" />

      {/* Global Gradients / Blobs (Copied from MainContent) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10vh] right-[-10vw] w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/20 rounded-full blur-[100px] mix-blend-screen opacity-80 animate-pulse-slow" />
        <div className="absolute top-[80vh] left-[-20vw] w-[90vw] h-[90vw] md:w-[1000px] md:h-[1000px] bg-[#52D8EA]/10 rounded-full blur-[120px] mix-blend-screen opacity-60" />
        <div className="absolute top-[160vh] right-[-10vw] w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/15 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <Header allowVisibility={true} />

      <main className="relative z-10">
        <AboutHero />
        <AboutMission />
        <AboutStats />
        <AboutVision />
        <AboutTeam />
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
}
