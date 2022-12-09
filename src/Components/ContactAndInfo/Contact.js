import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <div>Lokacija</div>
        <div>Telefonski broj</div>
        <div>Email</div>
      </div>
      <div className="contactForm">
        <input></input>
        <input></input>
        <button>submit</button>
      </div>
    </div>
  );
}

export default Contact;
