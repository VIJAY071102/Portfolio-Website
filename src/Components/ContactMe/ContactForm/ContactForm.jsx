import React from "react";
import "./ContactForm.css";
function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "49f23c6a-b21b-489d-bd6b-23cefa1bdb34");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div className="contact-form-content">
      <form onSubmit={onSubmit} action="">
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea
          type="text"
          name="message"
          id=""
          placeholder="message"
          rows={3}
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
