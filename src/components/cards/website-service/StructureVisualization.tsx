import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StructureVisualization = () => {
  return (
    <SceneContainer>
      <IsometricWrapper
        initial={{ rotateX: 60, rotateZ: -45, scale: 0.9 }}
        animate={{ rotateX: 55, rotateZ: -40, scale: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Scanning Effect */}
        <ScanLine
          animate={{ top: ["-20%", "120%"], opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
        />

        {/* Base Layer - Grid/Footer */}
        <Layer style={{ zIndex: 1, translateZ: "0px" }}>
          <GridPattern />
          <Block
            $width="100%"
            $height={40}
            $color="rgba(255,255,255,0.03)"
            style={{ marginTop: "auto" }}
          />
        </Layer>

        {/* Content Layer */}
        <Layer
          style={{ zIndex: 2, translateZ: "40px" }}
          animate={{ z: 40 }}
          whileHover={{ z: 60 }}
        >
          <div style={{ display: "flex", gap: 10, height: "100%" }}>
            <Block
              $width="65%"
              $height="100%"
              $color="rgba(59, 130, 246, 0.1)"
              $border="rgba(59, 130, 246, 0.3)"
            />
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Block
                $width="100%"
                $height="40%"
                $color="rgba(255,255,255,0.08)"
              />
              <Block
                $width="100%"
                $height="50%"
                $color="rgba(255,255,255,0.08)"
              />
            </div>
          </div>
        </Layer>

        {/* Hero / Header Layer */}
        <Layer
          style={{ zIndex: 3, translateZ: "80px" }}
          animate={{ z: 80 }}
          whileHover={{ z: 120 }}
        >
          <GlassHeader>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Block
                $width="24px"
                $height="24px"
                $radius="50%"
                $color="#34d399"
              />
              <Block
                $width="100px"
                $height="8px"
                $color="rgba(255,255,255,0.15)"
              />
            </div>
            <div style={{ marginTop: 15 }}>
              <Block
                $width="80%"
                $height="24px"
                $color="rgba(255,255,255,0.8)"
              />
              <Block
                $width="50%"
                $height="12px"
                $color="rgba(255,255,255,0.4)"
                style={{ marginTop: 8 }}
              />
            </div>
          </GlassHeader>

          <FloatingBadge
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            SEO Ready
          </FloatingBadge>
        </Layer>
      </IsometricWrapper>
    </SceneContainer>
  );
};

export default StructureVisualization;

const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  overflow: visible;
  margin-top: 20px;
`;

const IsometricWrapper = styled(motion.div)`
  width: 280px;
  height: 360px;
  position: relative;
  transform-style: preserve-3d;
`;

const Layer = styled(motion.div)`
  position: absolute;
  inset: 0;
  /* Glassmorphism Update */
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(30, 41, 59, 0.5);
  }
`;

const GlassHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScanLine = styled(motion.div)`
  position: absolute;
  left: -20%;
  width: 140%;
  height: 40px; /* Thicker light */
  background: linear-gradient(
    180deg,
    rgba(59, 130, 246, 0) 0%,
    rgba(59, 130, 246, 0.4) 50%,
    rgba(59, 130, 246, 0) 100%
  );
  transform: translateZ(150px) rotateX(-10deg);
  z-index: 10;
  pointer-events: none;
  filter: blur(4px);
`;

const Block = styled.div<{
  $width: string;
  $height: string | number;
  $color: string;
  $border?: string;
  $radius?: string;
}>`
  width: ${(p) => p.$width};
  height: ${(p) =>
    typeof p.$height === "number" ? `${p.$height}px` : p.$height};
  background: ${(p) => p.$color};
  border: 1px solid ${(p) => p.$border || "transparent"};
  border-radius: ${(p) => p.$radius || "6px"};
  backdrop-filter: blur(4px);
`;

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.15;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 20px 20px;
  border-radius: 20px;
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
  right: -10px;
  top: 35%;
  background: rgba(59, 130, 246, 0.9);
  color: white;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transform: translateZ(40px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;
