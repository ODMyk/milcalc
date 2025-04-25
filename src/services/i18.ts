import en from '@locales/en.json';
import ua from '@locales/ua.json';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import {storage} from './mmkv';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async callback => {
    let tag: string | undefined;
    try {
      const savedLanguage = storage.getString('user-language');
      if (savedLanguage) {
        callback(savedLanguage);
        return savedLanguage;
      }

      const bestLang = RNLocalize.findBestLanguageTag(['en', 'uk']);
      callback(bestLang?.languageTag ?? 'en');
      tag = bestLang?.languageTag;
    } catch (error) {
      console.error('Language detection failed:', error);
      callback('en');
    }

    return tag ?? 'en';
  },
  cacheUserLanguage: async lng => {
    try {
      storage.set('user-language', lng);
    } catch (error) {
      console.error('Failed to cache language:', error);
    }
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {translation: en},
      ua: {translation: ua},
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
