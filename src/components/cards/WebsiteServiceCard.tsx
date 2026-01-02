import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

// Imported sub-components
import StructureVisualization from "./website-service/StructureVisualization";
import DateCounter from "./website-service/DateCounter";
import ReviewsList from "./website-service/ReviewsList";
import IntegrationsVisualization from "./website-service/IntegrationsVisualization";

/**
 * Website Service Card - Carousel-based offer card
 */

type ServiceCardProps = {
  className?: string;
  title?: string;
  description?: string;
};

interface SlideData {
  type: "structure" | "metrics" | "reviews" | "integrations";
  title: string;
  subtitle: string;
}

const SLIDES: SlideData[] = [
  {
    type: "structure",
    title: "Struktura strony",
    subtitle: "Sitemap + sekcje pod konwersję",
  },
  {
    type: "metrics",
    title: "Czas realizacji",
    subtitle: "Zamów dziś, projekt gotowy:",
  },
  {
    type: "reviews",
    title: "Opinie klientów",
    subtitle: "Design, performance, komunikacja",
  },
  {
    type: "integrations",
    title: "Publikacja & integracje",
    subtitle: "Analityka, formularze, CRM, automatyzacje",
  },
];

const AUTOPLAY_MS = 4500;
const SHIFT_X = 320;
const SHIFT_Y = 34;

export function ServiceCard({
  className,
  title = "Tworzenie stron internetowych",
  description = "Jesteśmy agencją, która projektuje i wdraża szybkie strony, landing pages oraz sklepy. Łączymy UX, design, development i SEO — w uporządkowanym procesie, z naciskiem na konwersję.",
}: ServiceCardProps) {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0); // Start at 0 for Structure
  const [isPaused, setIsPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // Pointer tracking for swipe
  const pointerDown = useRef(false);
  const startX = useRef(0);
  const moved = useRef(0);

  const clampIndex = useCallback((i: number) => {
    const n = SLIDES.length;
    return ((i % n) + n) % n;
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setActive(clampIndex(i));
    },
    [clampIndex]
  );

  const nextSlide = useCallback(() => {
    setActive((prev) => clampIndex(prev + 1));
  }, [clampIndex]);

  const prevSlide = useCallback(() => {
    setActive((prev) => clampIndex(prev - 1));
  }, [clampIndex]);

  // Autoplay
  useEffect(() => {
    if (reducedMotion || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [reducedMotion, isPaused, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    },
    [prevSlide, nextSlide]
  );

  // Pointer handlers for swipe
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      pointerDown.current = true;
      startX.current = e.clientX;
      moved.current = 0;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!pointerDown.current) return;
      moved.current = e.clientX - startX.current;
    },
    []
  );

  const handlePointerUp = useCallback(() => {
    if (!pointerDown.current) return;
    pointerDown.current = false;

    const threshold = 60;
    if (moved.current > threshold) {
      prevSlide();
    } else if (moved.current < -threshold) {
      nextSlide();
    }
  }, [prevSlide, nextSlide]);

  const getSlideStyles = (index: number) => {
    const offset = index - active;
    const abs = Math.abs(offset);
    const isFar = abs >= 2.2;

    const scale = abs === 0 ? 1 : abs === 1 ? 0.94 : 0.88;
    const blur = abs === 0 ? 0 : abs === 1 ? 6 : 10;
    const opacity = isFar ? 0 : abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25;

    const x = offset * SHIFT_X;
    const y = abs * SHIFT_Y;
    const z = 10 - abs;

    return {
      zIndex: z,
      opacity,
      filter: `blur(${blur}px)`,
      transform: `translateX(-50%) translateX(${x}px) translateY(${y}px) scale(${scale})`,
      pointerEvents: isFar ? ("none" as const) : ("auto" as const),
    };
  };

  return (
    <OfferFrame className={className}>
      <OfferCard
        role="region"
        aria-label={`Karta oferty: ${title}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
      >
        <CardGlow aria-hidden="true" />

        <VisualSection>
          <StageShadow aria-hidden="true" />

          <Stage
            ref={stageRef}
            tabIndex={0}
            aria-label="Karuzela kart procesu tworzenia stron"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {SLIDES.map((slide, index) => (
              <Slide
                key={index}
                $type={slide.type}
                style={getSlideStyles(index)}
                onClick={() => goTo(index)}
                aria-label={`Karta: ${slide.title}`}
              >
                <SlideInner>
                  {/* Hide default header for metrics slide because DateCounter has its own header */}
                  {slide.type !== "metrics" && (
                    <SlideHeader $type={slide.type}>
                      <SlideTitle $type={slide.type}>{slide.title}</SlideTitle>
                      <SlideSubtitle $type={slide.type}>
                        {slide.subtitle}
                      </SlideSubtitle>
                    </SlideHeader>
                  )}

                  <ContentArea>
                    {slide.type === "structure" && <StructureVisualization />}
                    {slide.type === "metrics" && (
                      <DateCounter active={active === index} />
                    )}
                    {slide.type === "reviews" && <ReviewsList />}
                    {slide.type === "integrations" && (
                      <IntegrationsVisualization />
                    )}
                  </ContentArea>
                </SlideInner>
              </Slide>
            ))}
          </Stage>

          <Pager aria-label="Wskaźnik karuzeli">
            {SLIDES.map((_, i) => (
              <PagerButton
                key={i}
                type="button"
                aria-label={`Przejdź do karty ${i + 1}`}
                aria-current={i === active ? "true" : "false"}
                onClick={() => goTo(i)}
              >
                <PagerDot $active={i === active} />
              </PagerButton>
            ))}
          </Pager>
        </VisualSection>

        <CopySection>
          <CopyTitle>{title}</CopyTitle>
          <CopyDescription>{description}</CopyDescription>
        </CopySection>
      </OfferCard>
    </OfferFrame>
  );
}

/* ----------------------------- Styled Components ---------------------------- */

const OfferFrame = styled.div`
  width: min(980px, 100%);
  position: relative;
  padding: 18px;
  border-radius: 44px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px dashed rgba(215, 219, 224, 0.95);
    border-radius: 44px;
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 10px;
    width: 100%;
  }
`;

const OfferCard = styled(motion.article)`
  background: #ffffff;
  border-radius: 34px;
  box-shadow: 0 24px 70px rgba(16, 19, 23, 0.14);
  padding: 34px 38px 30px;
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 20px 16px 20px;
    border-radius: 24px;
  }
`;

const CardGlow = styled.div`
  content: "";
  position: absolute;
  top: -120px;
  left: -120px;
  right: -120px;
  height: 260px;
  background:
    radial-gradient(
      180px 120px at 60% 60%,
      rgba(86, 182, 255, 0.28),
      rgba(86, 182, 255, 0) 60%
    ),
    radial-gradient(
      240px 160px at 25% 30%,
      rgba(182, 221, 255, 0.22),
      rgba(182, 221, 255, 0) 65%
    );
  filter: blur(8px);
  opacity: 0.9;
  pointer-events: none;
`;

const VisualSection = styled.div`
  position: relative;
  height: 450px;
  margin-bottom: 22px;

  @media (max-width: 860px) {
    height: 490px;
  }
`;

const StageShadow = styled.div`
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
  width: 780px;
  height: 220px;
  background: radial-gradient(
    closest-side,
    rgba(16, 19, 23, 0.18),
    rgba(16, 19, 23, 0) 65%
  );
  filter: blur(22px);
  opacity: 0.26;
  pointer-events: none;
`;

const Stage = styled.div`
  position: relative;
  height: 420px;
  width: 100%;
  outline: none;

  @media (max-width: 860px) {
    height: 440px;
  }
`;

const Slide = styled.section<{ $type: string }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 560px;
  height: 420px;
  border-radius: 44px;
  box-shadow: 0 22px 55px rgba(16, 19, 23, 0.22);
  overflow: hidden;
  will-change: transform, filter, opacity;
  transition:
    transform 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
    filter 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
    opacity 520ms cubic-bezier(0.2, 0.9, 0.2, 1);
  user-select: none;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${(props) =>
    props.$type === "structure"
      ? css`
          background: radial-gradient(circle at top left, #1e293b, #0f172a);
          border: 1px solid rgba(59, 130, 246, 0.2);
        `
      : props.$type === "metrics"
        ? css`
            /* Heavy Glass with MUCH STRONGER Gray Vignette */
            background: radial-gradient(
              120% 150% at 50% 0%,
              rgba(255, 255, 255, 0.85) 0%,
              rgba(200, 205, 215, 0.75) 40%,
              rgba(80, 85, 95, 0.9) 100%
            );
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);

            /* Sharper border and heavy inner shadow */
            border: 1px solid rgba(255, 255, 255, 0.45);
            box-shadow:
              inset 0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 0 100px rgba(0, 0, 0, 0.2),
              0 25px 50px -12px rgba(0, 0, 0, 0.25);

            /* Colorful glowing blobs behind the glass */
            &::before {
              content: "";
              position: absolute;
              top: -15%;
              right: -25%;
              width: 80%;
              height: 80%;
              background: radial-gradient(
                circle,
                rgba(59, 130, 246, 0.6),
                transparent 70%
              );
              z-index: 0;
              filter: blur(50px);
              opacity: 0.8;
            }
            &::after {
              content: "";
              position: absolute;
              bottom: -15%;
              left: -25%;
              width: 80%;
              height: 80%;
              background: radial-gradient(
                circle,
                rgba(239, 68, 68, 0.4),
                transparent 70%
              );
              z-index: 0;
              filter: blur(50px);
              opacity: 0.8;
            }
          `
        : props.$type === "reviews"
          ? css`
              /* Minimalist clean background for reviews */
              background: #f3f4f6;
              border: 1px solid rgba(255, 255, 255, 0.8);
              /* Subtle top light to make it look like paper/clay */
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
            `
          : props.$type === "integrations"
            ? css`
                /* Cyber Noir for Integrations */
                background: #020202;
                border: 1px solid rgba(255, 255, 255, 0.15);
              `
            : css`
                background: #111827;
                border: 1px solid rgba(255, 255, 255, 0.08);
                &::before {
                  content: "";
                  position: absolute;
                  inset: 0;
                  background: radial-gradient(
                    circle at 90% 90%,
                    rgba(16, 185, 129, 0.08),
                    transparent 50%
                  );
                }
              `}

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const SlideInner = styled.div`
  position: relative;
  z-index: 1;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SlideHeader = styled.div<{ $type: string }>`
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
`;

const SlideTitle = styled.h4<{ $type: string }>`
  margin: 0;
  font-size: 36px;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    sans-serif;
  font-weight: 800;
  color: ${(props) => (props.$type === "reviews" ? "#1f2937" : "#fff")};
`;

const SlideSubtitle = styled.p<{ $type: string }>`
  margin: 8px 0 0;
  font-size: 17px;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    sans-serif;
  color: ${(props) =>
    props.$type === "reviews" ? "#6b7280" : "rgba(255, 255, 255, 0.6)"};
`;

const MetricsLabel = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #ef4444;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const ContentArea = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Pager = styled.div`
  position: absolute;
  left: 50%;
  bottom: 6px;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  align-items: center;
  opacity: 0.92;
  z-index: 5;
`;

const PagerButton = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  padding: 4px;
  cursor: pointer;
`;

const PagerDot = styled.span<{ $active?: boolean }>`
  display: block;
  border-radius: 999px;
  background: rgba(17, 24, 39, ${(props) => (props.$active ? 0.16 : 0.14)});
  transition: all 280ms ease;
  width: ${(props) => (props.$active ? "32px" : "8px")};
  height: 8px;
`;

const CopySection = styled.div`
  margin-top: 10px;
`;

const CopyTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 32px;
  letter-spacing: -0.03em;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    sans-serif;
  font-weight: 700;
  color: #101317;
`;

const CopyDescription = styled.p`
  margin: 0;
  max-width: 65ch;
  font-size: 17px;
  line-height: 1.6;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    sans-serif;
  color: #4b5563;
`;
