import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

// Imported E-commerce Sub-components
import ProductShowcase from "./ecommerce-service/ProductShowcase";
import RevenueChart from "./ecommerce-service/RevenueChart";
import PaymentMethods from "./ecommerce-service/PaymentMethods";
import OrderNotifications from "./ecommerce-service/OrderNotifications";

type ServiceCardProps = {
  className?: string;
  title?: string;
  description?: string;
};

interface SlideData {
  type: "product" | "revenue" | "mobile" | "payments";
  title: string;
  subtitle: string;
}

const SLIDES: SlideData[] = [
  {
    type: "product",
    title: "Design sprzedażowy",
    subtitle: "UX zoptymalizowany pod konwersję",
  },
  {
    type: "revenue",
    title: "Analityka i Zyski",
    subtitle: "Śledzenie sprzedaży w czasie rzeczywistym",
  },
  {
    type: "mobile",
    title: "Zarządzanie mobilne",
    subtitle: "Twój sklep zawsze pod ręką",
  },
  {
    type: "payments",
    title: "Szybkie płatności",
    subtitle: "BLIK, Karty, PayPo - bezpiecznie",
  },
];

const AUTOPLAY_MS = 5000;
const SHIFT_X = 320;
const SHIFT_Y = 34;

export function ECommerceServiceCard({
  className,
  title = "Sklepy Internetowe",
  description = "Budujemy dochodowe e-commerce. Od designu produktu, przez szybkie płatności, aż po automatyzację marketingu. Sklep, który zarabia na siebie 24/7.",
}: ServiceCardProps) {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const pointerDown = useRef(false);
  const startX = useRef(0);
  const moved = useRef(0);

  const clampIndex = useCallback((i: number) => {
    const n = SLIDES.length;
    return ((i % n) + n) % n;
  }, []);

  const goTo = useCallback(
    (i: number) => setActive(clampIndex(i)),
    [clampIndex]
  );
  const nextSlide = useCallback(
    () => setActive((prev) => clampIndex(prev + 1)),
    [clampIndex]
  );
  const prevSlide = useCallback(
    () => setActive((prev) => clampIndex(prev - 1)),
    [clampIndex]
  );

  useEffect(() => {
    if (reducedMotion || isPaused) return;
    const timer = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [reducedMotion, isPaused, nextSlide]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
    },
    [prevSlide, nextSlide]
  );

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
    if (moved.current > threshold) prevSlide();
    else if (moved.current < -threshold) nextSlide();
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
        transition={{ duration: 0.6 }}
      >
        <CardGlow />
        <VisualSection>
          <StageShadow />
          <Stage
            ref={stageRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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
              >
                {/* Background Decor Elements for heavy Glassmorphism */}
                <DecorBlobs $type={slide.type} />
                <DecorVignette />

                <SlideInner>
                  <SlideHeader>
                    <SlideTitle $type={slide.type}>{slide.title}</SlideTitle>
                    <SlideSubtitle $type={slide.type}>
                      {slide.subtitle}
                    </SlideSubtitle>
                  </SlideHeader>
                  <ContentArea>
                    {slide.type === "product" && <ProductShowcase />}
                    {slide.type === "revenue" && <RevenueChart />}
                    {slide.type === "payments" && <PaymentMethods />}
                    {slide.type === "mobile" && <OrderNotifications />}
                  </ContentArea>
                </SlideInner>
              </Slide>
            ))}
          </Stage>
          <Pager>
            {SLIDES.map((_, i) => (
              <PagerButton key={i} onClick={() => goTo(i)}>
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

// Styled Components

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
  position: absolute;
  top: -120px;
  right: -120px;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(16, 185, 129, 0.15),
    transparent 70%
  );
  filter: blur(40px);
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

// Shared Glass Style applied to all slides
const Slide = styled.section<{ $type: string }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 560px;
  height: 420px;
  border-radius: 44px;
  overflow: hidden;
  will-change: transform, filter, opacity;
  transition:
    transform 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
    filter 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
    opacity 520ms cubic-bezier(0.2, 0.9, 0.2, 1);
  cursor: pointer;

  /* 
   * TRUE GLASSMORPHISM 
   * High Transparency (0.1 - 0.4) to let Blobs shine through 
   */
  background: radial-gradient(
    130% 150% at 50% 0%,
    rgba(255, 255, 255, 0.5) 0%,
    /* Light reflection at top */ rgba(255, 255, 255, 0.1) 40%,
    /* Very clear middle */ rgba(230, 240, 255, 0.2) 100%
      /* Slight tint at bottom */
  );
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  /* Crisp borders and highlights */
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    0 25px 50px -12px rgba(0, 0, 0, 0.15);

  /* Dark Theme Variants (Revenue / Payments) */
  ${(props) =>
    (props.$type === "revenue" || props.$type === "payments") &&
    css`
      background: radial-gradient(
        130% 150% at 50% 0%,
        rgba(30, 41, 59, 0.6) 0%,
        rgba(15, 23, 42, 0.4) 50%,
        rgba(2, 6, 23, 0.75) 100%
      );
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.05),
        0 25px 50px -12px rgba(0, 0, 0, 0.4);
    `}

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const DecorBlobs = styled.div<{ $type: string }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: -15%;
    right: -25%;
    width: 80%;
    height: 80%;
    z-index: 0;
    filter: blur(70px);
    opacity: 0.9;

    background: ${
      (props) =>
        props.$type === "product"
          ? "radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)"
          : props.$type === "revenue"
            ? "radial-gradient(circle, rgba(16, 185, 129, 0.25), transparent 70%)"
            : props.$type === "mobile"
              ? "radial-gradient(circle, rgba(147, 51, 234, 0.4), transparent 70%)"
              : "radial-gradient(circle, rgba(249, 115, 22, 0.3), transparent 70%)" // payments orange
    };
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -15%;
    left: -25%;
    width: 80%;
    height: 80%;
    z-index: 0;
    filter: blur(70px);
    opacity: 0.9;

    background: ${
      (props) =>
        props.$type === "product"
          ? "radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%)"
          : props.$type === "revenue"
            ? "radial-gradient(circle, rgba(6, 78, 59, 0.4), transparent 70%)"
            : props.$type === "mobile"
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)"
              : "radial-gradient(circle, rgba(30, 58, 138, 0.4), transparent 70%)" // payments blue
    };
  }
`;

// Vignette layer - Creates the "gray edges" effect
const DecorVignette = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  /* Stronger vignette at edges */
  background: radial-gradient(
    circle at center,
    transparent 45%,
    rgba(100, 110, 120, 0.15) 100%
  );
  box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.05);
`;

const SlideInner = styled.div`
  position: relative;
  z-index: 2;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SlideHeader = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
`;

const SlideTitle = styled.h4<{ $type: string }>`
  margin: 0;
  font-size: 36px;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-weight: 800;
  color: ${(props) =>
    props.$type === "revenue" || props.$type === "payments"
      ? "#fff"
      : "#1e293b"};
  text-shadow: ${(props) =>
    props.$type === "revenue" || props.$type === "payments"
      ? "0 2px 10px rgba(0,0,0,0.3)"
      : "none"};
`;

const SlideSubtitle = styled.p<{ $type: string }>`
  margin: 8px 0 0;
  font-size: 17px;
  color: ${(props) =>
    props.$type === "revenue" || props.$type === "payments"
      ? "rgba(255, 255, 255, 0.7)"
      : "#475569"};
`;

const ContentArea = styled.div`
  flex: 1;
  position: relative;
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
  font-weight: 700;
  color: #101317;
`;

const CopyDescription = styled.p`
  margin: 0;
  max-width: 65ch;
  font-size: 17px;
  line-height: 1.6;
  color: #4b5563;
`;
