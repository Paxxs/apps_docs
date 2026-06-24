import { isDefaultLanguage } from "@/lib/i18n";
import { source } from "@/lib/source";

export function getDefaultDocsStaticParams() {
  return source
    .generateParams()
    .filter((param) => isDefaultLanguage(param.lang))
    .map(({ slug }) => ({ slug }));
}

export function getPrefixedDocsStaticParams() {
  return source
    .generateParams()
    .filter((param) => !isDefaultLanguage(param.lang));
}
