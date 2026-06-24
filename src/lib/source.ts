import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { icons } from "lucide-react";
import { createElement } from "react";
import { i18n } from "@/lib/i18n";
import {
  docsContentRoute,
  docsImageRoute,
  docsRoute,
  withBasePath,
} from "./shared";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
  icon(icon) {
    if (!icon) {
      // can set a default icon
      // return createElement(NewspaperIcon);
      return;
    }
    // console.log(icon);

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  i18n,
});

export function getPageImage(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: withBasePath(`${docsImageRoute}/${segments.join("/")}`),
  };
}

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: withBasePath(`${docsContentRoute}/${segments.join("/")}`),
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
