"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props {
  title: string;
  children: React.ReactNode;
  hideToggle?: boolean;
  description?: string;
  action?: React.ReactNode;
}

const SectionHeader = ({
  title,
  children,
  hideToggle = false,
  description,
  action,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Only allow toggling if not hidden
  const handleToggle = () => {
    if (hideToggle) return;

    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState && containerRef.current) {
      // If opening, scroll to the section slightly
      setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Optional: slight offset correction if sticky header exists
        // window.scrollBy({ top: -100, behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <div ref={containerRef} className="w-full scroll-mt-24">
      {/* Header with creative design */}
      <div className="">
        {/* Large title with gradient accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="flex items-center justify-between gap-6 mb-4"
        >
          <div className="flex-1">
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {title}
            </h2>

            {/* Creative accent line with gradient */}
            <div className="flex items-center gap-3">
              <motion.div
                className="h-1 bg-gradient-to-r from-[#007AFF] via-[#00C7FF] to-transparent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "30rem" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.4, 0, 0.2, 1] as const,
                }}
              />
            </div>
          </div>

          {/* Glassmorphism toggle button and actions */}
          <div className="flex items-center gap-4 z-20 relative">
            {action && <div>{action}</div>}
            {!hideToggle && (
              <motion.button
                onClick={handleToggle}
                className="glass-card w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-premium cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Collapse section" : "Expand section"}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1] as const,
                  }}
                >
                  <ChevronDown className="w-6 h-6 text-[#007AFF]" />
                </motion.div>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Subtle description text */}
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-[#6E6E73] max-w-2xl mt-6 mb-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Content with smooth animation */}
      <AnimatePresence initial={false}>
        {(isOpen || hideToggle) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
            className="overflow-hidden"
          >
            <div className="pt-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionHeader;
