import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    len: "en",
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          About: "About",
          Cars: "Cars",
          Contact: "Contact",
        },
      },
      bn: {
        translation: {
          About: "সম্পর্কে",
          Cars: "গাড়ি",
          Contact: "যোগাযোগ",
        },
      },
    },
  });
