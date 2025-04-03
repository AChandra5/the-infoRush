import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './eng/en.json';
import hiTranslation from './hin/hi.json';

i18n.use(initReactI18next).init({
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
