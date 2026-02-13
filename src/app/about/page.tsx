"use client";
import ContactSection from "@/src/app/(home)/_components/ContactUI";
import { BentoCard } from "@/src/components/ui/BentoCard";
import { BentoTilt } from "@/src/components/ui/BentoTilt";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import React from "react";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("about");

  return (
    <main className="relative min-h-screen bg-[#F5F5F7] overflow-x-hidden pt-24 sm:pt-32">
      <div className="relative z-10 space-y-24 sm:space-y-32 pb-24 sm:pb-32">
        <Container>
          <SectionHeader
            title={t("title")}
            hideToggle={true}
            description={t("description")}
          >
            <div className="mt-8 space-y-8">
              <BentoTilt className="border rounded-lg">
                <BentoCard title="" description={t("bio.intro")} />
              </BentoTilt>

              <div className="lg:grid grid-cols-2 gap-5">
                <BentoTilt className="border rounded-lg my-5 lg:my-0">
                  <BentoCard title="" description={t("bio.experience")} />
                </BentoTilt>
                <BentoTilt className="border rounded-lg">
                  <BentoCard title="" description={t("bio.current")} />
                </BentoTilt>
              </div>
            </div>
          </SectionHeader>

          <ContactSection />
        </Container>
      </div>
    </main>
  );
};

export default Page;
