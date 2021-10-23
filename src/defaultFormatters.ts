import { Formatter } from "./types";

export const number: Formatter<number, string, Intl.NumberFormatOptions> =
  (locale, formatOptions) => (v: number) => {
    try {
      return new Intl.NumberFormat(locale, formatOptions).format(v);
    } catch (e) {
      return v.toString();
    }
  };

export const date: Formatter<Date, string, Intl.DateTimeFormatOptions> =
  (locale, formatOptions) => (v: Date) => {
    try {
      return new Intl.DateTimeFormat(locale, formatOptions).format(v);
    } catch (e) {
      return v.toString();
    }
  };
