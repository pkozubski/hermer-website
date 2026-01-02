import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PaymentMethods = () => {
  const cards = [
    { color: "#222", label: "Apple Pay", icon: "" },
    { color: "#0055ff", label: "Visa", icon: "VISA" },
    { color: "#ea580c", label: "Mastercard", icon: "MC" },
  ];

  return (
    <Container>
      <CardStack>
        {cards.map((card, i) => (
          <CreditCard
            key={i}
            style={{
              zIndex: cards.length - i,
              backgroundColor: card.color,
            }}
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: i * -25,
              rotate: i * 4,
              scale: 1 - i * 0.05,
            }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6, type: "spring" }}
            whileHover={{ y: i * -35, rotate: i * 8 }}
          >
            <Chip />
            <Logo>{card.icon}</Logo>
            <CardNumber>•••• 4242</CardNumber>
          </CreditCard>
        ))}
        <BlikBadge
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img
            src="/BLIK-LOGO-RGB.webp"
            alt="BLIK"
            style={{ height: 50, width: "auto" }}
          />
        </BlikBadge>
      </CardStack>
    </Container>
  );
};

export default PaymentMethods;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

const CardStack = styled.div`
  position: relative;
  width: 220px;
  height: 140px;
`;

const CreditCard = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  border-radius: 16px;
  padding: 16px;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform-origin: bottom center;
`;

const Chip = styled.div`
  width: 30px;
  height: 20px;
  background: linear-gradient(135deg, #fbbf24, #d97706);
  border-radius: 4px;
`;

const Logo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-weight: 800;
  font-style: italic;
  font-size: 18px;
  opacity: 0.9;
`;

const CardNumber = styled.div`
  font-family: monospace;
  font-size: 16px;
  opacity: 0.8;
  letter-spacing: 2px;
`;

const BlikBadge = styled(motion.div)`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: transparent;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
