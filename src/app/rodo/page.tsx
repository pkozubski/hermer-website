"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

export default function RodoPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-x-clip">
      <Header allowVisibility={true} />

      <main className="relative z-10 pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Header Section */}
          <div className="mb-16 md:mb-24 text-left">
            <SplitRevealTitle
              line1="Informacja"
              line2="RODO"
              className="text-5xl md:text-8xl text-white tracking-tighter mb-8"
            />
            <p className="text-neutral-400 text-lg uppercase tracking-wide leading-relaxed font-medium">
              Informacja o przetwarzaniu Twoich danych osobowych
            </p>
          </div>

          {/* Content Section */}
          <div className="prose prose-invert prose-neutral max-w-none space-y-12 text-neutral-300">
            <section>
              <p className="text-xl">
                Niniejszym informujemy Cię, że przetwarzamy Twoje dane osobowe.
                Szczegóły dotyczące tego przetwarzania znajdziesz poniżej:
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Administrator danych osobowych
              </h2>
              <p>
                My, Firma usługowa Hermer Jacek Chudyński z siedzibą w Wałczu pod
                adresem ul. Bydgoska 50 jesteśmy administratorem Twoich danych
                osobowych.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Cele i podstawy przetwarzania
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  w celu kontaktu telefonicznego bądź mailowego na podstawie
                  Twojej zgody (podstawa z art. 6 ust. 1 lit. a) RODO);
                </li>
                <li>
                  w celu zawarcia umowy o świadczenie naszych usług na podstawie
                  Twojego zainteresowania naszą ofertą (podstawa z art. 6 ust. 1
                  lit. b) RODO);
                </li>
                <li>
                  w celu wykonania i na podstawie zawartej przez Ciebie z nami
                  umowy o świadczenie naszych usług (podstawa z art. 6 ust. 1 lit.
                  b) RODO);
                </li>
                <li>
                  w celach analitycznych (np. optymalizacji naszych produktów na
                  podstawie Twoich uwag na ich temat; optymalizacji procesów
                  obsługi na podstawie obsługi procesów sprzedaży i
                  posprzedażowej, w tym reklamacji), co jest naszym prawnie
                  uzasadnionym interesem (podstawa z art. 6 ust. 1 lit. f) RODO);
                </li>
                <li>
                  w celach archiwalnych (dowodowych) dla zabezpieczenia
                  informacji na wypadek prawnej potrzeby wykazania faktów, co
                  jest naszym prawnie uzasadnionym interesem (podstawa z art. 6
                  ust. 1 lit. f) RODO);
                </li>
                <li>
                  w celu ewentualnego ustalenia, dochodzenia lub obrony przed
                  roszczeniami, co jest naszym prawnie uzasadnionym interesem
                  (podstawa z art. 6 ust. 1 lit. f) RODO);
                </li>
                <li>
                  w celu badania satysfakcji klientów i określania jakości naszej
                  obsługi, co jest naszym prawnie uzasadnionym interesem
                  (podstawa z art. 6 ust. 1 lit. f) RODO);
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Kategorie Twoich danych, które przetwarzamy
              </h2>
              <p>Będziemy przetwarzać następujące kategorie Twoich danych:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Podstawowe dane identyfikacyjne</li>
                <li>Dane identyfikacyjne przyznane przez organy publiczne</li>
                <li>Elektroniczne dane identyfikacyjne</li>
                <li>Dane dotyczące Twojej nieruchomości</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Odbiorcy danych
              </h2>
              <p>
                Twoje dane osobowe możemy udostępniać następującym kategoriom
                podmiotów:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Podwykonawcom, czyli podmiotom, z których korzystamy przy ich
                  przetwarzaniu (t.j. m. inn. firma świadcząca usługi video,
                  tłumaczenia, firma księgowa, kancelaria prawna);
                </li>
                <li>
                  Partnerom handlowym będącym członkami programu
                  lojalnościowego, za Twoją odrębną zgodą;
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Przekazywanie danych do państw trzecich i organizacji
                międzynarodowych
              </h2>
              <p>Nie przekazujemy Twoich danych poza teren Polski.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Okres przechowywania danych
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Twoje dane pozyskane w celu zawarcia umowy o świadczenie
                  naszych usług przechowujemy przez okres negocjowania umowy
                  oraz do końca roku kalendarzowego następującego po roku, w
                  którym ostatni raz się z nami kontaktowałeś w sprawie jej
                  zawarcia;
                </li>
                <li>
                  Twoje dane pozyskane w związku z zawarciem umowy o świadczenie
                  naszych usług przetwarzamy do końca okresu przedawnienia
                  potencjalnych roszczeń z umowy;
                </li>
                <li>
                  Twoje dane kontaktowe przechowujemy dla potrzeb marketingu
                  bezpośredniego naszych produktów i usług do czasu, aż
                  zgłosisz sprzeciw względem ich przetwarzania w tym celu,
                  cofniesz zgodę, jeśli przetwarzaliśmy je na podstawie zgody
                  lub gdy sami stwierdzimy, że się zdezaktualizowały.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Twoje prawa
              </h2>
              <p>Przysługuje Ci:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prawo dostępu do danych i do kopii danych;</li>
                <li>Prawo sprostowania i uzupełniania Twoich danych;</li>
                <li>
                  Prawo do usunięcia Twoich danych (jeśli Twoim zdaniem nie ma
                  podstaw do tego, abyśmy przetwarzali Twoje dane, możesz
                  żądać, abyśmy je usunęli);
                </li>
                <li>
                  Prawo do ograniczenia przetwarzania danych (możesz żądać,
                  abyśmy ograniczyli przetwarzanie Twoich danych wyłącznie do
                  ich przechowywania lub wykonywania uzgodnionych z Tobą
                  działań, jeśli Twoim zdaniem mamy nieprawidłowe dane na Twój
                  temat, lub przetwarzamy je bezpodstawnie);
                </li>
                <li>
                  Prawo do przenoszenia danych (masz prawo otrzymać od nas w
                  ustrukturyzowanym, powszechnie używanym formacie nadającym
                  się do odczytu maszynowego np. format .csv dane osobowe
                  Ciebie dotyczące, które nam dostarczyłeś na podstawie umowy
                  lub Twojej zgody);
                </li>
                <li>
                  Prawo do sprzeciwu względem przetwarzania:
                  <ul className="list-circle pl-5 mt-2 space-y-1">
                    <li>
                      Sprzeciw marketingowy – masz prawo sprzeciwu wobec
                      przetwarzania Twoich danych w celu prowadzenia marketingu
                      bezpośredniego.
                    </li>
                    <li>
                      Sprzeciw z uwagi na szczególną sytuację – masz także
                      prawo sprzeciwu wobec przetwarzania Twoich danych
                      osobowych na podstawie prawnie uzasadnionego interesu w
                      celach innych niż marketing bezpośredni.
                    </li>
                  </ul>
                </li>
                <li>
                  Prawo do wniesienia skargi do organu nadzorczego (Prezesa
                  Urzędu Ochrony Danych Osobowych).
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Prawo do cofnięcia zgody na przetwarzanie danych osobowych
              </h2>
              <p>
                W każdej chwili masz prawo cofnąć zgodę na przetwarzanie tych
                danych osobowych, które przetwarzamy na podstawie Twojej zgody.
                Cofnięcie zgody nie będzie wpływać na zgodność z prawem
                przetwarzania, którego dokonano na podstawie Twojej zgody przed
                jej wycofaniem.
              </p>
              <p>
                W celu wykonania swoich praw skieruj żądanie na adres mailowy:{" "}
                <a href="mailto:bok@e-hermer.pl" className="text-white font-bold hover:text-[#916AFF] transition-colors">bok@e-hermer.pl</a>, zadzwoń pod nr{" "}
                <a href="tel:+48531004661" className="text-white font-bold hover:text-[#916AFF] transition-colors">531 004 661</a> lub przyjdź do nas osobiście.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                Informacja o dobrowolności podania danych
              </h2>
              <p>
                Podanie przez Ciebie danych jest warunkiem zawarcia umowy o
                świadczenie naszych usług i realizacji umowy. Jeśli nie podasz
                swoich danych możemy odmówić zawarcia umowy.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
