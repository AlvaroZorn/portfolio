import React from "react";
import "./projects.css";
import projects from "../../assets/data/projects/projects.json";
import Popup from "reactjs-popup";
import { useTranslation } from "react-i18next";
import { CgArrowsExpandUpRight } from "react-icons/cg";

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
            demo === null ? "btn projects__btn-disable" : "btn btn-primary";

          return (
            <Popup
              trigger={
                <article key={id} className="projects__item">
                  <div className="projects__item-image">
                    <img
                      src={require(`../../assets/imgs/projects/${image}`)}
                      alt=""
                    />
                    <div>
                      <a className="projects__item-icon">
                        <CgArrowsExpandUpRight />
                      </a>
                    </div>
                  </div>
                  <h3>{title}</h3>
                </article>
              }
              modal
            >
              <article className="projects__item-modal">
                <h3>{title}</h3>
                <div className="projects__item-modal-info">
                  <h4>Beschreibung</h4>
                  <small>Dies ist eine Beschreibung</small>
                  <h4>Rolle</h4>
                  <small>Dies ist meine Rolle</small>
                  <h4>Technolgien</h4>
                  <small>Dies sind die Technologien</small>
                </div>
                <div className="projects__item-modal-cta">
                  <a href={github} className={githubDisabled} target="_blank">
                    {t("repoButton")}
                  </a>
                  <a href={demo} className={demoDisabled} target="_blank">
                    {t("demoButton")}
                  </a>
                </div>
              </article>
            </Popup>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
