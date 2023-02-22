import React, { useRef } from "react";
import "./ContactForm.css";

function ContactForm() {
  const fname = useRef();
  const email = useRef();
  const message = useRef();

  const submit = (e) => {
    e.preventDefault();
    console.log(fname.current.value);
    console.log(email.current.value);
    console.log(message.current.value);
  };

  return (
    <form onSubmit={submit} className="contactForm">
      <label>
        Name:{" "}
        <input
          className="contactInput"
          ref={fname}
          type="text"
          placeholder="Name"
          required
        ></input>
      </label>

      <label>
        Email Address:{" "}
        <input
          className="contactInput"
          ref={email}
          type="email"
          placeholder="Email"
          required
        ></input>
      </label>

      <label>
        Message:{" "}
        <textarea
          className="messageInput"
          ref={message}
          type="text"
          placeholder="Message"
          required
        ></textarea>
      </label>

      <button className="submit" type="submit">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
