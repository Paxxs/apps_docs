import { withBasePath } from "./shared";

export const searchApiRoute = "/api/search";
export const searchApiUrl = withBasePath(searchApiRoute);

export const searchTags = [
  {
    value: "clip-smart",
    labels: {
      en: "ClipSmart",
      "zh-Hans": "ClipSmart",
      "zh-Hant": "ClipSmart",
    },
  },
  {
    value: "last-time",
    labels: {
      en: "LastTime",
      "zh-Hans": "LastTime",
      "zh-Hant": "LastTime",
    },
  },
  {
    value: "exif-snap",
    labels: {
      en: "ExifSnap",
      "zh-Hans": "ExifSnap",
      "zh-Hant": "ExifSnap",
    },
  },
  {
    value: "text-relay",
    labels: {
      en: "TextRelay",
      "zh-Hans": "TextRelay",
      "zh-Hant": "TextRelay",
    },
  },
  {
    value: "keep-screen-on",
    labels: {
      en: "KeepScreenOn",
      "zh-Hans": "KeepScreenOn",
      "zh-Hant": "KeepScreenOn",
    },
  },
  {
    value: "beebolt",
    labels: {
      en: "BeeBolt",
      "zh-Hans": "BeeBolt",
      "zh-Hant": "BeeBolt",
    },
  },
] as const;

export type SearchLocale = "en" | "zh-Hans" | "zh-Hant";
export type SearchTagValue = (typeof searchTags)[number]["value"];

const searchTagValues = new Set<string>(searchTags.map((tag) => tag.value));

function getSupportedSearchLocale(locale: string): SearchLocale {
  if (locale === "zh-Hans") return "zh-Hans";
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
