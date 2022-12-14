import React from "react";
import "./projects.css";
import projects from "../../assets/data/projects/projects.json";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <section id="projects">
      <h5>{t("subtitle")}</h5>
      <h2>{t("title")}</h2>

      <div className="container projects__container">
        {projects.map(({ id, image, title, github, demo }) => {
          const githubDisabled =
            github === null ? "btn projects__btn-disable" : "btn";
          const demoDisabled =
            demo === null
              ? "btn btn-primary projects__btn-disable"
              : "btn btn-primary";

          return (
            <article key={id} className="projects__item">
              <div className="projects__item-image">
                <img
                  src={require(`../../assets/imgs/projects/${image}`)}
                  alt=""
                />
              </div>
              <h3>{title}</h3>
              <div className="projects__item-cta">
                <a href={github} className={githubDisabled} target="_blank">
                  {t("repoButton")}
                </a>
                <a href={demo} className={demoDisabled} target="_blank">
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

export default Projects;
