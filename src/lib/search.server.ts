import type { StructuredData } from "fumadocs-core/mdx-plugins";
import type { AdvancedIndex } from "fumadocs-core/search/server";
import { getSearchTagValue } from "./search.shared";

type SearchPage = {
  data: {
    title?: string;
    description?: string;
    structuredData?: StructuredData | (() => Promise<StructuredData>);
    load?: () => Promise<{ structuredData?: StructuredData }>;
  };
  path: string;
  slugs: readonly string[];
  url: string;
};

async function getStructuredData(page: SearchPage): Promise<StructuredData> {
  const { structuredData } = page.data;

  if (typeof structuredData === "function") return structuredData();
  if (structuredData) return structuredData;

  const loaded = await page.data.load?.();
  if (loaded?.structuredData) return loaded.structuredData;

  throw new Error(`Cannot find structured data for search page: ${page.path}`);
}

export async function buildSearchIndex(
  page: SearchPage,
): Promise<AdvancedIndex> {
  return {
    id: page.url,
    title: page.data.title ?? page.path,
    description: page.data.description,
    structuredData: await getStructuredData(page),
    tag: getSearchTagValue(page.slugs),
    url: page.url,
  };
}
