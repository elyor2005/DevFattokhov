"use client";
import { useState, ReactNode } from "react";
import { GoFoldDown } from "react-icons/go";

type SectionHeaderProps = {
  title: string;
  children: ReactNode;
};

const SectionHeader = ({ title, children }: SectionHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full ">
      {/* Header */}
      <div className="flex flex-col items-center lg:pb-6 pb-4 border-b border-b-border-color gap-2">
        <span className="2xl:text-2xl text-xl font-medium ">{title}</span>
        <button
          onClick={toggleContent}
          className="hover:scale-150 cursor-pointer hover:opacity-65"
        >
          <GoFoldDown
            size={30}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Slide down content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default SectionHeader;
