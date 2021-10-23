import { dateTime, number } from "./formatters";
import { LocaleInformation, Messages } from "./types";

export const createI18n =
  <
    Locale extends string,
    N extends string,
    NF,
    D extends string,
    DF,
    M extends Messages
  >(
    locales: Record<Locale, LocaleInformation<N, NF, D, DF, M>>
  ) =>
  (locale: Locale) => ({
    n: number(locale, locales[locale].numberFormats),
    d: dateTime(locale, locales[locale].dateTimeFormats),
    t: locales[locale].messages,
  });
