import React from "react";

import About from "../components/Sections/About";
import Works from "../components/Sections/Works";
import Contact from "../components/Sections/Cantact/Contact";
import HeroSection from "../components/Sections/hero-section";

const page = () => {
  return (
    <main className="flex flex-col gap-30 pb-10">
      <HeroSection />
      <About />
      <Works />
      <Contact />
    </main>
  );
};

export default page;
