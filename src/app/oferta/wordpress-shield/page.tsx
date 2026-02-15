"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";
import { GlassBentoCard } from "@/components/cards/bento/GlassBentoCard";
import {
  Shield,
  Lock,
  AlertTriangle,
  Server,
  Activity,
  Zap,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

// Helper icons
const Code2Icon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const TrendingDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);
const LayoutXIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

// --- Pricing Data ---
const pricingTiers = [
  {
    name: "Podstawowy",
    price: "300",
    description: "Podstawowa ochrona i serwis dla małych stron.",
    features: ["2 godziny prac nad Twoją stroną www"],
  },
  {
    name: "Biznes",
    price: "725",
    description: "Optymalne rozwiązanie dla rozwijających się firm.",
    features: ["5 godzin prac nad Twoją stroną www"],
    featured: true,
  },
  {
    name: "Premium",
    price: "1400",
    description: "Pełne wsparcie dla wymagających serwisów.",
    features: ["10 godzin prac nad Twoją stroną www"],
  },
];

const generalFeatures = [
  {
    title: "Częste backupy",
    description: "By w razie problemu mieć kopie Twoich aktualnych plików.",
    iconSrc: "/assets/wordpress-shield/clock-on-hand.svg",
    color: "#916AFF",
  },
  {
    title: "Aktualizacje",
    description: "Pomogą zabezpieczyć Twoją stronę www przez atakami.",
    iconSrc: "/assets/wordpress-shield/web-settings.svg",
    color: "#52D8EA",
  },
  {
    title: "Diagnostyka",
    description:
      "Testy szybkości działania strony www oraz skanowanie w poszukiwaniu zagrożeń.",
    iconSrc: "/assets/wordpress-shield/analitics-magnifier.svg",
    color: "#916AFF",
  },
];

const risks = [
  {
    title: "Wstrzyknięcie złośliwego kodu",
    icon: Code2Icon, // Placeholder, defining below or importing
    description: "Ryzyko przejęcia kontroli nad witryną lub kradzieży danych.",
  },
  {
    title: "Obniżenie pozycji w Google",
    icon: TrendingDownIcon,
    description: "Zainfekowane strony spadają w wynikach wyszukiwania.",
  },
  {
    title: "Problemy z wyświetlaniem",
    icon: LayoutXIcon,
    description: "Strona może przestać działać lub wyświetlać błędy.",
  },
  {
    title: "Ostrzeżenie o niebezpieczeństwie",
    icon: AlertTriangle,
    description: "Użytkownicy zobaczą czerwony ekran blokady Google.",
  },
];

export default function WordPressShieldPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Reusing risks array with proper icons now
  const risksWithIcons = [
    {
      title: "Wstrzyknięcie złośliwego kodu",
      icon: Code2Icon,
      description:
        "Ryzyko przejęcia kontroli nad witryną lub kradzieży danych.",
    },
    {
      title: "Obniżenie pozycji w Google",
      icon: TrendingDownIcon,
      description: "Zainfekowane strony spadają w wynikach wyszukiwania.",
    },
    {
      title: "Problemy z wyświetlaniem",
      icon: LayoutXIcon,
      description: "Strona może przestać działać lub wyświetlać błędy.",
    },
    {
      title: "Ostrzeżenie o niebezpieczeństwie",
      icon: AlertTriangle,
      description: "Użytkownicy zobaczą czerwony ekran blokady Google.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-neutral-900 text-white font-sans overflow-x-clip">
      <Header allowVisibility={true} />

      <main ref={containerRef} className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/wordpress-shield/wordpress-shield-bg.png"
              alt="WordPress Shield Security Background"
              fill
              className="object-cover opacity-60"
              priority
              quality={100}
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-neutral-900/40 via-neutral-900/60 to-neutral-900" />
            <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
              Bezpieczeństwo i Opieka
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter mb-8 leading-[1.1] drop-shadow-2xl">
              WordPress <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#916AFF] to-[#52D8EA]">
                Shield
              </span>
            </h1>

            <p className="text-neutral-200 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed drop-shadow-lg font-light">
              Stałe nadzorowanie i aktualizowanie systemu CMS to fundament
              zabezpieczający Twoją stronę www. Zabezpiecz dane swojej firmy
              oraz użytkowników dzięki usłudze WordPress Shield.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <ReelCtaButton
                text="Zabezpiecz stronę"
                href="#pricing"
                size="large"
              />
              <Link
                href="/kontakt"
                className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all font-bold text-sm flex items-center justify-center shadow-lg"
              >
                Skontaktuj się
              </Link>
            </div>
          </div>
        </section>

        {/* --- RISKS SECTION --- */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
              Zagrożenia wynikające z <br />
              <span className="text-red-400">braku zabezpieczeń</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Ignorowanie aktualizacji i zabezpieczeń może prowadzić do
              poważnych konsekwencji dla Twojego biznesu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {risksWithIcons.map((risk, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-neutral-800/30 border border-white/5 hover:border-red-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform relative">
                  <risk.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{risk.title}</h3>
                <p className="text-sm text-neutral-400">{risk.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROTECTION FEATURES --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
                Jak chronimy Twoją stronę www?
              </h2>
              <div className="h-1 w-20 bg-[#52D8EA] mx-auto mb-8" />
              <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
                Nasz zespół zadba o to, aby strona www była stale aktualizowana
                i dobrze wyświetlała się użytkownikom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {generalFeatures.map((feature, idx) => (
                <GlassBentoCard
                  key={idx}
                  title={feature.title}
                  description={feature.description}
                  iconSrc={feature.iconSrc}
                  className="min-h-[250px]"
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: feature.color }}
                  />
                </GlassBentoCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section
          id="pricing"
          className="py-24 container mx-auto px-4 md:px-8 relative"
        >
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#52D8EA]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6">
              Priorytetowe wsparcie techniczne
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Wybierz pakiet godzinowy dopasowany do Twoich potrzeb.
              Niewykorzystane godziny przechodzą na kolejne miesiące.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                  tier.featured
                    ? "bg-neutral-800 border-neutral-600 shadow-2xl scale-105 z-10"
                    : "bg-white/5 border-white/10 hover:-translate-y-1 shadow-lg"
                }`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-[#916AFF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                    Polecany
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-neutral-400 text-sm h-10">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-neutral-400 font-medium">PLN</span>
                  <span className="text-xs text-neutral-500 ml-2">
                    netto / msc
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-neutral-300"
                    >
                      <CheckCircle2 className="text-[#916AFF] w-5 h-5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                  {/* Common feature for all */}
                  <li className="flex items-center gap-3 text-sm text-neutral-500">
                    <Clock className="w-4 h-4 shrink-0" />
                    Godziny przechodzą na kolejny miesiąc
                  </li>
                </ul>

                <Link
                  href="/kontakt"
                  className={`block w-full py-4 rounded-xl text-center font-semibold transition-all ${
                    tier.featured
                      ? "bg-[#916AFF] text-white hover:bg-[#7b54e0] shadow-[0_0_20px_rgba(145,106,255,0.3)]"
                      : "border border-white/10 text-white hover:border-[#916AFF] hover:text-[#916AFF]"
                  }`}
                >
                  Wybieram {tier.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Add-on */}
          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl bg-[#916AFF]/10 border border-[#916AFF]/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#916AFF]/20 flex items-center justify-center shrink-0 text-[#916AFF]">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Priorytetowe wsparcie techniczne
                </h3>
                <p className="text-neutral-300 text-sm max-w-md">
                  Możliwość zgłoszenia zadania priorytetowego, które wykonywane
                  jest przed kolejką zadań od innych klientów.
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-bold text-white mb-1">
                190 PLN{" "}
                <span className="text-sm font-normal text-neutral-400">
                  netto
                </span>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                Miesięcznie
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <CTASection
          title="Zadbaj o bezpieczeństwo"
          subtitleLines={[
            "swojej strony już dziś.",
            "Skontaktuj się z nami i wybierz",
            "odpowiedni pakiet ochrony.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
