import ContactSection from "@/src/components/Sections/Cantact/CantactUI";
import HeroSection from "@/src/components/Sections/hero-section";
import { BentoCard } from "@/src/components/Shared/Bento/BentoCard";
import { BentoTilt } from "@/src/components/Shared/Bento/BentoTils";
import React from "react";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <BentoTilt className="border rounded-lg my-5">
        <BentoCard
          title=""
          description="Hi! I'm a passionate front-end developer who started the coding journey on November 9, 2024. Since then, I've dedicated myself to learning and building real-world projects using HTML, CSS, and JavaScript. Early on, I created 8-10 projects to strengthen my understanding of the fundamentals."
        />
      </BentoTilt>
      <div className="lg:grid grid-cols-2 gap-5">
        <BentoTilt className="border rounded-lg my-5">
          <BentoCard
            title=""
            description="In the last three months, I’ve shifted my focus to React.js and Next.js, where I’ve completed over 15 projects, gaining hands-on experience with modern web development practices and component-based design. I enjoy creating clean, responsive, and user-friendly interfaces that solve real problems."
          />
        </BentoTilt>
        <BentoTilt className="border rounded-lg my-5">
          <BentoCard
            title=""
            description="Currently, I'm building my portfolio with Next.js to showcase my skills, creativity, and growth as a developer. I'm always eager to learn new tools and technologies to become better every day.
I enjoy turning complex problems into clean, scalable solutions.
Collaboration, curiosity, and continuous learning are at the heart of how I grow."
          />
        </BentoTilt>
      </div>
      <ContactSection />
    </main>
  );
};

export default Page;
