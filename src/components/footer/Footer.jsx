import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { useTranslation } from "react-i18next";
import social from "../../assets/data/social/social.json";
import about from "../../assets/data/about/about.json";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer>
      <a href="#" className="footer__logo">
        {about.name}
      </a>
      <ul className="footer__permalinks">
        <li>
          <a href="#">{t("section1")}</a>
        </li>
        <li>
          <a href="#about">{t("section2")}</a>
        </li>
        <li>
          <a href="#education">{t("section3")}</a>
        </li>
        <li>
          <a href="#experience">{t("section4")}</a>
        </li>
        <li>
          <a href="#projects">{t("section5")}</a>
        </li>
        <li>
          <a href="#contact">{t("section6")}</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href={social.facebook} target="_blank">
          <FaFacebookF />
        </a>
        <a href={social.instgramm} target="_blank">
          <FiInstagram />
        </a>
        <a href={social.twitter} target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyrights">
        <small>
          &copy; {about.name}. {t("copyright")}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
