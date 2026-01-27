"use client";

import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  yearsNum: string;
  yearsText: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jacek",
    role: "CEO",
    yearsNum: "14",
    yearsText: "LAT DOŚW.",
    description:
      "Łączy wiedzę biznesową z technologiczną. Strateg, który widzi szerszą perspektywę.",
    image: "/images/img-onas-jacek.png",
  },
  {
    name: "Łukasz",
    role: "Systemy i Szkoła Marketingu",
    yearsNum: "12",
    yearsText: "LAT DOŚW.",
    description: "Mistrz automatyzacji i strategii lejków sprzedażowych.",
    image: "/images/team-placeholder-1.jpg",
  },
  {
    name: "Irek",
    role: "Marketing",
    yearsNum: "10",
    yearsText: "LAT DOŚW.",
    description: "Specjalista od płatnych kampanii i analityki internetowej.",
    image: "/images/team-placeholder-2.jpg",
  },
  {
    name: "Damian",
    role: "Programista",
    yearsNum: "9",
    yearsText: "LAT DOŚW.",
    description:
      "Architekt kodu. Tworzy szybkie, bezpieczne i skalowalne aplikacje webowe.",
    image: "/images/team-placeholder-3.jpg",
  },
  {
    name: "Anna",
    role: "Kierownik Działu Wykonawczego",
    yearsNum: "7",
    yearsText: "LAT DOŚW.",
    description:
      "Koordynuje pracę zespołu. Dba o terminy i najwyższą jakość realizacji.",
    image: "/images/team-placeholder-4.jpg",
  },
  {
    name: "Kasia",
    role: "Copywriter / Social Media",
    yearsNum: "10+",
    yearsText: "LAT DOŚW.",
    description:
      "Wirtuoz słowa. Tworzy treści, które angażują, budują relacje i sprzedają.",
    image: "/images/team-placeholder-5.jpg",
  },
];

export const AboutTeam = () => {
  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-9xl font-medium font-display tracking-tighter text-slate-900 mb-6">
            Nasz Zespół
          </h2>
          <p className="text-slate-500 text-xl font-light">
            Poznaj ekspertów, którzy wspierają Twój sukces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 border border-slate-100 flex flex-col items-start"
            >
              <div className="w-full flex items-start justify-between mb-8">
                <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden relative border-4 border-slate-50 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out">
                  {/* Placeholder until real images are set */}
                  <div className="absolute inset-0 bg-slate-200" />
                </div>
                <div className="text-right">
                  <span className="block text-5xl font-medium font-display text-slate-200 group-hover:text-slate-900 transition-colors duration-500">
                    {member.yearsNum}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest opacity-60">
                    {member.yearsText}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-medium text-slate-900 mb-2 tracking-tight group-hover:text-[#916AFF] transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-xs font-bold text-[#916AFF] mb-8 uppercase tracking-widest bg-[#f4f1ff] px-3 py-1.5 rounded-full">
                {member.role}
              </p>

              <p className="text-slate-600 text-base font-light leading-relaxed border-t border-slate-100 pt-6 mt-auto">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
