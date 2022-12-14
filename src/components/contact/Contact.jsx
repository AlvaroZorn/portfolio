import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import contact from "../../assets/data/contact/contact.json";
import social from "../../assets/data/social/social.json";

import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useTranslation("contact");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        contact.serviceId,
        contact.templateId,
        form.current,
        contact.publicKex
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>{t("subtitle")}</h5>
      <h2>{t("title")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>{t("emailSectionTitle")}</h4>
            <h5>{social.email}</h5>
            <a href={"mailto:" + social.email}>{t("sendMessageButton")}</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>{t("messageSectionTitle")}</h4>
            <h5>{social.facebook}</h5>
            <a href={social.facebookLink} target="_blank">
              {t("sendMessageButton")}
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>{t("whatsappSectionTitle")}</h4>
            <h5>{social.whatsapp}</h5>
            <a href={social.whatsappLink} target="_blank">
              {t("sendMessageButton")}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("placeholderName")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("placeholderEmail")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("placeholderMessage")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("sendMessageButton")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
