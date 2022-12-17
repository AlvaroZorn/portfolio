import React from "react";
import "./experience.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import experience from "../../assets/data/experience/experience.json";
import Progress from "../progress/Progress";

const Experience = () => {
  const { t } = useTranslation("experience");

  return (
    <section id="experience">
      <h5>{t("subtitle")}</h5>
      <h2>{t("title")}</h2>

      <div className="container experience__container">
        <div className="experience__section">
          <h3>{t("titleSection_1")}</h3>
          <div className="experience__content">
            {experience.frontend.map(({ tech, level }) => {
              return (
                <article className="experience__details">
                  <BsCheckCircleFill className="experience__details-icon" />
                  <div className="experience__details-text">
                    <h4>{tech}</h4>
                    <Progress done={level} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience__section">
          <h3>{t("titleSection_2")}</h3>
          <div className="experience__content">
            {experience.backend.map(({ tech, level }) => {
              return (
                <article className="experience__details">
                  <BsCheckCircleFill className="experience__details-icon" />
                  <div className="experience__details-text">
                    <h4>{tech}</h4>
                    <Progress done={level} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience__section">
          <h3>{t("titleSection_3")}</h3>
          <div className="experience__content">
            {experience.infrastructure.map(({ tech, level }) => {
              return (
                <article className="experience__details">
                  <BsCheckCircleFill className="experience__details-icon" />
                  <div className="experience__details-text">
                    <h4>{tech}</h4>
                    <Progress done={level} />
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

export default Experience;
