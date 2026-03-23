import React from "react";
import { CheckCircle } from "lucide-react";

/**
 * Shared section with E-Commerce and Marketing/SEO showcase blocks.
 * Extracted from `dla-kogo/page.tsx` and `obszar-dzialania/page.tsx`
 * where it was duplicated verbatim (~110 lines each).
 */
export function EcommerceMarketingSection() {
  return (
    <section className="py-24 container mx-auto px-4 md:px-8">
      {/* E-Commerce Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
            A może planujesz sprzedawać w internecie swoje{" "}
            <span className="text-[#916AFF]">produkty?</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Zostań właścicielem funkcjonalnego{" "}
            <strong className="text-white">sklepu internetowego</strong>, w
            którym robienie zakupów będzie szybkie, łatwe i przyjemne.
            Zadbamy o atrakcyjną prezentację produktów i niezbędne
            funkcjonalności.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="text-[#916AFF] w-5 h-5 shrink-0" />
              Integracje z płatnościami i kurierami
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="text-[#916AFF] w-5 h-5 shrink-0" />
              Nowoczesny design RWD
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="text-[#916AFF] w-5 h-5 shrink-0" />
              Optymalizacja pod sprzedaż
            </li>
          </ul>
        </div>
        <div className="order-1 lg:order-2 bg-white/5 border border-white/10 rounded-3xl p-8 aspect-video flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#916AFF]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#916AFF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">E-Commerce</h3>
          </div>
        </div>
      </div>

      {/* Marketing & SEO Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 aspect-video flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#52D8EA]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#52D8EA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
                <path d="M12 14v9" />
                <path d="M5 21v-7" />
                <path d="M19 21v-7" />
                <path d="M12 14H5" />
                <path d="M19 14h-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Marketing & SEO</h3>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
            Marketing i <span className="text-[#52D8EA]">Widoczność</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Widoczność strony lub sklepu będzie jeszcze lepsza, jeśli
            pozwolisz nam uruchomić{" "}
            <strong className="text-white">działania marketingowe</strong>.
            Dysponujemy potrzebną wiedzą, aby Twoja witryna pojawiła się
            wysoko w wyszukiwarce Google, dzięki czemu dotrzesz do wielu
            klientów z Polski i Europy.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="text-[#52D8EA] w-5 h-5 shrink-0" />
              Pozycjonowanie stron (SEO)
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="text-[#52D8EA] w-5 h-5 shrink-0" />
              Kampanie Google Ads
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="text-[#52D8EA] w-5 h-5 shrink-0" />
              Analityka i optymalizacja
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
