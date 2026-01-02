import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const IntegrationsVisualization = () => {
  const cards = [
    {
      id: "analytics",
      title: "Analityka GA4",
      desc: "Pełne śledzenie konwersji",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M18 9l-5 5-4-4-3 3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "#F59E0B",
      x: -55,
      y: -50,
      rotate: -6,
      zIndex: 2,
    },
    {
      id: "crm",
      title: "Integracja CRM",
      desc: "Automatyczny lead flow",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: "#3B82F6",
      x: 55,
      y: -30,
      rotate: 4,
      zIndex: 3,
    },
    {
      id: "meta",
      title: "Meta Pixel",
      desc: "Retargeting reklamowy",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      color: "#EC4899",
      x: -45,
      y: 50,
      rotate: 5,
      zIndex: 4,
    },
    {
      id: "cloud",
      title: "Szybki Cloud",
      desc: "Hosting SSL & CDN",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      color: "#10B981",
      x: 50,
      y: 40,
      rotate: -3,
      zIndex: 1,
    },
  ];

  return (
    <Container>
      <DotPattern />
      <CardsWrapper>
        {cards.map((card, i) => (
          <FloatingCard
            key={card.id}
            style={{
              zIndex: card.zIndex,
              x: card.x,
              y: card.y,
              rotate: card.rotate,
            }}
            initial={{ opacity: 0, scale: 0.8, y: card.y + 50 }}
            animate={{ opacity: 1, scale: 1, y: card.y }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.3 },
            }}
          >
            <CardGlow $color={card.color} />
            <IconBadge $color={card.color}>{card.icon}</IconBadge>
            <TextContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDesc>{card.desc}</CardDesc>
            </TextContent>
          </FloatingCard>
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default IntegrationsVisualization;

/* --- Styled Components --- */

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #020202; /* Pitch Black */
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const DotPattern = styled.div`
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(#333 2px, transparent 2px);
  background-size: 24px 24px;

  /* Radial mask: visible in center, fades out at edges */
  mask-image: radial-gradient(circle at center, black 10%, transparent 60%);
  -webkit-mask-image: radial-gradient(
    circle at center,
    black 10%,
    transparent 60%
  );

  pointer-events: none;
  opacity: 0.8;
  animation: rotateSlow 60s linear infinite;

  @keyframes rotateSlow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CardsWrapper = styled.div`
  position: relative;
  width: 0;
  height: 0;
  /* Center point for scattered cards */
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  width: 160px; /* Reduced to fit better */
  padding: 12px;
  background: rgba(20, 20, 23, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform-origin: center;
  cursor: default;

  /* Subtle noise texture */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    pointer-events: none;
    border-radius: 14px;
  }
`;

const CardGlow = styled.div<{ $color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  box-shadow: inset 0 0 20px ${(props) => props.$color}15;
  pointer-events: none;
  opacity: 0.6;
`;

const IconBadge = styled.div<{ $color: string }>`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${(props) => props.$color}20;
  color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.$color}40;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.3px;
`;

const CardDesc = styled.div`
  font-size: 9px;
  color: #9ca3af;
  margin-top: 2px;
  font-weight: 500;
`;
