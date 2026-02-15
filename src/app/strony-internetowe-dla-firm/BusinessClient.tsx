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

const businessFaq = [
  {
    id: 1,
    question: "W jaki sposób mogę się promować?",
    answer: "Skuteczność działań promocyjnych prowadzonych dla strony internetowej można określić po wynikach wyszukiwania Google. Jeśli Twoja strona ma być widoczna dla osób przeglądających zasoby internetu, należy zadbać o prowadzenie systematycznych działań marketingowych. Mamy wieloletnie doświadczenie w marketingu i zawalczymy o dobrą pozycję strony w wyszukiwarce, stosując: pozycjonowanie, Google Ads, Social media, blog oraz wizytówkę Google.",
  },
  {
    id: 2,
    question: "Po co mi strona internetowa?",
    answer: "Szukanie usług i produktów w internecie jest już rutyną dla większości osób, więc warto wykorzystać to zjawisko i przekuć je na własną korzyść zamawiając skuteczną stronę firmową. Wychodząc naprzeciw oczekiwaniom klientów, udostępnij im witrynę, która szybko się wczytuje, ma interesującą grafikę, ciekawe i konkretnie treści oraz intuicyjną nawigację. Profesjonalna witryna to bardzo ważne narzędzie promocji biznesu.",
  },
  {
    id: 3,
    question: "Jak długo będę czekał na stronę internetową?",
    answer: "Podanie dokładnej informacji, jak długo wykonuje się stronę internetową, jest dosyć problematyczne. Każdy projekt jest inny i wymaga indywidualnego podejścia. Tworzenie stron www stanowi kilkuetapowy proces, którego czas realizacji uzależniony jest od stopnia skomplikowania projektu. Prosta strona z podstawowymi modułami zostanie wykonana szybciej niż witryna złożona z wielu podstron i wymagająca nietypowych funkcjonalności.",
  },
  {
    id: 4,
    question: "Czy będę mógł sam zarządzać treściami na stronie?",
    answer: "Tak, możesz sam dowolnie edytować i modyfikować treści na swojej stronie internetowej. Stronę www przygotujemy, stosując funkcjonalny system zarządzania treścią (CMS). Obejmuje on panel, którego funkcje są łatwe do przyswojenia i nie trzeba znać się na programowaniu, aby wprowadzać zmiany w zasobach tekstowych. Będziesz mógł publikować, poprawiać czy usuwać teksty np. w ramach aktualności, opisów produktów czy oferty.",
  },
  {
    id: 5,
    question: "Czy sam będę mógł dodawać zdjęcia do galerii?",
    answer: "Tak, na swojej stronie www, oprócz treści, możesz zarządzać również zdjęciami. Dodawanie czy usuwanie zdjęć z galerii przeprowadzisz za pośrednictwem systemu zarządzania treścią (CMS). Ze względu na łatwość obsługi panelu, szybko wprowadzisz zmiany w galerii swoich realizacji i osiągnięć. Możliwość samodzielnej obsługi galerii daje Ci korzyść w postaci niezależności i oszczędności czasu.",
  },
  {
    id: 6,
    question: "Dlaczego blog jest ważny?",
    answer: "Blog jest jednym z elementów strony internetowej, gdzie można zamieścić dłuższe treści wspomagające promocję usług czy produktów. Dzięki wpisom klienci lepiej poznają Twoją firmę i zyskujesz status eksperta w swojej dziedzinie. Blog regularnie uzupełniany o wartościowe treści sprawia, że strona www jest lepiej pozycjonowana i zyskuje wyższe pozycje w wyszukiwarce.",
  },
  {
    id: 7,
    question: "Nie mam logo, czy możecie mi pomóc?",
    answer: "Tak, nasz grafik przygotuje unikatowe i rozpoznawalne logo na Twoją stronę firmową. Zadbamy o to, aby logo było spójne ze stroną www oraz nawiązywało do branży, w której działasz. Symbol Twojej firmy zamieszczony w widocznym miejscu na stronie przyciągnie wzrok klientów i zapisze się w ich świadomości dzięki czytelności i pozytywnym skojarzeniom.",
  },
  {
    id: 8,
    question: "Czy mogę połączyć stronę z social media?",
    answer: "Tak, strona firmowa połączona z serwisami społecznościowymi pozwala zwiększyć zasięg pozyskiwania nowych klientów. Dodając posty z ciekawą grafiką, promujesz swoje produkty i usługi, a odpisując na komentarze i wiadomości zyskujesz możliwość nawiązywania trwałych relacji. Uwzględniamy przyciski ułatwiające klientom dostanie się na firmowy profil Facebooka czy Instagrama.",
  },
];

const includedItems = [
  {
    title: "Logo",
    text: "Znak rozpoznawczy i jeden z elementów budowania wizerunku firmy. Charakterystyczne logo zapisze się w świadomości Twoich klientów.",
    icon: "/assets/seo/dla-restauracji-icons/logo.svg",
  },
  {
    title: "Prezentacja firmy",
    text: "Dopracowana wizualnie i estetyczna szata graficzna oraz treści potwierdzające Twój autorytet pomagają budować wiarygodność firmy w sieci.",
    icon: "/assets/seo/dla-restauracji-icons/menu.svg",
  },
  {
    title: "Stopka",
    text: "Jest źródłem danych teleadresowych firmy i wsparciem dla głównego menu. Choć niepozorna buduje zaufanie i wyróżnia najważniejsze elementy strony.",
    icon: "/assets/seo/dla-restauracji-icons/calendar.svg",
  },
  {
    title: "Przycisk akcji",
    text: "Zachęć swoich klientów do podjęcia konkretnych działań. Stosując odpowiednie zawołanie do akcji, skłonisz ich do nawiązania kontaktu z Twoją firmą.",
    icon: "/assets/seo/dla-restauracji-icons/action.svg",
  },
  {
    title: "Wyróżniki",
    text: "Pokaż, dlaczego Twoja firma jest godna uwagi i zaufania. Wymień na stronie kilka atutów, które wyróżniają Cię spośród konkurencji.",
    icon: "/assets/seo/dla-restauracji-icons/spark.svg",
  },
  {
    title: "Specjalizacje",
    text: "Zamieszczenie na stronie informacji o specjalizacjach jest bardzo ważne, aby trafić z ofertą do właściwej grupy odbiorców.",
    icon: "/assets/seo/dla-restauracji-icons/education.svg",
  },
  {
    title: "Zespół firmy",
    text: "Nie bądź anonimowy. Pokazując pracowników za pomocą zdjęć i opisów dajesz się poznać użytkowników internetu.",
    icon: "/assets/seo/dla-restauracji-icons/people.svg",
  },
  {
    title: "Formularz kontaktowy",
    text: "Maksymalnie ułatw swoim klientom łączność z firmą, wprowadzając na stronie dodatkowy kanał komunikacji – prosty formularz kontaktowy.",
    icon: "/assets/seo/dla-restauracji-icons/mail.svg",
  },
  {
    title: "Łatwa nawigacja",
    text: "Wygoda i oszczędność czasu to podstawa. Elementy strony ułożone w przemyślany sposób sprawią, że klienci będą intuicyjnie poruszać się po stronie.",
    icon: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg",
  },
];

export function BusinessClient({ reviews }: { reviews: Review[] }) {
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
              alt="Business Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6">
              Strony internetowe <br /> <span className="text-[#916AFF]">dla firm</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-4">
              Firmowa strona www zwiększająca sprzedaż
            </p>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              Pokaż swoją ofertę i zyskuj nowych klientów
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
              Dlaczego strona internetowa dla firmy jest ważna?
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center">
              <p>
                Działalność stacjonarna firmy daje duże możliwości zarobku, ale jednocześnie wiąże się z wieloma ograniczeniami dotyczącymi np. lokalizacji czy godzin otwarcia punktu. Posiadając własną stronę internetową, możesz rozwijać firmę zapominając o tych niedogodnościach. Strony internetowe pozwalają rozszerzyć zasięg działania na skalę globalną bez zamykania się w określonych ramach czasowych.
              </p>
              <p>
                Warto zainwestować w stworzenie strony internetowej, ponieważ dzięki niej wypromujesz swoje usługi w sieci, trafiając do konkretnej grupy odbiorców. Innymi istotnymi zaletami strony firmowej są: budowanie zaufania wśród klientów, możliwość szybkiego nawiązania kontaktu, usprawnienie pracy przedsiębiorstwa czy poznanie preferencji osób, do których chcesz trafić z ofertą. Poza tym nie ogranicza Cię czas, a więc możesz zbierać zamówienia przez całą dobę.
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
                  Jeśli prowadzisz firmę, która podąża z duchem czasu, pokaż to za pomocą nowoczesnej witryny o efektownej grafice. Korzystając z doświadczenia grafika i specjalisty UX zyskasz funkcjonalną stronę w najlepszym guście. Osoby wchodzące na profesjonalną stronę internetową nabiorą przekonania, że Twoja firma świadczy wysokiej jakości usługi.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/specjializacja.webp" 
                    alt="Idealne dla małych firm" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Idealne dla małych firm</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Nawet niewielka firma może onieśmielić konkurencję dynamicznym rozwojem, w czym pomoże elegancka strona www. Zadbaj o swój wizerunek i zasięgi wśród klientów, abyś mógł skutecznie wyprzedzić konkurencję. Dzięki własnej dopracowanej stronie firmowej zaistniejesz na rynku e-commerce i trafisz do szerokiego grona odbiorców.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30">
              <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                <div className="relative w-full h-full">
                  <Image 
                    src="/assets/seo/woocommerce/przygotowania.webp" 
                    alt="Przygotowania pod marketing" 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 font-display">Przygotowania pod marketing</h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Strona firmy to Twoja wizytówka widniejąca w sieci. Zbudujemy ją pod kątem działań marketingowych, więc stanie się narzędziem do efektywnego pozyskiwania klientów. Sprawimy, że witryna będzie dopasowana do Twojej działalności pod każdym względem. Dopracujemy jej wygląd i zaplecze techniczne, aby osiągała wysokie pozycje w Google.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT'S INCLUDED SECTION --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-16">
              Co powinna zawierać profesjonalna strona internetowa dla firmy?
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
              Dowiedz się, jak firmy oceniają współpracę z Hermer.
            </p>
          </div>
          
          <ReviewsGrid reviews={reviews} />
        </section>

        {/* --- FAQ SECTION --- */}
        <Faq items={businessFaq} />

        {/* --- CTA SECTION --- */}
        <CTASection
          title="Zbuduj przewagę swojej firmy"
          subtitleLines={[
            "Zaprojektujemy dla Ciebie stronę firmową,",
            "która nie tylko świetnie wygląda,",
            "ale przede wszystkim zdobywa klientów.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
