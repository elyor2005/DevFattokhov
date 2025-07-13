"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { cn } from "@/src/utils/cn";

const logos = [FaHtml5, FaCss3Alt, FaJs, FaReact, SiNextdotjs];

const Animate = () => {
  return (
    <div className="w-full overflow-hidden relative  bottom-0">
      <div className="relative z-20 flex flex-col sm:flex-row sm:items-center items-start px-2  gap-4 ">
        {/* Marquee Section */}
        <div className="relative w-full overflow-hidden ">
          <div className={cn("flex animate-marquee whitespace-nowrap ")}>
            {[...Array(6)].flatMap((_, i) =>
              logos.map((Icon, index) => (
                <div
                  key={`${i}-${index}`}
                  className="mx-8 h-20 w-32 flex items-center justify-center text-6xl object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-125"
                >
                  <Icon />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animate;
