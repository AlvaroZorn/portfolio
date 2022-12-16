import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    lng: "de",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        header: require("./locales/en/header.json"),
        about: require("./locales/en/about.json"),
        education: require("./locales/en/education.json"),
        experience: require("./locales/en/experience.json"),
        services: require("./locales/en/services.json"),
        projects: require("./locales/en/projects.json"),
        contact: require("./locales/en/contact.json"),
      },
      de: {
        header: require("./locales/de/header.json"),
        about: require("./locales/de/about.json"),
        education: require("./locales/de/education.json"),
        experience: require("./locales/de/experience.json"),
        services: require("./locales/de/services.json"),
        projects: require("./locales/de/projects.json"),
        contact: require("./locales/de/contact.json"),
      },
    },
  });

export default i18n;
