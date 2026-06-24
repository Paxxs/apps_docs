import { i18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";
import { translations } from "@/lib/layout.shared";
import "@/app/global.css";
import { Inter } from "next/font/google";
import SearchDialog from "@/components/search";
import { i18n } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
});

export default async function Layout({
  params,
  children,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={i18nProvider(translations, lang)}
          search={{ SearchDialog }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
