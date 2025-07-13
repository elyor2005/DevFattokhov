import React from "react";

interface SocialLinkProps {
  href: string;
  name: string;
}

const SocialLink = ({ href, name }: SocialLinkProps) => {
  return (
    <>
      <a
        href={href}
        className="flex relative border border-border-color rounded-full group min-w-max w-max text-white 
                 px-6 py-2 sm:px-12 sm:py-3 lg:px-16 lg:py-4 
                 text-sm sm:text-base lg:text-2xl"
      >
        <div className="relative overflow-hidden">
          <span className="opacity-0">{name}</span>
          <div className="absolute top-0 left-0 transition-all duration-200 ease-linear group-hover:-top-full flex flex-col">
            <span>{name}</span>
            <span>{name}</span>
          </div>
        </div>
      </a>
      <span className="glow-before glow-after" />
    </>
  );
};

export default SocialLink;
