import React from "react";
import email from "../src/assets/email.png";
import Linkedin from "../src/assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:harshk2312@gmail.com">harshk2312@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={Linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/harsh-brahmkshatriya-3932932b9/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
