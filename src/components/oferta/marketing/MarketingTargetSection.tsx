"use client";

import React from "react";
import { Briefcase, ShoppingBag, Rocket } from "lucide-react";

const targets = [
    {
        icon: Briefcase,
        title: "Firmy B2B i B2C",
        desc: "Budujemy wizerunek eksperta i generujemy wartościowe leady sprzedażowe."
    },
    {
        icon: ShoppingBag,
        title: "E-commerce",
        desc: "Zwiększamy sprzedaż, optymalizujemy koszty konwersji i budujemy lojalność klientów."
    },
    {
        icon: Rocket,
        title: "Startupy i Marki Osobiste",
        desc: "Pomagamy szybko wejść na rynek, zbudować zasięgi i zdobyć pierwszych klientów."
    }
];

export const MarketingTargetSection: React.FC = () => {
    return (
        <section className="py-24 bg-transparent border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Dla kogo jest <span className="text-[#916AFF]">marketing?</span></h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Nasze rozwiązania dopasowujemy do specyfiki Twojego biznesu, niezależnie od branży.
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
