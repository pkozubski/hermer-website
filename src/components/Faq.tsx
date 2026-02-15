"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { ArrowRight } from "lucide-react";
import { LineReveal } from "./ui/LineReveal";
import { usePathname } from "next/navigation";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";

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

export interface FaqItem {
  id: number | string;
  question: string;
  answer: string | PortableTextBlock[];
}

interface FaqProps {
  items?: FaqItem[];
  sanitySlug?: string;
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-3 last:mb-0">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-3 list-disc pl-6 space-y-1 marker:text-[#916AFF]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-3 list-decimal pl-6 space-y-1 marker:text-[#916AFF]">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
  },
};

function FaqAnswerContent({ answer }: { answer: FaqItem["answer"] }) {
  if (typeof answer === "string") {
    return <>{answer}</>;
  }

  if (Array.isArray(answer) && answer.length > 0) {
    return <PortableText value={answer} components={portableTextComponents} />;
  }

  return null;
}

export const Faq: React.FC<FaqProps> = ({ items = FAQ_ITEMS, sanitySlug }) => {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement>(null);
  const [sanityItems, setSanityItems] = useState<FaqItem[] | null>(null);
  const [isInView, setIsInView] = useState(false);

  const slug = useMemo(() => {
    if (sanitySlug) {
      return sanitySlug.replace(/^\/|\/$/g, "");
    }

    if (!pathname || pathname === "/") {
      return "home";
    }

    return pathname.replace(/^\/|\/$/g, "");
  }, [pathname, sanitySlug]);

  useEffect(() => {
    let cancelled = false;

    async function loadFaqFromSanity() {
      if (!slug) {
        return;
      }

      try {
        const response = await fetch(`/api/faqs?slug=${encodeURIComponent(slug)}`, {
          cache: "no-store",
        });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { items?: FaqItem[] };
        if (!cancelled && Array.isArray(data.items) && data.items.length > 0) {
          setSanityItems(data.items);
        }
      } catch {
        // Keep provided fallback items when API is unavailable.
      }
    }

    loadFaqFromSanity();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const resolvedItems = useMemo(() => {
    return sanityItems && sanityItems.length > 0 ? sanityItems : items;
  }, [sanityItems, items]);

  const [activeId, setActiveId] = useState<number | string | null>(null);

  const currentActiveId = useMemo(() => {
    if (
      activeId !== null &&
      resolvedItems.some((item) => item.id === activeId)
    ) {
      return activeId;
    }
    return resolvedItems[0]?.id ?? null;
  }, [activeId, resolvedItems]);

  const activeItem = useMemo(
    () => resolvedItems.find((item) => item.id === currentActiveId) ?? null,
    [resolvedItems, currentActiveId],
  );

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

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-transparent relative overflow-hidden"
    >
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
            {resolvedItems.map((item, index) => (
              <div key={item.id} className="border-b border-white/10">
                <button
                  onClick={() => setActiveId(item.id)}
                  className={`group relative flex items-center py-6 md:py-8 w-full transition-colors duration-300`}
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateX(0)" : "translateX(-30px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.5s",
                    transitionDelay: `${index * 0.1}s`,
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  {/* Number */}
                  <span
                    className={`text-xs md:text-sm font-bold font-mono uppercase tracking-widest mr-6 md:mr-8 transition-colors duration-300 ${
                      currentActiveId === item.id
                        ? "text-[#916AFF]"
                        : "text-neutral-500"
                    }`}
                  >
                    {`0${index + 1}`}
                  </span>

                  {/* Question Text */}
                  <span
                    className={`flex-1 pr-12 text-xl md:text-3xl font-display font-bold text-left tracking-tight transition-colors duration-300 ${
                      currentActiveId === item.id
                        ? "text-white"
                        : "text-neutral-500 group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Active Indicator Arrow */}
                  <div
                    className={`absolute right-0 transition-all duration-300 ${
                      currentActiveId === item.id
                        ? "opacity-100 translate-x-0 text-[#916AFF]"
                        : "opacity-0 -translate-x-4 text-neutral-500"
                    }`}
                  >
                    <ArrowRight
                      size={24}
                      className={`transform transition-transform duration-300 ${currentActiveId === item.id ? "rotate-90 lg:rotate-0" : ""}`}
                    />
                  </div>
                </button>

                {/* Mobile Answer (Accordion) */}
                <div
                  className={`lg:hidden grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    currentActiveId === item.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 text-lg text-neutral-300 leading-relaxed">
                      <FaqAnswerContent answer={item.answer} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- DESKTOP: ANSWER DISPLAY --- */}
          <div
            className="hidden lg:block lg:col-span-7 relative pt-8 min-h-[300px]"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s, transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s",
            }}
          >
            {activeItem && (
              <div key={activeItem.id} className="animate-[faqFade_0.35s_ease-out]">
                <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">
                  Odpowiedź
                </h3>
                <div className="text-lg md:text-2xl lg:text-3xl font-medium text-white leading-relaxed tracking-tight">
                  <FaqAnswerContent answer={activeItem.answer} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes faqFade {
          from {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }
      `}</style>
    </section>
  );
};
