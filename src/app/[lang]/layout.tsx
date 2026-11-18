import "@/app/global.css";
import { Inter } from "next/font/google";
import { AppRootProvider } from "@/components/app-root-provider";
import { getPrefixedLanguageStaticParams } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
});

const htmlLanguages: Record<string, string> = {
  en: "en",
  "zh-Hans": "zh-Hans",
  "zh-Hant": "zh-Hant",
};

export default async function Layout({
  params,
  children,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html
      lang={htmlLanguages[lang] ?? lang}
      className={inter.className}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <AppRootProvider locale={lang}>{children}</AppRootProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return getPrefixedLanguageStaticParams();
}
