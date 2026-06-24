"use client";

import { i18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import SearchDialog from "@/components/search";
import { getLocalizedHref } from "@/lib/i18n";
import { translations } from "@/lib/layout.shared";

export function AppRootProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <RootProvider
      i18n={{
        ...i18nProvider(translations, locale),
        onLocaleChange(nextLocale) {
          window.location.assign(
            getLocalizedHref(nextLocale, window.location.pathname),
          );
        },
      }}
      search={{ SearchDialog }}
    >
      {children}
    </RootProvider>
  );
}
