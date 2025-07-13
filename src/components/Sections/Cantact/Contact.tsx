import React from "react";
import Container from "../../Shared/container";
import SectionHeader from "../../Shared/Header";
import ContactSection from "./CantactUI";

const Contact = () => {
  return (
    <section id="/contact">
      <Container>
        <SectionHeader title="Contact">
          <div>
            <ContactSection />
          </div>
        </SectionHeader>
      </Container>
    </section>
  );
};

export default Contact;
