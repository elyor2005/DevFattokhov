"use client";

import React, { ReactNode } from "react";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({
  children,
  className,
}) => {
  // Removed tilt effect for cleaner, more professional feel
  // iPhone design is about clarity and simplicity, not playful interactions
  return <div className={className}>{children}</div>;
};
