import React from "react";
import CV from "../../assets/cv.pdf";
import { useTranslation } from "react-i18next";

function CTA() {
  const { t } = useTranslation("header");

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {t("downloadButton")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("contactButton")}
      </a>
    </div>
  );
}

export default CTA;
