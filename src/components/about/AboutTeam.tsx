"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

import AnnaImg from "@/assets/team/anna.png";
import DamianImg from "@/assets/team/damian.png";
import DarekImg from "@/assets/team/darek.png";
import EwelinaImg from "@/assets/team/ewelina.png";
import IrekImg from "@/assets/team/irek.png";
import JacekImg from "@/assets/team/jacek.png";
import KasiaImg from "@/assets/team/kasia.png";
import LukaszImg from "@/assets/team/lukasz.png";
import OliwiaImg from "@/assets/team/oliwia.png";

interface TeamMember {
  name: string;
  role: string;
  yearsNum: string;
  yearsText: string;
  description: string;
  image: any;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jacek",
    role: "CEO",
    yearsNum: "16",
    yearsText: "LAT DOŚW.",
    description:
      "Łączy wiedzę biznesową z technologiczną. Strateg, który widzi szerszą perspektywę.",
    image: JacekImg,
  },
  {
    name: "Łukasz",
    role: "Systemy i Szkoła Marketingu",
    yearsNum: "12",
    yearsText: "LAT DOŚW.",
    description: "Mistrz automatyzacji i strategii lejków sprzedażowych.",
    image: LukaszImg,
  },
  {
    name: "Irek",
    role: "Marketing",
    yearsNum: "10",
    yearsText: "LAT DOŚW.",
    description: "Specjalista od płatnych kampanii i analityki internetowej.",
    image: IrekImg,
  },
  {
    name: "Damian",
    role: "Programista",
    yearsNum: "9",
    yearsText: "LAT DOŚW.",
    description:
      "Architekt kodu. Tworzy szybkie, bezpieczne i skalowalne aplikacje webowe.",
    image: DamianImg,
  },
  {
    name: "Anna",
    role: "Kierownik Działu Wykonawczego",
    yearsNum: "7",
    yearsText: "LAT DOŚW.",
    description:
      "Koordynuje pracę zespołu. Dba o terminy i najwyższą jakość realizacji.",
    image: AnnaImg,
  },
  {
    name: "Kasia",
    role: "Copywriter / Social Media",
    yearsNum: "10+",
    yearsText: "LAT DOŚW.",
    description:
      "Wirtuoz słowa. Tworzy treści, które angażują, budują relacje i sprzedają.",
    image: KasiaImg,
  },
  {
    name: "Darek",
    role: "Grafik",
    yearsNum: "5",
    yearsText: "LAT DOŚW.",
    description:
      "Tworzy wizualną stronę projektów, dbając o estetykę i spójność.",
    image: DarekImg,
  },
  {
    name: "Oliwia",
    role: "Social Media Manager",
    yearsNum: "3",
    yearsText: "LAT DOŚW.",
    description:
      "Kreatywna dusza, która dba o wizerunek marki w mediach społecznościowych.",
    image: OliwiaImg,
  },
];

export const AboutTeam = () => {
  return (
    <section className="py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 mb-16">
        <div className="text-left w-full">
          <h2 className="text-5xl md:text-8xl font-medium font-display tracking-tighter text-white mb-6">
            Nasz zespół
          </h2>
          <p className="text-neutral-400 text-xl font-light">
            Poznaj ekspertów, którzy wspierają Twój sukces.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group relative w-full aspect-[3/4] bg-[#1a1a1a] rounded-[30px] overflow-hidden border border-white/5">
                  {/* Image Background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover opacity-90 transition-all duration-700 ease-out grayscale-20 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Progressive Blur Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none z-10">
                    <div
                      className="absolute inset-0 backdrop-blur-[2px]"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom, transparent 0%, black 30%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, transparent 0%, black 30%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 backdrop-blur-sm"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom, transparent 30%, black 60%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, transparent 30%, black 60%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 backdrop-blur-md"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom, transparent 60%, black 100%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, transparent 60%, black 100%)",
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgba(26,26,26,0.6)] to-[#1a1a1a]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-6">
                    {/* Years Badge */}
                    <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-full text-right flex flex-col items-center">
                      <span className="block text-lg font-bold text-white leading-none mb-0.5">
                        {member.yearsNum}
                      </span>
                      <span className="text-[8px] uppercase font-bold text-neutral-300 tracking-wider leading-none">
                        {member.yearsText}
                      </span>
                    </div>

                    <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                      <h3 className="text-2xl font-medium font-display text-white mb-1.5 tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-[#916AFF] font-bold uppercase tracking-widest text-[9px] mb-3 bg-[#916AFF]/10 w-fit px-2 py-1 rounded-full border border-[#916AFF]/20">
                        {member.role}
                      </p>
                      <p className="text-neutral-300 text-xs font-light leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4 md:hidden">
            {/* Mobile implementation might need separate logic or just rely on swipe */}
          </div>

          <div className="hidden md:block">
            <CarouselPrevious className="left-4 bg-black/50 border-white/10 text-white hover:bg-white hover:text-black transition-colors" />
            <CarouselNext className="right-4 bg-black/50 border-white/10 text-white hover:bg-white hover:text-black transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
