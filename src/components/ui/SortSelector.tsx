"use client";
import React from "react";
import { useTranslations } from "next-intl";

interface SortSelectorProps {
  currentOrder: "latest" | "oldest";
  onOrderChange: (order: "latest" | "oldest") => void;
}

const SortSelector = ({ currentOrder, onOrderChange }: SortSelectorProps) => {
  const t = useTranslations("works");

  return (
    <div className="glass-card p-1 rounded-full flex items-center gap-1 shadow-premium">
      <button
        onClick={() => onOrderChange("latest")}
        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
          currentOrder === "latest"
            ? "bg-[#007AFF] text-white shadow-lg"
            : "text-[#1D1D1F] hover:bg-gray-100/50"
        }`}
      >
        {t("latest")}
      </button>
      <button
        onClick={() => onOrderChange("oldest")}
        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
          currentOrder === "oldest"
            ? "bg-[#007AFF] text-white shadow-lg"
            : "text-[#1D1D1F] hover:bg-gray-100/50"
        }`}
      >
        {t("oldest")}
      </button>
    </div>
  );
};

export default SortSelector;
