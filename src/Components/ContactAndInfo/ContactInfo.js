import React from "react";
import "./ContactInfo.css";
import locationIcon from "../../Assets/Images/location.png";
import phoneIcon from "../../Assets/Images/phone.png";
import emailIcon from "../../Assets/Images/mail.png";

function ContactInfo() {
  return (
    <div className="contactInfo">
      <div className="contactInfoTitle">Let us get in touch</div>
      <div className="contactInfoParagraph">
        We are open for any suggestion or just to have a chat
      </div>
      <div className="contactItem">
        <img className="contactIcon" src={locationIcon} alt="location" />
        <div>Address: 1600 Pennsylvania Ave NW Washington, DC 20500</div>
      </div>
      <div className="contactItem">
        <img className="contactIcon" src={phoneIcon} alt="phone" />
        <div>Phone: +123 4 567 890</div>
      </div>
      <div className="contactItem">
        <img className="contactIcon" src={emailIcon} alt="@" />
        <div>Email: info@mystore.com</div>
      </div>
    </div>
  );
}

export default ContactInfo;
