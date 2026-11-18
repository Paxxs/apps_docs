import { uiTranslations } from "fumadocs-ui/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { getNavContent } from "@/lib/home.shared";
import { getLocalizedHref, i18n } from "@/lib/i18n";
import { gitConfig } from "./shared";

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    en: {
      displayName: "English",
    },
    "zh-Hans": {
      displayName: "简体中文",
    },
    "zh-Hant": {
      "Ask AI(AI chat button)": "詢問 AI",
      "Back to Home(404 page)": "返回首頁",
      "Choose a language(language switcher)": "選擇語言",
      "Choose a language(language switcher)(aria-label)": "選擇語言",
      "Close Banner(banner)(aria-label)": "關閉橫幅",
      "Close Search(search dialog)(aria-label)": "關閉搜尋",
      "Close Sidebar(aria-label)": "關閉側邊欄",
      "Close Sidebar(sidebar)(aria-label)": "關閉側邊欄",
      "Close(image zoom)(aria-label)": "關閉",
      "Collapse Sidebar(sidebar)(aria-label)": "收合側邊欄",
      "Copied Anchor Link(heading anchor)(aria-label)": "已複製錨點連結",
      "Copied Link(accordion)(aria-label)": "已複製連結",
      "Copied Markdown(page actions)": "已複製 Markdown",
      "Copied Text(code block)(aria-label)": "已複製文字",
      "Copy Anchor Link(heading anchor)(aria-label)": "複製錨點連結",
      "Copy Link(accordion)(aria-label)": "複製連結",
      "Copy Markdown(page actions)": "複製 Markdown",
      "Copy Text(code block)(aria-label)": "複製文字",
      "Dark(theme switcher)(aria-label)": "深色",
      "Default(type table)": "預設",
      "Edit on GitHub(edit page)": "在 GitHub 上編輯",
      "Hide Sidebar(sidebar)": "隱藏側邊欄",
      "Image Viewer(image zoom)(aria-label)": "圖片檢視器",
      "Last updated on(page footer)": "最後更新於",
      "Layout Tab(layout tab trigger)": "版面配置分頁",
      "Light(theme switcher)(aria-label)": "淺色",
      "Next Image(image zoom)(aria-label)": "下一張圖片",
      "Next Page(pagination)": "下一頁",
      "No Headings(table of contents)": "沒有標題",
      "No results found(search dialog)": "找不到結果",
      "On this page(table of contents)": "本頁內容",
      "Open Search(search trigger)(aria-label)": "開啟搜尋",
      "Open Sidebar(sidebar)(aria-label)": "開啟側邊欄",
      "Open in ChatGPT(page actions)": "在 ChatGPT 中開啟",
      "Open in Claude(page actions)": "在 Claude 中開啟",
      "Open in Cursor(page actions)": "在 Cursor 中開啟",
      "Open in GitHub(page actions)": "在 GitHub 中開啟",
      "Open in Scira AI(page actions)": "在 Scira AI 中開啟",
      "Open(page actions)": "開啟",
      "Page Not Found(404 page)": "找不到頁面",
      "Parameters(type table)": "參數",
      "Previous Image(image zoom)(aria-label)": "上一張圖片",
      "Previous Page(pagination)": "上一頁",
      "Prop(type table)": "屬性",
      "Read {url}, I want to ask questions about it.(page actions)":
        "閱讀 {url}，我想針對其中內容提問。",
      "Returns(type table)": "傳回值",
      "Search failed(search dialog)": "搜尋失敗",
      "Search failed, showing results for {query}(search dialog)":
        "搜尋失敗，顯示「{query}」的結果",
      "Search(search dialog)": "搜尋",
      "Search(search trigger)": "搜尋",
      "Show Sidebar(sidebar)": "顯示側邊欄",
      "Skip to Content(skip link)": "跳至內容",
      "System(theme switcher)(aria-label)": "系統",
      "Table of Contents(inline table of contents)": "目錄",
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)":
        "你要尋找的頁面可能已被移除、重新命名，或暫時無法使用。",
      "Toggle Menu(mobile menu)(aria-label)": "切換選單",
      "Toggle Theme(theme switcher)(aria-label)": "切換主題",
      "Type(type table)": "類型",
      "View as Markdown(page actions)": "以 Markdown 檢視",
      displayName: "繁體中文",
    },
  });

export const logo = (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
    />
  </svg>
);

export function baseOptions(locale: string): BaseLayoutProps {
  const navContent = getNavContent(locale);

  return {
    nav: {
      // JSX supported
      title: (
        <>
          {logo}

          <span className="in-[.uwu]:hidden max-md:hidden">
            {navContent.title}
          </span>
        </>
      ),
      url: getLocalizedHref(locale),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: "main",
        text: navContent.docsLabel,
        url: getLocalizedHref(locale, "/docs"),
      },
    ],
  };
}
