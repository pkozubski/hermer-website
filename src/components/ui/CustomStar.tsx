import React from "react";

interface CustomStarProps {
  size?: number;
  className?: string;
  fill?: string;
}

export const CustomStar = ({ size = 24, className = "", fill = "currentColor" }: CustomStarProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L14.85 8.76L22 9.24L16.5 13.97L18.27 21L12 17.27L5.73 21L7.5 13.97L2 9.24L9.15 8.76L12 2Z"
        fill={fill}
      />
    </svg>
  );
};
