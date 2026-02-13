import React from "react";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Works from "./_components/Works";
import Contact from "./_components/Contact";

const HomePage = () => {
  return (
    <main className="flex flex-col pb-10">
      <Hero />
      <Works />
      <About />
      <Contact />
    </main>
  );
};

export default HomePage;
