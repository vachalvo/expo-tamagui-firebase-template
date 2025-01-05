import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import translationEn from "./locales/en.json";
import translationCs from "./locales/cs.json";

const FALLBACK_LANGUAGE = "en";
const RESOURCES = {
  en: { translation: translationEn },
  cs: { translation: translationCs },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: RESOURCES,
  lng: Localization.getLocales()[0].languageCode || FALLBACK_LANGUAGE,
  fallbackLng: FALLBACK_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
