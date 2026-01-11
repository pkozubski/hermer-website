import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Layers, Palette } from "lucide-react";

const StructureVisualization = () => {
  return (
    <Container>
      {/* Browser Window */}
      <BrowserWindow
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Browser Chrome */}
        <div className="h-8 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>

        {/* Content Skeleton */}
        <div className="p-6 relative">
          <div className="flex flex-col gap-4">
            {/* Header / Nav */}
            <div className="flex items-center justify-between w-full">
              <div className="w-12 h-3 bg-[#916AFF] rounded-sm" />
              <div className="flex gap-1.5">
                <div className="w-8 h-3 bg-slate-100 rounded-full" />
                <div className="w-8 h-3 bg-slate-100 rounded-full" />
              </div>
            </div>

            {/* Hero Section */}
            <div className="mt-4 space-y-3">
              <div className="space-y-1.5">
                <div className="w-[80%] h-4 bg-[#916AFF] rounded-sm" />
                <div className="w-[60%] h-4 bg-[#916AFF] rounded-sm" />
              </div>
              <div className="py-1 space-y-1">
                <div className="w-full h-2 bg-slate-100 rounded-full" />
                <div className="w-[90%] h-2 bg-slate-100 rounded-full" />
              </div>
              <div className="flex gap-2 pt-2">
                <div className="w-16 h-6 bg-[#916AFF] rounded shadow-md shadow-slate-200/50" />
                <div className="w-16 h-6 bg-white border border-slate-200 rounded" />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="aspect-video bg-slate-50 rounded border border-slate-100" />
              <div className="aspect-video bg-slate-50 rounded border border-slate-100" />
              <div className="aspect-video bg-slate-50 rounded border border-slate-100" />
            </div>
          </div>

          {/* Floating Element: Toast (Responsywność) */}
          <FloatingToast
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="icon-box">
              <Layers size={14} className="text-white" />
            </div>
            <span className="text-[10px] font-bold text-slate-700">Responsywność</span>
          </FloatingToast>

          {/* Floating Element: Palette */}
          <FloatingPalette
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1, rotate: -6 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Palette size={18} className="text-white" />
          </FloatingPalette>

        </div>
      </BrowserWindow>
    </Container>
  );
};

export default StructureVisualization;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const BrowserWindow = styled(motion.div)`
  width: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1); /* Subtle border for dark bg contrast */
  margin-right: -15%;
`;

const FloatingToast = styled(motion.div)`
  position: absolute;
  top: 40px;
  right: -10px;
  background: white;
  padding: 6px 10px;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;
  border: 1px solid rgba(241, 245, 249, 1);

  .icon-box {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FloatingPalette = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: -12px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  z-index: 10;
  border: 1px solid rgba(255,255,255,0.1);
`;
