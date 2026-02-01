"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Phone,
  ArrowUpRight,
  CheckCircle,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import JacekImg from "@/assets/team/jacek.png";
import OliwiaImg from "@/assets/team/oliwia.png";
// Placeholder for Mateusz or just text fallback
import ContactSquiggle from "@/components/ContactSquiggle";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { ContactPersonCard } from "@/components/cards/ContactPersonCard";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
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
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-[#171717] min-h-screen text-white selection:bg-[#916AFF] selection:text-white">
      <Header />

      <main className="pt-32 pb-24 relative overflow-hidden">
        <ContactSquiggle />

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          {/* Header Section */}
          <div className="mb-20 mt-10">
            <SplitRevealTitle
              line1="Skontaktuj się"
              line2="z nami"
              className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tighter text-white"
            />
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Jesteśmy tu, aby pomóc Ci w rozwoju Twojego biznesu. Wybierz
              odpowiednią osobę do kontaktu lub skorzystaj z formularza.
            </p>
          </div>

          {/* Unified People Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
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

          {/* Form & Company Info Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32 border-t border-white/5 pt-24">
            {/* Left: Company Details */}
            <div className="w-full lg:w-5/12">
              <h3 className="text-3xl font-display font-bold text-white mb-12">
                Dane firmy
              </h3>

              <div className="space-y-12">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
                    Nazwa
                  </p>
                  <p className="text-2xl font-bold text-white">
                    Firma Usługowa Hermer
                  </p>
                  <p className="text-xl text-neutral-400">Jacek Chudyński</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-12">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
                      NIP
                    </p>
                    <p className="text-xl font-bold text-white tracking-wide">
                      765-164-35-01
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
                      Data założenia
                    </p>
                    <p className="text-xl font-bold text-white">2010 rok</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
                    Konto bankowe
                  </p>
                  <p className="text-xl font-bold text-white tracking-wide break-all sm:break-normal font-mono text-[#916AFF]">
                    64 2030 0045 1110 0000 0192 0620
                  </p>
                </div>

                <div className="space-y-6 pt-6 border-t border-white/5 bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                    Obsługa klienta
                  </p>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">
                      Jacek Chudyński
                    </p>
                    <a
                      href="mailto:bok@e-hermer.pl"
                      className="text-lg text-[#916AFF] hover:text-white transition-colors flex items-center gap-2 font-medium"
                    >
                      bok@e-hermer.pl
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 lg:p-10 border border-white/10">
                <h3 className="text-3xl font-display font-bold text-white mb-10">
                  Formularz kontaktowy
                </h3>

                {status === "success" ? (
                  <motion.div
                    className="min-h-[400px] flex flex-col items-start justify-center border-l-2 border-slate-900 pl-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
                      Wiadomość wysłana.
                    </h3>
                    <p className="text-neutral-400 text-xl mb-8 max-w-md">
                      Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-white font-bold border-b-2 border-white hover:text-[#916AFF] hover:border-[#916AFF] transition-colors pb-1"
                    >
                      Wyślij kolejną wiadomość
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-10"
                  >
                    {/* Name Field */}
                    <div className="relative group">
                      <label
                        htmlFor="name"
                        className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                          activeField === "name"
                            ? "text-white"
                            : "text-neutral-500"
                        }`}
                      >
                        01. Jak się nazywasz?
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
                        placeholder="Imię i Nazwisko"
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-bold text-white placeholder-white/20 focus:outline-none focus:border-white transition-all duration-500 rounded-none"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <label
                        htmlFor="email"
                        className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                          activeField === "email"
                            ? "text-white"
                            : "text-neutral-500"
                        }`}
                      >
                        02. Twój Email
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
                        placeholder="adres@email.com"
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-bold text-white placeholder-white/20 focus:outline-none focus:border-white transition-all duration-500 rounded-none"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative group">
                      <label
                        htmlFor="message"
                        className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                          activeField === "message"
                            ? "text-white"
                            : "text-neutral-500"
                        }`}
                      >
                        03. O projekcie
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        onFocus={() => setActiveField("message")}
                        onBlur={() => setActiveField(null)}
                        placeholder="Opowiedz nam o swoim pomyśle..."
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-bold text-white placeholder-white/20 focus:outline-none focus:border-white transition-all duration-500 resize-none rounded-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className={`w-full py-5 md:py-6 bg-white text-neutral-900 rounded-full text-lg md:text-xl font-display font-bold hover:bg-[#916AFF] hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group ${
                          status === "submitting"
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:shadow-2xl hover:scale-[1.02]"
                        }`}
                      >
                        {status === "submitting" ? (
                          "Wysyłanie..."
                        ) : (
                          <>
                            Wyślij Wiadomość
                            <ArrowRight
                              className="group-hover:translate-x-2 transition-transform duration-300"
                              size={24}
                            />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Full Width */}
        <div className="w-full h-[500px] border-y border-white/10 relative group mt-24 z-10">
          <div className="absolute inset-0 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 bg-black/10"></div>
          <div className="h-full invert grayscale">
            {" "}
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

          {/* Floating Card */}
          <div className="absolute bottom-0 left-0 z-20 w-full max-w-[400px] p-8">
            {/* WARSTWA TŁA (To tutaj dzieje się magia) */}
            {/* Progressive Blur Layers */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div
                className="absolute inset-0 backdrop-blur-[1px]"
                style={{
                  maskImage:
                    "linear-gradient(to top right, black 40%, transparent 80%)",
                  WebkitMaskImage:
                    "linear-gradient(to top right, black 40%, transparent 80%)",
                }}
              />
              <div
                className="absolute inset-0 backdrop-blur-[2px]"
                style={{
                  maskImage:
                    "linear-gradient(to top right, black 30%, transparent 70%)",
                  WebkitMaskImage:
                    "linear-gradient(to top right, black 30%, transparent 70%)",
                }}
              />
              <div
                className="absolute inset-0 backdrop-blur-sm"
                style={{
                  maskImage:
                    "linear-gradient(to top right, black 20%, transparent 60%)",
                  WebkitMaskImage:
                    "linear-gradient(to top right, black 20%, transparent 60%)",
                }}
              />
              <div
                className="absolute inset-0 backdrop-blur-md"
                style={{
                  maskImage:
                    "linear-gradient(to top right, black 10%, transparent 50%)",
                  WebkitMaskImage:
                    "linear-gradient(to top right, black 10%, transparent 50%)",
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-transparent"
                style={{
                  maskImage:
                    "linear-gradient(to top right, black 0%, black 20%, transparent 60%)",
                  WebkitMaskImage:
                    "linear-gradient(to top right, black 0%, black 20%, transparent 60%)",
                }}
              />
            </div>

            {/* WARSTWA TREŚCI */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#916AFF]/20 p-2 rounded-full backdrop-blur-sm">
                  <MapPin className="text-[#916AFF]" size={20} />
                </div>
                <span className="font-bold text-white text-xl tracking-tight">
                  Bydgoska 50, Wałcz
                </span>
              </div>

              <div className="ml-[52px]">
                <p className="text-neutral-300 text-sm font-medium leading-relaxed mb-1">
                  Zapraszamy do naszego biura
                </p>
                <p className="text-neutral-500 text-xs uppercase tracking-wider">
                  Pn-Pt: 09:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
