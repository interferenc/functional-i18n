import { createI18n } from "../../src/i18n";
import { enUs, deDe } from "./locales";

const i18n = createI18n({
  "en-US": enUs,
  "de-DE": deDe,
});

const { t, d, n } = i18n("en-US");

console.log(
  t.welcome("Dave"),
  d("full")(new Date()),
  n("percent")(0.23),
  t.goodbye
);
