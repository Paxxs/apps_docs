"use client";
import { create } from "@orama/orama";
import { createTokenizer as createMandarinTokenizer } from "@orama/tokenizers/mandarin";
import { useDocsSearch } from "fumadocs-core/search/client";
import { oramaStaticClient } from "fumadocs-core/search/client/orama-static";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
  TagsList,
  TagsListItem,
} from "fumadocs-ui/components/dialog/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { useState } from "react";
import { getSearchTagItems, searchApiUrl } from "@/lib/search.shared";

function initOrama(locale?: string) {
  if (locale === "cn") {
    return create({
      schema: { _: "string" },
      components: {
        tokenizer: createMandarinTokenizer(),
      },
    });
  }

  return create({
    schema: { _: "string" },
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: "english",
  });
}

export default function DefaultSearchDialog(props: SharedProps) {
  const [tag, setTag] = useState<string | undefined>();
  const { locale } = useI18n();
  const tags = getSearchTagItems(locale ?? "en");
  const { search, setSearch, query } = useDocsSearch({
    client: oramaStaticClient({
      from: searchApiUrl,
      initOrama,
      locale,
      tag,
      search:
        locale === "cn"
          ? {
              threshold: 0,
              tolerance: 0,
            }
          : undefined,
    }),
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== "empty" ? query.data : null} />
        <SearchDialogFooter className="flex flex-row">
          <TagsList tag={tag} onTagChange={setTag} allowClear>
            {tags.map((item) => (
              <TagsListItem key={item.value} value={item.value}>
                {item.name}
              </TagsListItem>
            ))}
          </TagsList>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}
