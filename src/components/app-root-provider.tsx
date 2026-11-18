"use client";

import { i18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import SearchDialog from "@/components/search";
import { getLocalizedHref } from "@/lib/i18n";
import { translations } from "@/lib/layout.shared";
import { withBasePath } from "@/lib/shared";

const htmlLanguages: Record<string, string> = {
  en: "en",
  cn: "zh-CN",
  "zh-Hant": "zh-Hant",
};

export function AppRootProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const pathname = usePathname();
  const htmlLanguage = htmlLanguages[locale] ?? locale;

  useEffect(() => {
    document.documentElement.lang = htmlLanguage;
  }, [htmlLanguage]);

  return (
    <RootProvider
      i18n={{
        ...i18nProvider(translations, locale),
        onLocaleChange(nextLocale) {
          window.location.assign(
            withBasePath(getLocalizedHref(nextLocale, pathname)),
          );
        },
      }}
      search={{ SearchDialog }}
      theme={{
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
      }}
    >
      {children}
    </RootProvider>
  );
}
