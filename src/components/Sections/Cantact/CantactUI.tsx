"use client";
import React, { useRef } from "react";
import { motion, useAnimate, Variants } from "framer-motion";
import {
  Mail,
  Sparkles,
  Github,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaUpwork } from "react-icons/fa6";

// Social Links Data
export const socialLinks = [
  { icon: Mail, href: "elyorabdufattokhov@gmail.com" },
  { icon: Github, href: "https://github.com/elyor2005" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Instagram, href: "https://www.instagram.com/__abdufattokhov__/" },
  { icon: FaUpwork, href: "" },
];
// Clip Path Constants
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

// Social Link Box Component
interface LinkBoxProps {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent) => {
    const box = e.currentTarget.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as const,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as const,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as const,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as const,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(
      scope.current,
      {
        clipPath: ENTRANCE_KEYFRAMES[side],
      },
      {
        duration: 0.4,
        ease: [0.23, 0.86, 0.39, 0.96],
      }
    );
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(
      scope.current,
      {
        clipPath: EXIT_KEYFRAMES[side],
      },
      {
        duration: 0.4,
        ease: [0.23, 0.86, 0.39, 0.96],
      }
    );
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 text-white/70 bg-white/[0.05] hover:bg-white/[0.08] transition-colors duration-300 group"
    >
      <Icon className="text-xl sm:text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110" />

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-white text-black"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

// Main Contact Section Component
function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative py-10 bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-black"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "400% 400%",
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-indigo-300" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">
              ✨ Let`s Connect
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Get in
            </span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Touch
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Like what you see? Let`s chat and build something awesome together
            to bring your ideas to life.
          </motion.p>
          <a
            href="mailto:elyorabdufattokhov@gmail.com"
            className="font-semibold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-2xl text-xl block md:mt-10 mt-4"
          >
            elyorabdufattokhov@gmail.com
          </a>
        </motion.div>

        <div>
          {/* Contact Methods */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            {/* Social Links */}
            <motion.div
              className="p-6 bg-black backdrop-blur-xl rounded-2xl border border-indigo-400/30  text-center"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect with me
              </h4>
              <div className="divide-y border divide-white/10 border-white/10 rounded-lg overflow-hidden">
                <div className="grid divide-x divide-white/10">
                  <LinkBox
                    Icon={socialLinks[1].icon}
                    href={socialLinks[1].href}
                  />
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/10">
                  <LinkBox
                    Icon={socialLinks[4].icon}
                    href={socialLinks[4].href}
                  />
                  <LinkBox
                    Icon={socialLinks[5].icon}
                    href={socialLinks[5].href}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
