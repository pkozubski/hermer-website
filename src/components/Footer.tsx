"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { MaskedReveal } from "./ui/MaskedReveal";
import { ScrambleText } from "./ui/ScrambleText";

export const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-neutral-950 text-neutral-400 pt-24 pb-32 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Background Typography */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[18vw] md:text-[22vw] font-black tracking-tighter text-white leading-none"
        >
          HERMER
        </motion.span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Giant CTA */}
        <motion.div
          variants={itemVariants}
          className="mb-24 border-b border-white/5 pb-24 group/cta"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-none break-normal">
                <div className="overflow-hidden pb-12">
                  <MaskedReveal text="Masz pomysł" />
                </div>
                <div className="overflow-hidden text-neutral-500 pb-12 -mt-12">
                  <MaskedReveal text="na nowy projekt?" delay={0.1} />
                </div>
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <a
                  href="#contact"
                  className="group/btn relative inline-flex items-center gap-4 bg-white text-neutral-950 px-10 py-6 rounded-full text-xl font-bold hover:bg-[#916AFF] hover:text-white transition-all duration-300"
                >
                  <span>Rozpocznij wycenę</span>
                  <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                    <ArrowUpRight size={24} />
                  </div>
                </a>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end text-right">
              <p className="text-neutral-500 max-w-xs text-sm leading-relaxed mb-4">
                Skontaktuj się z nami, a pomożemy Ci przekształcić Twoją wizję w
                rzeczywistość. Odpowiadamy w ciągu 24 godzin.
              </p>
              <ArrowRight className="text-neutral-700 w-12 h-12 -rotate-45" />
            </div>
          </div>
        </motion.div>

        {/* Middle Section: Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          {/* Brand Column (Span 4) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-8 pr-12"
          >
            <a
              href="#"
              className="block text-white text-3xl font-bold tracking-tighter"
            >
              Hermer<span className="text-[#916AFF]">.</span>
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Tworzymy innowacyjne rozwiązania cyfrowe, które pomagają firmom
              rosnąć. Łączymy design, technologię i strategię w jedną spójną
              całość.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 group"
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Column 1 (Span 2) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 lg:col-start-6"
          >
            <h4 className="text-white font-bold mb-6 text-lg">Menu</h4>
            <ul className="space-y-4">
              {[
                "Strona główna",
                "Realizacje",
                "Opinie",
                "O firmie",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group w-fit"
                  >
                    <ScrambleText text={item} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links Column 2 (Span 2) */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Oferta</h4>
            <ul className="space-y-4">
              {[
                "Strony www",
                "Sklepy online",
                "Marketing",
                "Wordpress Shield",
                "Audyt SEO",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group w-fit"
                  >
                    <ScrambleText text={item} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column (Span 3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Kontakt</h4>
            <ul className="space-y-8">
              <li className="group">
                <p className="text-xs text-neutral-600 uppercase tracking-wider font-bold mb-2">
                  Napisz do nas
                </p>
                <a
                  href="mailto:bok@e-hermer.pl"
                  className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#916AFF] transition-colors flex items-center gap-2"
                >
                  <ScrambleText text="bok@e-hermer.pl" />
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#916AFF]"
                  />
                </a>
              </li>
              <li className="group">
                <p className="text-xs text-neutral-600 uppercase tracking-wider font-bold mb-2">
                  Zadzwoń
                </p>
                <a
                  href="tel:+48531008661"
                  className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#916AFF] transition-colors flex items-center gap-2"
                >
                  <ScrambleText text="+48 531 008 661" />
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#916AFF]"
                  />
                </a>
              </li>
              <li>
                <p className="text-xs text-neutral-600 uppercase tracking-wider font-bold mb-2">
                  Lokalizacja
                </p>
                <p className="text-neutral-400 text-sm">
                  Bydgoska 50, Wałcz
                  <br />
                  Polska
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-end gap-6 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col gap-2">
            <p className="text-xs text-neutral-600">
              © 2010 – {new Date().getFullYear()} Hermer. Wszelkie prawa
              zastrzeżone.
            </p>
            <p className="text-[10px] text-neutral-700">
              Design & Development by Hermer Team.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs font-bold text-neutral-500 hover:text-white transition-colors"
            >
              Polityka Prywatności
            </a>
            <a
              href="#"
              className="text-xs font-bold text-neutral-500 hover:text-white transition-colors"
            >
              Regulamin (RODO)
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
