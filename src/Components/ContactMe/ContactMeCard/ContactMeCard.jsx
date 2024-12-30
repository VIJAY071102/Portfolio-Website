import React from "react";
import "./ContactMeCard.css"
function ContactMeCard({iconUrl,text}) {
  return <div>
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>
        <p>{text}</p>
    </div>
  </div>;
}

export default ContactMeCard;
