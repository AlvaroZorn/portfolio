import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        header: require("./locales/en/header.json"),
        about: require("./locales/en/about.json"),
        experience: require("./locales/en/experience.json"),
        services: require("./locales/en/services.json"),
        portfolio: require("./locales/en/portfolio.json"),
        testimonials: require("./locales/en/testimonials.json"),
        contact: require("./locales/en/contact.json"),
      },
      //de: {
      //  translation: require("./locales/de/translation.json"),
      //},
    },
  });

export default i18n;
