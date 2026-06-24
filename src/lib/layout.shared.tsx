import { uiTranslations } from "fumadocs-ui/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { getNavContent } from "@/lib/home.shared";
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
  const navContent = getNavContent(locale);

  return {
    nav: {
      // JSX supported
      title: navContent.title,
      url: getLocalizedHref(locale),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: "main",
        text: navContent.docsLabel,
        url: getLocalizedHref(locale, "/docs"),
      },
    ],
  };
}
