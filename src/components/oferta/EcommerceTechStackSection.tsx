"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const EcommerceTechStackSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const technologies = [
        {
            name: "WooCommerce",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
            category: "Platforma",
        },
        {
            name: "Shopify",
            icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_icon_2018.svg",
            category: "Platforma",
        },
        {
            name: "PrestaShop",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prestashop/prestashop-original.svg",
            category: "Platforma",
        },
        {
            name: "Magento",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
            category: "Platforma",
        },
        {
            name: "Stripe",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
            category: "Płatności",
        },
        {
            name: "Google Analytics 4",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
            category: "Analityka",
        },
        {
            name: "InPost",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/InPost_logo.svg/1200px-InPost_logo.svg.png",
            category: "Logistyka",
        },
        {
            name: "Przelewy24",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Przelewy24_logo.svg",
            category: "Płatności",
        },
        {
            name: "BLIK",
            icon: "https://upload.wikimedia.org/wikipedia/commons/7/76/Blik_logo.svg",
            category: "Płatności",
        },
    ];

    useGSAP(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const totalWidth = wrapper.scrollWidth;
        const halfWidth = totalWidth / 2;

        gsap.to(wrapper, {
            x: -halfWidth,
            duration: 30, // Slower for readability
            ease: "none",
            repeat: -1,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <p className="text-[#916AFF] text-sm font-bold uppercase tracking-widest mb-4">
                        Technologie i Integracje
                    </p>
                    <SplitRevealTitle
                        line1="Technologie,"
                        line2="które napędzają Twój biznes"
                        className="text-white! text-4xl md:text-6xl justify-center"
                    />
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full border-y border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                <div ref={wrapperRef} className="flex w-max">
                    {/* Double the array to create seamless loop */}
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className={`
                                group flex-shrink-0 w-[200px] md:w-[240px] h-[200px] 
                                flex flex-col items-center justify-center gap-6 
                                border-r border-white/10 
                                hover:bg-white/5 transition-colors duration-300
                                border-l border-white/10 md:border-l-0
                            `}
                        >
                            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 p-1">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-medium text-base tracking-wide">
                                    {tech.name}
                                </h3>
                                <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-wider mt-1">
                                    {tech.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
