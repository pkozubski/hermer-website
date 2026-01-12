"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PillImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
    <span className={`inline-flex items-center align-middle mx-1.5 md:mx-2 align-baseline ${className}`}>
        <span className="relative h-[1.1em] w-[2.2em] md:h-[1.1em] md:w-[2.4em] rounded-full overflow-hidden border border-slate-200/50 shadow-sm inline-block transform translate-y-[0.15em]">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="100px"
            />
        </span>
    </span>
);

export const PillStatementSection = () => {
    return (
        <section className="bg-white py-24 md:py-32 px-4 md:px-8 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#916AFF]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30 pointer-events-none" />

            <div className="container mx-auto max-w-[1600px] relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-medium leading-[1.4] tracking-tight text-slate-900 max-w-5xl mx-auto">
                        Tworzymy cyfrowe doświadczenia
                        <PillImage src="/pill-experience.png" alt="Digital Experience" />
                        które zamieniają zwykłych użytkowników w lojalnych klientów. W Hermer łączymy bezkompromisową jakość kodu
                        <PillImage src="/pill-code.png" alt="Quality Code" className="ml-2" />
                        z designem, który wyznacza standardy w Twojej branży
                        <PillImage src="/pill-design.png" alt="Leading Design" />
                        .
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-20 md:mt-32 pt-10 border-t border-slate-100"
                >
                    {[
                        { value: "14 lat", label: "Rozwijamy sprzedaż naszych klientów" },
                        { value: "9 lat", label: "Tyle wynosi średnie doświadczenie w naszym zespole" },
                        { value: "700 +", label: "Zrealizowanych projektów" },
                        { value: "140 +", label: "firm zdecydowało się wyrazić opinie na temat naszej współpracy" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left flex flex-col items-center md:items-start group">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-3 tracking-tighter group-hover:text-[#916AFF] transition-colors duration-300">{stat.value}</div>
                            <div className="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-widest leading-relaxed max-w-[200px]">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
