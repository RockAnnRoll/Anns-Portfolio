import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import SubHeader from "../components/SubHeader";

function Contact() {
  return (
    <div>
      <SubHeader text="Kontakta mig" />
      <ContactForm />
      <p>Ni kan också kontakta mig via:</p>
      <ContactInfo />
    </div>
  );
}

export default Contact;
