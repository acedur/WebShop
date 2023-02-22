import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="contactContainer">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
