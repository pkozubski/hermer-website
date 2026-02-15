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

const restaurantFaq = [
  {
    id: 1,
    question: "W jaki sposób mogę się promować?",
    answer: "Niezawodną wizytówką Twojej restauracji jest nowoczesna strona internetowa, ale żeby zyskać znakomitą widoczność w wyszukiwarce Google, należy zacząć ją promować poprzez różnego rodzaju działania marketingowe. Do licznych możliwości należą: pozycjonowanie (SEO), kampanie Google Ads, wizytówka Google Moja Firma, prowadzenie bloga kulinarno-informacyjnego oraz aktywność w mediach społecznościowych takich jak Facebook czy Instagram.",
  },
  {
    id: 2,
    question: "Jak długo będę czekał na stronę?",
    answer: "Projektowanie i wdrażanie strony internetowej restauracji to proces wieloetapowy. Dopiero po pierwszych rozmowach dotyczących szczegółów projektu jesteśmy w stanie podać dokładny czas realizacji. Na termin wpływa stopień skomplikowania strony, liczba podstron oraz dostępność materiałów (zdjęcia, menu). Każdy projekt rozpatrujemy indywidualnie.",
  },
  {
    id: 3,
    question: "Czy sam będę mógł dodawać zdjęcia do galerii?",
    answer: "Tak, uzupełnisz galerię nowymi zdjęciami za pomocą łatwego w obsłudze panelu administracyjnego CMS. Możesz samodzielnie zamieszczać fotografie dań oraz wnętrza lokalu. Pamiętaj, że apetyczne zdjęcia potraw mają ogromny wpływ na liczbę rezerwacji i zamówień.",
  },
  {
    id: 4,
    question: "Dlaczego blog jest ważny?",
    answer: "Wpisy blogowe mają kluczowe znaczenie dla budowania zaufania i pozycjonowania strony. Dzięki regularnym aktualnościom pokazujesz, że restauracja prężnie działa, a Ty jesteś ekspertem w swojej dziedzinie. To także świetne miejsce na dzielenie się ciekawostkami kulinarnymi i informowanie o wydarzeniach w lokalu.",
  },
  {
    id: 5,
    question: "Nie mam logo, czy możecie mi pomóc?",
    answer: "Tak, nasz doświadczony grafik zaprojektuje niepowtarzalne i łatwe do zapamiętania logo dla Twojej restauracji. Projekt będzie nawiązywać do charakteru lokalu, jego nazwy i ogólnej identyfikacji wizualnej, tak aby zapadał w pamięć klientów.",
  },
  {
    id: 6,
    question: "Czy mogę połączyć stronę z Social media?",
    answer: "Oczywiście, integracja z mediami społecznościowymi wspiera budowanie wiarygodności i ułatwia szybką komunikację z gośćmi. Zamieszczamy na stronie przyciski kierujące do Twoich profili, co pozwala na budowanie trwałych relacji z klientami.",
  },
  {
    id: 7,
    question: "Czy strona będzie responsywna?",
    answer: "Tak, wszystkie tworzone przez nas strony są w pełni responsywne. Oznacza to, że będą się one idealnie wyświetlać na komputerach, tabletach oraz smartfonach, co jest kluczowe, gdyż wielu klientów szuka restauracji i sprawdza menu właśnie na telefonach.",
  },
  {
    id: 8,
    question: "Czy będę mógł sam zarządzać treściami?",
    answer: "Tak, otrzymasz dostęp do intuicyjnego panelu CMS, który pozwoli Ci na samodzielną edycję tekstów, aktualizację menu czy zmianę godzin otwarcia bez konieczności posiadania wiedzy programistycznej.",
  },
];

const includedItems = [
  {
    title: "Projekt Logo",
    text: "Zaprojektujemy niepowtarzalne i łatwe do zapamiętania logo, które będzie nawiązywać do charakteru restauracji i zapadnie w pamięć Twoim klientom.",
    icon: "/assets/seo/dla-restauracji-icons/logo.svg",
  },
  {
    title: "Elektroniczne Menu",
    text: "Przejrzysta prezentacja Twojej karty dań wraz ze zdjęciami i opisami, która zachęci gości do złożenia zamówienia lub rezerwacji stolika.",
    icon: "/assets/seo/dla-restauracji-icons/menu.svg",
  },
  {
    title: "Formularz rezerwacji",
    text: "Umożliwiamy wdrożenie modułu rezerwacji online, który usprawni pracę obsługi i pozwoli gościom w łatwy sposób zarezerwować stolik o dowolnej porze.",
    icon: "/assets/seo/dla-restauracji-icons/calendar.svg",
  },
  {
    title: "Panel administracyjny",
    text: "Intuicyjne narzędzie do zarządzania całą zawartością strony. Samodzielnie zmieniaj menu, dodawaj promocje i aktualizuj informacje o lokalu.",
    icon: "/assets/seo/dla-restauracji-icons/action.svg",
  },
  {
    title: "Oryginalna szata graficzna",
    text: "Atrakcyjny wygląd i odpowiednio dobrane barwy przyciągną uwagę gości i zachęcą ich do odwiedzenia lokalu. Projektujemy grafikę spójną z klimatem Twojej restauracji.",
    icon: "/assets/seo/dla-restauracji-icons/spark.svg",
  },
  {
    title: "Blog kulinarny",
    text: "Miejsce na dzielenie się wiedzą i nowościami. Regularne wpisy wspierają pozycjonowanie strony i budują autorytet restauracji w oczach klientów.",
    icon: "/assets/seo/dla-restauracji-icons/education.svg",
  },
  {
    title: "Social Media Integration",
    text: "Połączymy Twoją stronę z profilem na Facebooku i Instagramie, co ułatwi budowanie społeczności wokół Twojej marki i szybki kontakt z gośćmi.",
    icon: "/assets/seo/dla-restauracji-icons/people.svg",
  },
  {
    title: "Formularz kontaktowy",
    text: "Poprawiający komunikację moduł, za którego pośrednictwem klienci mogą zadawać pytania dotyczące oferty restauracji i rezerwacji.",
    icon: "/assets/seo/dla-restauracji-icons/mail.svg",
  },
  {
    title: "Intuicyjna nawigacja",
    text: "Logiczny układ strony ułatwia gościom szybkie odnalezienie menu, cennika czy danych kontaktowych, co przekłada się na lepsze doświadczenia użytkownika.",
    icon: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg",
  },
];

export function RestaurantClient({ reviews }: { reviews: Review[] }) {
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
              alt="Restaurant Page Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6">
              Strona dla <span className="text-[#916AFF]">restauracji</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-10">
              Przyciągnij więcej gości dzięki nowoczesnej witrynie www
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
              Jak strona dla restauracji ułatwi mi sprzedaż?
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              <p>
                Celem stron internetowych dla restauracji jest przyciągnięcie klientów i zwiększenie sprzedaży oferowanych dań. Istotny jest aspekt wizualny strony www, a więc grafika, która zwróci uwagę klientów i zachęci ich do zapoznania się z menu restauracji. Pomoże w tym umiejętny dobór barw i elementów graficznych, które mają ogromny wpływ na atrakcyjność witryny restauracyjnej.
              </p>
              <p>
                Tym, co nakłoni gości do korzystania z witryny i ułatwi sprzedaż, jest intuicyjny układ umożliwiający bezproblemowe poruszanie się po stronie głównej i zakładkach. Zastosowanie odpowiednich przycisków CTA oraz formularza rezerwacji stolika usprawni pracę Twojej restauracji i poprawi komunikację z klientami.
              </p>
            </div>
          </div>
        </section>

        {/* --- DISTINGUISHING FEATURES (Wyróżniki) --- */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-4">
              Dlaczego warto nas wybrać?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/hero-bg.webp" 
                    alt="Profesjonalny wygląd" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Atrakcyjna oprawa wizualna</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Zadbamy o to, aby strona Twojej restauracji zachwycała od pierwszego spojrzenia. Profesjonalne zdjęcia potraw i dopracowana grafika sprawią, że goście nie będą mogli doczekać się wizyty w Twoim lokalu.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/specjializacja.webp" 
                    alt="Samodzielna edycja" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Łatwa obsługa menu</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Samodzielnie wprowadzaj zmiany w karcie dań, aktualizuj ceny i dodawaj sezonowe specjały. Nasz system CMS jest tak prosty, że zarządzanie stroną nie zajmie Ci więcej niż kilka minut dziennie.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/przygotowania.webp" 
                    alt="Social Media Integration" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Wsparcie marketingowe</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Pomożemy Ci wypromować restaurację w sieci. Od integracji z social media, przez pozycjonowanie, aż po kampanie reklamowe – dostarczamy narzędzia, które realnie zwiększają liczbę rezerwacji.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT'S INCLUDED SECTION --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-16">
              Co zawiera strona dla restauracji?
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
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D05383] mb-6 block font-bold">SUKCES W SIECI</span>
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Zaufali nam</h3>
                        <div className="h-1 w-20 bg-[#D05383] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Nasze strony pomagają firmom z różnych branż osiągać spektakularne wzrosty widoczności i sprzedaży dzięki precyzyjnej optymalizacji.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">KLUCZOWY WSKAŹNIK:</span>
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
                          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C7A566] block font-bold">WSPARCIE SPRZEDAŻY</span>
                          <div className="relative w-10 h-10">
                              <Image src="/goldengift-badge.svg" alt="Badge" fill className="object-contain" />
                          </div>
                        </div>
                        
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Efektywnie</h3>
                        <div className="h-1 w-20 bg-[#C7A566] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Nowoczesny design i optymalizacja ścieżki użytkownika przekładają się na realny wzrost konwersji i zainteresowania ofertą.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                              <div className="text-7xl md:text-9xl font-bold text-[#C7A566] tracking-tighter leading-none">670%</div>
                              <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">Wzrostu konwersji</div>
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

                {/* SLIDE 3: Ułańska Zagroda */}
                <CarouselItem className="pl-0 basis-full">
                  <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                    <div className="lg:w-1/2 relative bg-[#728B55]/10 flex items-center justify-center p-8 md:p-16">
                      <div className="absolute inset-0 bg-linear-to-br from-[#728B55]/20 via-transparent to-transparent" />
                      <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src="/assets/seo/woocommerce/ulanskazagroda.webp" 
                          alt="Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(114,139,85,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-[10px] uppercase tracking-[0.4em] text-[#728B55] block font-bold">WIĘCEJ GOŚCI</span>
                          <div className="relative w-10 h-10">
                              <Image src="/assets/seo/woocommerce/ulanskazagroda-badge.svg" alt="Badge" fill className="object-contain" />
                          </div>
                        </div>
                        
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Skutecznie</h3>
                        <div className="h-1 w-20 bg-[#728B55] mb-12 mx-auto lg:mx-0" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Budujemy strony, które pracują na Twój sukces 24/7, dostarczając nowych klientów i wzmacniając wizerunek Twojej restauracji.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                              <div className="text-7xl md:text-9xl font-bold text-[#728B55] tracking-tighter leading-none">1574%</div>
                              <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">Więcej zapytań</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/assets/seo/woocommerce/ulanskazagroda-chart.svg" 
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
              Dowiedz się, co mówią o nas firmy, z którymi współpracujemy.
            </p>
          </div>
          
          <ReviewsGrid reviews={reviews} />
        </section>

        {/* --- FAQ SECTION --- */}
        <Faq items={restaurantFaq} />

        {/* --- CTA SECTION --- */}
        <CTASection
          title="Zyskaj więcej gości już dziś"
          subtitleLines={[
            "Zbudujemy dla Ciebie stronę restauracji,",
            "która stanie się Twoją najlepszą wizytówką",
            "i realnie zwiększy sprzedaż Twoich dań.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
