"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { ArrowRight } from "lucide-react";
import { LineReveal } from "./ui/LineReveal";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Ile czasu trwa stworzenie strony?",
    answer:
      "Czas to pieniądz, ale jakość wymaga momentu. Proste wizytówki zamykamy w 7-14 dni. Rozbudowane serwisy i e-commerce to proces 4-8 tygodniowy. Zawsze wiesz, na czym stoisz – harmonogram jest święty.",
  },
  {
    id: 2,
    question: "Czy otrzymam fakturę VAT?",
    answer:
      "Oczywiście. Działamy w pełni legalnie. Na każdą usługę wystawiamy polską fakturę VAT 23%. Biznes to transparentność.",
  },
  {
    id: 3,
    question: "Czy strona będzie mobilna?",
    answer:
      "W 2024 roku to nie pytanie, to standard. Projektujemy 'Mobile First'. Twoja strona będzie wyglądać obłędnie na iPhonie, tablecie i 34-calowym monitorze. Zero kompromisów.",
  },
  {
    id: 4,
    question: "Czy będę mógł edytować treść?",
    answer:
      "Tak. Oddajemy Ci klucze do królestwa. Wdrażamy intuicyjny CMS i uczymy Cię go obsługiwać. Edycja tekstów czy zdjęć będzie prostsza niż wrzucenie posta na Instagram.",
  },
];

interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
}

interface FaqProps {
  items?: FaqItem[];
}

export const Faq: React.FC<FaqProps> = ({ items = FAQ_ITEMS }) => {
  const [activeId, setActiveId] = useState<number | string>(items[0]?.id || 1);

  return (
    <section className="py-24 lg:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="mb-20 lg:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="order-2 md:order-1">
            <LineReveal
              lines={[
                "Jasne zasady to fundament.",
                "Oto konkrety, o które pytacie",
                "nas najczęściej.",
              ]}
              once
              className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed"
            />
          </div>
          <div className="order-1 md:order-2">
            <SplitRevealTitle
              line1="Warto"
              line2="Wiedzieć"
              once
              className="text-white text-5xl md:text-8xl tracking-tighter"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* --- QUESTIONS LIST --- */}
          <div className="lg:col-span-5 flex flex-col">
            {items.map((item, index) => (
              <div key={item.id} className="border-b border-white/10">
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onClick={() => setActiveId(item.id)}
                  className={`group relative flex items-center py-6 md:py-8 w-full transition-colors duration-300`}
                >
                  {/* Number */}
                  <span
                    className={`text-xs md:text-sm font-bold font-mono uppercase tracking-widest mr-6 md:mr-8 transition-colors duration-300 ${
                      activeId === item.id
                        ? "text-[#916AFF]"
                        : "text-neutral-500"
                    }`}
                  >
                    {`0${index + 1}`}
                  </span>

                  {/* Question Text */}
                  <span
                    className={`flex-1 pr-12 text-xl md:text-3xl font-display font-bold text-left tracking-tight transition-colors duration-300 ${
                      activeId === item.id
                        ? "text-white"
                        : "text-neutral-500 group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Active Indicator Arrow */}
                  <div
                    className={`absolute right-0 transition-all duration-300 ${
                      activeId === item.id
                        ? "opacity-100 translate-x-0 text-[#916AFF]"
                        : "opacity-0 -translate-x-4 text-neutral-500"
                    }`}
                  >
                    <ArrowRight
                      size={24}
                      className={`transform transition-transform duration-300 ${activeId === item.id ? "rotate-90 lg:rotate-0" : ""}`}
                    />
                  </div>
                </motion.button>

                {/* Mobile Answer (Accordion) */}
                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="lg:hidden overflow-hidden"
                    >
                      <p className="pb-8 text-lg text-neutral-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* --- DESKTOP: ANSWER DISPLAY --- */}
          <motion.div
            className="hidden lg:block lg:col-span-7 relative pt-8 min-h-[300px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <AnimatePresence mode="wait">
              {items.map(
                (item) =>
                  activeId === item.id && (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">
                        Odpowiedź
                      </h3>
                      <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white leading-relaxed tracking-tight">
                        {item.answer}
                      </p>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
