import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: ["en", "cn"],
  hideLocale: "default-locale",
});

export function getLocalizedHref(locale: string, path = "/") {
  const normalizedPath = path === "/" ? "" : path.replace(/^\/+/, "");
  const prefix = locale === i18n.defaultLanguage ? "" : `/${locale}`;

  if (normalizedPath.length === 0) return prefix || "/";

  return `${prefix}/${normalizedPath}`.replace(/\/+/g, "/");
}
