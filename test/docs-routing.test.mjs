import { describe, expect, test } from "bun:test";
import {
  getDefaultDocsStaticParams,
  getPrefixedDocsStaticParams,
} from "../src/lib/docs-routing.shared.ts";

describe("docs static route params", () => {
  test("maps default-language docs pages to slug-only params", () => {
    const params = getDefaultDocsStaticParams();

    expect(params).toContainEqual({ slug: [] });
    expect(params).toContainEqual({ slug: ["exif-snap"] });
    expect(params.some((param) => "lang" in param)).toBe(false);
  });

  test("maps prefixed docs pages to non-default language params only", () => {
    const params = getPrefixedDocsStaticParams();

    expect(params).toContainEqual({ lang: "zh-Hans", slug: [] });
    expect(params).toContainEqual({ lang: "zh-Hans", slug: ["exif-snap"] });
    expect(params).toContainEqual({ lang: "zh-Hant", slug: [] });
    expect(params).toContainEqual({
      lang: "zh-Hant",
      slug: ["exif-snap"],
    });
    expect(params.some((param) => param.lang === "en")).toBe(false);
  });
});
