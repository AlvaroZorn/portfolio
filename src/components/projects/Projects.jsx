import React from "react";
import "./projects.css";
import projects from "../../assets/data/projects/projects.json";
import Popup from "reactjs-popup";
import { useTranslation } from "react-i18next";
import { IoIosArrowUp } from "react-icons/io";

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <section id="projects">
      <h5>{t("subtitle")}</h5>
      <h2>{t("title")}</h2>

      <div className="container projects__container">
        {projects.map(({ id, image, title, github, demo }) => {
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
                      <image className="projects__item-icon">
                        <IoIosArrowUp />
                      </image>
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
                  {github != null ? (
                    <a href={github} className="btn" target="_blank" rel="">
                      {t("repoButton")}
                    </a>
                  ) : null}
                  {demo != null ? (
                    <a href={demo} className="btn btn-primary" target="_blank">
                      {t("demoButton")}
                    </a>
                  ) : null}
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
