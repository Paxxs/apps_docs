import type { Metadata } from "next";
import { source } from "@/lib/source";

export default function LegacyChinesePath() {
  return null;
}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return [
    { slug: [] },
    ...source
      .getPages("zh-Hans")
      .map((page) => ({ slug: ["docs", ...page.slugs] })),
  ];
}
