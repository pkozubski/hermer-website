import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const OrderNotifications = () => {
  const notifs = [
    { title: "Nowe zamówienie #4821", time: "Teraz", amount: "+ 249 PLN" },
    { title: "Płatność przyjęta", time: "2 min temu", amount: "PayU" },
    {
      title: "Kowalski opłacił koszyk",
      time: "5 min temu",
      amount: "+ 1200 PLN",
    },
  ];

  return (
    <Container>
      <PhoneFrame>
        <Notch />
        <List>
          {notifs.map((n, i) => (
            <Notification
              key={i}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.4, type: "spring" }}
            >
              <IconBox />
              <Content>
                <Title>{n.title}</Title>
                <Sub>{n.time}</Sub>
              </Content>
              <Amount $highlight={n.amount.includes("+")}>{n.amount}</Amount>
            </Notification>
          ))}
        </List>
      </PhoneFrame>
    </Container>
  );
};

export default OrderNotifications;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhoneFrame = styled.div`
  width: 240px;
  height: 320px;
  background: #fff;
  border: 6px solid #e5e7eb;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
`;

const Notch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 18px;
  background: #e5e7eb;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 2;
`;

const List = styled.div`
  padding: 30px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Notification = styled(motion.div)`
  background: rgba(243, 244, 246, 0.8);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
`;

const IconBox = styled.div`
  width: 32px;
  height: 32px;
  background: #3b82f6;
  border-radius: 8px;
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Sub = styled.div`
  font-size: 9px;
  color: #9ca3af;
`;

const Amount = styled.div<{ $highlight?: boolean }>`
  font-size: 10px;
  font-weight: 700;
  color: ${(p) => (p.$highlight ? "#10b981" : "#6b7280")};
`;
