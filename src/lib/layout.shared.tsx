import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";

import { i18n } from "@/lib/i18n";
import { uiTranslations } from "fumadocs-ui/i18n";

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
      url: `/${locale}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: "main",
        text: locale === "cn" ? "文档" : "Documentation",
        url: `/${locale}/docs`,
      },
    ],
  };
}
