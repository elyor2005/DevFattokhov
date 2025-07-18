import React from "react";

import About from "../components/Sections/About";
import Works from "../components/Sections/Works";
import Contact from "../components/Sections/Cantact/Contact";
import LayoutWrapper from "../components/Loader/LayoutWrapper";

const page = () => {
  return (
    <main className="flex flex-col gap-30 pb-10">
      <LayoutWrapper />
      <About />
      <Works />
      <Contact />
    </main>
  );
};

export default page;
