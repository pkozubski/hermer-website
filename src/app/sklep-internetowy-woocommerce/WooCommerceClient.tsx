"use client";

import React, { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";
import Image from "next/image";
import { 
  ShoppingBag, 
  TrendingUp, 
  Palette, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Review, Testimonials } from "@/components/Testimonials";
import { ReviewsGrid } from "@/components/ReviewsGrid";

// 1:1 FAQ Data from live site
const woocommerceFaq = [
  {
    id: 1,
    question: "W jaki sposób mogę promować swój sklep zbudowany na WooCommerce?",
    answer: "Profesjonalny sklep WordPress, który generuje ruch oraz sprzedaż to cel każdego przedsiębiorcy decydującego się działać w ramach e-commerce. Sklep to podstawa, jednak równie ogromne znaczenie ma przygotowanie przemyślanej strategii marketingowej. Oprócz działań obejmujących optymalizację treści, meta opisów czy zdjęć zgodnie z zasadami SEO, dobrze jest pokusić się o dodatkowe wsparcie promocji sklepu poprzez: prowadzenie firmowego bloga z systematycznie publikowanymi wpisami, zastosowanie linkowania wewnątrz sklepu oraz linków zewnętrznych, czynny udział w ramach social mediów.",
  },
  {
    id: 2,
    question: "Jak długo będę czekał na sklep WooCommerce?",
    answer: "Odgórne określenie czasu wykonania sklepu na WooCommerce jest trudne, ponieważ każdy klient ma inne oczekiwania wobec projektu, co przekłada się na stopień złożoności witryny. Na czas realizacji ma wpływ kilka kluczowych aspektów jak np. wielkość sklepu i ilość produktów, jakie mają się w nim znaleźć, ilość zakładek wpływający na stopień skomplikowania struktury czy rodzaj wdrażanych funkcji.",
  },
  {
    id: 3,
    question: "Czy będę mógł sam zarządzać treściami na sklepie?",
    answer: "Tak, zakładając sklep internetowy WordPress, otrzymujesz dostęp do panelu administratora, za pośrednictwem którego będziesz mógł samodzielnie dokonać potrzebnych zmian w treściach zamieszczonych na sklepie. Po zapoznaniu się z instrukcją dowiesz się jak dodawać, usuwać czy edytować treści, aby modyfikować opisy produktów, czy poszczególnych zakładek, poprawić dane kontaktowe, a także, w jaki sposób zarządzać zdjęciami.",
  },
  {
    id: 4,
    question: "Czy mój sklep WooCommerce będzie responsywny?",
    answer: "Tak, Twój sklep WooCommerce będzie wyświetlał się na urządzeniach mobilnych. Dopasowując się do smartfonów czy tabletów o różnej rozdzielczości, umożliwi wygodne dokonywanie zakupów z dowolnego miejsca i bez konieczności korzystania z komputera. Responsywność jest w zasadzie obowiązkowa w obecnych czasach, ponieważ większość użytkowników internetu korzysta z telefonów w celu przeglądania stron www.",
  },
  {
    id: 5,
    question: "Czy mogę liczyć na Waszą pomoc, jeśli nie mam pomysłu na sklep?",
    answer: "Od wielu lat zajmujemy się tworzeniem sklepów internetowych, dlatego możesz zdać się na nasze wsparcie przy realizacji Twojego projektu. Chętnie podpowiemy, jak powinna wyglądać struktura sklepu, jakie elementy zastosować na stronie głównej i pozostałych zakładkach, a także pomożemy dobrać odpowiednią kolorystykę pasującą do profilu Twojej firmy. Naszym celem jest zrobienie sklepu, który jest funkcjonalny, estetyczny i odpowiada indywidualnym wymaganiom danego biznesu.",
  },
  {
    id: 6,
    question: "Ile kosztuje utrzymanie sklepu WooCommerce?",
    answer: "Łączny koszt utrzymania usługi domeny i hostingu to wydatek rzędu 290 zł netto rocznie (domena 110 zł, hosting 180 zł), ale warto pamiętać, że pierwszy rok jest darmowy. Domena umożliwia szybkie odnalezienie sklepu w wyszukiwarce, a hosting to miejsce na serwerze przeznaczone pod przechowywanie plików strony.",
  },
  {
    id: 7,
    question: "Czy mam wpływ na wygląd sklepu?",
    answer: "Tak, jak najbardziej możesz brać aktywny udział podczas tworzenia projektu sklepu. Wszelkie sugestie i wskazówki są dla nas bardzo wartościowe, ponieważ mają wpływ na ostateczny wygląd sklepu, który chcemy, aby wpisywał się w Twoją wizję. Z naszej strony oferujemy wiedzę i doświadczenie, dzięki którym udoskonalamy Twoje pomysły.",
  },
  {
    id: 8,
    question: "Czy wykonujecie sklepy internetowe w innych językach?",
    answer: "Tak, możemy wykonać sklep w dowolnej wersji językowej, dzięki czemu dotrzesz do szerokiego grona klientów zagranicznych. Przyciski umożliwiajączne wygodne przełączanie się na odpowiedni język zamieszczone w widocznym miejscu ułatwią międzynarodowym klientom bezproblemowe korzystanie ze sklepu. Szybka zmiana wersji językowej to duże udogodnienie dla osób odwiedzających sklep.",
  },
  {
    id: 9,
    question: "Nie mam treści, czy możecie je dla mnie napisać?",
    answer: "Oczywiście, możemy przygotować treści do Twojego sklepu WooCommerce. Nasz copywriter zadba o przemyślane teksty zgodne z zasadami marketingu internetowego trafiające do określonej grupy docelowej. Sporządzi angażujące opisy produktów oraz kategorii eksponując zalety oferty i kładąc nacisk na korzyści dla kupujących.",
  },
  {
    id: 10,
    question: "Czy projekt strony mojego sklepu będzie unikalny?",
    answer: "Stworzymy dla Ciebie sklep, który będzie nowoczesny, zgodny z obowiązującymi trendami i oryginalny. Punktem wyjścia podczas tworzenia nowego sklepu są dla nas indywidualne oczekiwania firmy, ale również przyszłych klientów, do których ma trafić oferta. Na podstawie uzyskanych materiałów opracujemy projekt spójny ze specyfiką branży, wyróżniający się ciekawą oprawą wizualną.",
  },
];

const includedItems = [
  {
    title: "Oryginalna szata graficzna",
    text: "Profesjonalny wizerunek ma silny wpływ na budowanie rozpoznawalności i zaufania wśród klientów. W osiągnięciu tego celu pomoże unikalna szata graficzna sklepu, której styl określają charakterystyczne cechy wizerunku firmy.",
    icon: "/assets/seo/woocommerce/icons-card/www.svg",
  },
  {
    title: "Intuicyjna nawigacja",
    text: "Użytkownicy internetu chętnie przebywają w sklepach z logicznie ułożonym i uporządkowanym asortymentem. Przejrzysty podział menu na odpowiednie zakładki i podzakładki usprawnia odnajdywanie szukanych produktów.",
    icon: "/assets/seo/woocommerce/icons-card/dropdown-menu.svg",
  },
  {
    title: "Katalog produktów",
    text: "Umiejętnie rozplanowana i pogrupowana lista produktów jest obowiązkowym elementem każdego sklepu. Dopełnieniem są szczegółowe opisy podkreślające walory oraz przedstawiające specyfikację oferowanego towaru.",
    icon: "/assets/seo/woocommerce/icons-card/cards-ui.svg",
  },
  {
    title: "Panel klienta",
    text: "Każdy klient, po zalogowaniu się na indywidualne konto klienta, może mieć wgląd w dokonane oraz bieżące zamówienia, zmienić swoje dane rozliczeniowe czy zarządzać listą życzeń produktów, którymi jest zainteresowany.",
    icon: "/assets/seo/woocommerce/icons-card/profile-card.svg",
  },
  {
    title: "Koszyk",
    text: "Po podjęciu decyzji zakupowej klienci dodają produkty do wirtualnego koszyka, co jest pierwszym krokiem procesu zamówienia. W ramach koszyka można według uznania zmieniać ilość produktów lub je usuwać.",
    icon: "/assets/seo/woocommerce/icons-card/cart.svg",
  },
  {
    title: "Proces zakupowy",
    text: "Sklep WooCommerce zapewnia proces zamówienia z zachowaniem standardowych etapów — dodanie produktów i potwierzenie koszyka, uzupełnienia danych osobowych, wybranie sposobu płatności i dostawy.",
    icon: "/assets/seo/woocommerce/icons-card/cart-360.svg",
  },
  {
    title: "Elementy informacyjne",
    text: "Warto zadbać o część informacyjną strony, aby firma wyglądała wiarygodnie w oczach klientów. Sklep powinien zawierać m.in: zakładkę „O nas”, stopkę z danymi, moduł FAQ, regulamin czy politykę prywatności.",
    icon: "/assets/seo/woocommerce/icons-card/info.svg",
  },
  {
    title: "Panel administracyjny",
    text: "Intuicyjny panel administracyjny umożliwia sprawną obsługę sklepu od zaplecza w zakresie zarządzania produktami, zamówieniami, stanami magazynowymi czy analizowania wyników sprzedaży.",
    icon: "/assets/seo/woocommerce/icons-card/desktop.svg",
  },
  {
    title: "Responsywność",
    text: "Dzięki odpowiedniemu wyświetlaniu się sklepu na smartfonach czy tabletach klienci mogą w pełni komfortowo dokonywać zakupów nie tylko z domu, ale z dowolnego miejsca, w którym się aktualnie znajdują.",
    icon: "/assets/seo/woocommerce/icons-card/menu.svg",
  },
];

export function WooCommerceClient({ reviews }: { reviews: Review[] }) {
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
              alt="WooCommerce Shop Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6">
              Sklep internetowy <br />{" "}
              <span className="text-[#916AFF]">WooCommerce</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-10">
              Wyprzedź konkurencję i osiągnij sukces sieci
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
              Tworzenie sklepów internetowych WooCommerce — postaw na sprzedaż online
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              <p>
                Czy możliwe jest założenie sklepu w ramach platformy WordPress? Tak, w tym celu należy skorzystać ze specjalnej wtyczki WooCommerce, dzięki której można przekształcić stronę internetową w funkcjonalny i bezpieczny sklep online. Jeśli chcesz rozwijać swój biznes poprzez sprzedaż produktów w sieci, to rozwiązanie może być dla Ciebie idealnym wyborem. Chętnie pomożemy Ci zbudować sklep od strony technicznej oraz wizualnej, dzięki któremu dotrzesz ze swoją ofertą do wielu nowych klientów.
              </p>
              <p>
                Sklep internetowy WordPress stworzony za pomocą wtyczki WooCommerce posiada niezbędne funkcjonalności umożliwiające wygodną i efektywną sprzedaż. Integracja z płatnościami online, łatwe zarządzanie produktami, stanem magazynowym i zamówieniami czy spersonalizowany wygląd to atrybuty, jakich dostarcza system WooCommerce. Stworzymy profesjonalny sklep skrojony na miarę potrzeb Twojej firmy.
              </p>
            </div>
          </div>
        </section>

        {/* --- DISTINGUISHING FEATURES (Wyróżniki) --- */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-4">
              Wyróżniki
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
                <h3 className="text-2xl font-bold mb-4 font-display">Profesjonalny wygląd</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Wygląd Twojego sklepu ma znaczący wpływ na pozyskanie zainteresowania potencjalnych klientów oraz wyróżnienie się spośród sklepów należących do konkurencji. Zadbamy o atrakcyjną szatę graficzną, aby spersonalizować platformę sprzedażową, która będzie wyglądać estetycznie, wzbudzi zaufanie i wzmocni korzystne doświadczenia zakupowe.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/specjializacja.webp" 
                    alt="Wygodny dla klientów" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Wygodny dla klientów</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Nowoczesny sklep WooCommerce posiada łatwe w obsłudze zaplecze, które zapewnia komfortowe przeprowadzanie prac administracyjnych. Możliwość samodzielnego zarządzania sklepem jest ważna dla przedsiębiorców m.in. ze względu na oszczędność czasu. Wygodę, jaką zapewnia sklep, docenią także klienci, którzy będą mogli płynnie poruszać się w obrębie sklepu.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/przygotowania.webp" 
                    alt="Działania marketingowe" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Działania marketingowe</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Sklep jest świetnym narzędziem służącym do pozyskiwania klientów, ale powinieneś wiedzieć, że jego skuteczność wzrasta wraz z zastosowaniem wielokierunkowych działań marketingowych. Stworzenie sklepu internetowego na WooCommerce plus umiejętnie przeprowadzone SEO to połączenie, dzięki któremu Twoja firma będzie lepiej widoczna w wynikach wyszukiwania.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT'S INCLUDED SECTION --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-16">
              Co zawiera sklep internetowy WooCommerce?
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
                {/* SLIDE 1: Dedicante (Split Layout - Text Right) */}
                <CarouselItem className="pl-0 basis-full">
                  <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                    {/* Left Column: Brand Color & Asset */}
                    <div className="lg:w-1/2 relative bg-[#D05383]/10 flex items-center justify-center p-8 md:p-16">
                      <div className="absolute inset-0 bg-linear-to-br from-[#D05383]/20 via-transparent to-transparent" />
                      <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src="/assets/seo/woocommerce/dedicante.webp" 
                          alt="Dedicante Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(208,83,131,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Right Column: Statistics & Content */}
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D05383] mb-6 block font-bold">SUKCES E-COMMERCE</span>
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Dedicante</h3>
                        <div className="h-1 w-20 bg-[#D05383] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Wdrożenie sklepu WooCommerce pozwoliło na precyzyjną optymalizację pod kątem SEO, co przełożyło się na spektakularny wzrost widoczności marki w wyszukiwarce.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">KLUCZOWY WSKAŹNIK:</span>
                              <div className="text-4xl md:text-5xl font-bold text-white leading-tight">Wzrost ilości fraz w top 10</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/assets/seo/woocommerce/dedicante-chart.svg" 
                              alt="Dedicante Chart" 
                              fill 
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* SLIDE 2: Golden Gift (Split Layout - Text Right) */}
                <CarouselItem className="pl-0 basis-full">
                  <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                    {/* Left Column: Brand Color & Asset */}
                    <div className="lg:w-1/2 relative bg-[#C7A566]/10 flex items-center justify-center p-8 md:p-16">
                      <div className="absolute inset-0 bg-linear-to-br from-[#C7A566]/20 via-transparent to-transparent" />
                      <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src="/assets/seo/woocommerce/goldengift.webp" 
                          alt="Golden Gift Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(199,165,102,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Right Column: Statistics & Content */}
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C7A566] block font-bold">SKALOWANIE SPRZEDAŻY</span>
                          <div className="relative w-10 h-10">
                              <Image src="/goldengift-badge.svg" alt="Badge" fill className="object-contain" />
                          </div>
                        </div>
                        
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Golden Gift</h3>
                        <div className="h-1 w-20 bg-[#C7A566] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Nowoczesny design i optymalizacja ścieżki zakupowej UX/UI zaowocowały radykalnym wzrostem współczynnika konwersji, zmieniając sklep w maszynę do sprzedaży.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK KOŃCOWY:</span>
                              <div className="text-7xl md:text-9xl font-bold text-[#C7A566] tracking-tighter leading-none">670%</div>
                              <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">Wzrostu konwersji</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/goldengift-chart.svg" 
                              alt="Golden Gift Chart" 
                              fill 
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* SLIDE 3: Ułańska Zagroda (Split Layout - Text Right) */}
                <CarouselItem className="pl-0 basis-full">
                  <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                    {/* Left Column: Brand Color & Asset */}
                    <div className="lg:w-1/2 relative bg-[#728B55]/10 flex items-center justify-center p-8 md:p-16">
                      <div className="absolute inset-0 bg-linear-to-br from-[#728B55]/20 via-transparent to-transparent" />
                      <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src="/assets/seo/woocommerce/ulanskazagroda.webp" 
                          alt="Ułańska Zagroda Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(114,139,85,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Right Column: Statistics & Content */}
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-[10px] uppercase tracking-[0.4em] text-[#728B55] block font-bold">GENEROWANIE LEADÓW</span>
                          <div className="relative w-10 h-10">
                              <Image src="/assets/seo/woocommerce/ulanskazagroda-badge.svg" alt="Badge" fill className="object-contain" />
                          </div>
                        </div>
                        
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter text-center lg:text-left">Ułańska Zagroda</h3>
                        <div className="h-1 w-20 bg-[#728B55] mb-12 mx-auto lg:mx-0" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Połączenie regionalnego charakteru z nowoczesną technologią WooCommerce pozwoliło na dotarcie do ogólnopolskiej grupy klientów i rekordowy wzrost zapytań.
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
                              alt="Ułańska Zagroda Chart" 
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
        <Faq items={woocommerceFaq} />

        {/* --- CTA SECTION --- */}
        <CTASection
          title="Rozpocznij sprzedaż w sieci"
          subtitleLines={[
            "Zbudujemy dla Ciebie sklep WooCommerce,",
            "który nie tylko pięknie wygląda,",
            "ale przede wszystkim zarabia.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
