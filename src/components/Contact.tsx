import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import ContactSquiggle from "./ContactSquiggle";
import { ScrambleText } from "./ui/ScrambleText";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
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
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Squiggle Animation */}
      <ContactSquiggle />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          {/* --- LEFT: VISUAL & INFO --- */}
          <div className="w-full lg:w-5/12 pt-4">
            {/* Title */}
            <div className="mb-20">
              <SplitRevealTitle
                line1="Zacznijmy"
                line2="Projekt"
                className="text-slate-900! text-7xl lg:text-9xl mb-8 tracking-tighter"
              />
              <LineReveal
                lines={[
                  "Masz wizję? My mamy technologię.",
                  "Napisz do nas, a stworzymy coś, co",
                  "zostanie zapamiętane.",
                ]}
                className="text-slate-500 text-lg max-w-sm leading-relaxed mt-8 font-medium"
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
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    {item.label}
                  </h4>
                  <a
                    href={item.href}
                    className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-[#916AFF] transition-colors inline-flex items-center gap-4"
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: SWISS GRID FORM --- */}
          <motion.div
            className="w-full lg:w-7/12 pt-8 bg-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {status === "success" ? (
              <motion.div
                className="min-h-[400px] flex flex-col items-start justify-center border-l-2 border-slate-900 pl-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  Wiadomość wysłana.
                </h3>
                <p className="text-slate-500 text-xl mb-8 max-w-md">
                  Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-slate-900 font-bold border-b-2 border-slate-900 hover:text-[#916AFF] hover:border-[#916AFF] transition-colors pb-1"
                >
                  Wyślij kolejną wiadomość
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-16">
                {/* Name Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <label
                    htmlFor="name"
                    className={`block text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300 ${
                      activeField === "name"
                        ? "text-slate-900"
                        : "text-slate-400"
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
                    className="w-full bg-transparent border-b border-slate-200 py-6 text-2xl md:text-4xl font-bold text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all duration-500 rounded-none"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <label
                    htmlFor="email"
                    className={`block text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300 ${
                      activeField === "email"
                        ? "text-slate-900"
                        : "text-slate-400"
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
                    className="w-full bg-transparent border-b border-slate-200 py-6 text-2xl md:text-4xl font-bold text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all duration-500 rounded-none"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <label
                    htmlFor="message"
                    className={`block text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300 ${
                      activeField === "message"
                        ? "text-slate-900"
                        : "text-slate-400"
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
                    className="w-full bg-transparent border-b border-slate-200 py-6 text-2xl md:text-4xl font-bold text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all duration-500 resize-none rounded-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`w-full py-8 md:py-10 bg-slate-900 text-white rounded-full text-xl md:text-3xl font-display font-bold hover:bg-[#916AFF] transition-all duration-500 flex items-center justify-center gap-4 group ${
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
                          size={32}
                        />
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
