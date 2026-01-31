"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TrafficGraph = () => {
  return (
    <Container>
      <ChartWrapper>
        <GridLines>
          {[1, 2, 3, 4].map((i) => (
            <Line key={i} />
          ))}
        </GridLines>

        <svg viewBox="0 0 300 150" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <motion.path
            d="M0,120 C40,110 60,130 100,90 C140,50 180,80 220,40 C260,0 280,30 300,10 L300,150 L0,150 Z"
            fill="url(#trafficGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* The Line */}
          <motion.path
            d="M0,120 C40,110 60,130 100,90 C140,50 180,80 220,40 C260,0 280,30 300,10"
            fill="none"
            stroke="#8b5cf6" // Violet neon
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))" }}
          />

          {/* Floating Dots */}
          {[
            { cx: 100, cy: 90 },
            { cx: 220, cy: 40 },
            { cx: 300, cy: 10 },
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r="5"
              fill="#fff"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.5, type: "spring" }}
            />
          ))}
        </svg>

        <StatsCard
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <Label>Ruch Organiczny</Label>
          <Value>+348%</Value>
        </StatsCard>
      </ChartWrapper>
    </Container>
  );
};

export default TrafficGraph;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  position: relative;
`;

const GridLines = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  z-index: 0;
  pointer-events: none;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
`;

const StatsCard = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 20px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  padding: 8px 16px;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const Label = styled.div`
  font-size: 10px;
  color: #ddd6fe;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Value = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
`;
