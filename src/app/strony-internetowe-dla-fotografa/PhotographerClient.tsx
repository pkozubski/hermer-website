"use client";

import React, { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";
import Image from "next/image";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Review } from "@/components/Testimonials";
import { ReviewsGrid } from "@/components/ReviewsGrid";

const photographerFaq = [
  {
    id: 1,
    question: "W jaki sposób mogę się promować?",
    answer: "Dobra widoczność strony www dla fotografa w sieci jest kluczowa. Skuteczne sposoby to pozycjonowanie (SEO), kampanie Google Ads, prowadzenie bloga z poradami i zdjęciami, lokalna wizytówka w Google oraz aktywność w mediach społecznościowych, takich jak Facebook i Instagram.",
  },
  {
    id: 2,
    question: "Jak długo będę czekał na stronę internetową?",
    answer: "Czas realizacji zależy od skali działań i stopnia złożoności witryny. Proces obejmuje opracowanie planu, skompletowanie materiałów, wykonanie grafiki i kodowanie. Skomplikowane serwisy wymagają więcej czasu, ale zaangażowanie obu stron pozwala na realizację w założonym terminie.",
  },
  {
    id: 3,
    question: "Czy będę mógł sam zarządzać treściami na stronie?",
    answer: "Tak, strona jest oparta na systemie CMS, który umożliwia łatwą edycję, dodawanie i usuwanie treści bez znajomości programowania. Samodzielne wprowadzanie zmian pozwala oszczędzić czas i dbać o bieżącą aktualizację wizerunku firmy.",
  },
  {
    id: 4,
    question: "Czy sam będę mógł dodawać zdjęcia do galerii?",
    answer: "Tak, otrzymasz dostęp do intuicyjnego panelu CMS. Portfolio jest wizytówką fotografa, dlatego regularne dodawanie nowych, wysokiej jakości zdjęć z realizacji sesji czy uroczystości pomaga budować zaufanie klientów i prezentować Twój warsztat.",
  },
  {
    id: 5,
    question: "Dlaczego blog jest ważny?",
    answer: "Blog wspiera pozycjonowanie strony i pozwala dzielić się fachową wiedzą. Możesz publikować porady, ciekawostki branżowe oraz opisy ważnych zleceń, co buduje Twój autorytet jako eksperta w dziedzinie fotografii.",
  },
  {
    id: 6,
    question: "Nie mam logo, czy możecie mi pomóc?",
    answer: "Tak, nasz grafik zaprojektuje nowoczesne logo nawiązujące do branży fotograficznej i spójne z Twoją identyfikacją. Logo jest kluczowym symbolem firmy, który powinien znajdować się w widocznym miejscu na stronie.",
  },
  {
    id: 7,
    question: "Czy mogę połączyć stronę z social media?",
    answer: "Oczywiście, integracja z mediami społecznościowymi ułatwia kontakt z klientami i promocję usług. Ikony kierujące do Facebooka czy Instagrama pozwalają na szybką komunikację i prezentację realizacji w formie atrakcyjnych postów.",
  },
  {
    id: 8,
    question: "Jak działa strefa klienta?",
    answer: "Strefa klienta to prywatna, zabezpieczona hasłem galeria, która pozwala na wygodne i bezpieczne przekazanie zdjęć w wysokiej jakości. Usprawnia to Twoją pracę i oszczędza czas klientów, eliminując potrzebę wysyłania plików mailem.",
  },
];

const includedItems = [
  {
    title: "Projekt Logo",
    text: "Przygotujemy dla Ciebie nowoczesny znak graficzny nawiązujący do branży fotograficznej, który zapadnie w pamięć Twoim klientom i wyróżni Twoją markę.",
    icon: "/assets/seo/dla-restauracji-icons/logo.svg",
  },
  {
    title: "Portfolio i Galerie",
    text: "Atrakcyjna prezentacja Twoich najlepszych ujęć. Samodzielnie zarządzaj galeriami i pokazuj nowe dokonania, budując profesjonalny wizerunek fotografa.",
    icon: "/assets/seo/dla-restauracji-icons/menu.svg",
  },
  {
    title: "System Rezerwacji",
    text: "Umożliwiamy wdrożenie modułu rezerwacji terminów sesji, co ułatwia gościom kontakt i planowanie współpracy o dowolnej porze.",
    icon: "/assets/seo/dla-restauracji-icons/calendar.svg",
  },
  {
    title: "Panel administracyjny",
    text: "Intuicyjne narzędzie do zarządzania całą zawartością strony. Samodzielnie zmieniaj opisy usług, aktualizuj cenniki i dodawaj nowości w kilka chwil.",
    icon: "/assets/seo/dla-restauracji-icons/action.svg",
  },
  {
    title: "Oryginalna szata graficzna",
    text: "Zadba o to, by strona była estetyczna i przejrzysta, podkreślając charakter Twojej twórczości i zachęcając do zapoznania się z Twoją ofertą.",
    icon: "/assets/seo/dla-restauracji-icons/spark.svg",
  },
  {
    title: "Blog z Poradami",
    text: "Miejsce na dzielenie się wiedzą i ciekawostkami kulinarnymi lub fotograficznymi. Regularne wpisy wspierają SEO i budują Twój status eksperta.",
    icon: "/assets/seo/dla-restauracji-icons/education.svg",
  },
  {
    title: "Integracja Social Media",
    text: "Połączymy Twoją stronę z profilem na Facebooku i Instagramie, co ułatwi zdobywanie uwagi nowych klientów i utrzymanie trwałych relacji z obecnymi.",
    icon: "/assets/seo/dla-restauracji-icons/people.svg",
  },
  {
    title: "Bezpieczna Komunikacja",
    text: "Dopracowany formularz kontaktowy, za którego pośrednictwem klienci mogą bezpiecznie przesyłać zapytania o ofertę i dostępność terminów.",
    icon: "/assets/seo/dla-restauracji-icons/mail.svg",
  },
  {
    title: "Intuicyjna nawigacja",
    text: "Przejrzysty układ menu i podział na kategorie usług (np. sesje ślubne, portretowe), który ułatwia odnalezienie niezbędnych informacji na Twojej stronie.",
    icon: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg",
  },
];

export function PhotographerClient({ reviews }: { reviews: Review[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen bg-neutral-900 text-white font-sans overflow-x-clip">
      <Header allowVisibility={true} />

      <main ref={containerRef} className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative w-full py-24 lg:py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-40 select-none pointer-events-none">
            <Image
              src="/assets/seo/woocommerce/dlakogobg-scaled.webp"
              alt="Photographer Page Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6">
              Strona internetowa <br /> <span className="text-[#916AFF]">dla Fotografa</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-10">
              Zaprezentuj swój warsztat i przyciągnij wymarzonych klientów
            </p>
            <div className="h-1 w-24 bg-[#916AFF] mx-auto mb-12" />
            <div className="flex justify-center">
              <ReelCtaButton
                text="Zapytaj o szczegóły"
                href="#kontakt"
                size="large"
                noShadow={true}
              />
            </div>
          </div>
        </section>

        {/* --- INTRODUCTION SECTION --- */}
        <section className="py-24 bg-neutral-800/20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-12">
              Dlaczego własna strona jest kluczowa dla fotografa?
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              <p>
                Portfolio to fundament w branży fotograficznej. Własna strona internetowa pozwala nie tylko na profesjonalną prezentację Twoich prac, ale także na budowanie marki osobistej i bezpośredni kontakt z klientami. Dzięki intuicyjnej galerii i przemyślanemu układowi, każdy odwiedzający może poczuć klimat Twoich zdjęć i łatwo zdecydować się na współpracę.
              </p>
              <p>
                Nowoczesna witryna dla fotografa to także narzędzie wspierające sprzedaż usług i komunikację. Strefa klienta z prywatnymi galeriami, blog z poradami oraz integracja z mediami społecznościowymi to elementy, które sprawią, że Twoja firma będzie postrzegana jako nowoczesna i profesjonalna.
              </p>
            </div>
          </div>
        </section>

        {/* --- DISTINGUISHING FEATURES (Wyróżniki) --- */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-4">
              Twoje portfolio w najlepszym wydaniu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/hero-bg.webp" 
                    alt="Atrakcyjna Galeria" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Atrakcyjna Galeria</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Zadbamy o to, by Twoje zdjęcia były sercem witryny. Przejrzyste i eleganckie galerie pozwolą gościom w pełni docenić jakość Twoich kadrów i Twój unikalny styl.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/specjializacja.webp" 
                    alt="Strefa Klienta" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Strefa Klienta</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Usprawnij proces przekazywania zdjęć. Prywatne, zabezpieczone hasłem galerie to wygoda dla Ciebie i prestiż dla Twoich klientów, którzy bezpiecznie pobiorą swoje fotografie.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/przygotowania.webp" 
                    alt="Budowanie Marki" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Budowanie Marki</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Własna strona plus blog i media społecznościowe to potężne narzędzie marketingowe. Pomożemy Ci wypromować usługi i zyskać pozycję eksperta w Twojej dziedzinie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT'S INCLUDED SECTION --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-16">
              Co zawiera strona dla fotografa?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {includedItems.map((item, index) => (
                <div key={index} className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-[#916AFF]/50 transition-colors group">
                  <div className="w-16 h-16 relative mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-display">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CLIENT SUCCESS STORIES (Full-Width Slider) --- */}
        <section className="py-24 overflow-hidden border-t border-white/5">
          <div className="container mx-auto px-4 md:px-8 mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter">
              Sukcesy naszych klientów
            </h2>
          </div>

          <div className="w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {/* SLIDE 1: Dedicante */}
                <CarouselItem className="pl-0 basis-full">
                  <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                    <div className="lg:w-1/2 relative bg-[#D05383]/10 flex items-center justify-center p-8 md:p-16">
                      <div className="absolute inset-0 bg-linear-to-br from-[#D05383]/20 via-transparent to-transparent" />
                      <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src="/assets/seo/woocommerce/dedicante.webp" 
                          alt="Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(208,83,131,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D05383] mb-6 block font-bold">WIDOCZNOŚĆ W GOOGLE</span>
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Skutecznie</h3>
                        <div className="h-1 w-20 bg-[#D05383] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Nasze strategie SEO pomagają profesjonalistom osiągać czołowe miejsca w wynikach wyszukiwania, co bezpośrednio przekłada się na liczbę nowych zleceń.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                              <div className="text-4xl md:text-5xl font-bold text-white leading-tight">Wzrost ilości fraz w top 10</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/assets/seo/woocommerce/dedicante-chart.svg" 
                              alt="Chart" 
                              fill 
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* SLIDE 2: Golden Gift */}
                <CarouselItem className="pl-0 basis-full">
                  <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                    <div className="lg:w-1/2 relative bg-[#C7A566]/10 flex items-center justify-center p-8 md:p-16">
                      <div className="absolute inset-0 bg-linear-to-br from-[#C7A566]/20 via-transparent to-transparent" />
                      <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src="/assets/seo/woocommerce/goldengift.webp" 
                          alt="Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(199,165,102,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C7A566] block font-bold">KONWERSJA KLIENTA</span>
                          <div className="relative w-10 h-10">
                              <Image src="/goldengift-badge.svg" alt="Badge" fill className="object-contain" />
                          </div>
                        </div>
                        
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Efektywnie</h3>
                        <div className="h-1 w-20 bg-[#C7A566] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Dzięki przemyślanemu UX i atrakcyjnemu designowi, odwiedzający stronę znacznie częściej decydują się na kontakt i rezerwację usług.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                              <div className="text-7xl md:text-9xl font-bold text-[#C7A566] tracking-tighter leading-none">670%</div>
                              <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">Więcej konwersji</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/goldengift-chart.svg" 
                              alt="Chart" 
                              fill 
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              <div className="absolute bottom-12 right-4 md:right-12 z-20 flex gap-4">
                <CarouselPrevious className="static translate-y-0 size-14 border border-white/20 bg-neutral-900/50 text-white hover:bg-[#916AFF] hover:border-[#916AFF] transition-all backdrop-blur-md" />
                <CarouselNext className="static translate-y-0 size-14 border border-white/20 bg-neutral-900/50 text-white hover:bg-[#916AFF] hover:border-[#916AFF] transition-all backdrop-blur-md" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* --- REVIEWS SECTION --- */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-4">
              Opinie naszych klientów
            </h2>
            <p className="text-neutral-400 text-lg">
              Dowiedz się, co mówią o nas profesjonaliści, z którymi współpracujemy.
            </p>
          </div>
          
          <ReviewsGrid reviews={reviews} />
        </section>

        {/* --- FAQ SECTION --- */}
        <Faq items={photographerFaq} />

        {/* --- CTA SECTION --- */}
        <CTASection
          title="Pokaż swój świat w najlepszym kadrze"
          subtitleLines={[
            "Zbudujemy dla Ciebie stronę fotografa,",
            "która wyeksponuje Twój talent",
            "i przyciągnie nowych klientów.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
