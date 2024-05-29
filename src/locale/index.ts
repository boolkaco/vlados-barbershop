import  { createI18n }  from 'vue-i18n'
import en from './en.json'
import ua from './ua.json'
import cz from './cz.json'
import ru from './ru.json'

const messages = {
  en,
  ua,
  ru,
  cz
};


export const i18n = createI18n({
  locale: 'en', 
  fallbackLocale: 'en', 
  messages: { en: ru }
});

