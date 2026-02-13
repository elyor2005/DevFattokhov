"use client";
import React from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Rocket, Layers, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const About = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <Container>
        <SectionHeader title={t("title")}>
          {/* Apple-style Bento Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 py-12">
            {/* 1. Large Intro Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-white p-10 flex flex-col justify-center border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 group min-h-[320px]"
            >
              {/* Animated Background Mesh */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/50 via-purple-100/50 to-pink-100/50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-50/50 to-blue-50/50 rounded-full blur-2xl opacity-60 translate-y-1/3 -translate-x-1/4" />

              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  {t("ui.badge")}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  {t("ui.titlePart1")} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient-x">
                    {t("ui.titlePart2")}
                  </span>
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                  {t("bio.intro")}
                </p>
              </div>
            </motion.div>

            {/* 2. Experience Card - Dark Mode Contrast */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 rounded-[2.5rem] bg-[#0A0A0B] p-8 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/10"
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-16 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Rocket className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    {t("ui.stats.experience")}
                  </h4>
                  <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-[80%]">
                    {t("ui.stats.experienceLabel")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3. Tech Stack - Bento Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 rounded-[2.5rem] bg-white border border-gray-100 p-8 md:p-10 flex flex-col justify-center gap-8 relative overflow-hidden group hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      {t("ui.stack.title")}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {t("ui.stack.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Framer",
                  "Prisma",
                  "Postgres",
                  "Git",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center px-4 py-3 bg-gray-50 hover:bg-white border boundary border-gray-100 hover:border-indigo-200 rounded-2xl text-sm font-semibold text-gray-600 hover:text-indigo-600 hover:shadow-md transition-all duration-300 cursor-default group/tech"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(#f0f0f0_1px,transparent_1px),linear-gradient(90deg,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
            </motion.div>

            {/* 4. Languages Card - Gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="col-span-1 rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-indigo-600 p-8 flex flex-col justify-between text-white group hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xs font-bold mb-4 opacity-90 uppercase tracking-wider">
                  {t("bento.languages.title")}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                    <span className="text-sm font-semibold">
                      {t("ui.languages.items.en")}
                    </span>
                    <span className="text-xs opacity-80 bg-white/20 px-2 py-0.5 rounded">
                      {t("ui.languages.levels.en")}
                    </span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                    <span className="text-sm font-semibold">
                      {t("ui.languages.items.uz")}
                    </span>
                    <span className="text-xs opacity-80 bg-white/20 px-2 py-0.5 rounded">
                      {t("ui.languages.levels.uz")}
                    </span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                    <span className="text-sm font-semibold">
                      {t("ui.languages.items.ru")}
                    </span>
                    <span className="text-xs opacity-80 bg-white/20 px-2 py-0.5 rounded">
                      {t("ui.languages.levels.ru")}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </SectionHeader>
      </Container>
    </section>
  );
};

export default About;
