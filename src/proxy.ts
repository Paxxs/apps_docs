import { createI18nMiddleware } from "fumadocs-core/i18n/middleware";
import { i18n } from "@/lib/i18n";

export default createI18nMiddleware(i18n);

export const config = {
  // English already has its own unprefixed routes. Redirect only the legacy alias.
  matcher: ["/en/:path*"],
};
