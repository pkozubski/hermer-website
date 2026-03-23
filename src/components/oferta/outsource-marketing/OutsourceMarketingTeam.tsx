"use client";

import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    iconSrc: "/images/oferta/zewnetrzny-dzial-marketingu/zarzadzanie zespolem.svg",
    title: "Dyrektor Marketingu",
    description: "Analizuje i zarządza całym działem marketingu, aby realizować wspólnie wyznaczone cele.",
    experience: 12,
  },
  {
    iconSrc: "/images/oferta/zewnetrzny-dzial-marketingu/cel.svg",
    title: "Dyrektor Strategiczny",
    description: "Pomaga w wyznaczeniu realnych celów sprzedażowych, dopasowanych do potrzeb Twojego biznesu.",
    experience: 14,
  },
  {
    iconSrc: "/images/oferta/zewnetrzny-dzial-marketingu/globus z osoba.svg",
    title: "Specjalista ds. Pozycjonowania w Google",
    description: "Zapewni Twojej stronie www wysoką pozycję w wyszukiwarce na kluczowe frazy. Dzięki temu przyciągniesz więcej klientów.",
    experience: 14,
  },
  {
    iconSrc: "/images/oferta/zewnetrzny-dzial-marketingu/telefon.svg",
    title: "Ekspert Social Media i Copywritingu Sprzedażowego",
    description: "Zadbamy o Twój wizerunek w mediach społecznościowych, skutecznie angażując klientów i budując odpowiednią komunikację.",
    experience: 10,
  },
  {
    iconSrc: "/images/oferta/zewnetrzny-dzial-marketingu/wykres.svg",
    title: "Specjalista Google Ads",
    description: "Uczyni reklamy w Google Twoim stałym i efektywnym źródłem pozyskiwania klientów",
    experience: 12,
  },
];

export const OutsourceMarketingTeam: React.FC = () => {
  return (
    <section id="team" className="w-full py-24 relative overflow-hidden bg-[#181818]">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1280px] relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mb-16 px-4">
          Poznaj nasz zespół profesjonalistów:
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex"
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Bottom Summary Card */}
        <div className="relative mt-24 max-w-[1000px] mx-auto z-10">
          <div className="relative h-full w-full">
            {/* Decorative Offset Block (Bottom Left) */}
            <div className="absolute -left-3 -bottom-3 sm:-left-4 sm:-bottom-4 w-24 sm:w-32 h-24 sm:h-32 bg-[#916AFF] rounded-3xl -z-10" />
            
            {/* Main Card */}
            <div className="relative bg-[#181818] border border-[#916AFF]/50 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_30px_rgba(145,106,255,0.05)] h-full w-full overflow-hidden">
              <p className="text-[#a39ea8] text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                Zamiast kosztownych etatów zyskujesz dostęp do tylu godzin pracy specjalistów, ilu naprawdę potrzebujesz. Każdy z nich ma ponad 10-letnie doświadczenie i specjalizuje się w innym obszarze marketingu, a razem tworzą spójny, skuteczny zespół, który możesz wykorzystać do rozwoju swojej firmy. To Twój zewnętrzny dział marketingu na godziny – elastyczny, efektywny i zawsze gotowy do działania.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const TeamCard = ({ member }: { member: any }) => (
  <div className="w-full flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl bg-white/2 border border-white/5 hover:border-[#916AFF]/30 hover:bg-[#916AFF]/2 transition-colors duration-300">
    {/* Icon */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#916AFF]/10 border border-[#916AFF]/20 flex items-center justify-center mb-6 sm:mb-8 shrink-0 relative shadow-[0_0_15px_rgba(145,106,255,0.1)]">
      <div className="relative w-8 h-8 sm:w-10 sm:h-10">
        <Image 
          src={member.iconSrc} 
          alt={member.title} 
          fill 
          className="object-contain" 
        />
      </div>
    </div>
    
    {/* Title */}
    <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
      {member.title}
    </h3>
    
    {/* Desc */}
    <p className="text-[#a39ea8] text-sm sm:text-base leading-relaxed font-light mb-8 grow">
      {member.description}
    </p>
    
    {/* Experience */}
    <div className="text-[#916AFF] text-sm font-bold tracking-[0.05em] uppercase mt-auto w-full text-center">
      {member.experience} LAT DOŚWIADCZENIA
    </div>
  </div>
);
