"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { socialLinks } from "@/src/const/socials";
import SocialCard from "@/src/components/ui/SocialCard";

const ContactUI = () => {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);
  const email = "elyorabdufattokhov@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 py-24 sm:py-32">
      {/* 1. Main Get in Touch Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0B] p-10 flex flex-col justify-between min-h-[400px] group shadow-2xl shadow-blue-900/10"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-600/30 transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {t("ui.available")}
          </div>

          <h3
            className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: t.raw("ui.title") }}
          />
          <p className="text-gray-400 text-lg max-w-md">
            {t("ui.description")}
          </p>
        </div>

        <div className="relative z-10 mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleCopy}
            className="group flex items-center justify-between gap-6 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 w-full sm:w-auto min-w-[320px]"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                  {t("ui.mailLabel")}
                </span>
                <span className="text-white font-medium text-sm sm:text-base">
                  {email}
                </span>
              </div>
            </div>

            <div className="text-gray-500 group-hover:text-white transition-colors">
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </div>
          </button>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 h-[70px] px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-colors w-full sm:w-auto"
          >
            {t("ui.sendButton")}
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>

      {/* 2. Social Grid */}
      <div className="md:col-span-1 lg:col-span-1 grid grid-cols-1 gap-6 md:gap-8">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full rounded-[2.5rem] bg-gray-50 p-8 border border-gray-100 flex flex-col justify-center gap-4"
        >
          <h4 className="text-xl font-bold text-gray-900 mb-2 px-2">
            {t("ui.socialsTitle")}
          </h4>
          <div className="space-y-3">
            {socialLinks.map((social, index) => (
              <SocialCard key={social.name} link={social} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUI;
