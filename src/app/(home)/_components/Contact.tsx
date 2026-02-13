import React from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import ContactSection from "./ContactUI";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeader title={t("title")}>
          <div>
            <ContactSection />
          </div>
        </SectionHeader>
      </Container>
    </section>
  );
};

export default Contact;
