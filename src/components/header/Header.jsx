import React from "react";
import "./header.css";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import ME from "../../assets/me.png";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  const { t } = useTranslation("header");

  return (
    <header>
      <div className="container header__container">
        <h5>{t("greeting")}</h5>
        <h1>{t("name")}</h1>
        <h5 className="text-light">{t("title")}</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="header__scroll-down">
          {t("scrollButton")}
          <HiOutlineChevronDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
