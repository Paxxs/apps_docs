import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: ["en", "cn", "zh-Hant"],
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

function stripLocalePrefix(path: string) {
  const segments = path.replace(/^\/+/, "").split("/").filter(Boolean);

  if (
    segments[0] &&
    (i18n.languages as readonly string[]).includes(segments[0])
  ) {
    segments.shift();
  }

  return segments.join("/");
}

export function getLocalizedHref(locale: string, path = "/") {
  const normalizedPath = path === "/" ? "" : stripLocalePrefix(path);
  const prefix = isDefaultLanguage(locale) ? "" : `/${locale}`;

  if (normalizedPath.length === 0) return prefix || "/";

  return `${prefix}/${normalizedPath}`.replace(/\/+/g, "/");
}
