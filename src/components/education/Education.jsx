import React from "react";
import "./education.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import education from "../../assets/data/education/education.json";

const Education = () => {
  const { t } = useTranslation("education");

  return (
    <section id="education">
      <h5>{t("subtitle")}</h5>
      <h2>{t("title")}</h2>

      <div className="container education__container">
        <div className="education__section">
          <h3>{t("titleSection_1")}</h3>
          <div className="education__content">
            {education.school.map(({ title, year }) => {
              return (
                <article className="education__details">
                  <MdAccessTimeFilled className="education__details-icon" />
                  <div className="education__details-text">
                    <h4>{title}</h4>
                    <small className="text-light">{year}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="education__section">
          <h3>{t("titleSection_2")}</h3>
          <div className="education__content">
            {education.training.map(({ title, year }) => {
              return (
                <article className="education__details">
                  <MdAccessTimeFilled className="education__details-icon" />
                  <div className="education__details-text">
                    <h4>{title}</h4>
                    <small className="text-light">{year}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="education__section">
          <h3>{t("titleSection_3")}</h3>
          <div className="education__content">
            {education.certification.map(({ title, year, link }) => {
              return (
                <article className="education__details">
                  <MdAccessTimeFilled className="education__details-icon" />
                  <div className="education__details-text">
                    <h4 className="education__details-title">
                      {link != null ? (
                        <a href={link} target="_blank">
                          {title}
                          <TbExternalLink />
                        </a>
                      ) : (
                        title
                      )}
                    </h4>
                    <small className="text-light">{year}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
