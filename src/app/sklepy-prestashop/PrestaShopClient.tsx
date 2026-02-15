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

const prestashopFaq = [
  {
    id: 1,
    question: "W jaki sposób mogę promować sklep zbudowany na PrestaShop?",
    answer: "Umiejętnie wykonany sklep na silniku PrestaShop oferuje możliwość eleganckiego zaprezentowania produktów oraz ich efektywnej sprzedaży. Warto jednak pamiętać, że sam sklep może nie przynieść satysfakcjonujących wyników, dlatego też należy wzmocnić jego funkcjonowanie w sieci czynnościami z zakresu marketingu. Działania wspierające pozycjonowanie, dzięki którym sklep będzie pojawiał się na wyższych pozycjach wyszukiwania, to m.in.: przygotowanie unikalnych opisów produktów oraz meta tagów z uwzględnieniem słów kluczowych, tworzenie linkowania wewnętrznego i zewnętrznego, prowadzenie bloga ze systematycznie dodawanymi wpisami oraz integracja z mediami społecznościowymi.",
  },
  {
    id: 2,
    question: "Jak długo będę czekał na stworzenie sklepu na PrestaShop?",
    answer: "Czas, w jakim jesteśmy w stanie wykonać sklep na PrestaShop uzależniony jest od specyfiki projektu. Na termin przygotowania w pełni funkcjonalnej platformy wpływa wiele czynników jak np. wielkość i stopień skomplikowania sklepu czy zakres i rodzaj zastosowanych funkcjonalności. Po zapoznaniu się i przeanalizowaniu Twoich potrzeb przygotujemy szczegółowy plan działania i oszacujemy, jak dużo czasu potrzebujemy na zaprojektowanie i wdrożenie witryny.",
  },
  {
    id: 3,
    question: "Czy będę mógł sam zarządzać treściami na sklepie?",
    answer: "Tak, platforma PrestaShop posiada system zarządzania treścią (CMS) z indywidualnym panelem administratora, który umożliwia bezproblemową edycję tekstów zamieszczonych w poszczególnych zakładkach sklepu. Nie musisz być programistą, wystarczy krótka instrukcja, dzięki której będziesz mógł samodzielnie wprowadzać niezbędne zmiany w strukturze treści: dodawać, usuwać lub modyfikować opisy produktów, aktualizować informacje o firmie, a także zamieszczać zdjęcia czy grafiki.",
  },
  {
    id: 4,
    question: "Czy mój sklep w systemie PrestaShop będzie responsywny?",
    answer: "Tak, Twój sklep będzie poprawnie wyświetlać się na urządzeniach przenośnych. PrestaShop to system, który zapewnia automatyczne dopasowanie układu poszczególnych elementów sklepu do różnych rozdzielczości. Będzie dobrze wyglądać zarówno na komputerach, jak i mniejszych urządzeniach — tabletach czy smartfonach. Dzięki responsywności Twoi klienci będą mogli swobodnie przeglądać produkty i robić zakupy niezależnie od tego, gdzie będą się znajdować.",
  },
  {
    id: 5,
    question: "Czy mogę liczyć na Waszą pomoc, jeśli nie mam pomysłu na sklep?",
    answer: "Tworzenie sklepów PrestaShop to jedna z naszych specjalizacji, więc chętnie podpowiemy, jak mogłaby wyglądać Twoja przyszła platforma sprzedażowa online. Zawsze dążymy do tego, aby projekt był jak najbardziej spójny z oczekiwaniami klienta, dlatego każda nawet najmniejsza sugeria jest dla nas bardzo cenna. Przeprowadzamy dokładną analizę i bazując na wieloletnim doświadczeniu, tworzymy sklep wpisujący się w indywidualne oczekiwania.",
  },
  {
    id: 6,
    question: "Ile kosztuje utrzymanie sklepu PrestaShop?",
    answer: "Założenie sklepu internetowego wiąże się z kosztami przygotowania i wdrożenia projektu, ale również jego utrzymaniem. Mamy na myśli opłatę za utrzymanie domeny i hostingu, która wynosi 290 zł netto i uiszczana jest w rocznych odstępach czasu. Warto wiedzieć, że przez pierwszy rok usługa jest darmowa.",
  },
  {
    id: 7,
    question: "Czy mam wpływ na wygląd sklepu?",
    answer: "Oczywiście Twój udział w procesie przygotowania projektu sklepu online jest jak najbardziej mile widziany. Jesteśmy otwarci na wszelkie podpowiedzi, ponieważ każda wskazówka przybliża nas do stworzenia sklepu idealnie dopasowanego do specyfiki przedsiębiorstwa lub Twoich osobistych preferencji. Z naszej strony służymy wieloletnim doświadczeniem, które łącząc z Twoimi sugestiami, pozwoli osiągnąć satysfakcjonujące efekty.",
  },
  {
    id: 8,
    question: "Czy wykonujecie sklepy PrestaShop w różnych wersjach językowych?",
    answer: "Tak, jeśli potrzebujesz sklepu w innych wersjach językowych, możemy wykonać takie zlecenie. Wielojęzyczny sklep funkcjonujący w sieci pozwoli Ci otworzyć firmę na rynki zagraniczne i dzięki temu zwiększasz swoje szanse na dotarcie do znacznie większego grona klientów. To doskonały sposób na wyprzedzenie konkurencji i budowanie pozytywnego wizerunku w sieci.",
  },
  {
    id: 9,
    question: "Nie mam opisów produktów i pozostałych treści, czy możecie wykonać je za mnie?",
    answer: "Tak, możemy przygotować treści na poszczególne zakładki Twojego sklepu, jeśli nie posiadasz własnych tekstów. Nasz copywriter stworzy angażujące opisy do konkretnych kategorii, podkategorii lub produktów, które podkreślają atuty oferty i korzyści dla klienta, a także są zoptymalizowane pod kątem SEO.",
  },
  {
    id: 10,
    question: "Czy projekt sklepu na PrestaShop będzie unikalny?",
    answer: "Tworzenie sklepów internetowych PrestaShop opieramy na indywidualnych wytycznych podanych przez klientów, dzięki czemu każdy projekt jest inny. Zadbamy o przyciągającą uwagę szatę graficzną, płynne działanie, intuicyjną obsługę oraz unikatowe treści, aby wyróżnić platformę spośród konkurencji i zapewnić klientom jak najlepsze doświadczenia zakupowe.",
  },
];

const includedItems = [
  {
    title: "Oryginalna szata graficzna",
    text: "Wygląd sklepu internetowego PrestaShop możemy z łatwością dopasować do profilu Twojej firmy. Elegancka grafika wyróżni sklep, podkreśli styl marki, a także przyciągnie uwagę klientów i zachęci ich do działania.",
    icon: "/assets/seo/woocommerce/icons-card/www.svg",
  },
  {
    title: "Intuicyjna nawigacja",
    text: "Przejrzyste menu oraz czytelny podział na kategorie i podkategorie umożliwia wygodne poruszanie się po sklepie, co ułatwia bezproblemowe odszukanie przez klientów niezbędnych informacji oraz produktów.",
    icon: "/assets/seo/woocommerce/icons-card/dropdown-menu.svg",
  },
  {
    title: "Katalog produktów",
    text: "Odpowiednio zorganizowane, niczym na sklepowych półkach, produkty pozwalają zachować porządek i funkcjonalność. Klienci mogą wygodniej przeglądać asortyment sklepu i szybciej zdecydować się na zakup.",
    icon: "/assets/seo/woocommerce/icons-card/cards-ui.svg",
  },
  {
    title: "Panel klienta",
    text: "Indywidualne konto klienta chronione hasłem zapewnia dostęp do informacji dotyczących dokonanych zamówień, ustawienie danych osobowych, tworzenie listy ulubionych produktów czy zarządzenie subskrypcją newsletterów.",
    icon: "/assets/seo/woocommerce/icons-card/profile-card.svg",
  },
  {
    title: "Koszyk",
    text: "Wybrane produkty klienci mogą dodawać do koszyka i następnie przejść do dalszego etapu zamówienia, a w razie potrzeby zarządzać swoimi zakupami — swobodnie usuwać jego zawartość czy edytować ilość zakupionych sztuk.",
    icon: "/assets/seo/woocommerce/icons-card/cart.svg",
  },
  {
    title: "Proces zakupowy",
    text: "Proces realizacji zamówienia jest transparentny i składa się z kilku prostych kroków. Polega na potwierdzeniu koszyka, podaniu przez klienta danych do wysyłki czy ustawienia metod dostawy i płatności.",
    icon: "/assets/seo/woocommerce/icons-card/cart-360.svg",
  },
  {
    title: "Elementy informacyjne",
    text: "Sklep PrestaShop zawiera również takie informacje jak: polecane produkty czy oferty promocyjne wyróżnione na stronie głównej, zakładkę z opisem firmy, moduł FAQ, politykę prywatności oraz regulamin.",
    icon: "/assets/seo/woocommerce/icons-card/info.svg",
  },
  {
    title: "Panel administracyjny",
    text: "Funkcjonalne zaplecze umożliwia zarządzanie wszystkimi elementami sklepu jak np. dodawanie, usuwanie i edytowanie produktów, kontrolowanie procesów zamówień czy śledzenie wyników sprzedaży.",
    icon: "/assets/seo/woocommerce/icons-card/desktop.svg",
  },
  {
    title: "Responsywność",
    text: "Sklep na PrestaShop dostosowuje się do urządzeń mobilnych, dzięki czemu klienci mogą robić zakupy nie tylko za pośrednictwem komputera, ale również korzystając z telefonu lub tableta.",
    icon: "/assets/seo/woocommerce/icons-card/menu.svg",
  },
];

export function PrestaShopClient({ reviews }: { reviews: Review[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen bg-neutral-900 text-white font-sans overflow-x-clip">
      <Header allowVisibility={true} />

      <main ref={containerRef} className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative w-full py-24 lg:py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-40 select-none pointer-events-none">
            <Image
              src="/assets/seo/prestashop/intro-bg.webp"
              alt="PrestaShop Shop Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6">
              Sklepy <span className="text-[#916AFF]">PrestaShop</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-10">
              Pozyskuj nowych klientów i rozwijaj swój biznes
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
              Sklep na PrestaShop — dlaczego warto wybrać ten system?
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              <p>
                PrestaShop to platforma umożliwiająca tworzenie nowoczesnych, łatwych w obsłudze sklepów internetowych, które wspierają działalność e-commerce. Sklep zbudowany na tym oprogramowaniu zapewnia wygodną sprzedaż internetową, a także dotarcie do szerokiego grona klientów. Stylowy motyw graficzny, uporządkowane kategorie produktów oraz prosty do przejścia proces zamówień sprawi, że klienci będą chętnie korzystać z Twojego sklepu online niezależnie od tego, w jakiej branży działasz.
              </p>
              <p>
                Tworzenie sklepów internetowych PrestaShop wspieranych przez profesjonale działania marketingowe stanowi jedną z naszych specjalizacji. Dbając o aspekt estetyczny, wysoką użyteczność oraz optymalizację sklepu pod kątem SEO, pomożemy osiągnąć Twojej firmie założone cele biznesowe. Zajmiemy się kompleksowo przygotowaniem sklepu na PrestaShop, dzięki któremu pozyskasz klientów i będziesz generować zyski.
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
                    src="/assets/seo/prestashop/feature-1.webp" 
                    alt="Profesjonalny wygląd" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Profesjonalny wygląd</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Personalizacja sklepu online do potrzeb konkretnej branży oraz identyfikacji wizualnej jest ważnym czynnikiem pozwalającym wyróżnić sklep na tle konkurencji. W ramach projektowania sklepów PrestaShop możemy dopasować kolorystykę, zdjęcia, motywy graficzne czy układ modułów do indywidualnych oczekiwań oraz profilu firmy.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/prestashop/feature-2.webp" 
                    alt="Wygodny dla klientów i właściciela" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Wygodny dla klientów i właściciela</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Zaletą PrestaShop jest przystępna obsługa, która umożliwia łatwe zarządzanie sklepem przez właściciela, ale również korzystnie wpływa na doświadczenia klientów robiących zakupy w ramach platformy. Wszelkie ustawienia sklepu można przeprowadzić samodzielnie poprzez intuicyjny panel administracyjny.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/prestashop/feature-3.webp" 
                    alt="Przygotowany pod marketing" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Przygotowany pod marketing</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Dopracowana struktura sklepu opartego na oprogramowaniu PrestaShop czy zoptymalizowane opisy produktów to niektóre z elementów wpływających na zadowalające efekty pozycjonowania. Oprócz estetycznego wyglądu zajmiemy się działaniami, które podniosą widoczność platformy sprzedażowej.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT'S INCLUDED SECTION --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-16">
              Co zawiera sklep stworzony na PrestaShop?
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
                          src="/assets/seo/prestashop/dedicante-laptop.webp" 
                          alt="Dedicante Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(208,83,131,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D05383] mb-6 block font-bold">SUKCES E-COMMERCE</span>
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Dedicante</h3>
                        <div className="h-1 w-20 bg-[#D05383] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Wdrożenie nowoczesnego sklepu pozwoliło na precyzyjną optymalizację pod kątem SEO, co przełożyło się na spektakularny wzrost widoczności marki.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">KLUCZOWY WSKAŹNIK:</span>
                              <div className="text-4xl md:text-5xl font-bold text-white leading-tight">Wzrost ilości fraz w top 10</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/assets/seo/prestashop/dedicante-chart.svg" 
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

                {/* SLIDE 2: Golden Gift */}
                <CarouselItem className="pl-0 basis-full">
                  <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                    <div className="lg:w-1/2 relative bg-[#C7A566]/10 flex items-center justify-center p-8 md:p-16">
                      <div className="absolute inset-0 bg-linear-to-br from-[#C7A566]/20 via-transparent to-transparent" />
                      <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src="/assets/seo/prestashop/goldengift-laptop.webp" 
                          alt="Golden Gift Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(199,165,102,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
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
                              Nowoczesny design i optymalizacja ścieżki zakupowej zaowocowały radykalnym wzrostem współczynnika konwersji, zmieniając sklep w maszynę do sprzedaży.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK KOŃCOWY:</span>
                              <div className="text-7xl md:text-9xl font-bold text-[#C7A566] tracking-tighter leading-none">670%</div>
                              <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">Wzrostu konwersji</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/assets/seo/prestashop/goldengift-chart.svg" 
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

                {/* SLIDE 3: Ułańska Zagroda */}
                <CarouselItem className="pl-0 basis-full">
                  <div className="relative h-[600px] md:h-[750px] w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
                    <div className="lg:w-1/2 relative bg-[#728B55]/10 flex items-center justify-center p-8 md:p-16">
                      <div className="absolute inset-0 bg-linear-to-br from-[#728B55]/20 via-transparent to-transparent" />
                      <div className="relative w-full h-full max-w-2xl min-h-[300px] md:min-h-[400px]">
                        <Image 
                          src="/assets/seo/prestashop/ulanskazagroda-laptop.webp" 
                          alt="Ułańska Zagroda Case Study" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(114,139,85,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-[10px] uppercase tracking-[0.4em] text-[#728B55] block font-bold">GENEROWANIE LEADÓW</span>
                          <div className="relative w-10 h-10">
                              <Image src="/assets/seo/prestashop/ulanskazagroda-badge.svg" alt="Badge" fill className="object-contain" />
                          </div>
                        </div>
                        
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Ułańska Zagroda</h3>
                        <div className="h-1 w-20 bg-[#728B55] mb-12 mx-auto lg:mx-0" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Połączenie regionalnego charakteru z nowoczesną technologią pozwoliło na dotarcie do ogólnopolskiej grupy klientów i rekordowy wzrost zapytań.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                              <div className="text-7xl md:text-9xl font-bold text-[#728B55] tracking-tighter leading-none">1574%</div>
                              <div className="text-xl md:text-2xl text-white uppercase tracking-[0.2em] font-medium">Więcej zapytań</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/assets/seo/prestashop/ulanskazagroda-chart.svg" 
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
        <Faq items={prestashopFaq} />

        {/* --- CTA SECTION --- */}
        <CTASection
          title="Rozpocznij sprzedaż w sieci"
          subtitleLines={[
            "Zbudujemy dla Ciebie sklep PrestaShop,",
            "który nie tylko pięknie wygląda,",
            "ale przede wszystkim zarabia.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
