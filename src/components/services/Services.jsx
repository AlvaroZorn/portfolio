import React from "react";
import "./services.css";
import { VscCircleFilled } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import services from "../../assets/data/services/services.json";

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <section id="services">
      <h5>{t("subtitle")}</h5>
      <h2>{t("title")}</h2>

      <div className="container services__container">
        <article className="service">
          <h3>{t("titleSection_1")}</h3>
          <ul className="service__list">
            {services.methodical.map(({ service }) => {
              return (
                <li>
                  <VscCircleFilled className="service__list-icon" />
                  <p>{service}</p>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="service">
          <h3>{t("titleSection_2")}</h3>
          <ul className="service__list">
            {services.technical.map(({ service }) => {
              return (
                <li>
                  <VscCircleFilled className="service__list-icon" />
                  <p>{service}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
