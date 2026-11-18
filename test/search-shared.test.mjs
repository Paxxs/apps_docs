import { describe, expect, test } from "bun:test";
import {
  getSearchTagItems,
  getSearchTagValue,
  searchApiUrl,
  searchTags,
} from "../src/lib/search.shared.ts";

describe("search shared configuration", () => {
  test("derives app tags from docs slugs", () => {
    expect(getSearchTagValue(["last-time", "privacy"])).toBe("last-time");
    expect(getSearchTagValue(["exif-snap"])).toBe("exif-snap");
    expect(getSearchTagValue([])).toBeUndefined();
    expect(getSearchTagValue(["unknown-app"])).toBeUndefined();
  });

  test("exposes localized tag items for the search dialog", () => {
    expect(searchTags.map((tag) => tag.value)).toEqual([
      "clip-smart",
      "last-time",
      "exif-snap",
      "text-relay",
      "keep-screen-on",
      "beebolt",
    ]);
    expect(getSearchTagItems("en").map((tag) => tag.name)).toEqual([
      "ClipSmart",
      "LastTime",
      "ExifSnap",
      "TextRelay",
      "KeepScreenOn",
      "BeeBolt",
    ]);
    expect(getSearchTagItems("zh-Hans").map((tag) => tag.name)).toEqual([
      "ClipSmart",
      "LastTime",
      "ExifSnap",
      "TextRelay",
      "KeepScreenOn",
      "BeeBolt",
    ]);
  });

  test("uses the configured base path for the static search index", () => {
    expect(searchApiUrl).toBe("/api/search");
  });
});
