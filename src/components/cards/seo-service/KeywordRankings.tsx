import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const keywords = [
  { term: "agencja seo", rank: 1, change: "+2", vol: "12k" },
  { term: "pozycjonowanie", rank: 3, change: "+4", vol: "8.5k" },
  { term: "audyt strony", rank: 1, change: "=", vol: "3.2k" },
  { term: "optymalizacja", rank: 2, change: "+1", vol: "5k" },
];

const KeywordRankings = () => {
  return (
    <Container>
      <ListCard>
        <Header>
          <span>Słowo kluczowe</span>
          <span>Poz.</span>
        </Header>
        {keywords.map((k, i) => (
          <Row
            key={k.term}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02, x: 5, backgroundColor: "#f1f5f9" }}
          >
            <Term>
              <Check>✓</Check> {k.term}
              <Vol>{k.vol}</Vol>
            </Term>
            <RankData>
              <Change>{k.change}</Change>
              <Position $first={k.rank === 1}>#{k.rank}</Position>
            </RankData>
          </Row>
        ))}
      </ListCard>
      <Backlight />
    </Container>
  );
};

export default KeywordRankings;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ListCard = styled.div`
  width: 320px;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  /* Elegant light mode shadow */
  box-shadow: 
    0 20px 40px -10px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0,0,0,0.02);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px 8px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 10px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
`;

const Row = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  cursor: default;
`;

const Term = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #334155;
  font-weight: 600;
  font-size: 14px;
`;

const Check = styled.span`
  color: #10b981;
  font-weight: 800;
  font-size: 12px;
`;

const Vol = styled.span`
  font-size: 10px;
  background: #e2e8f0;
  padding: 2px 6px;
  border-radius: 4px;
  color: #64748b;
  font-weight: 500;
`;

const RankData = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Change = styled.span`
  font-size: 11px;
  color: #10b981;
  font-weight: 700;
`;

const Position = styled.div<{ $first?: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  background: ${p => p.$first ? '#10b981' : '#e2e8f0'};
  color: ${p => p.$first ? '#fff' : '#64748b'};
  box-shadow: ${p => p.$first ? '0 4px 12px rgba(16, 185, 129, 0.3)' : 'none'};
`;

const Backlight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 200px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent 70%);
  filter: blur(40px);
  z-index: 1;
`;
