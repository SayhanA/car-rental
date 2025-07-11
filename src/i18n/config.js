import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).use(languageDetector).use(Backend).init({
  len: "en",
  // debug: true,
  fallbackLng: "en",
});
