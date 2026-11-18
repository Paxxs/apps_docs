import { describe, expect, test } from "bun:test";
import {
  getLocalizedHref,
  getPrefixedLanguageStaticParams,
  i18n,
} from "../src/lib/i18n.ts";

describe("i18n route helpers", () => {
  test("configures the default locale to be hidden from generated URLs", () => {
    expect(i18n.defaultLanguage).toBe("en");
    expect(i18n.hideLocale).toBe("default-locale");
  });

  test("omits the locale prefix for default-language URLs", () => {
    expect(getLocalizedHref("en")).toBe("/");
    expect(getLocalizedHref("en", "/docs")).toBe("/docs");
  });

  test("keeps non-default locale prefixes in URLs", () => {
    expect(getLocalizedHref("zh-Hans")).toBe("/zh-Hans");
    expect(getLocalizedHref("zh-Hans", "/docs")).toBe("/zh-Hans/docs");
    expect(getLocalizedHref("zh-Hant")).toBe("/zh-Hant");
    expect(getLocalizedHref("zh-Hant", "/docs")).toBe("/zh-Hant/docs");
  });

  test("removes an existing locale prefix when switching back to the default language", () => {
    expect(getLocalizedHref("en", "/zh-Hans/docs/clip-smart")).toBe(
      "/docs/clip-smart",
    );
    expect(getLocalizedHref("en", "/en/docs/clip-smart")).toBe(
      "/docs/clip-smart",
    );
  });

  test("generates prefixed static language params for non-default languages only", () => {
    expect(getPrefixedLanguageStaticParams()).toEqual([
      { lang: "zh-Hans" },
      { lang: "zh-Hant" },
    ]);
  });
});
