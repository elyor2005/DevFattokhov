import ContactSection from "@/src/components/Sections/Cantact/CantactUI";
import Container from "@/src/components/Shared/container";
import { WORKS } from "@/src/const/works";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="md:pt-[100px] pt-14 md:pb-20 pb-10">
      <Container className="mb-10">
        <div className="grid md:grid-cols-2">
          <h1 className="lg:text-5xl text-3xl font-medium grid">Works</h1>
          <div className="grid h-max">
            <p className="lg:text-2xl md:text-lg text-base text-white/80 font-medium">
              Explore a selection of my work showcasing my skills as a front-end
              developer. From responsive websites to interactive user
              interfaces, each project reflects my passion for clean code,
              modern design, and delivering smooth, user-friendly experiences. I
              focus on creating scalable, high-performance applications using
              the latest front-end technologies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8  md:py-10 py-6">
          {WORKS.map((item) => (
            <div key={item.id} className="border rounded-md">
              <Link href={`/works/${item.id}`}>
                <Image
                  alt="logo"
                  src={item.preview}
                  className="w-full h-auto rounded-md"
                  width={1000}
                  height={1200}
                />
              </Link>
              <hr />
              <Link
                href={`/works/${item.id}`}
                className="2xl:text-2xl md:text-lg text-base font-medium block hover:opacity-60 transition-all duration-200 text-center "
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <ContactSection />
    </main>
  );
};

export default Page;
