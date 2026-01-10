"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const OfferPageHero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] py-20">
      {/* Central Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl  lg:text-5xl xl:text-7xl 2xl:text-[5rem] font-display font-medium tracking-tighter text-slate-900 leading-[1.05] mb-6 sm:mb-8">
            Zbudujemy Ci stronę,
            <br />
            a potem sprawimy,
            <br />
            że ludzie na nią trafią.
          </h1>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 lg:mb-10 font-light leading-relaxed tracking-wide">
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
              className="px-6 py-3 sm:px-10 sm:py-5 bg-white border border-slate-200 text-slate-600 rounded-full font-bold text-sm sm:text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Zobacz realizacje
            </Link>
          </div>
        </motion.div>

        {/* Mobile View: Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-4 mt-16 md:hidden w-full max-w-lg"
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
        </motion.div>
      </div>

      {/* Desktop View: Floating Cards */}
      <div className="absolute inset-0 pointer-events-none hidden md:block max-w-[1800px] mx-auto select-none">
        {/* Top Left */}
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
          isPhone={true}
        />
        {/* Top Right */}
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
        {/* Bottom Left */}
        <FloatingCard
          img="/offer-hero-imgs/search.png"
          title={
            <>
              SEO &<br />
              Marketing
            </>
          }
          className="bottom-[15%] left-[10%] xl:left-[15%]"
          delay={0.6}
        />
        {/* Bottom Right */}
        <FloatingCard
          img="/offer-hero-imgs/dashboard.png"
          title={
            <>
              Data &<br />
              Analytics
            </>
          }
          className="bottom-[15%] right-[10%] xl:right-[15%]"
          delay={0.8}
        />
      </div>
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
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 2,
      }}
      className="relative"
    >
      {/* Back Card (Stacked Effect) - fioletowa karta za główną */}
      <div
        className="absolute -inset-1 bg-gradient-to-br from-[#E8E2FF] to-[#D4CCFF] rounded-3xl transform rotate-[8deg] translate-x-3 translate-y-3 border-2 border-[#C9BFFF]/60"
        style={{ boxShadow: "0 8px 32px rgba(145, 106, 255, 0.15)" }}
      />

      {/* Main Card - biała karta */}
      <div
        className={`relative bg-white rounded-3xl border-2 border-slate-200/80 flex flex-col items-center z-10 ${isPhone ? "pt-2 pb-6 px-6" : "p-6"}`}
        style={{
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
          width: "200px",
        }}
      >
        {/* Asset Container */}
        <div
          className={`relative w-full flex items-center justify-center ${isPhone ? "-mt-16 mb-2" : "aspect-square"}`}
        >
          {/* Purple Glow behind asset */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(145, 106, 255, 0.25) 0%, rgba(145, 106, 255, 0) 70%)",
              filter: "blur(20px)",
              transform: "scale(1.2)",
            }}
          />

          {/* Image */}
          <div className={`relative ${isPhone ? "w-28 h-40" : "w-full h-32"}`}>
            <Image
              src={img}
              alt=""
              fill
              className="object-contain drop-shadow-xl w-32"
            />
          </div>
        </div>

        {/* Title */}
        <span className="text-center font-bold text-slate-900 text-base leading-snug mt-2">
          {title}
        </span>
      </div>
    </motion.div>
  </motion.div>
);

const MobileCard = ({ img, title }: { img: string; title: string }) => (
  <div className="relative">
    {/* Back Card (Stacked Effect) */}
    <div className="absolute inset-0 bg-[#E8E2FF] rounded-3xl transform rotate-3 translate-y-1 translate-x-1 border border-purple-200" />

    {/* Main Card */}
    <div className="relative bg-white p-5 rounded-3xl shadow-lg border border-slate-200 flex flex-col items-center gap-3 z-10">
      <div className="relative w-full aspect-square flex items-center justify-center">
        <div className="absolute inset-0 bg-purple-500/5 filter blur-2xl rounded-full scale-75" />
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain drop-shadow-md"
        />
      </div>
      <span className="text-center font-bold text-slate-800 text-sm leading-tight">
        {title}
      </span>
    </div>
  </div>
);
