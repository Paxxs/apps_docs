import "@/app/global.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { AppRootProvider } from "@/components/app-root-provider";
import { i18n } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootEntryLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <AppRootProvider locale={i18n.defaultLanguage}>
          {children}
        </AppRootProvider>
      </body>
    </html>
  );
}
