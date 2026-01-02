import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AdCampaigns = () => {
  return (
    <Container>
      {/* Background Gradients */}
      <GradientBlob
        $color="#ec4899"
        style={{ top: -20, right: -20 }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <GradientBlob
        $color="#8b5cf6"
        style={{ bottom: -20, left: -20 }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <GlassCard
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Header>
          <Avatar />
          <Meta>
            <BrandName>Twoja Marka</BrandName>
            <Sponsored>Sponsorowane • <GlobeIcon>🌎</GlobeIcon></Sponsored>
          </Meta>
          <ActionBtn>Obserwuj</ActionBtn>
        </Header>

        <AdContent>
          <AdText>
            Skalujemy sprzedaż przez <Hash>#MetaAds</Hash> i <Hash>#TikTok</Hash>.
            Sprawdź nasze wyniki! 🚀
          </AdText>
          <VisualPreview>
             <PlayButton>▶</PlayButton>
             <LiveOverlay>LIVE</LiveOverlay>
          </VisualPreview>
        </AdContent>

        <Footer>
          <StatsRow>
            <StatGroup>
               <ReactionStack>
                  <Emoji style={{zIndex: 3}}>❤️</Emoji>
                  <Emoji style={{zIndex: 2, left: 12}}>👍</Emoji>
                  <Emoji style={{zIndex: 1, left: 24}}>🔥</Emoji>
               </ReactionStack>
               <StatText>2.4k</StatText>
            </StatGroup>
            <StatText>482 komentarze</StatText>
          </StatsRow>
          <CtaButton
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
          >
             Więcej
          </CtaButton>
        </Footer>

        {/* Floating Particles */}
        <FloatingReaction style={{ top: '20%', right: '-10%' }}>👍</FloatingReaction>
        <FloatingReaction style={{ top: '60%', right: '-15%', animationDelay: '1s' }}>❤️</FloatingReaction>
        <FloatingReaction style={{ top: '40%', left: '-10%', animationDelay: '2s' }}>🚀</FloatingReaction>

      </GlassCard>
    </Container>
  );
};

export default AdCampaigns;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const GradientBlob = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 150px;
  height: 150px;
  background: ${p => p.$color};
  filter: blur(60px);
  opacity: 0.6;
  border-radius: 50%;
  z-index: 0;
`;

const GlassCard = styled(motion.div)`
  width: 280px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 16px;
  box-shadow: 
    0 20px 40px -10px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.2);
`;

const Meta = styled.div`
  flex: 1;
`;

const BrandName = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #fff;
`;

const Sponsored = styled.div`
  font-size: 10px;
  color: rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  gap: 4px;
`;

const GlobeIcon = styled.span`
  font-size: 8px;
  opacity: 0.7;
`;

const ActionBtn = styled.button`
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
`;

const AdContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AdText = styled.div`
  font-size: 12px;
  color: rgba(255,255,255,0.9);
  line-height: 1.4;
`;

const Hash = styled.span`
  color: #93c5fd;
`;

const VisualPreview = styled.div`
  width: 100%;
  height: 140px;
  background: linear-gradient(45deg, #4f46e5, #9333ea);
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
`;

const PlayButton = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  padding-left: 2px;
  border: 1px solid rgba(255,255,255,0.2);
`;

const LiveOverlay = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ef4444;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 4px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StatGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ReactionStack = styled.div`
  position: relative;
  width: 40px;
  height: 16px;
`;

const Emoji = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border: 1px solid rgba(255,255,255,0.1);
`;

const StatText = styled.div`
  font-size: 10px;
  color: rgba(255,255,255,0.6);
`;

const CtaButton = styled(motion.button)`
  background: #3b82f6;
  color: #fff;
  border: none;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.4);
`;

const FloatingReaction = styled.div`
  position: absolute;
  font-size: 24px;
  animation: floatUp 3s ease-in infinite;
  opacity: 0;
  
  @keyframes floatUp {
    0% { transform: translateY(0) scale(0.5); opacity: 0; }
    20% { opacity: 1; transform: translateY(-20px) scale(1.1); }
    100% { transform: translateY(-100px) scale(1); opacity: 0; }
  }
`;
