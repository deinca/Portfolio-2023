import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zldq1lq",
        "template_l0i8qw2",
        form.current,
        "user_5s9ml9oSgDkedAwVWxFth"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sended meesage")
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="section-heading">
        <h3>Contact Formulier</h3>
      </div>

      <div className="input-field">
        <label htmlFor="name">Vul je naam: </label>
        <input
          type="text"
          name="user_name"
          id="name"
          placeholder="Voor en achternaam"
          autoComplete="on"
          required
        />
      </div>

      <div className="input-field">
        <label htmlFor="email">Vul je email: </label>
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="voorbeeld@gmail.com"
          required=""
        />
      </div>

      <div className="input-field">
        <label htmlFor="message">Type je bericht: </label>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Beste Deiver...."
        ></textarea>
      </div>

      <div className="btn">
        <button type="submit" id="form-submit" className="main-gradient-button">
          Versturen
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
