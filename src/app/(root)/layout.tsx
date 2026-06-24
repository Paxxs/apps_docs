import "@/app/global.css";
import { i18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import SearchDialog from "@/components/search";
import { i18n } from "@/lib/i18n";
import { translations } from "@/lib/layout.shared";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootEntryLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={i18nProvider(translations, i18n.defaultLanguage)}
          search={{ SearchDialog }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
