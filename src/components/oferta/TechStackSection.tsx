"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const TechStackSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const technologies = [
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            category: "Frontend",
        },
        {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            category: "Framework",
        },
        {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            category: "Language",
        },
        {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            category: "Styling",
        },
        {
            name: "WordPress",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
            category: "CMS",
        },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            category: "Backend",
        },
        {
            name: "Laravel",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
            category: "Backend",
        },
        {
            name: "Figma",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            category: "Design",
        },
    ];

    useGSAP(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const totalWidth = wrapper.scrollWidth;
        const halfWidth = totalWidth / 2;

        gsap.to(wrapper, {
            x: -halfWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <p className="text-[#916AFF] text-sm font-bold uppercase tracking-widest mb-4">
                        Technology Stack
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
                            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
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
