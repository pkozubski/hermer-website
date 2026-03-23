"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TrustedShopsWidget } from "./TrustedShopsWidget";
const GoogleIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" width={size} height={size} fill="currentColor" className={className}>
    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="text-neutral-400 pt-24 pb-32 relative">
      {/* Decorative Background Element */}
      <div className="absolute -bottom-0 left-0 -translate-x-1/2 w-[560px] h-[280px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Background Typography */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.005]">
        <img
          src="/assets/footer-watermark.svg"
          alt=""
          aria-hidden="true"
          className="mx-auto w-[80%]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Middle Section: Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8 pr-12">
            <Link
              href="/"
              className="block text-white text-3xl font-bold tracking-tighter hover:opacity-90 transition-opacity"
            >
              <img
                src="/assets/hermer-logo.svg"
                alt="Hermer"
                className="w-auto h-10 sm:h-12"
              />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Tworzymy innowacyjne rozwiązania cyfrowe, które pomagają firmom
              rosnąć. Łączymy design, technologię i strategię w jedną spójną
              całość.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/hermerwa/" },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/hermer_pl/",
                },
                {
                  Icon: Linkedin,
                  href: "https://pl.linkedin.com/company/hermer-polska",
                },
                {
                  Icon: GoogleIcon,
                  href: "https://maps.google.com/?cid=10703866742019526592&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link do profilu społecznościowego ${i + 1}`}
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>

            {/* Moduł Trusted Shops (Faktyczny i gotowy pod TSID) */}
            <TrustedShopsWidget />
          </div>

          {/* Links Column 1 (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 text-lg">Menu</h4>
            <ul className="space-y-4">
              {[
                { label: "Strona główna", href: "/" },
                { label: "Realizacje", href: "/realizacje" },
                { label: "Opinie", href: "/opinie" },
                { label: "O firmie", href: "/o-firmie" },
                { label: "Blog", href: "/blog" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Obszar działania", href: "/obszar-dzialania" },
                { label: "Dla kogo", href: "/dla-kogo" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group w-fit"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Oferta</h4>
            <ul className="space-y-4">
              {[
                { label: "Strony internetowe", href: "/oferta/strony-www/" },
                {
                  label: "Sklepy internetowe",
                  href: "/oferta/sklepy-internetowe/",
                },
                { label: "Marketing", href: "/oferta/marketing/" },
                {
                  label: "Zewnętrzny dział marketingu",
                  href: "/oferta/marketing/",
                },
                { label: "Wordpress Shield", href: "/oferta/wordpress-shield" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group w-fit"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Span 3) */}
          <div className="lg:col-span-3">
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
                  bok@e-hermer.pl
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
                  +48 531 008 661
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 pt-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-neutral-600">
              © 2010 – {new Date().getFullYear()} Hermer. Wszelkie prawa
              zastrzeżone.
            </p>
            <p className="text-neutral-500 text-[10px]">
              Design & Development by Hermer Team.
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              href="/rodo"
              className="text-xs font-bold text-neutral-500 hover:text-white transition-colors"
            >
              Polityka Prywatności
            </Link>
            <Link
              href="/rodo"
              className="text-xs font-bold text-neutral-500 hover:text-white transition-colors"
            >
              Regulamin (RODO)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
