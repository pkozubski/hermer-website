"use client";
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import ContactSquiggle from "./ContactSquiggle";
import { ScrambleText } from "./ui/ScrambleText";

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 lg:py-24 bg-[#171717] relative isolate"
    >
      {/* Background Squiggle Animation */}
      <ContactSquiggle />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* --- LEFT: VISUAL & INFO --- */}
          <div className="w-full lg:w-5/12 pt-4">
            {/* Title */}
            <div className="mb-20">
              <SplitRevealTitle
                line1="Zacznijmy"
                line2="Projekt"
                once
                className="text-white text-5xl md:text-8xl tracking-tighter"
              />
              <LineReveal
                lines={[
                  "Chcesz rozwinąć swój biznes?",
                  "Skontaktuj się z nami i porozmawiajmy",
                  "o Twoim projekcie lub strategii,",
                  "którą wspólnie wdrożymy.",
                ]}
                once
                className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed mt-8"
              />
            </div>

            {/* Minimalist Contact List */}
            <div className="space-y-12">
              {[
                {
                  label: "Email",
                  value: "kontakt@hermer.agency",
                  href: "mailto:kontakt@hermer.agency",
                },
                {
                  label: "Telefon",
                  value: "+48 123 456 789",
                  href: "tel:+48123456789",
                },
                {
                  label: "Biuro",
                  value: "Warszawa, ul. Technologiczna 12",
                  href: "#",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateX(0)" : "translateX(-30px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.6s",
                    transitionDelay: `${0.3 + i * 0.15}s`,
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                    {item.label}
                  </h4>
                  <a
                    href={item.href}
                    className="text-xl md:text-2xl font-bold text-white group-hover:text-[#916AFF] transition-colors inline-flex items-center gap-4"
                  >
                    {item.label === "Email" ? (
                      <ScrambleText text={item.value} />
                    ) : (
                      item.value
                    )}
                    {item.href !== "#" && (
                      <ArrowRight
                        size={24}
                        className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: SWISS GRID FORM --- */}
          <div
            className="w-full lg:w-7/12 pt-8 bg-white/5 backdrop-blur-md rounded-3xl p-6 lg:p-10 border border-white/10"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(40px)",
              transition:
                "opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            {status === "success" ? (
              <div
                className="min-h-[400px] flex flex-col items-start justify-center border-l-2 border-slate-900 pl-12"
                style={{
                  animation: "contactSuccessIn 0.5s ease-out both",
                }}
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
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Name Field */}
                <div
                  className="relative group"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.5s",
                    transitionDelay: "0.1s",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  <label
                    htmlFor="name"
                    className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                      activeField === "name" ? "text-white" : "text-neutral-500"
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
                <div
                  className="relative group"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.5s",
                    transitionDelay: "0.2s",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
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
                <div
                  className="relative group"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.5s",
                    transitionDelay: "0.3s",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
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
                      setFormState({ ...formState, message: e.target.value })
                    }
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    placeholder="Opowiedz nam o swoim pomyśle..."
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-bold text-white placeholder-white/20 focus:outline-none focus:border-white transition-all duration-500 resize-none rounded-none"
                  />
                </div>

                {/* Submit Button */}
                <div
                  className="pt-8"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.5s",
                    transitionDelay: "0.4s",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
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

      <style>{`
        @keyframes contactSuccessIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};
