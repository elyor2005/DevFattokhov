"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/src/utils/cn";
import { SocialLink } from "@/src/const/socials";

interface SocialCardProps {
  link: SocialLink;
  index: number;
}

export const SocialCard = ({ link, index }: SocialCardProps) => (
  <motion.a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 duration-300",
          link.color,
          link.textColor,
        )}
      >
        <link.icon className="w-6 h-6" />
      </div>
      <span className="font-semibold text-gray-900 text-lg">{link.name}</span>
    </div>
    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#007AFF] group-hover:text-white transition-colors duration-300">
      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  </motion.a>
);

export default SocialCard;
