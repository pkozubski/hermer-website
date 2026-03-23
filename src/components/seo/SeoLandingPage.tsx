import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Palette,
  Code2,
  Users,
  TrendingUp,
  Settings,
  Monitor,
  UserCheck,
  MousePointer2,
} from "lucide-react";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { customPortableTextComponents } from "@/components/ui/CustomPortableText";
import {
  DetailedSection,
  DetailedSectionsWrapper,
} from "@/components/seo/DetailedSection";
import { PageLayout } from "@/components/shared/PageLayout";
import { Faq } from "@/components/shared/Faq";
import { CTASection } from "@/components/shared/CTASection";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";
import { ProjectCard } from "@/components/homepage/ProjectCard";
import { GlassBentoCard } from "@/components/cards/bento/GlassBentoCard";
import { FluidButton } from "@/components/ui/FluidButton";

import klinikaNaNowoImg from "@/assets/realizations/klinika-na-nowo.webp";

// ─── Icon resolution (string → component) ────────────────────────────

const ICON_MAP = {
  palette: Palette,
  users: Users,
  "trending-up": TrendingUp,
  settings: Settings,
  monitor: Monitor,
  "user-check": UserCheck,
  "mouse-pointer-2": MousePointer2,
  search: Search,
  code2: Code2,
} as const;

export type IconName = keyof typeof ICON_MAP;

// ─── Types ───────────────────────────────────────────────────────────

export interface BenefitItem {
  icon: IconName;
  iconColor: "purple" | "cyan";
  title: string;
  description: string;
  /** Optional image path — when set, renders a large image card instead of an icon card */
  image?: string;
  /** Rich text description (Portable Text) */
  descriptionRichText?: PortableTextBlock[];
}

export interface DetailedSectionData {
  number: number;
  title: string;
  barColor: "purple" | "cyan" | "white";
  description: string;
  /** Rich text description (Portable Text) */
  descriptionRichText?: PortableTextBlock[];
  /** Optional team cards rendered inside section 3 */
  teamCards?: Array<{ title: string; desc: string }>;
}

export interface FaqItem {
  id: number | string;
  question: string;
  answer: string | PortableTextBlock[];
}

export interface SeoLandingPageProps {
  /** Custom hero H1 prefix (default: "Strony internetowe") */
  heroTitle?: string;
  /** City name displayed in hero h1 (e.g. "Chojnice", "Piła") */
  cityName: string;
  /** Badge text above h1 */
  heroBadge: string;
  /** Hero subtitle below the divider (rich text) */
  heroSubtitle: PortableTextBlock[];
  /** Benefits section heading */
  benefitsTitle: string;
  /** 3 benefit cards (descriptions are rich text) */
  benefits: BenefitItem[];
  /** 3 detailed content sections (descriptions are rich text) */
  detailedSections: DetailedSectionData[];
  /** Departments section heading (includes city name) */
  departmentsTitle: string;
  /** FAQ items — from Sanity or fallback */
  faqItems: FaqItem[];
  /** CTA section title line 1 */
  ctaTitleLine1?: string;
  /** CTA section title line 2 */
  ctaTitleLine2?: string;
  /** CTA section subtitle lines */
  ctaSubtitleLines?: string[];
  /** Results section title */
  resultsTitle?: string;
  /** Results section description */
  resultsDescription?: string;
  /** Results clients details */
  resultsClients?: Array<{ clientName: string; growthPercent: string }>;
}

// ─── Component ───────────────────────────────────────────────────────

export function SeoLandingPage({
  heroTitle = "Strony internetowe",
  cityName,
  heroBadge,
  heroSubtitle,
  benefitsTitle,
  benefits,
  detailedSections,
  departmentsTitle,
  faqItems,
  ctaTitleLine1 = "Skontaktuj się",
  ctaTitleLine2 = "z nami",
  ctaSubtitleLines = [
    "i razem ustalmy cel, jaki chcesz osiągnąć",
    "dla swojej firmy. Poprowadzimy Cię",
    "pewną drogą do sukcesu.",
  ],
  resultsTitle = "Efekty współpracy",
  resultsDescription = "„Efektywne strony www\"… takie motto zobowiązuje. Sprawdź rezultaty zmiany starej strony www na nową, zostań naszym klientem i spodziewaj się wzrostu zainteresowania swoją firmą.",
  resultsClients = [
    { clientName: "Klinika NaNowo", growthPercent: "670%" },
    { clientName: "VerTel", growthPercent: "670%" },
  ],
}: SeoLandingPageProps) {
  const klinikaNaNowoProject = {
    id: 19,
    title: "Klinika NaNowo",
    category: "Medycyna Estetyczna",
    description:
      "Wizytówka nowoczesnej kliniki. Przejrzysta oferta zabiegów i łatwy system rezerwacji konsultacji.",
    tags: ["UI/UX design", "Web Development", cityName],
    image: klinikaNaNowoImg,
    link: "https://klinikananowo.pl/",
  };

  const iconColorMap = {
    purple: {
      bg: "bg-[#916AFF]/20",
      text: "text-[#916AFF]",
    },
    cyan: {
      bg: "bg-[#52D8EA]/20",
      text: "text-[#52D8EA]",
    },
  };

  return (
    <PageLayout showGradientBlobs={false}>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative w-full min-h-[75vh] lg:min-h-[85vh] pt-32 pb-48 lg:pt-40 lg:pb-64 flex items-center justify-center overflow-hidden">
        {/* Main Hero Background / Outline */}
        <div className="absolute inset-0 w-full h-full opacity-80 select-none pointer-events-none">
          <Image
            src="/assets/seo/template/hero-bg.webp"
            alt={`${cityName} Background`}
            fill
            className="object-cover mix-blend-screen"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#916AFF]">
            {heroBadge}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6">
            {heroTitle} <br />{" "}
            <span className="text-[#916AFF]">{cityName}</span>
          </h1>
          <div className="h-1 w-20 bg-[#916AFF] mx-auto mb-8" />
          <div className="text-neutral-400 mx-auto mb-12 text-lg max-w-2xl">
            <PortableText value={heroSubtitle} components={customPortableTextComponents} />
          </div>
          <div className="flex justify-center mt-4 mb-8">
            <ReelCtaButton
              text="Kontakt"
              href="/kontakt"
              size="large"
              className=""
            />
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <section className="relative z-30 -mt-32 lg:-mt-48 pb-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
            {benefitsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            // Image-based card (like strony-internetowe-dla-prawnikow)
            if (benefit.image) {
              return (
                <div
                  key={index}
                  className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30"
                >
                  <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                    <div className="relative w-full h-full">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-4 font-display">
                      {benefit.title}
                    </h3>
                    <div className="text-neutral-400 leading-relaxed text-sm md:text-base">
                      {benefit.descriptionRichText ? (
                        <PortableText value={benefit.descriptionRichText} components={customPortableTextComponents} />
                      ) : (
                        <p>{benefit.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            // Default icon-based card
            const colors = iconColorMap[benefit.iconColor];
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-neutral-800/50 border border-white/5 text-center"
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-6 ${colors.text}`}
                >
                  <span className="text-xl font-bold font-display">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">
                  {benefit.title}
                </h3>
                <div className="text-neutral-400 text-sm">
                  {benefit.descriptionRichText ? (
                    <PortableText value={benefit.descriptionRichText} components={customPortableTextComponents} />
                  ) : (
                    <p>{benefit.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── DETAILED SECTIONS ────────────────────────────── */}
      <DetailedSectionsWrapper>
        {detailedSections.map((section) => (
          <DetailedSection
            key={section.number}
            number={section.number}
            title={section.title}
            barColor={section.barColor}
            description={section.description}
            descriptionRichText={section.descriptionRichText}
          >
            {section.teamCards && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-12">
                {section.teamCards.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-neutral-800/40 border border-white/5"
                  >
                    <h4 className="font-bold text-[#916AFF] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </DetailedSection>
        ))}
      </DetailedSectionsWrapper>

      {/* ── PORTFOLIO / REALIZATION ──────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-40">
          <Image
            src="/assets/seo/template/project-bg-nanowo.webp"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">
                Klinika NaNowo
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#916AFF]">
                  ZAKRES OBOWIĄZKÓW
                </span>
                <div className="h-px w-12 bg-white/20" />
              </div>
              <p className="text-neutral-200 text-lg leading-relaxed mb-10">
                Głównym założeniem było wykonanie estetycznej i nowoczesnej
                strony www wzbudzającej zaufanie u klientów. Projekt robi
                niesamowite wrażenie dzięki dobrze przemyślanej grafice, w
                efekcie czego więcej osób decyduje się na kontakt.
              </p>
              <Link
                href="https://klinikananowo.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all font-bold"
              >
                Sprawdź online
              </Link>
            </div>
            <div className="lg:w-1/2 w-full max-w-xl mx-auto">
              <ProjectCard
                project={klinikaNaNowoProject}
                index={0}
              />
            </div>
          </div>
          
          <div className="w-full flex justify-center">
            <FluidButton 
              href="/realizacje" 
              label="Zobacz wszystkie" 
              scrollThreshold={0.15}
              className="mt-8 md:mt-12"
            />
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────── */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 tracking-[0px]">
            {resultsTitle}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto whitespace-pre-line">
            {resultsDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 max-w-[1400px] mx-auto w-full">
          {resultsClients.map((client, idx) => (
            <ResultColumn
              key={idx}
              clientName={client.clientName}
              growthPercent={client.growthPercent}
            />
          ))}
        </div>
      </section>

      {/* ── DEPARTMENTS ──────────────────────────────────── */}
      <section className="py-32 bg-neutral-900 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-white mb-20">
            {departmentsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassBentoCard
              title="Nadzór nad projektami"
              description="Menedżer projektów czuwa nad sprawną realizacją stron według ustalonego planu,"
              icon={Users}
              className="min-h-[380px]"
            >
              <div className="absolute inset-0 bg-[#916AFF]/5" />
            </GlassBentoCard>

            <GlassBentoCard
              title="Tworzenie i realizacja projektów"
              description="Graficy wraz z programistami przygotują witrynę o nieszablonowej szacie graficznej i funkcjonalnym zapleczu,"
              icon={Palette}
              className="min-h-[380px]"
            >
              <div className="absolute inset-0 bg-[#52D8EA]/5" />
            </GlassBentoCard>

            <GlassBentoCard
              title="Marketing i copywriting"
              description="Odpowiedzialni za promocję strony marketingowcy dopilnują, by strona pojawiła się na wysokich pozycjach w wynikach wyszukiwania, a copywriter przygotuje angażujące treści,"
              icon={Search}
              className="min-h-[380px]"
            >
              <div className="absolute inset-0 bg-[#916AFF]/5" />
            </GlassBentoCard>

            <GlassBentoCard
              title="Analityk użyteczności UX"
              description="Przeanalizuje stronę pod kątem funkcjonalności strony i pomoże dobrać elementy strony, aby była intuicyjna i wygodna w użytkowaniu."
              icon={Code2}
              className="min-h-[380px]"
            >
              <div className="absolute inset-0 bg-[#52D8EA]/5" />
            </GlassBentoCard>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Faq items={faqItems} skipClientFetch />

      {/* ── CTA ──────────────────────────────────────────── */}
      <CTASection titleLine1={ctaTitleLine1} titleLine2={ctaTitleLine2} subtitleLines={ctaSubtitleLines} />
    </PageLayout>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────

function ResultColumn({
  clientName,
  growthPercent,
}: {
  clientName: string;
  growthPercent: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2 block font-bold">
        KLIENT
      </span>
      <h4 className="text-2xl font-bold mb-2 md:mb-4 font-display relative z-10">{clientName}</h4>

      {/* Image Visual */}
      <div className="relative flex items-center justify-center h-[380px] md:h-[480px] lg:h-[540px] w-full -mt-8 -mb-12 lg:-mt-12 lg:-mb-16 group pointer-events-none scale-105 lg:scale-110">
        <Image
          src="/assets/seo/template/wzrost.png"
          alt={`Wzrost klienta ${clientName}`}
          fill
          className="object-contain"
        />
      </div>

      <h5 className="text-neutral-400 text-xs sm:text-sm mb-2 uppercase tracking-wide relative z-10">
        Wzrost konwersji sprzedaży o
      </h5>
      <div className="text-6xl sm:text-7xl font-bold text-white tracking-tighter">
        {growthPercent}!
      </div>
    </div>
  );
}

// ─── END ─────────────────────────────────────────────────────────
