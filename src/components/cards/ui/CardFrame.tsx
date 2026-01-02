import React from "react";

interface CardFrameProps {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  title?: string;
  type?: "window" | "browser" | "phone" | "plain";
  className?: string;
}

export const CardFrame: React.FC<CardFrameProps> = ({
  children,
  headerContent,
  title,
  type = "window",
  className = "",
}) => {
  return (
    // Changed border from slate-900/10 to slate-200 for a cleaner, lighter look
    <div
      className={`w-full max-w-[400px] h-[250px] bg-white p-0 border border-slate-50 shadow-sm flex flex-col rounded-2xl overflow-hidden ${className}`}
    >
      {/* Content */}
      <div className="flex-1 relative overflow-hidden bg-white">{children}</div>
    </div>
  );
};
