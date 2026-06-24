import { describe, expect, test } from "bun:test";
import { buildSearchIndex } from "../src/lib/search.server.ts";

const structuredData = {
  headings: [{ content: "Privacy", id: "privacy" }],
  contents: [{ content: "No analytics are collected." }],
};

describe("search server index", () => {
  test("adds the app tag derived from the docs slug", async () => {
    const index = await buildSearchIndex({
      data: {
        title: "Privacy Policy",
        description: "Privacy details",
        structuredData,
      },
      path: "last-time/privacy.mdx",
      slugs: ["last-time", "privacy"],
      url: "/en/docs/last-time/privacy",
    });

    expect(index).toMatchObject({
      id: "/en/docs/last-time/privacy",
      title: "Privacy Policy",
      description: "Privacy details",
      structuredData,
      tag: "last-time",
      url: "/en/docs/last-time/privacy",
    });
  });

  test("supports lazy structured data from generated MDX pages", async () => {
    const index = await buildSearchIndex({
      data: {
        title: "Introduction",
        structuredData: async () => structuredData,
      },
      path: "exif-snap/index.mdx",
      slugs: ["exif-snap"],
      url: "/en/docs/exif-snap",
    });

    expect(index.structuredData).toBe(structuredData);
    expect(index.tag).toBe("exif-snap");
  });

  test("omits tags for the docs root page", async () => {
    const index = await buildSearchIndex({
      data: {
        title: "Docs",
        structuredData,
      },
      path: "index.mdx",
      slugs: [],
      url: "/en/docs",
    });

    expect(index.tag).toBeUndefined();
  });
});
