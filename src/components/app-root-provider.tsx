"use client";

import { i18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import SearchDialog from "@/components/search";
import { getLocalizedHref } from "@/lib/i18n";
import { translations } from "@/lib/layout.shared";
import { withBasePath } from "@/lib/shared";

export function AppRootProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const pathname = usePathname();

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
    >
      {children}
    </RootProvider>
  );
}
