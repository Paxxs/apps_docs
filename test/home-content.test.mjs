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
    const content = getHomeContent("cn");

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
      href: "/cn/docs",
    });
    expect(content.secondaryAction).toEqual({
      label: "访问 GitHub",
      href: "https://github.com/Paxxs",
    });
    expect(content.footerNote).toBe("用心设计，精心打磨");
  });

  test("returns localized nav labels without layout concerns", () => {
    expect(getNavContent("en")).toEqual({
      title: "APP·PRO Docs",
      docsLabel: "Documentation",
    });
    expect(getNavContent("cn")).toEqual({
      title: "APP·PRO",
      docsLabel: "文档首页",
    });
  });
});
