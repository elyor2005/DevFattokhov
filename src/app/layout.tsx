import type { Metadata } from "next";
import { Outfit, Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import SmoothScroll from "../components/layout/SmoothScroll";
import { LanguageProvider } from "../i18n/LanguageProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevFattokhov - Frontend Architect",
  description:
    "Abdufattokhov Elyor - Frontend Architect. Precision-crafted web experiences with clean, optimized, and scalable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`lenis ${outfit.variable} ${inter.variable} ${syne.variable}`}
    >
      <body className="antialiased">
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
