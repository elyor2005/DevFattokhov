"use client";
import { useRef, useState, MouseEvent } from "react";

interface BentoCardProps {
  title: string;
  description?: string;
  isComingSoon?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  isComingSoon = false,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full   rounded-lg bg-black text-white p-5 overflow-hidden cursor-pointer "
    >
      {/* Hover Gradient Layer */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: hoverOpacity,
          background: `radial-gradient(200px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #fda4af88, transparent)`,
        }}
      />

      {/* Text Content */}
      <div className="relative z-10">
        <h1 className="text-xl font-semibold special-font">{title}</h1>
        {description && (
          <p className="mt-2  2xl:text-3xl xl:text-2xl lg:text-xl text-lg  text-white/80 text-center">
            {description}
          </p>
        )}
        {isComingSoon && (
          <p className="mt-3 text-xs uppercase text-white/40">Coming soon</p>
        )}
      </div>
    </div>
  );
};
