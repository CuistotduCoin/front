import dateFnsDistanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import dateFnsFormat from 'date-fns/format';
import fr from 'date-fns/locale/fr';

const locales = { fr };
const locale = { locale: locales.fr }; // use locales[window.__localeId__] or locales[global.__localeId__] when multi language

export const format = (date, formatStr) => dateFnsFormat(date, formatStr, locale);
export const distanceInWordsToNow = (date) => dateFnsDistanceInWordsToNow(date, locale);
