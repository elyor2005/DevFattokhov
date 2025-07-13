import ContactSection from "@/src/components/Sections/Cantact/CantactUI";
import Container from "@/src/components/Shared/container";
import { WORKS } from "@/src/const/works";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const SingleWork = ({ params: { id } }: { params: { id: string } }) => {
  const work = WORKS.find((item) => item.id === id);
  if (!work) return notFound();
  return (
    <main className="md:pt-[100px] pt-14 md:pb-20 pb-10">
      <Container className="mb-10 mt-10">
        <Link
          href="/works"
          className="mb-10 flex items-center hover:underline transition-all duration-200 gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <p>Back to works</p>
        </Link>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="grid h-max  ">
            {work.liveUrl ? (
              <Link href={work.liveUrl}>
                <h1 className="lg:text-5xl text-3xl font-medium">
                  {work.name}
                </h1>
              </Link>
            ) : (
              <h1 className="lg:text-5xl text-3xl font-medium">{work.name}</h1>
            )}

            <div className="grid  text-base w-full max-w-[400px] h-max md:mt-10 mt-6 md:gap-5 gap-3">
              <div className="grid grid-cols-2 border-b border-b-border-color">
                <span>Year</span>
                <span className="text-gray-100">{work.year}</span>
              </div>
              <div className="grid grid-cols-2 border-b border-b-border-color ">
                <span className="grid">Type</span>
                <span className="text-gray-100">{work.type}</span>
              </div>
              {work.client && (
                <div className="grid grid-cols-2 border-b border-b-border-color text-white">
                  <span className="grid">Client</span>
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    className="text-white font-medium"
                  >
                    {work.client}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="grid h-max">
            <p className="lg:text-2xl md:text-lg text-base text-white/80 font-medium">
              {work.description}
            </p>
            {work.liveUrl && (
              <Link
                target="_blank"
                href={work.liveUrl}
                className="mt-6 text-lg font-medium flex items-center gap-2 px-6 py-2 border border-black/50 hover:border-black transition-all duration-300 w-max"
              >
                Live preview
                <ArrowUpRight />
              </Link>
            )}
          </div>
        </div>
        <div className="grid gap-4 md:mt-10 mt-6">
          {work.images.map((item) => (
            <Image
              key={item}
              src={item}
              alt="img"
              className="w-full h-auto rounded-md"
              width={2000}
              height={2400}
            />
          ))}
        </div>
      </Container>
      <ContactSection />
    </main>
  );
};

export default SingleWork;
