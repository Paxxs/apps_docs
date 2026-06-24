import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: ["en", "cn"],
  hideLocale: "never",
});

export function getLocalizedHref(locale: string, path = "/") {
  const normalizedPath = path === "/" ? "" : path.replace(/^\/+/, "");
  const prefix = `/${locale}`;

  if (normalizedPath.length === 0) return prefix || "/";

  return `${prefix}/${normalizedPath}`.replace(/\/+/g, "/");
}
