import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutVision } from "@/components/about/AboutVision";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#916AFF] selection:text-white">
      <SmoothScroll />
      <Header allowVisibility={true} />

      <main>
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
