import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Data
const REVIEWS = [
  {
    initial: "AK",
    name: "Anna Kowalska",
    role: "CEO, TechStart",
    text: "Design premium, wdrożenie ekspresowe. Wyniki przerosły oczekiwania.",
    color: "#fca5a5", // Pastel Red
    rotate: -2,
  },
  {
    initial: "JP",
    name: "Janusz Polak",
    role: "Marketing Dir.",
    text: "Proces bez stresu. Pełna terminowość. Kod działa idealnie.",
    color: "#93c5fd", // Pastel Blue
    rotate: 1.5,
  },
  {
    initial: "MW",
    name: "Marta Wilk",
    role: "E-commerce",
    text: "SEO i analityka od razu na zielono. Polecam z czystym sumieniem.",
    color: "#86efac", // Pastel Green
    rotate: -1,
  },
];

const ReviewsVisualization = () => {
  return (
    <ReviewsContainer aria-hidden="true">
      {REVIEWS.map((review, i) => (
        <ReviewCard
          key={i}
          $rotate={review.rotate}
          $zIndex={REVIEWS.length - i}
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: review.rotate,
          }}
          whileHover={{
            scale: 1.02,
            rotate: 0,
            y: -5,
            transition: { duration: 0.2 },
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: "backOut",
          }}
        >
          <AvatarWrapper $color={review.color}>
            {/* Simple pattern to simulate image if real img not available */}
            <span style={{ opacity: 0.6 }}>{review.initial}</span>
          </AvatarWrapper>

          <Content>
            <Header>
              <Name>{review.name}</Name>
              <Role>{review.role}</Role>
            </Header>
            <Text>{review.text}</Text>
          </Content>
        </ReviewCard>
      ))}
      <BlurGradient />
    </ReviewsContainer>
  );
};

export default ReviewsVisualization;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px 0 30px;
  position: relative;
`;

const ReviewCard = styled(motion.div)<{ $rotate: number; $zIndex: number }>`
  background: #ffffff;
  width: 100%;
  max-width: 440px;
  padding: 16px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  z-index: ${(props) => props.$zIndex};
  margin-bottom: -15px; /* Overlap effect */

  /* Stylizacja cienia i obramowania */
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.03); /* Subtle border */

  transform-origin: center center;
`;

const AvatarWrapper = styled.div<{ $color: string }>`
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 18px;
  background: ${(props) => `linear-gradient(135deg, ${props.$color}, #fff)`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #111827;
`;

const Role = styled.div`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 500;
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  color: #4b5563;
  font-weight: 450;

  /* Limit to 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlurGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 0%,
    transparent 100%
  );
  z-index: 10;
  pointer-events: none;
`;
