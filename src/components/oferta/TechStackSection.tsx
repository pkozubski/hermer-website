"use client";

import React from "react";
import Image from "next/image";

export const TechStackSection: React.FC = () => {
    const technologies = [
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "WordPress",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "Laravel",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
        },
    ];

    return (
        <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">
                    Technologie, z których korzystamy
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="relative w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
                            title={tech.name}
                        >
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
