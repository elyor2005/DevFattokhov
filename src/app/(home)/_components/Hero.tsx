"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Github,
  Instagram,
  Linkedin,
  ArrowRight,
  Download,
} from "lucide-react";
import Container from "@/src/components/ui/Container";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  const socialLinks = [
    { icon: Mail, href: "mailto:elyorabdufattokhov@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/elyor2005", label: "GitHub" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/__abdufattokhov__/",
      label: "Instagram",
    },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F7] -z-10" />

      <motion.div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container>
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t("name")}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#D2D2D7] to-transparent mx-auto mb-6"
          />

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-[#6E6E73] font-normal mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="#works"
              className="btn-premium flex items-center gap-2 group hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              {t("viewProjects")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="glass-card px-8 py-4 rounded-premium-sm hover:bg-white transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-gray-200/50"
            >
              <Mail className="w-4 h-4" />
              {t("getInTouch")}
            </Link>

            <Link
              href="/resume"
              className="glass-card px-8 py-4 rounded-premium-sm hover:bg-white transition-all duration-300 flex items-center gap-2 text-[#007AFF] hover:text-[#0066CC] hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-blue-100/50"
            >
              <Download className="w-4 h-4" />
              {t("downloadResume")}
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white transition-all duration-300 group hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-gray-200/50"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-[#6E6E73] group-hover:text-[#007AFF] transition-colors" />
              </Link>
            ))}
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="w-6 h-10 rounded-full border border-[#D2D2D7] flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-[#007AFF] rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
