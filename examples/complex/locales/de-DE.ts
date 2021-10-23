import { LocaleInformation } from ".";

export const deDe: LocaleInformation = {
  numberFormats: {
    integer: {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true,
    },
    percent: {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
      useGrouping: true,
      style: "percent",
    },
  },
  dateTimeFormats: {
    short: {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    },
    full: {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    },
  },
  messages: {
    welcome: (name) => `Wilkommen ${name}`,
    goodbye: "Tschüss",
  },
};
