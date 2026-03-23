"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const OfferPageHero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-transparent py-20 isolate">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-5xl mx-auto animate-[offerHeroFade_0.8s_cubic-bezier(0.16,1,0.3,1)_both]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-medium tracking-tighter text-white leading-[1.05] mb-6 sm:mb-8">
            Zbudujemy Ci stronę,
            <br />
            a potem sprawimy,
            <br />
            że ludzie na nią trafią.
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 lg:mb-10 font-light leading-relaxed tracking-wide">
            Strony, sklepy, SEO i marketing jako spójny
            <br className="hidden sm:block" />
            system — design, UX i wynik.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-6 py-3 sm:px-10 sm:py-5 bg-[#916AFF] text-white rounded-full font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,106,255,0.5)] hover:scale-105 active:scale-95"
            >
              Porozmawiajmy
            </Link>
            <Link
              href="#realizacje"
              className="px-6 py-3 sm:px-10 sm:py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm sm:text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              Zobacz realizacje
            </Link>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-4 mt-16 md:hidden w-full max-w-lg animate-[offerHeroFade_0.8s_cubic-bezier(0.16,1,0.3,1)_both]"
          style={{ animationDelay: "0.4s" }}
        >
          <MobileCard
            img="/offer-hero-imgs/phone_1.png"
            title="Mobile & App Design"
          />
          <MobileCard
            img="/offer-hero-imgs/browser.png"
            title="Web Development & UX"
          />
          <MobileCard
            img="/offer-hero-imgs/search.png"
            title="SEO & Marketing"
          />
          <MobileCard
            img="/offer-hero-imgs/dashboard.png"
            title="Data & Analytics"
          />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none hidden md:block max-w-[1800px] mx-auto select-none">
        <FloatingCard
          img="/offer-hero-imgs/phone_1.png"
          title={
            <>
              Mobile & App
              <br />
              Design
            </>
          }
          className="top-[15%] left-[5%] xl:left-[10%]"
          delay={0.2}
          isPhone
        />
        <FloatingCard
          img="/offer-hero-imgs/browser.png"
          title={
            <>
              Web Development
              <br />& UX
            </>
          }
          className="top-[15%] right-[5%] xl:right-[10%]"
          delay={0.4}
        />
        <FloatingCard
          img="/offer-hero-imgs/search.png"
          title={
            <>
              SEO &
              <br />
              Marketing
            </>
          }
          className="bottom-[15%] left-[10%] xl:left-[15%]"
          delay={0.6}
        />
        <FloatingCard
          img="/offer-hero-imgs/dashboard.png"
          title={
            <>
              Data &
              <br />
              Analytics
            </>
          }
          className="bottom-[15%] right-[10%] xl:right-[15%]"
          delay={0.8}
        />
      </div>

      <style>{`
        @keyframes offerHeroFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes offerCardPop {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes offerCardFloat {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

const FloatingCard = ({
  img,
  title,
  className,
  delay,
  isPhone = false,
}: {
  img: string;
  title: React.ReactNode;
  className: string;
  delay: number;
  isPhone?: boolean;
}) => (
  <div
    className={`absolute ${className} animate-[offerCardPop_0.8s_cubic-bezier(0.16,1,0.3,1)_both]`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div
      className="relative animate-[offerCardFloat_6s_ease-in-out_infinite]"
      style={{ animationDelay: `${delay * 2}s` }}
    >
      <div
        className="absolute -inset-1 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-3xl transform rotate-[8deg] translate-x-3 translate-y-3 border-2 border-[#916AFF]/20"
        style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)" }}
      />

      <div
        className={`relative bg-[#171717] rounded-3xl border-2 border-white/10 flex flex-col items-center z-10 ${isPhone ? "pt-2 pb-6 px-6" : "p-6"}`}
        style={{
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
          width: "200px",
        }}
      >
        <div
          className={`relative w-full flex items-center justify-center ${isPhone ? "-mt-16 mb-2" : "aspect-square"}`}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(145, 106, 255, 0.25) 0%, rgba(145, 106, 255, 0) 70%)",
              filter: "blur(20px)",
              transform: "scale(1.2)",
            }}
          />

          <div className={`relative ${isPhone ? "w-28 h-40" : "w-full h-32"}`}>
            <Image
              src={img}
              alt=""
              fill
              className="object-contain drop-shadow-xl w-32"
            />
          </div>
        </div>

        <span className="text-center font-bold text-white text-base leading-snug mt-2">
          {title}
        </span>
      </div>
    </div>
  </div>
);

const MobileCard = ({ img, title }: { img: string; title: string }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-[#1e1e1e] rounded-3xl transform rotate-3 translate-y-1 translate-x-1 border border-white/10" />

    <div className="relative bg-[#171717] p-5 rounded-3xl shadow-lg border border-white/10 flex flex-col items-center gap-3 z-10">
      <div className="relative w-full aspect-square flex items-center justify-center">
        <div className="absolute inset-0 bg-purple-500/5 filter blur-2xl rounded-full scale-75" />
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain drop-shadow-md"
        />
      </div>
      <span className="text-center font-bold text-white text-sm leading-tight">
        {title}
      </span>
    </div>
  </div>
);
