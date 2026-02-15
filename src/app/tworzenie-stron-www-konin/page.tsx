"use client";

import React, { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";
import { ProjectCard } from "@/components/ProjectCard";
import { GlassBentoCard } from "@/components/cards/bento/GlassBentoCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Search, Palette, Code2, Users, Layout, TrendingUp, Sparkles, Monitor, UserCheck } from "lucide-react";

import klinikaNaNowoImg from "@/assets/realizations/klinika-na-nowo.webp";

// 1:1 FAQ Data from provided text
const koninFaq = [
  {
    id: 1,
    question: "Tworzenie stron www Konin - co zyskam?",
    answer:
      "Inwestycja w dobrze skonstruowaną stronę o ciekawej szacie graficznej jest opłacalna. Wzbudzisz nią zainteresowanie wśród klientów, zdobędziesz ich zaufanie i zachęcisz do skorzystania z oferty. Nowoczesna witryna jest doskonałym narzędziem do pozyskiwania klientów, dzięki czemu Twoja sprzedaż wzrośnie i koszty poniesione na stworzenie strony www szybko się zwrócą.",
  },
  {
    id: 2,
    question: "Pozycjonowanie stron internetowych Konin",
    answer:
      "Tworzenie stron www to nasza specjalność, dlatego oprócz zaprojektowania witryny, podejmiemy działania, aby ją wypromować. Wiemy, jak ważne jest, aby Twoja firma była widoczna w Google, dlatego postaramy się, aby to osiągnąć. Nasi eksperci ds. marketingu opracują strategię, dzięki której witryna znajdzie się na szczycie strony wyników wyszukiwania. Oto niektóre z usług marketingowych, które możemy zaoferować Twojej firmie: działania SEO, obsługę social media, Google Ads czy przygotowanie wysokiej jakości treści.",
  },
  {
    id: 3,
    question: "Jak długo trwa tworzenie stron www Konin?",
    answer:
      "Czas potrzebny na zbudowanie strony internetowej zależy od różnych czynników m.in. tego, jak skomplikowany ma być projekt. W związku z tym niezbędne są indywidualne konsultacje, które pozwolą nam zbierać szczegółowe informacje związane z przyszłym projektem strony internetowej. Na podstawie zgromadzonych danych oszacujemy czas potrzebny na przygotowanie Twojej witryny.",
  },
  {
    id: 4,
    question: "Kto będzie pracował nad stroną internetową?",
    answer:
      "Dążymy do tego, aby tworzenie stron Konin odbywało się profesjonalnie, dlatego pracą nad Twoją stroną zajmie się doświadczony zespół osób specjalizujących się w kilku dziedzinach. Powierzając nam przygotowanie witryny, otrzymujesz gwarancję, że Twoja strona www będzie kompletna i funkcjonalna. Za stworzenie strony będą odpowiedzialni: menedżer projektu – prowadzi nadzór nad dotrzymywaniem terminów oraz dopilnuje, aby witryna spełniała założone wytyczne; grafik i specjalista UX – zadbają o funkcjonalność i wygląd Twojej witryny; programiści – zakodują stronę, aby działa szybko i niezawodnie; marketingowcy pomogą zwiększyć ruch na Twojej witrynie, a copywriter opracuje wysokiej jakości treści.",
  },
  {
    id: 5,
    question: "Czy inwestycja w strony www Konin się opłaca?",
    answer:
      "Tak, zakup strony internetowej jest opłacalny, ponieważ dzięki niej możesz w elegancki sposób wyeksponować produkty i usługi swojej firmy. Oferując atrakcyjną zachętę w postaci nowoczesnej witryny, masz znacznie większe szanse na dotarcie do szerokiego grona klientów. To doprowadzi do zwiększenia zysków Twojej firmy. Dzięki stronom internetowym Konin możesz liczyć na jeszcze większą liczbę odwiedzających, którzy zobaczą Twoją ofertę i z niej skorzystają.",
  },
];

const klinikaNaNowoProject = {
  id: 19,
  title: "Klinika NaNowo",
  category: "Medycyna Estetyczna",
  description: "Wizytówka nowoczesnej kliniki. Przejrzysta oferta zabiegów i łatwy system rezerwacji konsultacji.",
  tags: ["UI/UX design", "Web Development", "Konin"],
  image: klinikaNaNowoImg,
  link: "https://klinikananowo.pl/",
};

export default function KoninSeoPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen bg-neutral-900 text-white font-sans overflow-x-clip">
      <Header allowVisibility={true} />

      <main ref={containerRef} className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative w-full py-16 lg:py-24 flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 w-full h-full opacity-30 select-none pointer-events-none">
            <Image
              src="/assets/seo/gorzow/hero-bg-clover.webp"
              alt="Konin Background"
              fill
              className="object-cover mix-blend-screen"
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#916AFF]">
              Specjalna oferta dla firm z Konina
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6">
              Strony internetowe <br />{" "}
              <span className="text-[#916AFF]">Konin</span>
            </h1>
            <div className="h-1 w-20 bg-[#916AFF] mx-auto mb-8" />
            <p className="text-neutral-400 max-w-2xl mx-auto mb-12 text-lg">
              Jak dotrzeć do klientów w internecie i zacząć zarabiać?
            </p>
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

        {/* --- BENEFITS CHECKLIST --- */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
              Dla firm z Konina wykonamy efektywne strony internetowe:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 bg-[#916AFF]/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-[#916AFF]">
                <Palette size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">
                Wyróżniające się graficznie
              </h3>
              <p className="text-neutral-400 text-sm">
                Pokaż swoją ofertę z jak najlepszej strony i inaczej niż reszta firm.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 bg-[#52D8EA]/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-[#52D8EA]">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">
                Podnoszące sprzedaż
              </h3>
              <p className="text-neutral-400 text-sm">
                Tworzymy strony internetowe pozyskujące wielu klientów.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 bg-[#916AFF]/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-[#916AFF]">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">
                Przygotowane przez ekspertów
              </h3>
              <p className="text-neutral-400 text-sm">
                Zapewniamy dopracowanie stron w pełnym zakresie.
              </p>
            </div>
          </div>
        </section>

        {/* --- DETAILED SECTIONS --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-24">
            {/* Section 1 */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-8">
                1. Wyróżniające się graficznie
              </h2>
              <div className="h-1 w-24 bg-[#916AFF] mx-auto mb-8" />
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                Naszym celem jest projektowanie stron www, dzięki którym nasi klienci z Konina będą osiągać satysfakcjonujące wyniki sprzedażowe. Stawiamy na oryginalność i nie powielamy schematów, dlatego projekt strony przygotowany przez zdolnych i doświadczonych grafików będzie odznaczać się na tle stron konkurencyjnych.
              </p>
            </div>

            {/* Section 2 */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-8">
                2. Podnoszące sprzedaż
              </h2>
              <div className="h-1 w-24 bg-[#52D8EA] mx-auto mb-8" />
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                Strony internetowe są różne, ale gwarancją sukcesu jest wyłącznie posiadanie witryny stworzonej przez kompletny zespół i dopasowanej do oczekiwań użytkowników. Estetyczna strona z intuicyjnym interfejsem sprawiającym, że korzystanie z niej jest przyjemne i wygodne przyciągnie wielu klientów. Nie tylko odwiedzą Twoją stronę, ale i na niej pozostaną i co najważniejsze, zdecydują się nawiązać z Tobą kontakt i skorzystać z oferty.
              </p>
            </div>

            {/* Section 3: Specialized Support */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-8">
                3. Przygotowane przez specjalistów
              </h2>
              <div className="h-1 w-24 bg-[#916AFF] mx-auto mb-8" />
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-12">
                Tworzenie stron www ma charakter wielozadaniowy, dlatego nie może się tym zajmować jedna osoba. Korzystając z oferty skierowanej do firm z Konina, otrzymujesz profesjonalną stronę www oraz kompleksowe wsparcie naszego zespołu:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {[
                  { title: "Menedżer projektów", desc: "sprawuje opiekę nad projektami, dba o sprawną i terminową realizację" },
                  { title: "Graficy", desc: "zaprojektują wizualną część strony czerpiąc z najnowszych trendów" },
                  { title: "Programiści", desc: "zadbarzą o fachowe zbudowanie stabilnego i szybkiego zaplecza strony" },
                  { title: "Marketing & SEO", desc: "sprawią, że witryna będzie pojawiać się na najwyższych pozycjach" },
                  { title: "Copywriter", desc: "sporządzi lekkie i skuteczne treści skłaniające do zakupu lub kontaktu" },
                  { title: "Analityk UX", desc: "wykona projekt wstępny dobierając wyłącznie wartościowe elementy" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-neutral-800/40 border border-white/5">
                    <h4 className="font-bold text-[#916AFF] mb-2">{item.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PORTFOLIO / REALIZATION --- */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-40">
            <Image
              src="/assets/seo/gorzow/project-bg-nanowo.webp"
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
                <a
                  href="https://klinikananowo.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all font-bold"
                >
                  Sprawdź online
                </a>
              </div>
              <div className="lg:w-1/2 w-full max-w-xl mx-auto">
                <ProjectCard
                  project={klinikaNaNowoProject}
                  index={0}
                  isMockup={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- RESULTS --- */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 tracking-[0px]">
              Efekty współpracy
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              „Efektywne strony www”… takie motto zobowiązuje. Sprawdź rezultaty
              zmiany starej strony www na nową, zostań naszym klientem i
              spodziewaj się wzrostu zainteresowania swoją firmą.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-w-6xl mx-auto">
            {/* Result Column 1: GoldenGift */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2 block font-bold">
                KLIENT
              </span>
              <h4 className="text-2xl font-bold mb-12 font-display">
                GoldenGift
              </h4>

              {/* Bars Visual */}
              <div className="relative flex items-end justify-center h-[340px] w-full mb-12 group">
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                  className="absolute top-0 right-[15%] md:right-[20%] z-30 w-16 h-16 rounded-full bg-white flex flex-col items-center justify-center shadow-[0_0_20px_rgba(145,106,255,0.4)] border border-neutral-100"
                >
                  <span className="text-[7px] font-bold text-[#916AFF] leading-none mb-0.5">
                    WZROST
                  </span>
                  <span className="text-[12px] font-extrabold text-[#916AFF] leading-none">
                    670%
                  </span>
                </motion.div>

                <div className="relative mr-4 w-16 sm:w-20">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full bg-[#3D3D43] rounded-t-[32px] rounded-b-[32px] relative flex flex-col items-center justify-end pb-6"
                  >
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                      0,2%
                    </span>
                    <span className="text-[12px] font-bold text-white uppercase">
                      BYŁO
                    </span>
                  </motion.div>
                </div>

                <div className="relative w-16 sm:w-20">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 280 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="w-full bg-linear-to-b from-[#916AFF] to-[#52D8EA] rounded-t-[32px] rounded-b-[32px] relative flex flex-col items-center justify-end pb-6 overflow-hidden"
                  >
                    <div className="absolute top-8 flex flex-col gap-2 opacity-50">
                      {[0, 1, 2].map((i) => (
                        <motion.svg
                          key={i}
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          animate={{ y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        >
                          <path
                            d="M1 7L7 1L13 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      ))}
                    </div>

                    <span className="text-[12px] font-bold text-white uppercase tracking-wider mb-2">
                      1,54%
                    </span>
                    <span className="text-[16px] font-bold text-white uppercase">
                      JEST
                    </span>
                  </motion.div>
                </div>
              </div>

              <h5 className="text-neutral-400 text-xs sm:text-sm mb-2 uppercase tracking-wide">
                Wzrost konwersji sprzedaży o
              </h5>
              <div className="text-6xl sm:text-7xl font-bold text-white tracking-tighter">
                670%!
              </div>
            </div>

            {/* Result Column 2: Odszkodowania Lider */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2 block font-bold">
                KLIENT
              </span>
              <h4 className="text-2xl font-bold mb-12 font-display">
                Odszkodowania Lider
              </h4>

              {/* Bars Visual */}
              <div className="relative flex items-end justify-center h-[340px] w-full mb-12 group">
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  className="absolute top-0 right-[15%] md:right-[20%] z-30 w-16 h-16 rounded-full bg-white flex flex-col items-center justify-center shadow-[0_0_20px_rgba(145,106,255,0.4)] border border-neutral-100"
                >
                  <span className="text-[7px] font-bold text-[#916AFF] leading-none mb-0.5">
                    WZROST
                  </span>
                  <span className="text-[12px] font-extrabold text-[#916AFF] leading-none">
                    670%
                  </span>
                </motion.div>

                <div className="relative mr-4 w-16 sm:w-20">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full bg-[#3D3D43] rounded-t-[32px] rounded-b-[32px] relative flex flex-col items-center justify-end pb-6"
                  >
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                      0,2%
                    </span>
                    <span className="text-[12px] font-bold text-white uppercase">
                      BYŁO
                    </span>
                  </motion.div>
                </div>

                <div className="relative w-16 sm:w-20">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 280 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="w-full bg-linear-to-b from-[#916AFF] to-[#52D8EA] rounded-t-[32px] rounded-b-[32px] relative flex flex-col items-center justify-end pb-6 overflow-hidden"
                  >
                    <div className="absolute top-8 flex flex-col gap-2 opacity-50">
                      {[0, 1, 2].map((i) => (
                        <motion.svg
                          key={i}
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          animate={{ y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        >
                          <path
                            d="M1 7L7 1L13 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      ))}
                    </div>

                    <span className="text-[12px] font-bold text-white uppercase tracking-wider mb-2">
                      1,54%
                    </span>
                    <span className="text-[16px] font-bold text-white uppercase">
                      JEST
                    </span>
                  </motion.div>
                </div>
              </div>

              <h5 className="text-neutral-400 text-xs sm:text-sm mb-2 uppercase tracking-wide">
                Wzrost konwersji sprzedaży o
              </h5>
              <div className="text-6xl sm:text-7xl font-bold text-white tracking-tighter">
                670%!
              </div>
            </div>
          </div>
        </section>

        {/* --- DEPARTMENTS --- */}
        <section className="py-32 bg-neutral-900 border-t border-white/5 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-white mb-20">
              Działy wspierające tworzenie stron internetowych Konin to:
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

        {/* --- FAQ SECTION --- */}
        <Faq items={koninFaq} />

        {/* --- CTA --- */}
        <CTASection
          title="Skontaktuj się z nami"
          subtitleLines={[
            "i razem ustalmy cel, jaki chcesz osiągnąć",
            "dla swojej firmy. Poprowadzimy Cię",
            "pewną drogą do sukcesu.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
