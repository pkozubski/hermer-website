"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const WebsiteOfferFaq: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 relative border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Częste"
                        line2="Pytania"
                        className="text-slate-900! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Tutaj znajdziesz odpowiedzi na najczęściej",
                            "zadawane pytania dotyczące współpracy."
                        ]}
                        className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="space-y-4 max-w-3xl mx-auto">
                    <details className="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 group-hover:text-[#916AFF] transition-colors">
                            Czy po wdrożeniu będę mógł sam edytować stronę?
                            <ChevronDown
                                className="transition-transform duration-300 group-open:rotate-180"
                                strokeWidth={2}
                            />
                        </summary>
                        <p className="mt-4 text-slate-500 leading-relaxed text-sm">
                            Tak, większość naszych realizacji opieramy o system CMS (np.
                            WordPress), który pozwala na samodzielną edycję tekstów i zdjęć bez
                            znajomości kodowania. Po zakończeniu projektu przeprowadzamy krótkie
                            szkolenie.
                        </p>
                    </details>

                    <details className="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 group-hover:text-[#916AFF] transition-colors">
                            Co muszę przygotować przed rozpoczęciem współpracy?
                            <ChevronDown
                                className="transition-transform duration-300 group-open:rotate-180"
                                strokeWidth={2}
                            />
                        </summary>
                        <p className="mt-4 text-slate-500 leading-relaxed text-sm">
                            Na początek wystarczy pomysł. Jeśli masz już logo, teksty czy
                            zdjęcia – świetnie. Jeśli nie – pomożemy Ci je stworzyć lub
                            dobierzemy materiały z banków zdjęć.
                        </p>
                    </details>

                    <details className="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 group-hover:text-[#916AFF] transition-colors">
                            Czy strona będzie bezpieczna?
                            <ChevronDown
                                className="transition-transform duration-300 group-open:rotate-180"
                                strokeWidth={2}
                            />
                        </summary>
                        <p className="mt-4 text-slate-500 leading-relaxed text-sm">
                            Tak. Każda nasza realizacja posiada certyfikat SSL (zielona kłódka),
                            zabezpieczenia antyspamowe w formularzach oraz jest zoptymalizowana
                            pod kątem bezpieczeństwa serwera.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};
