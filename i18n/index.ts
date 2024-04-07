import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import cn from './locales/cn';
import en from './locales/en';

export const defaultNS = 'translation';
export const resources = { cn, en };

const preferredLanguage = 'en';
const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: storedLanguage || preferredLanguage,
});

export default i18n;
