"use client";
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "@/src/const/links";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/utils/cn";
import Container from "../Shared/container";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 ",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px] scale-90 border rounded-2xl"
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-3xl  md:text-4xl hover:opacity-65 transition-all duration-300 ease-linear"
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

          <ul className="hidden md:flex items-center gap-6 ">
            {NAV_LINKS.map((item) => (
              <li key={item.link}>
                <a className="nav-hover-btn" href={item.link}>
                  <span className="lg:text-2xl  text-sm"> {item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none text-white cursor-pointer hover:opacity-65"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul
            className={cn(
              "absolute top-full left-0 w-full flex flex-col items-center gap-6 bg-black-100 backdrop-blur-[8px] md:hidden",
              hasScrolled && "bg-black-100 backdrop-blur-[8px] border rounded-2xl"
            )}
          >
            {NAV_LINKS.map((item) => (
              <li key={item.link}>
                <a
                  className="block nav-hover-btn text-5xl px-4 py-2 text-white hover:opacity-70 transition"
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
