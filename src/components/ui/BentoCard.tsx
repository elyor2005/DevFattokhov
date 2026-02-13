"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-white rounded-premium shadow-premium card-lift p-8 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
    >
      {/* Icon */}
      {Icon && (
        <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#007AFF]/10 to-[#007AFF]/5 flex items-center justify-center">
          <Icon className="w-7 h-7 text-[#007AFF]" />
        </div>
      )}

      {/* Content */}
      <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-3">{title}</h3>
      <p className="text-base text-[#6E6E73] leading-relaxed">{description}</p>

      {/* Subtle Hover Indicator */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#007AFF] to-transparent rounded-l-premium opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
