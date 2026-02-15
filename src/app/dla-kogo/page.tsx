"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle, ArrowUpRight } from "lucide-react";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";

export default function DlaKogoPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulation
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", phone: "", email: "", message: "" });
    }, 1500);
  };

  const industries = [
    {
      label: "Strony internetowe dla prawników",
      href: "/strony-internetowe-dla-prawnikow",
    },
    {
      label: "Strony internetowe dla developerów",
      href: "/strony-internetowe-dla-developerow",
    },
    {
      label: "Strony internetowe dla restauracji",
      href: "/strony-internetowe-dla-restauracji",
    },
    {
      label: "Strony internetowe dla fotografa",
      href: "/strony-internetowe-dla-fotografa",
    },
    {
      label: "Strony internetowe dla firm",
      href: "/strony-internetowe-dla-firm",
    },
  ];

  return (
    <div className="bg-[#171717] min-h-screen text-white selection:bg-[#916AFF] selection:text-white font-sans overflow-x-clip">
      <Header allowVisibility={true} />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative w-full py-20 lg:py-32 flex items-center border-b border-white/5 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-neutral-900 z-0">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#916AFF]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#52D8EA]/10 rounded-full blur-[120px] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left Column: Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-xl aspect-square">
                  <div className="absolute inset-0 bg-[#52D8EA]/20 blur-[80px] rounded-full scale-75 animate-pulse" />
                  <Image
                    src="/assets/dla-kogo/hero-illustration.webp"
                    alt="Tworzenie stron www - ilustracja"
                    fill
                    className="object-contain drop-shadow-2xl relative z-10"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#916AFF]">
                  TWORZENIE STRON WWW
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter mb-8 leading-[1.1]">
                  Nasza <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#916AFF] to-[#52D8EA]">
                    specjalizacja
                  </span>
                </h1>

                <p className="text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-10 text-lg md:text-xl leading-relaxed">
                  Wykorzystaj nieograniczony zasięg internetu, z którego
                  codziennie korzystają niezliczone ilości osób i pokaż swoje
                  usługi za pomocą{" "}
                  <strong className="text-white">
                    efektywnej strony internetowej
                  </strong>
                  . Dla firm z dowolnego obszaru Polski i Europy wykonamy
                  dopracowaną od podstaw, bezkonkurencyjną witrynę przyciągającą
                  nowych klientów.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <ReelCtaButton
                    href="#contact"
                    text="Rozpocznij współpracę"
                    size="large"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- E-COMMERCE & MARKETING SECTIONS --- */}
        <section className="py-24 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
                A może planujesz sprzedawać w internecie swoje{" "}
                <span className="text-[#916AFF]">produkty?</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Zostań właścicielem funkcjonalnego{" "}
                <strong className="text-white">sklepu internetowego</strong>, w
                którym robienie zakupów będzie szybkie, łatwe i przyjemne.
                Zadbamy o atrakcyjną prezentację produktów i niezbędne
                funkcjonalności.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-[#916AFF] w-5 h-5 shrink-0" />
                  Integracje z płatnościami i kurierami
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-[#916AFF] w-5 h-5 shrink-0" />
                  Nowoczesny design RWD
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-[#916AFF] w-5 h-5 shrink-0" />
                  Optymalizacja pod sprzedaż
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-white/5 border border-white/10 rounded-3xl p-8 aspect-video flex items-center justify-center">
              {/* Placeholder for E-commerce Graphic - using CSS pattern or icon */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#916AFF]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#916AFF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">E-Commerce</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#52D8EA]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#52D8EA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                    <path d="M12 14v9" />
                    <path d="M5 21v-7" />
                    <path d="M19 21v-7" />
                    <path d="M12 14H5" />
                    <path d="M19 14h-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Marketing & SEO</h3>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-6">
                Marketing i <span className="text-[#52D8EA]">Widoczność</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Widoczność strony lub sklepu będzie jeszcze lepsza, jeśli
                pozwolisz nam uruchomić{" "}
                <strong className="text-white">działania marketingowe</strong>.
                Dysponujemy potrzebną wiedzą, aby Twoja witryna pojawiła się
                wysoko w wyszukiwarce Google, dzięki czemu dotrzesz do wielu
                klientów z Polski i Europy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-[#52D8EA] w-5 h-5 shrink-0" />
                  Pozycjonowanie stron (SEO)
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-[#52D8EA] w-5 h-5 shrink-0" />
                  Kampanie Google Ads
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-[#52D8EA] w-5 h-5 shrink-0" />
                  Analityka i optymalizacja
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- INDUSTRIES GRID --- */}
        <section className="py-24 bg-neutral-800/20 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-16">
              Dedykowane Rozwiązania
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {industries.map((industry, idx) => (
                <Link
                  key={idx}
                  href={industry.href}
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#916AFF]/50 hover:text-[#916AFF] transition-all duration-300 text-lg font-medium"
                >
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            {/* Left: Contact Image */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[400px] lg:min-h-[600px]">
              <Image
                src="/assets/dla-kogo/contact-image.webp"
                alt="Skontaktuj się z nami"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
              />
              {/* Glow underlying effect */}
              <div className="absolute inset-0 bg-[#916AFF]/10 blur-[100px] -z-0 rounded-full scale-75" />
            </div>

            {/* Right: Form */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#916AFF]">
                GOTOWY NA ZMIANY?
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-8">
                Skontaktuj się!
              </h2>
              <p className="text-neutral-400 text-lg mb-12">
                Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24
                godzin.
              </p>

              {status === "success" ? (
                <div
                  className="min-h-[400px] flex flex-col items-start justify-center border-l-2 border-[#916AFF] pl-12 bg-white/5 rounded-r-3xl"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
                    Wiadomość wysłana.
                  </h3>
                  <p className="text-neutral-400 text-xl mb-8 max-w-md">
                    Dziękujemy za kontakt.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-white font-bold border-b-2 border-white hover:text-[#916AFF] hover:border-[#916AFF] transition-colors pb-1"
                  >
                    Wyślij kolejną
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Name Field */}
                  <div className="relative group">
                    <label
                      htmlFor="name"
                      className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        activeField === "name"
                          ? "text-[#916AFF]"
                          : "text-neutral-500"
                      }`}
                    >
                      Imię
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl font-medium text-white placeholder-white/20 focus:outline-none focus:border-[#916AFF] transition-all duration-300 rounded-none"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <label
                      htmlFor="phone"
                      className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        activeField === "phone"
                          ? "text-[#916AFF]"
                          : "text-neutral-500"
                      }`}
                    >
                      Numer telefonu
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      onFocus={() => setActiveField("phone")}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl font-medium text-white placeholder-white/20 focus:outline-none focus:border-[#916AFF] transition-all duration-300 rounded-none"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <label
                      htmlFor="email"
                      className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        activeField === "email"
                          ? "text-[#916AFF]"
                          : "text-neutral-500"
                      }`}
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl font-medium text-white placeholder-white/20 focus:outline-none focus:border-[#916AFF] transition-all duration-300 rounded-none"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative group">
                    <label
                      htmlFor="message"
                      className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        activeField === "message"
                          ? "text-[#916AFF]"
                          : "text-neutral-500"
                      }`}
                    >
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl font-medium text-white placeholder-white/20 focus:outline-none focus:border-[#916AFF] transition-all duration-300 resize-none rounded-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={`group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#916AFF] hover:text-white transition-all duration-300 ${status === "submitting" ? "opacity-70" : ""}`}
                    >
                      {status === "submitting"
                        ? "Wysyłanie..."
                        : "Wyślij wiadomość"}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="mt-6 text-xs text-neutral-500 leading-relaxed">
                      * Wyrażam zgodę na gromadzenie i przetwarzanie informacji
                      z formularza kontaktowego w celu odpowiedzi na moje
                      zapytanie. Dane zostaną usunięte po przetworzeniu żądania.
                      Uwaga: W każdej chwili możesz odwołać swoją zgodę na
                      przyszłość, wysyłając wiadomość e-mail na adres
                      bok@e-hermer.pl. Szczegółowe informacje na temat
                      postępowania z danymi użytkownika można znaleźć w naszym
                      oświadczeniu o ochronie danych.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
