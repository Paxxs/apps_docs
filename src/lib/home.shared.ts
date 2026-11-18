import { getLocalizedHref } from "./i18n";
import { withBasePath } from "./shared";

const githubUrl = "https://github.com/Paxxs";

const localizedHomeContent = {
  en: {
    brand: "APP·PRO",
    tagline:
      "A curated collection of software, providing elegant solutions for your digital life",
    sections: [
      {
        title: "Our Philosophy",
        body: "Minimalist yet sophisticated, we focus on the perfect balance between user experience and functionality. Each application is meticulously designed to meet the needs of modern users while maintaining intuitive usability.",
      },
      {
        title: "Explore Our Portfolio",
        body: "Browse our curated software documentation to discover how each application can revolutionize your workflow. From productivity tools to creative applications, our product line encompasses a diverse range of digital needs.",
      },
    ],
    primaryActionLabel: "Explore Documentation",
    secondaryActionLabel: "Visit GitHub",
    footerNote: "Thoughtfully designed, meticulously crafted",
    nav: {
      title: "APP·PRO Docs",
      docsLabel: "Documentation",
    },
  },
  cn: {
    brand: "APP·PRO",
    tagline: "精选软件合集，为你的数字生活提供优雅解决方案",
    sections: [
      {
        title: "我们的理念",
        body: "简约而精致，我们专注于用户体验与功能之间的完美平衡。每一款应用都经过细致设计，既满足现代用户的需求，也保持直观易用。",
      },
      {
        title: "探索产品组合",
        body: "浏览我们精心整理的软件文档，了解每款应用如何优化你的工作流。从效率工具到创意应用，我们的产品线覆盖多样化的数字需求。",
      },
    ],
    primaryActionLabel: "浏览文档",
    secondaryActionLabel: "访问 GitHub",
    footerNote: "用心设计，精心打磨",
    nav: {
      title: "APP·PRO",
      docsLabel: "文档首页",
    },
  },
  "zh-Hant": {
    brand: "APP·PRO",
    tagline: "精選軟體合集，為你的數位生活提供優雅解決方案",
    sections: [
      {
        title: "我們的理念",
        body: "簡約而精緻，我們專注於使用者體驗與功能之間的完美平衡。每一款應用程式都經過細緻設計，既滿足現代使用者的需求，也保持直觀易用。",
      },
      {
        title: "探索產品組合",
        body: "瀏覽我們精心整理的軟體文件，了解每款應用程式如何改善你的工作流程。從效率工具到創意應用程式，我們的產品線涵蓋多樣化的數位需求。",
      },
    ],
    primaryActionLabel: "瀏覽文件",
    secondaryActionLabel: "造訪 GitHub",
    footerNote: "用心設計，精心琢磨",
    nav: {
      title: "APP·PRO",
      docsLabel: "文件首頁",
    },
  },
} as const;

type SupportedLocale = keyof typeof localizedHomeContent;

function getSupportedLocale(locale: string): SupportedLocale {
  if (locale === "cn") return "cn";
  if (locale === "zh-Hant") return "zh-Hant";
  return "en";
}

export function getHomeContent(locale: string) {
  const supportedLocale = getSupportedLocale(locale);
  const content = localizedHomeContent[supportedLocale];

  return {
    brand: content.brand,
    tagline: content.tagline,
    sections: content.sections,
    primaryAction: {
      label: content.primaryActionLabel,
      href: withBasePath(getLocalizedHref(supportedLocale, "/docs")),
    },
    secondaryAction: {
      label: content.secondaryActionLabel,
      href: githubUrl,
    },
    footerNote: content.footerNote,
  };
}

export function getNavContent(locale: string) {
  return localizedHomeContent[getSupportedLocale(locale)].nav;
}
