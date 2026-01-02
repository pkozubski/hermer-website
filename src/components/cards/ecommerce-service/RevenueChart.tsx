import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const RevenueChart = () => {
  const [count, setCount] = useState(12450);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 150));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Dashboard>
        <Header>
          <Label>PRZYCHÓD (30 DNI)</Label>
          <LiveIndicator>
            <Dot /> LIVE
          </LiveIndicator>
        </Header>
        
        <Amount>
          {count.toLocaleString("pl-PL")} <span>PLN</span>
        </Amount>
        <Growth>+24.5% vs poprzedni miesiąc</Growth>

        <ChartArea>
          <svg viewBox="0 0 200 80" width="100%" height="100%">
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,80 L0,50 C20,50 40,60 60,40 C80,20 100,60 120,30 C140,0 160,20 200,10 L200,80 Z"
              fill="url(#gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d="M0,50 C20,50 40,60 60,40 C80,20 100,60 120,30 C140,0 160,20 200,10"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>
        </ChartArea>
      </Dashboard>
    </Container>
  );
};

export default RevenueChart;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dashboard = styled.div`
  width: 280px;
  background: #0f172a;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
  position: relative;
  overflow: hidden;

  /* Subtle grid bg */
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 20px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-size: 10px;
  color: #94a3b8;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const LiveIndicator = styled.div`
  font-size: 9px;
  color: #10b981;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`;

const Amount = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -1px;

  span {
    font-size: 16px;
    color: #64748b;
    font-weight: 500;
  }
`;

const Growth = styled.div`
  font-size: 12px;
  color: #10b981;
  margin-bottom: 20px;
  font-weight: 500;
`;

const ChartArea = styled.div`
  height: 80px;
  width: 100%;
  position: relative;
`;
