import {
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaUpwork } from "react-icons/fa6";

export interface SocialLink {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  href: string;
  color: string;
  textColor: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/elyor2005",
    color: "bg-gray-900",
    textColor: "text-white",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/__abdufattokhov__/",
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
    textColor: "text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/elyor-abdufattokhov-28a1a1388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    color: "bg-[#0077B5]",
    textColor: "text-white",
  },
  {
    name: "Upwork",
    icon: FaUpwork,
    href: "https://www.upwork.com/freelancers/~0144ff96e4e6d55c95?companyReference=1941378937770646795&mp_source=share",
    color: "bg-[#14a800]",
    textColor: "text-white",
  },
];
