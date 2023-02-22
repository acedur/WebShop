import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div className="contactInfo">
      <div className="contactInfoTitle">Let us get in touch</div>
      <div className="contactInfoParagraph">
        We are open for any suggestion or just to have a chat
      </div>
      <div className="contactItem">
        <div className="contactIcon">C</div>
        <div>Address: 1600 Pennsylvania Ave NW Washington, DC 20500</div>
      </div>
      <div className="contactItem">
        <div className="contactIcon">C</div>
        <div>Phone: +123 4 567 890</div>
      </div>
      <div className="contactItem">
        <div className="contactIcon">C</div>
        <div>Email: info@mystore.com</div>
      </div>
    </div>
  );
}

export default ContactInfo;
