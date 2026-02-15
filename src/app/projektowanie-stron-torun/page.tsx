"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Palette, Search, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";
import { ProjectCard } from "@/components/ProjectCard";
import { GlassBentoCard } from "@/components/cards/bento/GlassBentoCard";
import { PROJECTS } from "@/data/projects";

const torunFaq = [
  {
    id: 1,
    question: "Koszt strony internetowej Toruń",
    answer:
      "Oszacowanie kosztu witryny nie jest łatwym zadaniem, co dotyczy również stron www Toruń. Cena zależy od wielu czynników np. specyfiki Twojej działalności oraz funkcji, jakie mają znaleźć się na stronie i które mogą nie być standardowe. Pierwszą rzeczą, o której należy pomyśleć, są cele biznesowe Twojej firmy. Będzie to informowało nas o tym, jakiej strony potrzebujesz i tym samym określimy koszt wykonania projektu. Zapoznaj się z naszymi pakietami i wybierz ten, który najlepiej odpowiada Twoim potrzebom.",
  },
  {
    id: 2,
    question: "Co wyróżnia strony www dla firm z Torunia?",
    answer:
      "Nowoczesna strona internetowa jest kluczem do sukcesu, dzięki temu, że podnosi prestiż firmy. Posiadając taką stronę, jesteś w stanie prezentować swoje produkty i usługi w jakości, która spodoba się Twoim klientom. Strony internetowe Toruń są na tyle imponujące, że przyciągają wzrok klientów, dzięki czemu możesz spodziewać się większej sprzedaży produktów lub usług, a tym samym zwiększenia Twoich zysków. Staramy się również, aby aktualizacja zawartości Twojej strony była jak najłatwiejsza, dzięki czemu będziesz mógł samodzielnie m.in. edytować treści czy zmieniać zdjęcia.",
  },
  {
    id: 3,
    question: "Co zawiera strona internetowa Toruń?",
    answer:
      "Oferujemy pakiety stron dostosowane do Twoich indywidualnych potrzeb, które zawierają kluczowe elementy ważne dla każdej witryny. Ustalając najbardziej efektywną strukturę, zaprojektujemy stronę intuicyjną i przyjazną dla każdego użytkownika. Tworzenie stron internetowych Toruń odbywa się pod okiem zespołu specjalistów, którzy zapewniają: znakomicie skrojone logotypy, nowoczesny projekt graficzny pasujący do Twojej branży oraz treści, które zachęcają odwiedzających do działania. Programiści natomiast stworzą jasny i przejrzysty kod, który zapewni bezawaryjne działanie i płynne wczytywanie strony.",
  },
  {
    id: 4,
    question: "Ile czasu zajmie przygotowanie strony?",
    answer:
      "Czas potrzebny na przygotowanie strony internetowej różni się w zależności od wybranego pakietu, a więc wielkości i złożoności projektu. Ze względu na to, że każda strona ma swoją specyfikację i wymagania dopiero po omówieniu szczegółów dotyczących projektu, jesteśmy w stanie określić termin wykonania i wdrożenia Twojego projektu. Tworzenie stron internetowych Toruń to gwarancja spełnienia Twoich indywidualnych oczekiwań.",
  },
  {
    id: 5,
    question: "Pozycjonowanie stron internetowych w Toruniu",
    answer:
      "Chcąc zaistnieć na rynku lokalnym i zwiększyć zasięg na skalę globalną warto zainwestować nie tylko w tworzenie stron Toruń, ale również w działania marketingowe. Profesjonalnie zbudowana strona będąca pod opieką doświadczonych marketingowców pojawi się na wysokich pozycjach wyszukiwarki Google. Działania, jakimi mogą zająć się nasi specjaliści to: kompleksowe pozycjonowanie, kampanie Google Ads, przygotowanie angażujących treści (np. blog) czy prowadzenie mediów społecznościowych.",
  },
  {
    id: 6,
    question: "Czy warto zdecydować się na strony internetowe Toruń?",
    answer:
      "Zdecydowanie tak, ponieważ dzięki nowej stronie www Toruń ułatwisz dostęp do swojej oferty wielu osobom z Twojego miasta, ale również całego kraju. Wykorzystując internet, możesz rozszerzyć zasięg działania firmy, pozyskać więcej klientów i liczyć na wzrost zysków ze sprzedaży. W porównaniu z osiągniętymi korzyściami inwestycja w stronę internetową okaże się niewielkim wydatkiem.",
  },
];

const klinikaNaNowoProject = {
  id: "klinika-nanowo-torun",
  title: "Klinika NaNowo",
  tags: ["UI/UX design", "Web Development", "Toruń"],
  image: { src: "/assets/seo/torun/klinika-nanowo.webp" },
  link: "#",
} as unknown as (typeof PROJECTS)[0];

export default function TorunSeoPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen bg-neutral-900 text-white font-sans overflow-x-clip">
      <Header allowVisibility={true} />

      <main ref={containerRef} className="relative z-10">
        <section className="relative w-full py-16 lg:py-24 flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 w-full h-full opacity-35 select-none pointer-events-none">
            <Image
              src="/assets/seo/torun/hero-bg.webp"
              alt="Toruń panorama"
              fill
              className="object-cover"
            />
            <Image
              src="/assets/seo/torun/hero-clover.webp"
              alt="Toruń hero clover"
              fill
              className="object-cover mix-blend-screen opacity-80"
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#916AFF]">
              Specjalna oferta dla firm z Torunia
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6">
              Strony internetowe <br /> <span className="text-[#916AFF]">Toruń</span>
            </h1>
            <div className="h-1 w-20 bg-[#916AFF] mx-auto mb-8" />
            <div className="flex justify-center mt-12 mb-8">
              <ReelCtaButton text="Kontakt" href="#kontakt" size="large" />
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
              Wybierając stronę www Toruń zyskujesz:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 bg-[#916AFF]/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-[#916AFF]">
                <Palette size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">
                Nieszablonowa grafika
              </h3>
              <p className="text-neutral-400 text-sm">
                Indywidualny projekt zdobędzie uwagę klientów. Będziesz
                posiadać stronę, jakiej nie ma konkurencja.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 bg-[#52D8EA]/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-[#52D8EA]">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">
                Realizacja celów biznesowych
              </h3>
              <p className="text-neutral-400 text-sm">
                Wzrost zainteresowania firmą i zwiększenie zysków. Zbudujesz
                zaufanie wobec swojej marki.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 bg-[#916AFF]/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-[#916AFF]">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">
                Kompleksowe wsparcie specjalistów
              </h3>
              <p className="text-neutral-400 text-sm">
                Nad projektem strony będzie czuwać zespół fachowców. Wykonamy
                stronę i zajmiemy się marketingiem.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-center mb-12">
              1. Tworzenie bezkonkurencyjnych stron www dla firm z Torunia
            </h2>
            <div className="h-1 w-24 bg-[#52D8EA] mx-auto mb-10" />
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              <p>
                Chciałbyś zwiększyć zyski w swojej firmie? Jednym ze skutecznych
                sposobów, który spowoduje wzrost zainteresowania Twoją firmą jest
                posiadanie bezkonkurencyjnej strony internetowej.
              </p>
              <p>
                Teraz dla firm z Torunia mamy ofertę specjalną, dzięki której
                możesz posiadać witrynę najlepszą w branży w jakiej działasz.
                Oprócz skrojonej na miarę Twoich oczekiwań strony internetowej
                zyskasz wartościowy gratis, którego zastosowanie pozwoli poprawić
                widoczność nowej strony w sieci.
              </p>
              <p>
                Dajemy gwarancję stworzenia projektu, który będzie efektywnie
                zdobywał klientów dla Twojej firmy.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-40">
            <Image
              src="/assets/seo/torun/portfolio-bg.webp"
              alt="Portfolio background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/65 mix-blend-multiply" />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">
                  Klinika NaNowo
                </h2>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all font-bold mb-10"
                >
                  Sprawdź online
                </a>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#916AFF]">
                    Zakres obowiązków
                  </span>
                  <div className="h-px w-12 bg-white/20" />
                </div>
                <p className="text-neutral-200 text-lg leading-relaxed mb-10">
                  Głównym założeniem było wykonanie estetycznej i nowoczesnej
                  strony www wzbudzającej zaufanie u klientów. Projekt robi
                  niesamowite wrażenie dzięki dobrze przemyślanej grafice, w
                  efekcie czego więcej osób decyduje się na kontakt.
                </p>
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

        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-center mb-12">
              2. Gratis - widoczność w internecie
            </h2>
            <div className="h-1 w-24 bg-[#916AFF] mx-auto mb-10" />
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              Pojawienie się strony www na najwyższych pozycjach wyszukiwania
              Google to gwarancja zdobycia wielu nowych klientów. Pomożemy Ci to
              osiągnąć dając specjalny gratis – pozycjonowanie na frazy regionalne
              powiązane z Toruniem i miastami pobliskimi. Umiejętnie dobrane słowa
              kluczowe pozwolą osiągnąć satysfakcjonujące wyniki w postaci
              pojawienia się Twojej witryny na 1. stronie wyszukiwań Google.
              Rozwiniemy naszą współpracę, jeżeli uznasz, że wyniki są dla Ciebie
              satysfakcjonujące i rozszerzymy ją o kolejne miasta z obszaru całej
              Polski. Nawiążmy współpracę korzystną dla obu stron i daj sobie
              szansę na zaistnienie w internecie oraz naznaczne zwiększenie swoich
              zysków. Sprawdź jaka promocja cenowa promocja czeka na Ciebie na
              przygotowanych pakietach.
            </p>
          </div>
        </section>

        <section className="relative py-24 container mx-auto px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/assets/seo/torun/results-bg.webp"
              alt="Wyniki współpracy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/70" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 tracking-[0px]">
                Strony www  – efekty współpracy
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                „Efektywne strony www”… takie motto zobowiązuje. Sprawdź rezultaty
                zmiany starej strony www na nową, zostań naszym klientem i
                spodziewaj się wzrostu zainteresowania swoją firmą.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2 block font-bold">
                  KLIENT
                </span>
                <h4 className="text-2xl font-bold mb-12 font-display">
                  GoldenGift
                </h4>

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

              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2 block font-bold">
                  KLIENT
                </span>
                <h4 className="text-2xl font-bold mb-12 font-display">
                  Odszkodowania Lider
                </h4>

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

            <div className="text-center mt-14">
              <Link
                href="/realizacje"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all font-bold"
              >
                Więcej przykładów
              </Link>
            </div>
          </div>
        </section>

        <CTASection
          title="Skontaktuj się z nami"
          subtitleLines={[
            "i razem ustalmy cel, jaki chcesz osiągnąć dla swojej firmy.",
            "Poprowadzimy Cię pewną drogą do sukcesu, zapewniając sprawdzony i niezawodny,",
            "bo nasz autorski system wspomagający projektowanie i tworzenie stron www.",
          ]}
        />

        <section className="relative py-24 md:py-32 border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/assets/seo/torun/support-bg.webp"
              alt="Wsparcie specjalistów"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/70" />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-white mb-8">
              3. Kompleksowe wsparcie specjalistów
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-5xl mb-16">
              Tworzenie stron internetowych Toruń to proces, który wymaga
              znajomości wielu zagadnień, dlatego najlepiej, kiedy projektem
              zajmują się doświadczone osoby. Wiedza poparta znajomością branży
              jest najlepszą receptą na zbudowanie strony www realizującej
              najważniejsze cele biznesowe.
            </p>
            <div className="space-y-3 text-neutral-300 text-lg leading-relaxed max-w-5xl mb-16">
              <p className="font-semibold">
                Nieszablonowe strony internetowe Toruń przygotują:
              </p>
              <p>
                menedżer koordynujący prace nad projektem – dopilnuje terminów i
                wykonania strony według ustalonych wytycznych,
              </p>
              <p>
                niepowtarzalny wygląd i prawidłowe funkcjonowanie strony zapewnią
                graficy oraz programiści,
              </p>
              <p>
                marketingowcy zadbają o widoczność strony w internecie, a
                copywriter sporządzi wysokiej jakości treści,
              </p>
              <p>
                analityk użyteczności UX – wprowadzi ulepszenia na stronie, które
                zwiększą zainteresowanie witryną.
              </p>
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tighter text-white mb-10">
              Działy wspierające tworzenie stron internetowych Toruń to:
            </h3>

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

        <Faq items={torunFaq} />
      </main>

      <Footer />
    </div>
  );
}
