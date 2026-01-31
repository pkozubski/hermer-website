"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const backlinks = [
  { domain: "wikipedia.org", dr: "DR 92", type: "DoFollow" },
  { domain: "businessinsider.com", dr: "DR 89", type: "DoFollow" },
  { domain: "university.edu", dr: "DR 84", type: "Edu" },
];

const LinkNetwork = () => {
  return (
    <Container>
      {/* Background Mesh */}
      <BackgroundMesh>
        {[...Array(6)].map((_, i) => (
          <MeshLine
            key={i}
            style={{ rotate: i * 30 }}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </BackgroundMesh>

      <ContentWrapper>
        {/* Main Stats Card */}
        <AuthorityCard
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Label>Domain Authority</Label>
          <ScoreRow>
            <Score>78</Score>
            <Growth>
              +12 <small>this month</small>
            </Growth>
          </ScoreRow>
          <ProgressBar>
            <ProgressFill
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </ProgressBar>
        </AuthorityCard>

        {/* Incoming Links List */}
        <LinksList>
          <ListHeader>Ostatnio pozyskane:</ListHeader>
          {backlinks.map((link, i) => (
            <LinkItem
              key={link.domain}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.3 }}
            >
              <DomainIcon>{link.domain[0].toUpperCase()}</DomainIcon>
              <LinkDetails>
                <DomainName>{link.domain}</DomainName>
                <LinkMeta>
                  <Badge $type={link.type}>{link.type}</Badge>
                  <span>{link.dr}</span>
                </LinkMeta>
              </LinkDetails>
              <StatusIcon>✓</StatusIcon>
            </LinkItem>
          ))}
        </LinksList>
      </ContentWrapper>
    </Container>
  );
};

export default LinkNetwork;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BackgroundMesh = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  pointer-events: none;
`;

const MeshLine = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 340px;
`;

const AuthorityCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 16px 20px;
  border-radius: 16px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

const ScoreRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin: 4px 0 12px;
`;

const Score = styled.div`
  font-size: 42px;
  font-weight: 800;
  color: #fff;
  line-height: 1;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
`;

const Growth = styled.div`
  font-size: 14px;
  color: #10b981;
  font-weight: 600;

  small {
    color: rgba(255, 255, 255, 0.4);
    font-weight: 400;
    font-size: 12px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 3px;
`;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListHeader = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 4px;
  margin-bottom: 2px;
`;

const LinkItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const DomainIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const LinkDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DomainName = styled.div`
  font-size: 13px;
  color: #fff;
  font-weight: 500;
`;

const LinkMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
`;

const Badge = styled.span<{ $type: string }>`
  background: ${(p) =>
    p.$type === "Edu" ? "rgba(245, 158, 11, 0.2)" : "rgba(16, 185, 129, 0.2)"};
  color: ${(p) => (p.$type === "Edu" ? "#fbbf24" : "#34d399")};
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 700;
`;

const StatusIcon = styled.div`
  color: #10b981;
  font-weight: 800;
`;
