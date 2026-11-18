import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegacyChineseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-Hans">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(window.location.href.replace(/\\/cn(?=\\/|$)/, "/zh-Hans"))`,
          }}
        />
      </head>
      <body>
        {children}
        <noscript>
          <a href="/zh-Hans">前往简体中文文档</a>
        </noscript>
      </body>
    </html>
  );
}
