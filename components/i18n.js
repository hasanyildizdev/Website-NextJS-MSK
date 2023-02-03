import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from "../public/locales/en/translationEn.json";
import translationTr from "../public/locales/tr/translationTr.json";

const resources = {
  en: {
    translation: translationEn
  },
  tr: {
    translation: translationTr
  }
};

i18n
 .use(Backend)
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    lng: "tr",
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;