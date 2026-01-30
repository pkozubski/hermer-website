"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const EcommerceFaq: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                {/* Split Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Pytania o"
                        line2="E-commerce"
                        className="text-white! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Odpowiedzi na najczęściej zadawane pytania,",
                            "które pomogą Ci podjąć decyzję o rozpoczęciu sprzedaży.",
                        ]}
                        className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="space-y-4 max-w-3xl mx-auto">
                    <details className="group bg-white/5 rounded-2xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between gap-4 font-semibold text-white group-hover:text-[#916AFF] transition-colors">
                            Jakie formy płatności mogę zaoferować klientom?
                            <ChevronDown
                                className="transition-transform duration-300 group-open:rotate-180"
                                strokeWidth={2}
                            />
                        </summary>
                        <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                            Integrujemy wszystkie popularne bramki: PayU, Przelewy24, Tpay,
                            PayPal, Stripe oraz płatności BLIK i Apple Pay. Twój klient
                            zapłaci tak, jak mu wygodnie.
                        </p>
                    </details>

                    <details className="group bg-white/5 rounded-2xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between gap-4 font-semibold text-white group-hover:text-[#916AFF] transition-colors">
                            Czy sklep jest zintegrowany z firmami kurierskimi?
                            <ChevronDown
                                className="transition-transform duration-300 group-open:rotate-180"
                                strokeWidth={2}
                            />
                        </summary>
                        <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                            Tak. Konfigurujemy moduły InPost (Paczkomaty), DPD, DHL i inne.
                            Możliwa jest automatyzacja generowania listów przewozowych
                            bezpośrednio z panelu sklepu.
                        </p>
                    </details>

                    <details className="group bg-white/5 rounded-2xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between gap-4 font-semibold text-white group-hover:text-[#916AFF] transition-colors">
                            Czy poradzę sobie z dodawaniem produktów?
                            <ChevronDown
                                className="transition-transform duration-300 group-open:rotate-180"
                                strokeWidth={2}
                            />
                        </summary>
                        <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                            Oczywiście. Panel administracyjny (np. WooCommerce) jest bardzo
                            intuicyjny. Dodawanie produktów przypomina wypełnianie prostego
                            formularza. Dodatkowo zapewniamy pełne szkolenie wideo.
                        </p>
                    </details>

                    <details className="group bg-white/5 rounded-2xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between gap-4 font-semibold text-white group-hover:text-[#916AFF] transition-colors">
                            Czy sklep będzie widoczny w Google?
                            <ChevronDown
                                className="transition-transform duration-300 group-open:rotate-180"
                                strokeWidth={2}
                            />
                        </summary>
                        <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                            Tak, nasze sklepy są budowane zgodnie z wytycznymi Google (SEO
                            Friendly). Dbamy o strukturę nagłówków, mapy strony, szybkość
                            ładowania oraz dane strukturalne dla produktów (Schema.org).
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};
