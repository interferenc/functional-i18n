import * as DefaultFormatters from "./defaultFormatters";
import { Formatter, NumberFormats, DateTimeFormats } from "./types";

export const number =
  <Locale extends string, F extends string, NF>(
    locale: Locale,
    formats: NumberFormats<F, NF>,
    formatter: Formatter<number, Locale, NF> = DefaultFormatters.number
  ) =>
  (format: F) =>
    formatter(locale, formats[format]);

export const dateTime =
  <Locale extends string, F extends string, DF>(
    locale: Locale,
    formats: DateTimeFormats<F, DF>,
    formatter: Formatter<Date, Locale, DF> = DefaultFormatters.date
  ) =>
  (format: F) =>
    formatter(locale, formats[format]);
