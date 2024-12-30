import React from "react";
import "./ContactMe.css";
import mail from "../../assets/images/email-icon.png";
import git from "../../assets/images/git-icon.png";
import ContactMeCard from "./ContactMeCard/ContactMeCard";
import ContactForm from "./ContactForm/ContactForm";
function ContactMe() {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactMeCard iconUrl={mail} text="jsvijayjsv@gmail.com" />
          <ContactMeCard iconUrl={git} text="https://github.com/VIJAY071102" />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
