import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import about from "../../assets/data/about/about.json";
import ME from "../../assets/imgs/about/me-about.png";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <section id="about">
      <h5>{t("subtitle")}</h5>
      <h2>{t("title")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("titleSection_1")}</h5>
              <small>
                {new Date().getFullYear() - 2018}+ {t("subtitleSection_1")}{" "}
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{t("titleSection_2")}</h5>
              <small>
                {about.clients} {t("subtitleSection_2")}
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("titleSection_3")}</h5>
              <small>
                {about.projects} {t("subtitleSection_3")}
              </small>
            </article>
          </div>

          <p>{t("description")}</p>

          <a href="#contact" className="btn btn-primary">
            {t("contactButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
