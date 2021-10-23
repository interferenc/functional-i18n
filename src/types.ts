type SimpleMessage = string;
type InterpolatedMessage = (...values: ReadonlyArray<string>) => string;

export interface Messages {
  [key: string]: SimpleMessage | InterpolatedMessage | Messages;
}

export type NumberFormats<
  NumberFormat extends string,
  NumberFormatOptions
> = Record<NumberFormat, NumberFormatOptions>;
export type DateTimeFormats<
  DateTimeFormat extends string,
  DateTimeFormatOptions
> = Record<DateTimeFormat, DateTimeFormatOptions>;

export interface LocaleInformation<
  NumberFormat extends string,
  NumberFormatOptions,
  DateTimeFormat extends string,
  DateTimeFormatOptions,
  M extends Messages
> {
  numberFormats: NumberFormats<NumberFormat, NumberFormatOptions>;
  dateTimeFormats: DateTimeFormats<DateTimeFormat, DateTimeFormatOptions>;
  messages: M;
}

export type Formatter<T, Locale extends string, FormatOptions> = (
  locale: Locale,
  formatOptions: FormatOptions
) => (v: T) => string;
