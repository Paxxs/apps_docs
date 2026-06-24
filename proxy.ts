import { createI18nMiddleware } from "fumadocs-core/i18n/middleware";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "@/lib/i18n";
import { docsContentRoute, docsImageRoute, docsRoute } from "@/lib/shared";

const i18nMiddleware = createI18nMiddleware(i18n);

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.md`,
  `${docsContentRoute}{/*path}/content.md`,
);

const passthroughRoutes = [
  docsContentRoute,
  docsImageRoute,
  "/llms.txt",
  "/llms-full.txt",
];

function matchesRoute(pathname: string, route: string) {
  return pathname === route || pathname.startsWith(`${route}/`);
}

function isPassthroughRoute(pathname: string) {
  return passthroughRoutes.some((route) => matchesRoute(pathname, route));
}

function rewriteMarkdownRequest(request: NextRequest) {
  const result = rewriteSuffix(request.nextUrl.pathname);
  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }
}

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  const markdownResponse = rewriteMarkdownRequest(request);
  if (markdownResponse) return markdownResponse;

  if (isPassthroughRoute(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return i18nMiddleware(request, event);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  // You may need to adjust it to ignore static assets in `/public` folder
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
