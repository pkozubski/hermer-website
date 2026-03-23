import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";
import { EcommerceMarketingSection } from "@/components/shared/EcommerceMarketingSection";
import { Contact } from "@/components/homepage/Contact";

const industries = [
  {
    label: "Strony internetowe dla prawników",
    href: "/strony-internetowe-dla-prawnikow",
  },
  {
    label: "Strony internetowe dla developerów",
    href: "/strony-internetowe-dla-developerow",
  },
  {
    label: "Strony internetowe dla restauracji",
    href: "/strony-internetowe-dla-restauracji",
  },
  {
    label: "Strony internetowe dla fotografa",
    href: "/strony-internetowe-dla-fotografa",
  },
  {
    label: "Strony internetowe dla firm",
    href: "/strony-internetowe-dla-firm",
  },
];

export default function DlaKogoPage() {
  return (
    <div className="bg-[#171717] min-h-screen text-white selection:bg-[#916AFF] selection:text-white font-sans overflow-x-clip">
      <Header allowVisibility={true} />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative w-full py-20 lg:py-32 flex items-center border-b border-white/5 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-neutral-900 z-0">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#916AFF]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#52D8EA]/10 rounded-full blur-[120px] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left Column: Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-xl aspect-square">
                  <div className="absolute inset-0 bg-[#52D8EA]/20 blur-[80px] rounded-full scale-75 animate-pulse" />
                  <Image
                    src="/assets/dla-kogo/hero-illustration.webp"
                    alt="Tworzenie stron www - ilustracja"
                    fill
                    className="object-contain drop-shadow-2xl relative z-10"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#916AFF]">
                  TWORZENIE STRON WWW
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter mb-8 leading-[1.1]">
                  Nasza <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#916AFF] to-[#52D8EA]">
                    specjalizacja
                  </span>
                </h1>

                <p className="text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-10 text-lg md:text-xl leading-relaxed">
                  Wykorzystaj nieograniczony zasięg internetu, z którego
                  codziennie korzystają niezliczone ilości osób i pokaż swoje
                  usługi za pomocą{" "}
                  <strong className="text-white">
                    efektywnej strony internetowej
                  </strong>
                  . Dla firm z dowolnego obszaru Polski i Europy wykonamy
                  dopracowaną od podstaw, bezkonkurencyjną witrynę przyciągającą
                  nowych klientów.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <ReelCtaButton
                    href="/kontakt"
                    text="Rozpocznij współpracę"
                    size="large"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- E-COMMERCE & MARKETING SECTIONS --- */}
        <EcommerceMarketingSection />

        {/* --- INDUSTRIES GRID --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-16">
              Dedykowane Rozwiązania
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {industries.map((industry, idx) => (
                <Link
                  key={idx}
                  href={industry.href}
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#916AFF]/50 hover:text-[#916AFF] transition-all duration-300 text-lg font-medium"
                >
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
