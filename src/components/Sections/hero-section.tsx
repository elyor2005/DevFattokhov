"use client";
import React from "react";
import { SOCIAL_LINKS } from "@/src/const/links";
import SocialLink from "../Shared/social-link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Animate from "../Shared/Animate/animate";
import Image from "next/image";
import Hero from "../../assets/upscalemedia-transformed.jpeg";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-between min-h-screen items-center px-4 sm:px-6 pt-[120px] sm:pt-[150px] pb-20 z-40 overflow-hidden">
      {/* Background motion blur effects */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "400% 400%" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 200, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-64 h-64 sm:w-80 sm:h-80 bg-rose-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={Hero}
          alt="hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center z-20 text-center px-2 sm:px-4">
        <motion.h1
          className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-gray-600 text-4xl sm:text-6xl lg:text-8xl py-2 font-bold leading-tight"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Abdufattokhov Elyor
        </motion.h1>

        <motion.p
          className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-gray-600 text-xl sm:text-3xl md:text-4xl lg:text-5xl my-4 font-semibold tracking-wide"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundSize: "200% 200%" }}
        >
          I design clean, optimized web and app experiences
        </motion.p>

        <motion.span
          className="bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundSize: "200% 200%" }}
        >
          <Typewriter
            words={["Simple", "Smart", "Scalable", "Satisfaction"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </motion.span>

        <ul className="flex flex-wrap justify-center items-center gap-4 py-10 px-2 w-full">
          {SOCIAL_LINKS.map((item, index) => (
            <li key={index}>
              <SocialLink href={item.link} name={item.name} />
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom animation */}
      <div className="w-full">
        <Animate />
      </div>
    </section>
  );
};

export default HeroSection;
