import { LocaleInformation as BaseLocaleInformation } from "../../../src/types";

export type LocaleInformation = BaseLocaleInformation<
  // Supported number formats
  "integer" | "percent",
  Intl.NumberFormatOptions,
  // Supported dateTime formats
  "short" | "full",
  Intl.DateTimeFormatOptions,
  // Messages
  {
    welcome: (name: string) => string;
    goodbye: string;
  }
>;

export { enUs } from "./en-US";
export { deDe } from "./de-DE";
