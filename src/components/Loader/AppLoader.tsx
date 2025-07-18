"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../assets/logo.png";

interface AppLoaderProps {
  onComplete: () => void;
}

const AppLoader: React.FC<AppLoaderProps> = ({ onComplete }) => {
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateLogo(true);
    }, 1000); // show center logo for 1 second

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center ">
      <motion.div
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={
          animateLogo
            ? {
                x: "-44vw", // adjust based on logo position in Navbar
                y: "-45vh",
                scale: 0.5,
              }
            : {}
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (animateLogo) {
            onComplete();
          }
        }}
      >
        <Image
          src={logo}
          alt="loader-logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default AppLoader;
