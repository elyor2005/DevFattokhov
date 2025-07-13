import React from "react";
import Container from "../Shared/container";
import SectionHeader from "../Shared/Header";
import Link from "next/link";
import Image from "next/image";
import { WORKS } from "../../const/works";
const Works = () => {
  return (
    <section>
      <Container>
        <SectionHeader title="Works">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8  md:py-10 py-6 ">
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
        </SectionHeader>
      </Container>
    </section>
  );
};

export default Works;
