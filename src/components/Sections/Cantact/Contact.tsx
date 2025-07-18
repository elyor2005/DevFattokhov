import React from "react";

import SectionHeader from "../../Shared/Header";
import ContactSection from "./CantactUI";

const Contact = () => {
  return (
    <section id="/contact">
      <SectionHeader title="Contact">
        <div>
          <ContactSection />
        </div>
      </SectionHeader>
    </section>
  );
};

export default Contact;
