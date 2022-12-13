import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXingSquare } from "react-icons/fa";
import social from "../../assets/data/social/social.json";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href={social.linkedin} target="_blank">
        <BsLinkedin />
      </a>
      <a href={social.xing} target="_blank">
        <FaXingSquare />
      </a>
      <a href={social.github} target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
