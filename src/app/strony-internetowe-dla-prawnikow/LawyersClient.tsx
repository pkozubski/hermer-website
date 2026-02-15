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

const lawyersFaq = [
  {
    id: 1,
    question: "W jaki sposób mogę promować stronę internetową dla prawnika?",
    answer: "Strona internetowa dla kancelarii jest niezawodną wizytówką, ale warto podjąć dodatkowe działania, aby wypromować witrynę w internecie. Pomimo ograniczeń dotyczących reklamowania usług prawniczych, istnieje kilka sprawdzonych metod, dzięki którym dotrzesz do świadomości użytkowników internetu. Stronę internetową możesz rozpowszechniać wybierając najbezpieczniejsze formy promocji: pozycjonowanie przyczyniające się do wyświetlania strony na wysokich pozycjach na liście wyszukiwania w Google, prowadzenie firmowego bloga z przydatną wiedzą będącego źródłem porad prawnych czy informacji o aktualnych zmianach w przepisach prawa, udzielanie się w mediach społecznościowych, aby generować zasięgi oraz budować pozytywne i trwałe relacje z klientami.",
  },
  {
    id: 2,
    question: "Jak długo będę czekał na stronę?",
    answer: "Czas wykonania stron www dla prawników jest kwestią indywidualną. Warto mieć świadomość, że tworzenie witryny to złożony proces, w którym bierze udział kilku specjalistów. Analiza konkurencji, zebranie materiałów, ustalenie detali projektu, przygotowanie szaty graficznej czy kodowanie to tylko wybrane kroki, jakie należy przejść, zanim powstanie strona internetowa kancelarii. Stopień skomplikowania witryny może być różny, co uzależnione jest od specyfiki wymagań danego klienta, ponieważ może życzyć sobie wykonanie prostej strony wizytówki, ale równie dobrze witryny składającej się z wielu elementów. Skontaktuj się z nami, omówmy wszystkie wytyczne dotyczące Twojej strony www, a oszacujemy, ile potrzebujemy czasu na jej wykonanie.",
  },
  {
    id: 3,
    question: "Czy będę mógł sam zarządzać treściami na stronie?",
    answer: "Tak. Strona www zostanie zbudowana na systemie zarządzania treścią (CMS), który jest prosty w obsłudze i umożliwia łatwą modyfikację treści. Nie trzeba znać się na programowaniu, aby wprowadzać aktualizację treści na swojej stronie internetowej kancelarii. Zrobisz to samodzielnie za pomocą panelu, do którego dostaniesz dostęp. Zmiany, jakie możesz zastosować na swojej stronie to m.in. dodawanie nowych treści lub usuwanie już nieaktualnych informacji, formatowanie tekstu, wprowadzanie zdjęć, grafik czy tabel. Dzięki tej możliwości zyskujesz swobodę i oszczędzasz czas, ponieważ będziesz mógł od ręki sam wprowadzić niezbędne modyfikacje na swojej stronie www bez konieczności zgłaszania nam takiego zlecenia.",
  },
  {
    id: 4,
    question: "Czy moja strona będzie responsywna?",
    answer: "Tak, Twoja strona będzie dopasowywać się do urządzeń mobilnych. Responsywność strony internetowej to obecnie konieczność, jeśli firma ma zostać zauważona przez jak największą liczbę użytkowników internetu. Projekt strony przygotujemy w ten sposób, by automatycznie dopasowywał się do rozmiaru wyświetlacza przenośnego sprzętu, co podnosi komfort przeglądania stron. Nasze strony dla prawników are nowoczesne i przyjazne wszystkim użytkownikom internetu – tych, którzy korzystają z komputerów, ale również smartfonów czy tabletów. Optymalne wyświetlanie strony korzystnie wpływa na odbiór strony przez ludzi, ale jest również pozytywnie oceniane przez Google, co z kolei ma dobry wpływ na pozycjonowanie strony.",
  },
  {
    id: 5,
    question: "Co, jeśli nie mam pomysłu na stronę?",
    answer: "Zdaj się na nasze doświadczenie, dzięki któremu tworzymy najlepsze strony internetowe kancelarii prawnych. Jeśli nie wiesz, co powinno znaleźć się na stronie głównej i poszczególnych zakładkach, pomożemy przygotować dla Ciebie projekt profesjonalny pod względem użyteczności, wyglądu, zawartości informacji i zaplecza technicznego. Tylko dopracowana strona internetowa dla prawnika będzie realizować założone cele, dlatego dobrze jest zaufać fachowcom, którzy wiedzą, jak powinna wyglądać intuicyjna i przydatna klientom witryna. Przy Twojej stronie będą pracować: specjalista od użyteczności stron (UX), grafik, programista, copywriter, marketingowcy, a nad wszystkim będzie czuwać menedżer projektu. Mając do dyspozycji cały zespół, zyskujesz pewność, że otrzymasz witrynę gruntownie przygotowaną pod kątem estetycznym i technicznym.",
  },
  {
    id: 6,
    question: "Ile kosztuje utrzymanie strony internetowej kancelarii?",
    answer: "Koszt stworzenia strony www zależy od tego, jak skomplikowany jest projekt, ale to nie wszystkie wydatki, na jakie należy się przygotować. Warto pamiętać, że przy stronie www, pojawia się również koszt jej utrzymania, na który składa się opłata roczna obejmująca dwie odrębne usługi – domenę i hosting. Domena, a więc unikatowy adres strony www, bez którego witryna nie będzie działać, to roczny koszt rzędu 110 zł netto. Na hosting natomiast, czyli miejsce na serwerze, gdzie znajdują się wszystkie pliki strony, wydasz 180 zł netto. Wydatek zatem nie jest wysoki, bo wynosi 290 zł netto rocznie. Dobra wiadomość jest taka, że usługa utrzymania domeny i hostingu przez pierwszy rok od uruchomienia strony jest darmowa.",
  },
  {
    id: 7,
    question: "Czy mam wpływ na wygląd strony internetowej kancelarii?",
    answer: "Celem, jaki sobie zakładamy, jest tworzenie stron internetowych, które spełniają oczekiwania naszych klientów, więc oczywiście jesteśmy otwarci na Twoje sugestie dotyczące wyglądu witryny. Jeśli uważasz, że brakuje jakiegoś elementu na stronie lub myślisz, że moglibyśmy coś odjąć, powiedz nam o tym i wspólnie przeanalizujemy Twoje odczucia względem strony. Chcemy, aby projekt był w pełni profesjonalny, dlatego każdy pomysł dokładnie analizujemy, decydujemy, co ewentualnie zmienić, zanim wprowadzimy zmiany w projekcie. Na stronie www nie mogą znajdować się elementy, które mogłyby zakłócić jej układ czy poruszanie się po niej. Łącząc siły, jesteśmy w stanie uzyskać efekty satysfakcjonujące dla właściciela strony.",
  },
  {
    id: 8,
    question: "Co, jeśli nie mam logo kancelarii?",
    answer: "To nie problem, nasz doświadczony grafik wykona unikatowe i ponadczasowe logo dla Twojej kancelarii. Logo jest jednym z najważniejszych elementów strony internetowej, ponieważ stanowi znak rozpoznawczy firmy. Zamieszczone w widocznym miejscu przyciągnie uwagę klientów i zapadnie w ich pamięci kojarząc się z Twoją kancelarią. Przygotujemy dla Ciebie indywidualne, rozpoznawalne i zgodne z Twoimi oczekiwaniami logo, które stanie się częścią identyfikacji kancelarii. Oryginalny znak firmowy o ciekawym kształcie, dopracowanej kompozycji oraz odpowiednio dobranej kolorystyce pozwoli Ci wyróżnić się na tle konkurencji, a także sprawi, że będziesz postrzegany przez klientów jako profesjonalista.",
  },
  {
    id: 9,
    question: "Czy wykonujecie strony internetowe w innych językach?",
    answer: "Tak, na Twoje życzenie możemy przygotować stronę internetową dla kancelarii w innych językach. Strony wielojęzyczne to bardzo dobre rozwiązanie, jeśli chcesz zwiększyć zasięgi i dotrzeć do jeszcze szerszego grona klientów. Zastosowanie dodatkowych języków na stronie kancelarii pozwoli trafić do odpowiednich grup odbiorców i da pewność, że osoby, które nie znają języka polskiego, będą miały szansę zrozumieć przekaz strony, tym samym bez problemu zapoznając się z Twoją ofertą. Tworząc stronę w innych językach, zdobywasz przewagę nad konkurencją, budujesz zaufanie wśród klientów zagranicznych, którzy poczują się wyróżnieni, a Twoja kancelaria będzie postrzegana jako nowoczesna i odpowiadająca na potrzeby klientów.",
  },
  {
    id: 10,
    question: "Nie mam treści, czy możecie wykonać je dla mnie?",
    answer: "Tak, przygotujemy treści na Twoją stronę. Teksty na stronach internetowych kancelarii prawnych spełniają bardzo ważną funkcję – są nośnikiem niezbędnych informacji dotyczących usług, zachęcają klientów do pozostania na stronie i podjęcia konkretnych działań np. nawiązania kontaktu. W związku z tym muszą być napisane z wyczuciem, z zachowaniem sprawdzonych zasad oraz w sposób lekki i przejrzysty. Nasz copywriter przygotuje na Twoją stronę wysokiej jakości treści o charakterze marketingowym, dzięki którym dotrzesz ze swoim przekazem do określonej wcześniej grupy odbiorców. Stosując właściwą formułę treści, stworzymy wartościowy content, który będzie przydatny z punktu widzenia klienta, jak również działań prowadzonych w zakresie pozycjonowania.",
  },
  {
    id: 11,
    question: "Czy projekt strony mojej kancelarii będzie unikalny?",
    answer: "Tak, dołożymy starań, aby projekt strony internetowej dla kancelarii był dopasowany do Twoich indywidualnych oczekiwań, wyróżniał się na tle konkurencji i jednocześnie był spójny z charakterem działalności, którą wykonujesz. Przygotujemy unikalną stronę www bazującą na nowoczesnych trendach, która odzwierciedli prestiż Twojego zawodu. Do dyspozycji mamy kompletny zespół specjalistów, który zadba o: użyteczność strony, by Twoi klienci mogli z niej wygodnie korzystać, niepowtarzalny wygląd i elementy graficzne przyciągające uwagę, profesjonalne kodowanie, dzięki któremu strona będzie działać bez zarzutu. Gwarantujemy stworzenie strony internetowej dla kancelarii prawniczej atrakcyjnej pod względem wizualnym oraz zoptymalizowanej pod kątem technicznym.",
  },
];

const includedItems = [
  {
    title: "Logo",
    text: "Znak rozpoznawczy i jeden z elementów budowania wizerunku kancelarii. Charakterystyczne logo zapisze się w świadomości Twoich klientów.",
    icon: "/assets/seo/dla-restauracji-icons/logo.svg",
  },
  {
    title: "Prezentacja kancelarii",
    text: "Dopracowana wizualnie i estetyczna szata graficzna oraz treści potwierdzające Twój autorytet pomagają budować wiarygodność kancelarii w sieci.",
    icon: "/assets/seo/dla-restauracji-icons/menu.svg",
  },
  {
    title: "Stopka",
    text: "Jest źródłem danych teleadresowych firmy i wsparciem dla głównego menu. Choć niepozorna buduje zaufanie i wyróżnia najważniejsze elementy strony.",
    icon: "/assets/seo/dla-restauracji-icons/calendar.svg",
  },
  {
    title: "Przycisk akcji",
    text: "Zachęć swoich klientów do podjęcia konkretnych działań. Stosując odpowiednie zawołanie do akcji, skłonisz ich do nawiązania kontaktu z Twoją kancelarią.",
    icon: "/assets/seo/dla-restauracji-icons/action.svg",
  },
  {
    title: "Wyróżniki",
    text: "Pokaż, dlaczego Twoja kancelaria jest godna uwagi i zaufania. Wymień na stronie kilka atutów, które wyróżniają Cię spośród konkurencji.",
    icon: "/assets/seo/dla-restauracji-icons/spark.svg",
  },
  {
    title: "Specjalizacje",
    text: "Zamieszczenie na stronie internetowej kancelarii informacji o specjalizacjach jest bardzo ważne, aby trafić z ofertą do właściwej grupy odbiorców.",
    icon: "/assets/seo/dla-restauracji-icons/education.svg",
  },
  {
    title: "Zespół kancelarii",
    text: "Nie bądź anonimowy. Pokazując pracowników za pomocą zdjęć i opisów dajesz się poznać użytkowników internetu.",
    icon: "/assets/seo/dla-restauracji-icons/people.svg",
  },
  {
    title: "Formularz kontaktowy",
    text: "Maksymalnie ułatw swoim klientom łączność z kancelarią, wprowadzając na stronie dodatkowy kanał komunikacji – prosty formularz kontaktowy.",
    icon: "/assets/seo/dla-restauracji-icons/mail.svg",
  },
  {
    title: "Łatwa nawigacja",
    text: "Wygoda i oszczędność czasu to podstawa. Elementy strony ułożone w przemyślany sposób sprawią, że klienci będą intuicyjnie poruszać się po stronie.",
    icon: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg",
  },
];

export function LawyersClient({ reviews }: { reviews: Review[] }) {
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
              alt="Lawyers Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6">
              Skuteczne strony internetowe <br /> <span className="text-[#916AFF]">dla prawników</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-4">
              Zdobywaj klientów bez ograniczeń
            </p>
            <div className="h-1 w-24 bg-[#916AFF] mx-auto mb-12" />
            <div className="flex justify-center">
              <ReelCtaButton
                text="ZAPYTAJ O SZCZEGÓŁY"
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
              Strona internetowa dla prawnika – dlaczego jest ważna?
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              <p>
                Branża prawnicza rządzi się własnymi prawami, co związane jest ograniczeniami reklamowania swojej działalności. Strony www dla prawników o charakterze informacyjnym, jako jedna z niewielu form marketingu, którą można stosować w branży prawniczej, pomagają dotrzeć do nowych klientów oraz pozwalają wyróżnić się spośród konkurencji. Kancelaria radcy prawnego, adwokacka czy notarialna potrzebuje strony www, a więc skutecznego narzędzia podkreślającego prestiż i autorytet prawnika oraz pozwalającego zdobyć zaufanie klientów.
              </p>
              <p>
                Strony internetowe kancelarii prawnych wraz z zastosowaniem działań z zakresu pozycjonowania pozwolą trafić na wysokie pozycje w wyszukiwarce, docierając tym samym do szerokiego grona odbiorców, którzy coraz częściej przenoszą się do sieci w poszukiwaniu ofert pomocy prawnej.
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
                  Branża prawnicza jest nierozerwalnie związana z prestiżem, zaufaniem publicznym i skutecznością działań, dlatego strona internetowa kancelarii musi odzwierciedlać te cechy. Profesjonalny wygląd strony głównej i zakładek powinien wzbudzać szacunek, ale także poczucie bezpieczeństwa i pewność uzyskania wsparcia.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/specjializacja.webp" 
                    alt="Specjalizacja w branży prawniczej" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Specjalizacja w branży prawniczej</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Osoba szukająca konkretnej wiedzy na stronie nie może błądzić w gąszczu informacji. Prezentacja poszczególnych specjalizacji, w których obrębie działa kancelaria powinna być atrakcyjna wizualnie i przejrzysta. Dzięki temu każdy zainteresowany szybko dowie się, w jakim zakresie może uzyskać pomoc prawną.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/przygotowania.webp" 
                    alt="Przygotowania pod działania marketingowe" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Przygotowania pod działania marketingowe</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Strony internetowe dla prawników zaprojektowane i wykonane przez specjalistów zrealizują określone cele. Klienci dowiedzą się o istnieniu Twojej kancelarii, zyskasz ich zaufanie i nakłonisz do kontaktu. Dopracowana strona www jest niezawodnym narzędziem marketingowym dla branży prawniczej.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT'S INCLUDED SECTION --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-16">
              Co powinna zawierać profesjonalna strona internetowa dla prawnika?
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
                          alt="Dedicante Success" 
                          fill 
                          className="object-contain drop-shadow-[0_20px_50px_rgba(208,83,131,0.3)] scale-110"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 bg-neutral-900 flex items-center p-8 md:p-16 lg:p-24">
                      <div className="w-full">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D05383] mb-6 block font-bold">WIDOCZNOŚĆ MARKI</span>
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Dedicante</h3>
                        <div className="h-1 w-20 bg-[#D05383] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Efektywna strona www połączona z profesjonalnymi działaniami SEO pozwoliła na spektakularny wzrost pozycji w wynikach wyszukiwania.
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-neutral-500 text-sm uppercase tracking-widest">WYNIK:</span>
                              <div className="text-4xl md:text-5xl font-bold text-white leading-tight">Wzrost ilości fraz w top 10</div>
                            </div>
                          </div>
                          <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image 
                              src="/assets/seo/woocommerce/dedicante-chart.svg" 
                              alt="Success Chart" 
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
                          alt="Golden Gift Success" 
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
                        
                        <h3 className="text-5xl md:text-7xl font-display font-medium mb-8 tracking-tighter">Golden Gift</h3>
                        <div className="h-1 w-20 bg-[#C7A566] mb-12" />
                        
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                              Nowoczesna platforma firmowa zoptymalizowana pod kątem konwersji przełożyła się na rekordowe wyniki sprzedaży i zainteresowania ofertą.
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
                              alt="Conversion Chart" 
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
              Dowiedz się, jak kancelarie oceniają współpracę z Hermer.
            </p>
          </div>
          
          <ReviewsGrid reviews={reviews} />
        </section>

        {/* --- FAQ SECTION --- */}
        <Faq items={lawyersFaq} />

        {/* --- CTA SECTION --- */}
        <CTASection
          title="Zbuduj przewagę swojej kancelarii"
          subtitleLines={[
            "Zaprojektujemy dla Ciebie stronę internetową,",
            "która nie tylko świetnie wygląda,",
            "ale przede wszystkim zdobywa klientów.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
