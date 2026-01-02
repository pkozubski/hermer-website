import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

// Imported Marketing Sub-components
import AdCampaigns from "./marketing-service/AdCampaigns";
import ContentCalendar from "./marketing-service/ContentCalendar";
import GrowthFunnel from "./marketing-service/GrowthFunnel";

type ServiceCardProps = {
  className?: string;
  title?: string;
  description?: string;
};

interface SlideData {
  type: "ads" | "content" | "growth";
  title: string;
  subtitle: string;
  theme: "white" | "black" | "glass";
}

const SLIDES: SlideData[] = [
  {
    type: "ads",
    title: "Social Ads",
    subtitle: "Kampanie, które sprzedają",
    theme: "glass",
  },
  {
    type: "content",
    title: "Content Marketing",
    subtitle: "Strategia i planowanie treści",
    theme: "white",
  },
  {
    type: "growth",
    title: "Skalowanie ROAS",
    subtitle: "Mierzalne wyniki i analityka",
    theme: "black",
  },
];

const AUTOPLAY_MS = 5000;
const SHIFT_X = 320;
const SHIFT_Y = 34;

export function MarketingServiceCard({
  className,
  title = "Marketing 360°",
  description = "Przejmij kontrolę nad wzrostem. Łączymy płatne kampanie (Ads) z angażującym contentem i twardą analityką. Dostarczamy leady, nie tylko lajki.",
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
                $theme={slide.theme}
                style={getSlideStyles(index)}
                onClick={() => goTo(index)}
              >
                {/* Decor only for glass theme */}
                {slide.theme === "glass" && (
                  <>
                    <DecorBlobs $type={slide.type} />
                    <DecorVignette />
                  </>
                )}

                <SlideInner>
                  <SlideHeader>
                    <SlideTitle $theme={slide.theme}>{slide.title}</SlideTitle>
                    <SlideSubtitle $theme={slide.theme}>
                      {slide.subtitle}
                    </SlideSubtitle>
                  </SlideHeader>
                  <ContentArea>
                    {slide.type === "ads" && <AdCampaigns />}
                    {slide.type === "content" && <ContentCalendar />}
                    {slide.type === "growth" && <GrowthFunnel />}
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
    rgba(236, 72, 153, 0.15),
    transparent 70%
  ); /* Pink for marketing */
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

const Slide = styled.section<{ $theme: "white" | "black" | "glass" }>`
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

  ${(props) =>
    props.$theme === "white" &&
    css`
      background: #ffffff;
      border: 1px solid #e2e8f0;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    `}

  ${(props) =>
    props.$theme === "black" &&
    css`
      background: #0f172a;
      border: 1px solid #1e293b;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    `}

  ${(props) =>
    props.$theme === "glass" &&
    css`
      background: radial-gradient(
        130% 150% at 50% 0%,
        rgba(30, 41, 59, 0.6) 0%,
        rgba(15, 23, 42, 0.4) 50%,
        rgba(2, 6, 23, 0.75) 100%
      );
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
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
    background: radial-gradient(
      circle,
      rgba(236, 72, 153, 0.25),
      transparent 70%
    );
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
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.3),
      transparent 70%
    );
  }
`;

const DecorVignette = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    transparent 45%,
    rgba(15, 23, 42, 0.3) 100%
  );
  box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.2);
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

const SlideTitle = styled.h4<{ $theme: string }>`
  margin: 0;
  font-size: 36px;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-weight: 800;
  color: ${(p) => (p.$theme === "white" ? "#1e293b" : "#fff")};
  text-shadow: ${(p) =>
    p.$theme === "white" ? "none" : "0 2px 10px rgba(0,0,0,0.5)"};
`;

const SlideSubtitle = styled.p<{ $theme: string }>`
  margin: 8px 0 0;
  font-size: 17px;
  color: ${(p) =>
    p.$theme === "white" ? "#64748b" : "rgba(255, 255, 255, 0.7)"};
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
  background: rgba(30, 41, 59, ${(props) => (props.$active ? 0.3 : 0.1)});
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
