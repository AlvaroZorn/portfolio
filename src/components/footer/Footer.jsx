import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import social from "../../assets/data/social/social.json";
import about from "../../assets/data/about/about.json";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {about.name}
      </a>
      <ul className="footer__permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
        <small>&copy; Alvaro Zorn. All rights served</small>
      </div>
    </footer>
  );
};

export default Footer;
