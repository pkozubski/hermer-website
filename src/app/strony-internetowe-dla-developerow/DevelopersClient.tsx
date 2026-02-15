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

const developersFaq = [
  {
    id: 1,
    question: "Czy będę mógł promować moją stronę?",
    answer: "Oczywiście, sama strona internetowa dla dewelopera nie będzie tak skuteczna, jak w połączeniu z działaniami marketingowymi. Promowanie strony jest bardzo ważne, jeśli chcesz wykorzystać potencjał wyszukiwarki Google i dotrzeć do odpowiedniej grupy potencjalnych klientów i wyprzedzić konkurencję. W tym celu warto zrealizować takie zadania jak: Pozycjonowanie – zestaw działań dotyczących m.in. optymalizacji strony www pod kątem dopracowania jej struktury, zawartości i zaplecza technicznego. Strona internetowa dla dewelopera doceniana przez klientów zdobywa wyższe pozycje w wyszukiwarce. Google Ads – działania polegające na tworzeniu kampanii reklamowych w wyszukiwarce Google. Google Moja Firma – internetowa wizytówka w łatwy sposób wspierająca pozycjonowanie lokalne. Blog – pozwala wypracować pozycję eksperta i budować zaufanie wśród klientów.",
  },
  {
    id: 2,
    question: "Czy zajmujecie się też marketingiem i social media?",
    answer: "Tak, oprócz tworzenia stron dla deweloperów zajmujemy się opracowaniem strategii marketingowej i obsługą działań promocyjnych dla branży deweloperskiej, które pomagają zdobyć klientów. To czasochłonna praca, wymagająca doświadczenia i odpowiedniej wiedzy, więc najlepszym wyjściem będzie zlecić ją naszym specjalistom od marketingu. Pojawiając się w social mediach, możesz poszerzyć grono osób zainteresowanych Twoją ofertą. Dodając regularnie posty, o branżowej tematyce lub pokazujące inwestycję deweloperską, do których zostanie dołączona atrakcyjna grafika, masz szansę nawiązać pozytywne i trwałe relacje z klientami oraz dotrzeć do wielu osób ze swoją ofertą. Jeśli nie masz czasu na udzielanie się w mediach społecznościowych, zajmiemy się tym za Ciebie kompleksowo.",
  },
  {
    id: 3,
    question: "Jak długo będę czekał na stronę?",
    answer: "Kluczowym czynnikiem wpływającym na czas przygotowania strony internetowej dla dewelopera jest złożoność projektu. Im bardziej skomplikowana strona strona www inwestycji, czyli składająca się z wielu elementów, tym termin jej wykonania może się wydłużyć. Pamiętaj, że tworzenie strony internetowej to praca wielu specjalistów obejmująca kilka etapów m.in. przeprowadzanie analiz, zbieranie potrzebnych materiałów, wykonanie grafiki czy programowanie. Każdy projekt wymaga indywidualnego podejścia, dlatego zachęcamy do kontaktu i omówienia szczegółów projektu. Na podstawie zebranych danych i dokonanej analizy będziemy mogli oszacować czas potrzebny na stworzenie skutecznej i oryginalnej strony www dla dewelopera, która będzie zdobywać dla Ciebie klientów.",
  },
  {
    id: 4,
    question: "Czy będę mógł sam zarządzać treściami na stronie?",
    answer: "Tak, możesz samodzielnie edytować treści zamieszczone na stronie. Strony internetowe inwestycji deweloperskich przygotujemy z wykorzystaniem wygodnego i łatwego w obsłudze systemu zarządzania treścią CMS, dzięki któremu będziesz mógł na bieżąco wprowadzać istotne zmiany na swojej stronie. Co najważniejsze, zrobisz to bez znajomości zasad programowania. Otrzymasz od nas dostęp do panelu, który pozwoli Ci wykonać modyfikację zawartości strony we własnym zakresie i w szybki sposób. Interfejs jest bardzo intuicyjny, więc bez problemu dokonasz takich zmian w treści jak: aktualizacja danych teleadresowych lub dotyczących dostępności nieruchomości, dodawanie zdjęć do galerii, usuwanie bądź uzupełnianie treści wraz z formatowaniem.",
  },
  {
    id: 5,
    question: "Czy strona www będzie przyjazna użytkownikowi?",
    answer: "Strony internetowe dla deweloperów, które projektujemy, są atrakcyjne wizualnie, ale również w pełni funkcjonalne i przyjazne użytkownikom sieci. Wstępnym opracowaniem strony zajmuje się specjalista od użyteczności stron (UX), więc możesz mieć pewność, że potencjalni klienci bez problemu się na niej odnajdą. Przejrzysty układ poszczególnych modułów, możliwość intuicyjnego odnalezienia potrzebnych informacji, zastosowanie przycisków przenoszących do poszczególnych zakładek ułatwi poruszanie się po witrynie. Stosując sprawdzone metody i rozwiązania projektowe odnoszące się do architektury strony, szaty graficznej, treści czy kodowania, jesteśmy w stanie przygotować profesjonalną stronę dla branży deweloperskiej. Dopracowana strona zrealizuje Twoje cele biznesowe.",
  },
  {
    id: 6,
    question: "Ile kosztuje utrzymanie strony internetowej dewelopera?",
    answer: "Decydując się na wykonanie strony internetowej, warto dowiedzieć się ile kosztuje utrzymanie witryny. Jednym z wydatków jest opłata za wykonanie i wdrożenie projektu, ale należy pamiętać również o dodatkowych rocznych należnościach za domenę i hosting. To dwie usługi, bez których Twoja strona nie będzie funkcjonować. Nie musisz się martwić, roczne utrzymanie strony internetowej nie jest drogie, bo wynosi jedynie 230 zł netto. Na opłatę składa się utrzymanie domeny, a więc unikatowego adresu Twojej strony, który wpisujesz w wyszukiwarkę i który wynosi 100 zł netto. Hosting to nic innego jak ilość określonego miejsca na serwerze, jakie zajmują pliki strony. Koszt tej usługi to wydatek rzędu 130 zł netto. Przez pierwszy rok funkcjonowania strony utrzymanie domeny i hostingu jest darmowa.",
  },
  {
    id: 7,
    question: "Czy mam wpływ na wygląd strony internetowej?",
    answer: "Każda sugestia dotycząca projektu strony internetowej jest bardzo cenna, więc tak, chętnie zapoznamy się z Twoimi uwagami dotyczącymi jej wyglądu. Zawsze dążymy do tego, aby witryna była kompletna, spójna z wizerunkiem firmy i współgrała z wymaganiami klienta, dlatego jesteśmy ciekawi Twojego punktu widzenia. Oczywiście dbamy o to, aby strony internetowe dla deweloperów działały poprawnie i były przyjazne dla odwiedzających, w związku z tym każdy pomysł poddajemy dokładnej analizie i decydujemy, co można wykorzystać na stronie, a z jakich elementów lepiej zrezygnować. Strona internetowa, która zostanie zaprojektowana z uwzględnieniem Twoich oczekiwań, na pewno Ci się spodoba i będzie pełnić swoją funkcję niezawodnie.",
  },
  {
    id: 8,
    question: "Co, jeśli nie mam logo do wykorzystania na stronie internetowej?",
    answer: "Jeśli nie masz logo, przygotujemy je dla Ciebie. Rozpoznawalny znak graficzny stanowi niezbędny składnik identyfikacji wizualnej Twojej firmy i obowiązkowo musi znaleźć się na stronie internetowej w widocznym miejscu. Przygotowaniem logo zajmie się wykwalifikowany grafik, który zadba o jego estetykę, czytelność i zachowanie przesłania, które będzie natychmiast zrozumiałe dla klientów. Przemyślane logo dodaje prestiżu, pozwala wyróżnić się spośród innych firm deweloperskich, a także robi dobre wrażenie na klientach, zapadając w ich pamięci. Zlecając nam wykonanie logo, zyskasz ponadczasowy i oryginalny symbol, który pojawi się na stronie internetowej oraz podkreśli indywidualną tożsamość firmy.",
  },
  {
    id: 9,
    question: "Czy wykonujecie strony w innych językach?",
    answer: "Tak, możemy wykonać strony internetowe dla deweloperów w dowolnym języku. To znakomity sposób na dotarcie ze swoją ofertą do inwestorów, którzy nie posługują się językiem polskim. Wielojęzyczna strona www znacznie rozszerza się zakres odbiorców, więc bez przeszkód możesz działać globalnie na rynku nieruchomości. Firmy deweloperskie posiadające strony w więcej niż jednym języku mogą łatwiej prześcignąć konkurencję i zdobyć zaufanie klientów. Możliwość wygodnej zmiany wersji językowej w menu strony www to ogromne udogodnienie dla osób korzystających ze stron. Dzięki takiej funkcjonalności zatrzymasz zagranicznych klientów na stronie, zwiększając swoje szanse wystawionych na sprzedaż nieruchomości.",
  },
  {
    id: 10,
    question: "Nie mam treści, czy możecie wykonać je dla mnie?",
    answer: "Kompleksowa pomoc udzielana deweloperom obejmuje nie tylko stworzenie strony www, ale również przygotowanie treści, jeśli nimi nie dysponujesz. Zawartość strony dla dewelopera, do czego zaliczają się również teksty, musi charakteryzować wysoka jakość. Zadbamy o to, by przyciągnąć uwagę osób odwiedzających witrynę za pomocą angażujących treści marketingowych, pełniących funkcję sprzedażową. Za napisanie unikatowych treści, które pojawią się v poszczególnych modułach i zakładkach witryny, odpowiedzialny jest nasz copywriter. Zastosuje przejrzystą strukturę treści, zadba dobór odpowiednich słów oraz zamieszczenie istotnych informacji, jakich oczekują Twoi klienci. Zachęcające i ciekawe treści skierowane do konkretnej grupy odbiorców, wzbogacone przyciągającymi uwagę zdjęciami i grafiką, stanowią ważny element strony www dla dewelopera.",
  },
  {
    id: 11,
    question: "Czy projekt dla każdego dewelopera będzie unikalny?",
    answer: "Firma deweloperska powinna mieć unikalną stronę internetową, więc tak, projekt Twojej witryny będzie oryginalny i w sposób zdecydowany odznaczający się na tle konkurencji. Budując stronę od podstaw i przy wspólnym działaniu kilku specjalistów otrzymujesz gwarancję zobaczenia profesjonalnych efektów. Tworzymy strony www, które: są dopasowane do branży pod względem wizualnym i funkcjonalnym, wyróżniają się atrakcyjną szatą graficzną i unikatowymi treściami, działają płynnie, dzięki profesjonalnemu kodowaniu. Strony dla deweloperów są ich wizytówką wspomagającą budowanie wizerunku, a także narzędziem sprzedażowym. Zadbamy o ich niepowtarzalny wygląd i niezawodne funkcjonowanie.",
  },
  {
    id: 12,
    question: "Czy na stronie zostaną zastosowane rozwiązania dobre dla deweloperów?",
    answer: "Tak, naszym celem jest dostarczanie deweloperom stron internetowych, które zawierają rozwiązania pozwalające aktywnie rozwijać im swoją działalność. Profesjonalna strona internetowa dla dewelopera, a więc użyteczna dla użytkowników, zaprojektowana jest przez nas z uwzględnieniem takich elementów jak: designu strony zachęcającego klientów do pozostania na stronie i zapoznania się z ofertą, wprowadzenie odpowiednich zakładek oraz modułów zawierających wyczerpujące dane i dokładne zdjęcia na temat dostępnych inwestycji, wartościowych treści o czytelnym przekazie i przedstawiające korzyści wynikające ze skorzystania z oferty, responsywności, dzięki której klienci będą mogli wygodnie przeglądać oferty na urządzeniach mobilnych.",
  },
];

const includedItems = [
  {
    title: "Logo",
    text: "Znak rozpoznawczy i jeden z elementów budowania wizerunku firmy deweloperskiej. Charakterystyczne logo zapadnie w pamięć klientów.",
    icon: "/assets/seo/dla-restauracji-icons/logo.svg",
  },
  {
    title: "Prezentacja inwestycji",
    text: "Dopracowana wizualnie i estetyczna szata graficzna oraz treści potwierdzające Twój profesjonalizm pomagają sprzedawać nieruchomości.",
    icon: "/assets/seo/dla-restauracji-icons/menu.svg",
  },
  {
    title: "Stopka",
    text: "Jest źródłem danych teleadresowych firmy i wsparciem dla głównego menu. Choć niepozorna buduje zaufanie i wyróżnia najważniejsze elementy strony.",
    icon: "/assets/seo/dla-restauracji-icons/calendar.svg",
  },
  {
    title: "Przycisk akcji",
    text: "Zachęć swoich klientów do podjęcia konkretnych działań. Stosując odpowiednie CTA, skłonisz ich do nawiązania kontaktu lub rezerwacji.",
    icon: "/assets/seo/dla-restauracji-icons/action.svg",
  },
  {
    title: "Wyróżniki",
    text: "Pokaż, dlaczego Twoje inwestycje są godne uwagi. Wymień na stronie atuty, które wyróżniają Cię spośród innych deweloperów.",
    icon: "/assets/seo/dla-restauracji-icons/spark.svg",
  },
  {
    title: "Oferta lokali",
    text: "Zamieszczenie na stronie informacji o dostępnych lokalach i rzutach jest kluczowe dla procesu sprzedaży nieruchomości.",
    icon: "/assets/seo/dla-restauracji-icons/education.svg",
  },
  {
    title: "Zespół dewelopera",
    text: "Nie bądź anonimowy. Pokazując zespół dajesz się poznać potencjalnym nabywcom i budujesz relację opartą na zaufaniu.",
    icon: "/assets/seo/dla-restauracji-icons/people.svg",
  },
  {
    title: "Formularz kontaktowy",
    text: "Maksymalnie ułatw klientom łączność z biurem sprzedaży, wprowadzając na stronie prosty formularz kontaktowy.",
    icon: "/assets/seo/dla-restauracji-icons/mail.svg",
  },
  {
    title: "Łatwa nawigacja",
    text: "Wygoda i oszczędność czasu to podstawa. Elementy strony ułożone w przemyślany sposób sprawią, że klienci łatwo znajdą wymarzone M.",
    icon: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg",
  },
];

export function DevelopersClient({ reviews }: { reviews: Review[] }) {
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
              alt="Developers Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6">
              Skuteczne strony internetowe <br /> <span className="text-[#916AFF]">dla deweloperów</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-4">
               Prezentuj swoje oferty i przyciągaj nowych inwestorów
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
              Najlepsza strona www dla dewelopera
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              <p>
                Internet jest najważniejszym źródłem informacji dla klientów, a wykreowany w przemyślany sposób wizerunek firmy ma kluczowy wpływ na zdobycie ich zainteresowania. Tylko najlepsza strona internetowa przystosowana do sprzedaży inwestycji deweloperskich pozwoli trafić do odpowiednich odbiorców. Nasze nowoczesne strony internetowe dla deweloperów posiadają najważniejsze udogodnienia dla osób szukających informacji dotyczących nieruchomości.
              </p>
              <p>
                Strony dla deweloperów stworzone pod specyfikę branży i zgodnie ze sztuką projektową są skuteczne, ponieważ realizują cele biznesowe, czyli: pozwalają dotrzeć do wielu klientów poprzez Internet, są narzędziem służącym do prezentacji i sprzedaży nieruchomości, co prowadzi do zwiększenia zysków firmy. Zdając się na nas, otrzymasz indywidualne wsparcie marketingowe i stronę www, która sprzedaje.
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
                    alt="Unikalny design" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Unikalny design</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Strony internetowe dla deweloperów, aby spełniały założone cele, muszą się wyróżniać na tle witryn konkurencyjnych. Warstwa graficzna i funkcjonalna, o które zadbają specjalista od funkcjonalności strony oraz doświadczony grafik, sprawią, że strona przyciągnie uwagę osób szukających ofert nieruchomości w sieci.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/specjializacja.webp" 
                    alt="Strona dla branży deweloperskiej" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Strona dla branży deweloperskiej</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Dopasujemy projekt strony do Twojej branży. Uwzględnimy wszystkie elementy, które są niezbędne do odpowiedniego zaprezentowania oferty oraz wygodnego poruszania się po witrynie. Wysokiej jakości zdjęcia inwestycji deweloperskich, intuicyjna nawigacja, angażujące i zachęcające opisy będą wspierać sprzedaż nieruchomości.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/przygotowania.webp" 
                    alt="Gotowość pod działania marketingowe" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Gotowość pod działania marketingowe</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Dopracowana strona www dla dewelopera jest niezbędna do prowadzenia skutecznych działań marketingowych. Nowych klientów zainteresowanych Twoją ofertą nieruchomości zyskasz dzięki witrynie z atrakcyjną grafiką, dobrymi treściami i profesjonalnie wykonanym kodowaniem Twoja strona zyska wysokie pozycje w Google.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT'S INCLUDED SECTION --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-16">
              Co powinna zawierać profesjonalna strona dla dewelopera?
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
                              <div className="text-4xl md:text-5xl font-bold text-white leading-tight">Wzrost ilości fraz v top 10</div>
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
              Dowiedz się, jak firmy deweloperskie oceniają współpracę z Hermer.
            </p>
          </div>
          
          <ReviewsGrid reviews={reviews} />
        </section>

        {/* --- FAQ SECTION --- */}
        <Faq items={developersFaq} />

        {/* --- CTA SECTION --- */}
        <CTASection
          title="Zbuduj przewagę swojej firmy"
          subtitleLines={[
            "Zaprojektujemy dla Ciebie stronę internetową,",
            "która nie tylko świetnie wygląda,",
            "ale przede wszystkim sprzedaje nieruchomości.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
