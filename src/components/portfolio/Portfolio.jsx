import React from "react";
import "./portfolio.css";
import projects from "../../assets/data/portfolio/projects.json";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation("portfolio");

  return (
    <section id="portfolio">
      <h5>{t("subtitle")}</h5>
      <h2>{t("title")}</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  src={require(`../../assets/imgs/portfolio/${image}`)}
                  alt=""
                />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  {t("repoButton")}
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  {t("demoButton")}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
