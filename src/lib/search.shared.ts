import { withBasePath } from "./shared";

export const searchApiRoute = "/api/search";
export const searchApiUrl = withBasePath(searchApiRoute);

export const searchTags = [
  {
    value: "clip-smart",
    labels: {
      en: "ClipSmart",
      cn: "ClipSmart",
    },
  },
  {
    value: "last-time",
    labels: {
      en: "LastTime",
      cn: "LastTime",
    },
  },
  {
    value: "exif-snap",
    labels: {
      en: "ExifSnap",
      cn: "ExifSnap",
    },
  },
  {
    value: "text-relay",
    labels: {
      en: "TextRelay",
      cn: "TextRelay",
    },
  },
  {
    value: "keep-screen-on",
    labels: {
      en: "KeepScreenOn",
      cn: "KeepScreenOn",
    },
  },
] as const;

export type SearchLocale = "en" | "cn";
export type SearchTagValue = (typeof searchTags)[number]["value"];

const searchTagValues = new Set<string>(searchTags.map((tag) => tag.value));

function getSupportedSearchLocale(locale: string): SearchLocale {
  return locale === "cn" ? "cn" : "en";
}

export function getSearchTagValue(
  slugs: readonly string[],
): SearchTagValue | undefined {
  const [value] = slugs;

  if (value && searchTagValues.has(value)) return value as SearchTagValue;
}

export function getSearchTagItems(locale: string) {
  const supportedLocale = getSupportedSearchLocale(locale);

  return searchTags.map((tag) => ({
    name: tag.labels[supportedLocale],
    value: tag.value,
  }));
}
