import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: ["en", "cn"],
  hideLocale: "default-locale",
});

export function isDefaultLanguage(locale: string) {
  return locale === i18n.defaultLanguage;
}

export function getPrefixedLanguages() {
  return i18n.languages.filter((lang) => !isDefaultLanguage(lang));
}

export function getPrefixedLanguageStaticParams() {
  return getPrefixedLanguages().map((lang) => ({ lang }));
}

export function getLocalizedHref(locale: string, path = "/") {
  const normalizedPath = path === "/" ? "" : path.replace(/^\/+/, "");
  const prefix = isDefaultLanguage(locale) ? "" : `/${locale}`;

  if (normalizedPath.length === 0) return prefix || "/";

  return `${prefix}/${normalizedPath}`.replace(/\/+/g, "/");
}
