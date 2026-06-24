import { getLocalizedHref } from "./i18n";

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
      title: "APP·PRO 文档",
      docsLabel: "文档",
    },
  },
} as const;

type SupportedLocale = keyof typeof localizedHomeContent;

function getSupportedLocale(locale: string): SupportedLocale {
  return locale === "cn" ? "cn" : "en";
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
      href: getLocalizedHref(supportedLocale, "/docs"),
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
