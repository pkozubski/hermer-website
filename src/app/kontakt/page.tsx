"use client";

import React, { useState } from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ArrowUpRight } from "lucide-react";
import JacekImg from "@/assets/team/jacek.png";
import OliwiaImg from "@/assets/team/oliwia.png";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { LineReveal } from "@/components/ui/LineReveal";
import { ContactPersonCard } from "@/components/cards/ContactPersonCard";
import { Contact } from "@/components/homepage/Contact";

const ContactPage = () => {
  const [mapActive, setMapActive] = useState(false);

  return (
    <div className="bg-[#171717] min-h-screen text-white selection:bg-[#916AFF] selection:text-white font-sans">
      <Header />

      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 min-h-screen gap-12 lg:gap-8 pb-32">
          {/* Left Column: Sticky Anchor */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] flex flex-col justify-start">
            <div className="relative z-10 flex flex-col gap-8 max-w-xl mt-8">
              <SplitRevealTitle
                line1="Porozmawiajmy"
                line2="o Twoim projekcie"
                once
                as="h1"
                className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-display font-bold tracking-tighter text-white"
                classNameLine1="whitespace-nowrap"
                classNameLine2="whitespace-nowrap"
              />

              <div className="mt-4 flex flex-col gap-10">
                <LineReveal
                  lines={[
                    "Jesteśmy tu, aby pomóc Ci w rozwoju",
                    "Twojego biznesu. Skontaktuj się",
                    "z nami bezpośrednio.",
                  ]}
                  once
                  className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light"
                  classNameLine="whitespace-nowrap"
                />

                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:bok@e-hermer.pl"
                    className="text-3xl font-display font-bold text-white hover:text-[#916AFF] transition-colors w-fit flex items-center gap-2 group"
                  >
                    bok@e-hermer.pl
                    <ArrowUpRight
                      className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                      size={28}
                    />
                  </a>
                  <a
                    href="tel:+48666829895"
                    className="text-xl font-light text-neutral-400 hover:text-white transition-colors w-fit"
                  >
                    +48 666 829 895
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Content */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:pl-12 pt-8 lg:pt-32">
            {/* Team Cards */}
            <div className="flex flex-col gap-12 sm:gap-16 w-full mb-16">
              <ContactPersonCard
                name="Jacek Chudyński"
                role="CEO"
                description="Wspólnie określamy cele biznesowe projektu oraz dobieramy najlepsze rozwiązania."
                phone="+48 666 829 895"
                email="jacek@e-hermer.pl"
                image={JacekImg}
              />
              <ContactPersonCard
                name="Oliwia Chochoł"
                role="Biuro obsługi klienta"
                description="Kompleksowe wsparcie biznesu. Strony www i e-marketing."
                phone="+48 887 339 758"
                email="oliwia@e-hermer.pl"
                image={OliwiaImg}
              />
              <ContactPersonCard
                name="Mateusz Wysocki"
                role="Biuro obsługi klienta"
                description="Kompleksowe wsparcie biznesu. Strony www i e-marketing."
                phone="+48 608 141 282"
                email="mateusz@e-hermer.pl"
                initials="mw"
              />
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <Contact />

        {/* Map Section - Full Width */}
        <div
          className="w-full h-[500px] border-y border-white/5 relative group mt-24 z-10 bg-[#0f0f0f]"
          onMouseLeave={() => setMapActive(false)}
        >
          {/* Overlay: blocks iframe pointer events so Lenis scroll works. Click to activate map. */}
          {!mapActive && (
            <div
              className="absolute inset-0 z-20 cursor-pointer bg-black/10 hover:bg-transparent transition-colors duration-500"
              onClick={() => setMapActive(true)}
            />
          )}
          <div className={`h-full invert grayscale transition-opacity duration-500 ${mapActive ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.0820735782977!2d16.48065507700806!3d53.270149080421696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47015d7452e0d05f%3A0x948bc61721310fc0!2sHermer%20-%20Tworzenie%20stron%20www!5e0!3m2!1spl!2spl!4v1769944456536!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />


    </div>
  );
};

export default ContactPage;
