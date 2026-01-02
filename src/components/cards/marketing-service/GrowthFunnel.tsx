import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GrowthFunnel = () => {
  return (
    <Container>
      <BlackBox>
        <Header>
          <Title>Efektywność (ROAS)</Title>
          <Badge>YTD</Badge>
        </Header>

        <ChartContainer>
          {/* Bar 1: Spend */}
          <BarRow>
            <BarLabel>Wydatki</BarLabel>
            <BarTrack>
              <BarFill 
                $color="#64748b" 
                initial={{ width: 0 }} 
                animate={{ width: "35%" }} 
                transition={{ duration: 1, delay: 0.2 }}
              />
            </BarTrack>
            <BarValue>12k</BarValue>
          </BarRow>

          {/* Connector */}
          <Connector>
            <motion.div 
               style={{width: 2, background: '#334155', height: '100%'}}
               initial={{ height: 0 }}
               animate={{ height: 20 }}
            />
             <MultiplierBadge
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
             >
                x4.2
             </MultiplierBadge>
          </Connector>

          {/* Bar 2: Revenue */}
          <BarRow>
            <BarLabel style={{color: '#fff'}}>Przychód</BarLabel>
            <BarTrack>
              <BarFill 
                $color="#10b981" 
                $glow
                initial={{ width: 0 }} 
                animate={{ width: "85%" }} 
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </BarTrack>
            <BarValue style={{color: '#10b981'}}>50.4k</BarValue>
          </BarRow>
        </ChartContainer>

        <BottomStats>
           <Stat>
              <StatLabel>Conv. Rate</StatLabel>
              <StatNum>2.8%</StatNum>
           </Stat>
           <Stat>
              <StatLabel>CPC</StatLabel>
              <StatNum>1.20 zł</StatNum>
           </Stat>
           <Stat>
              <StatLabel>ROI</StatLabel>
              <StatNum style={{color: '#10b981'}}>320%</StatNum>
           </Stat>
        </BottomStats>

      </BlackBox>
    </Container>
  );
};

export default GrowthFunnel;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlackBox = styled.div`
  width: 300px;
  background: #0f172a; /* Slate 900 */
  border: 1px solid #1e293b;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  /* Subtle mesh grid */
  background-image: radial-gradient(#1e293b 1px, transparent 1px);
  background-size: 20px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Badge = styled.div`
  font-size: 10px;
  background: #1e293b;
  color: #94a3b8;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  border: 1px solid #334155;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const BarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 30px;
`;

const BarLabel = styled.div`
  width: 50px;
  font-size: 11px;
  color: #64748b;
  font-weight: 600;
  text-align: right;
`;

const BarTrack = styled.div`
  flex: 1;
  height: 8px;
  background: #1e293b;
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled(motion.div)<{ $color: string; $glow?: boolean }>`
  height: 100%;
  background: ${p => p.$color};
  border-radius: 4px;
  box-shadow: ${p => p.$glow ? `0 0 15px ${p.$color}80` : 'none'};
`;

const BarValue = styled.div`
  width: 40px;
  font-size: 11px;
  color: #94a3b8;
  font-weight: 700;
  font-family: monospace;
`;

const Connector = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 90px; /* Aligns with bars approx center */
  position: relative;
`;

const MultiplierBadge = styled(motion.div)`
  position: absolute;
  left: 100px;
  background: #10b981;
  color: #022c22;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
`;

const BottomStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #1e293b;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatLabel = styled.div`
  font-size: 9px;
  color: #64748b;
  text-transform: uppercase;
`;

const StatNum = styled.div`
  font-size: 13px;
  color: #fff;
  font-weight: 700;
`;
