"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const tasks = [
  { id: 1, title: "Post na LinkedIn", tag: "B2B", color: "#0a66c2", status: "Publikacja" },
  { id: 2, title: "Reels: Backstage", tag: "Video", color: "#e1306c", status: "W trakcie" },
  { id: 3, title: "Newsletter majowy", tag: "Email", color: "#f59e0b", status: "Korekta" },
];

const ContentCalendar = () => {
  return (
    <Container>
      <Board>
        <BoardHeader>
          <HeaderTitle>Plan Treści</HeaderTitle>
          <HeaderDate>Maj 2024</HeaderDate>
        </BoardHeader>
        
        <Column>
          {tasks.map((task, i) => (
            <TaskCard
              key={task.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <TaskHeader>
                <Tag style={{ color: task.color, background: `${task.color}15` }}>
                  {task.tag}
                </Tag>
                <MoreBtn>•••</MoreBtn>
              </TaskHeader>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskFooter>
                <Avatars>
                   <Avatar $bg="#cbd5e1">MK</Avatar>
                </Avatars>
                <StatusBadge $done={task.status === "Publikacja"}>
                   {task.status}
                </StatusBadge>
              </TaskFooter>
            </TaskCard>
          ))}
          
          <GhostCard />
        </Column>
      </Board>
    </Container>
  );
};

export default ContentCalendar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Board = styled.div`
  width: 280px;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 
    0 10px 30px -5px rgba(0,0,0,0.05),
    0 0 0 1px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 12px;
  border-bottom: 2px solid #f1f5f9;
`;

const HeaderTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
`;

const HeaderDate = styled.div`
  font-size: 11px;
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TaskCard = styled(motion.div)`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tag = styled.span`
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
`;

const MoreBtn = styled.div`
  color: #cbd5e1;
  font-size: 10px;
  letter-spacing: 1px;
`;

const TaskTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #334155;
`;

const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

const Avatars = styled.div`
  display: flex;
`;

const Avatar = styled.div<{ $bg: string }>`
  width: 20px;
  height: 20px;
  background: ${p => p.$bg};
  border-radius: 50%;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
`;

const StatusBadge = styled.div<{ $done?: boolean }>`
  font-size: 9px;
  color: ${p => p.$done ? '#10b981' : '#94a3b8'};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`;

const GhostCard = styled.div`
  height: 40px;
  border: 2px dashed #f1f5f9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  font-size: 18px;
  
  &::after {
    content: "+";
  }
`;
