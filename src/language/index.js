import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

import en from './en.json'
import es from './es.json'
import pt from './pt.json'

const resources = {
  en,
  es,
  pt
};

const i18n = new VueI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages: resources
});

export default i18n;
