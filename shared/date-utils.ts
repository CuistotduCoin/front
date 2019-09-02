import {
    format as dateFnsFormat,
    formatDistanceToNow as dateFnsDistanceInWordsToNow
} from "date-fns";
import { fr } from "date-fns/locale";

const locales = { fr };
const locale = { locale: locales.fr }; // use locales[window.__localeId__] or locales[global.__localeId__] when multi language

export const format = (date, formatStr) =>
    dateFnsFormat(date, formatStr, locale);
export const distanceInWordsToNow = date =>
    dateFnsDistanceInWordsToNow(date, locale);
