import { describe, expect, test } from "bun:test";
import { getHomeContent, getNavContent } from "../src/lib/home.shared.ts";

describe("localized home content", () => {
  test("returns migrated English home copy", () => {
    const content = getHomeContent("en");

    expect(content.brand).toBe("APP·PRO");
    expect(content.tagline).toBe(
      "A curated collection of software, providing elegant solutions for your digital life",
    );
    expect(content.sections.map((section) => section.title)).toEqual([
      "Our Philosophy",
      "Explore Our Portfolio",
    ]);
    expect(content.primaryAction).toEqual({
      label: "Explore Documentation",
      href: "/docs",
    });
    expect(content.secondaryAction).toEqual({
      label: "Visit GitHub",
      href: "https://github.com/Paxxs",
    });
    expect(content.footerNote).toBe(
      "Thoughtfully designed, meticulously crafted",
    );
  });

  test("returns localized Chinese home copy", () => {
    const content = getHomeContent("zh-Hans");

    expect(content.brand).toBe("APP·PRO");
    expect(content.tagline).toBe(
      "精选软件合集，为你的数字生活提供优雅解决方案",
    );
    expect(content.sections.map((section) => section.title)).toEqual([
      "我们的理念",
      "探索产品组合",
    ]);
    expect(content.primaryAction).toEqual({
      label: "浏览文档",
      href: "/zh-Hans/docs",
    });
    expect(content.secondaryAction).toEqual({
      label: "访问 GitHub",
      href: "https://github.com/Paxxs",
    });
    expect(content.footerNote).toBe("用心设计，精心打磨");
  });

  test("returns localized Traditional Chinese home copy", () => {
    const content = getHomeContent("zh-Hant");

    expect(content.brand).toBe("APP·PRO");
    expect(content.tagline).toBe(
      "精選軟體合集，為你的數位生活提供優雅解決方案",
    );
    expect(content.sections.map((section) => section.title)).toEqual([
      "我們的理念",
      "探索產品組合",
    ]);
    expect(content.primaryAction).toEqual({
      label: "瀏覽文件",
      href: "/zh-Hant/docs",
    });
    expect(content.secondaryAction).toEqual({
      label: "造訪 GitHub",
      href: "https://github.com/Paxxs",
    });
    expect(content.footerNote).toBe("用心設計，精心琢磨");
  });

  test("returns localized nav labels without layout concerns", () => {
    expect(getNavContent("en")).toEqual({
      title: "APP·PRO Docs",
      docsLabel: "Documentation",
    });
    expect(getNavContent("zh-Hans")).toEqual({
      title: "APP·PRO",
      docsLabel: "文档首页",
    });
    expect(getNavContent("zh-Hant")).toEqual({
      title: "APP·PRO",
      docsLabel: "文件首頁",
    });
  });
});
