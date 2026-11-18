import { withBasePath } from "./shared";

export const searchApiRoute = "/api/search";
export const searchApiUrl = withBasePath(searchApiRoute);

export const searchTags = [
  {
    value: "clip-smart",
    labels: {
      en: "ClipSmart",
      cn: "ClipSmart",
      "zh-Hant": "ClipSmart",
    },
  },
  {
    value: "last-time",
    labels: {
      en: "LastTime",
      cn: "LastTime",
      "zh-Hant": "LastTime",
    },
  },
  {
    value: "exif-snap",
    labels: {
      en: "ExifSnap",
      cn: "ExifSnap",
      "zh-Hant": "ExifSnap",
    },
  },
  {
    value: "text-relay",
    labels: {
      en: "TextRelay",
      cn: "TextRelay",
      "zh-Hant": "TextRelay",
    },
  },
  {
    value: "keep-screen-on",
    labels: {
      en: "KeepScreenOn",
      cn: "KeepScreenOn",
      "zh-Hant": "KeepScreenOn",
    },
  },
  {
    value: "beebolt",
    labels: {
      en: "BeeBolt",
      cn: "BeeBolt",
      "zh-Hant": "BeeBolt",
    },
  },
] as const;

export type SearchLocale = "en" | "cn" | "zh-Hant";
export type SearchTagValue = (typeof searchTags)[number]["value"];

const searchTagValues = new Set<string>(searchTags.map((tag) => tag.value));

function getSupportedSearchLocale(locale: string): SearchLocale {
  if (locale === "cn") return "cn";
  if (locale === "zh-Hant") return "zh-Hant";
  return "en";
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
