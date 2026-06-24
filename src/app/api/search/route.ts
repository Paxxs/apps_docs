import { createTokenizer as createMandarinTokenizer } from "@orama/tokenizers/mandarin";
import { createFromSource } from "fumadocs-core/search/server";
import { buildSearchIndex } from "@/lib/search.server";
import { source } from "@/lib/source";

// statically cached
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source, {
  buildIndex: buildSearchIndex,
  // https://docs.orama.com/docs/orama-js/supported-languages
  localeMap: {
    cn: {
      components: {
        tokenizer: createMandarinTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
    en: { language: "english" },
  },
});
