import { uiTranslations } from "fumadocs-ui/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { getLocalizedHref, i18n } from "@/lib/i18n";
import { gitConfig } from "./shared";

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    en: {
      displayName: "English",
    },
    cn: {
      displayName: "Chinese",
    },
  });

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: locale === "cn" ? "Chinese Docs" : "English Docs",
      url: getLocalizedHref(locale),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: "main",
        text: locale === "cn" ? "文档" : "Documentation",
        url: getLocalizedHref(locale, "/docs"),
      },
    ],
  };
}
