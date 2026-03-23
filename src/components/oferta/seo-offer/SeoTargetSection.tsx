"use client";

import React from "react";
import { Building2, ShoppingCart, Rocket } from "lucide-react";

const targets = [
    {
        icon: Building2,
        title: "Firmy każdej wielkości",
        desc: "Od lokalnych usług po korporacje – pomagamy dominować na wybrane frazy w Twoim regionie lub kraju."
    },
    {
        icon: ShoppingCart,
        title: "E-commerce",
        desc: "Optymalizujemy sklepy internetowe, kategorie i produkty, aby klienci trafiali prosto do koszyka."
    },
    {
        icon: Rocket,
        title: "Startupy i Marki Osobiste",
        desc: "Budujemy autorytet domeny od zera, zapewniając widoczność nowym projektom na rynku."
    }
];

export const SeoTargetSection: React.FC = () => {
    return (
        <section className="py-24 bg-transparent border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Dla kogo jest <span className="text-[#916AFF]">pozycjonowanie?</span></h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        SEO to uniwersalne narzędzie wzrostu. Sprawdź, jak możemy pomóc Twojemu biznesowi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {targets.map((item, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 bg-[#916AFF]/20 rounded-xl flex items-center justify-center text-[#916AFF] mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
