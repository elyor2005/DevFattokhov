"use client";
import React, { useState } from "react";
import AppLoader from "./AppLoader";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Sections/hero-section";

const LayoutWrapper: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <AppLoader onComplete={() => setShowContent(true)} />}
      {showContent && (
        <>
          <Navbar />
          <HeroSection />
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
