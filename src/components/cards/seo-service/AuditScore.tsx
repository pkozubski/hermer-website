import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AuditScore = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = 98;
      const duration = 1500;
      const intervalTime = 15;
      const steps = duration / intervalTime;
      const increment = end / steps;

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setScore(end);
          clearInterval(interval);
        } else {
          setScore(Math.floor(start));
        }
      }, intervalTime);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const circumference = 2 * Math.PI * 34; // r=34
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <Container>
      <Dashboard
        initial={{ rotateX: 10 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 1 }}
      >
        <Header>
          <GaugeContainer>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="6"
              />
              <motion.circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="#10b981"
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
                style={{ transition: "stroke-dashoffset 0.5s ease" }}
              />
            </svg>
            <ScoreValue>{score}</ScoreValue>
          </GaugeContainer>
          <MetaInfo>
            <MetaTitle>Technical Health</MetaTitle>
            <MetaStatus>Excellent</MetaStatus>
            <MetaDesc>0 Errors, 2 Warnings</MetaDesc>
          </MetaInfo>
        </Header>

        <Divider />

        <VitalsLabel>CORE WEB VITALS</VitalsLabel>
        <VitalsGrid>
          <VitalBox>
            <VitalVal>0.8s</VitalVal>
            <VitalName>LCP</VitalName>
            <VitalBar>
              <div style={{ width: "90%" }} />
            </VitalBar>
          </VitalBox>
          <VitalBox>
            <VitalVal>0.01</VitalVal>
            <VitalName>CLS</VitalName>
            <VitalBar>
              <div style={{ width: "95%" }} />
            </VitalBar>
          </VitalBox>
          <VitalBox>
            <VitalVal>12ms</VitalVal>
            <VitalName>INP</VitalName>
            <VitalBar>
              <div style={{ width: "98%" }} />
            </VitalBar>
          </VitalBox>
        </VitalsGrid>

        <Console>
          <motion.div
            animate={{ y: [-20, -40, -60] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <LogLine>&gt; Crawling sitemap.xml...</LogLine>
            <LogLine $success>✓ 240 URLs discovered</LogLine>
            <LogLine>&gt; Checking canonical tags...</LogLine>
            <LogLine $success>✓ No duplicates found</LogLine>
            <LogLine>&gt; Analyzing schema markup...</LogLine>
            <LogLine $success>✓ Organization detected</LogLine>
          </motion.div>
        </Console>
      </Dashboard>
    </Container>
  );
};

export default AuditScore;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
`;

const Dashboard = styled(motion.div)`
  width: 320px;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 20px;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const GaugeContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScoreValue = styled.div`
  position: absolute;
  font-size: 24px;
  font-weight: 800;
  color: #fff;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaTitle = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const MetaStatus = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #10b981;
  margin: 2px 0;
`;

const MetaDesc = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 20px 0 15px;
`;

const VitalsLabel = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 10px;
`;

const VitalsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const VitalBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VitalVal = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const VitalName = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  margin: 2px 0 6px;
`;

const VitalBar = styled.div`
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;

  div {
    height: 100%;
    background: #10b981;
    border-radius: 2px;
  }
`;

const Console = styled.div`
  height: 80px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  font-family: monospace;
  font-size: 10px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(to top, rgba(15, 23, 42, 1), transparent);
  }
`;

const LogLine = styled.div<{ $success?: boolean }>`
  color: ${(p) => (p.$success ? "#4ade80" : "rgba(255,255,255,0.7)")};
  margin-bottom: 4px;
  white-space: nowrap;
`;
