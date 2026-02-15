"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Review } from "./Testimonials";

const Offer = dynamic(() => import("./Offer").then((m) => ({ default: m.Offer })), { ssr: false });
const WhoWeHelp = dynamic(() => import("./WhoWeHelp").then((m) => ({ default: m.WhoWeHelp })), { ssr: false });
const About = dynamic(() => import("./About").then((m) => ({ default: m.About })), { ssr: false });
const Projects = dynamic(() => import("./Projects").then((m) => ({ default: m.Projects })), { ssr: false });
const Blog = dynamic(() => import("./Blog").then((m) => ({ default: m.Blog })), { ssr: false });
const Testimonials = dynamic(() => import("./Testimonials").then((m) => ({ default: m.Testimonials })), { ssr: false });
const Faq = dynamic(() => import("./Faq").then((m) => ({ default: m.Faq })), { ssr: false });
const Contact = dynamic(() => import("./Contact").then((m) => ({ default: m.Contact })), { ssr: false });
const Footer = dynamic(() => import("./Footer").then((m) => ({ default: m.Footer })), { ssr: false });
const CTASection = dynamic(() => import("./CTASection").then((m) => ({ default: m.CTASection })), { ssr: false });

interface MainContentProps {
  faqItems?: any[];
  reviews?: Review[];
}

export const MainContent: React.FC<MainContentProps> = ({
  faqItems,
  reviews = [],
}) => {
  return (
    <div className="relative min-h-screen bg-neutral-900 font-sans overflow-x-clip">
      <Header allowVisibility={true} />
      <Hero />

      <div className="relative z-20">
        <Offer />
        <WhoWeHelp />

        {/* Unified Dark Section (About + Projects + Testimonials) */}
        <section className="relative bg-neutral-900 overflow-visible">
          <div className="relative z-10">
            <About />
            <Projects />
            <Testimonials reviews={reviews} />
          </div>
        </section>

        <Blog />
        <Contact />
        <Faq items={faqItems} />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};
