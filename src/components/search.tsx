"use client";
import { useStaticSearch } from "fumadocs-core/search/client/orama-static";
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

export default function DefaultSearchDialog(props: SharedProps) {
  const [tag, setTag] = useState<string | undefined>();
  const { locale } = useI18n();
  const tags = getSearchTagItems(locale ?? "en");
  const search = useStaticSearch({
    from: searchApiUrl,
    locale,
    tag,
    search: locale === "cn" ? { threshold: 0, tolerance: 0 } : undefined,
  });

  return (
    <SearchDialog {...search} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList />
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
