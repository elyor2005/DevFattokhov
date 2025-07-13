import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/src/const/links";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Container from "../Shared/container";

const Footer = () => {
  return (
    <footer className="flex left-0 bottom-0 ">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <Link
            href="/"
            className="flex items-center gap-3 text-3xl md:text-4xl hover:opacity-65 transition-all duration-300 ease-linear"
          >
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
            />
            DevFattokhov
          </Link>
          <ul>
            <ul className="flex">
              {NAV_LINKS.map((item) => (
                <li key={item.link + "footer"}>
                  <a className="nav-hover-btn" href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
