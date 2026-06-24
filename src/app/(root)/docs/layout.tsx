import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { i18n } from "@/lib/i18n";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

const enableAISearch = process.env.NEXT_PUBLIC_ENABLE_AI_SEARCH === "true";

export default async function Layout({ children }: LayoutProps<"/docs">) {
  let aiSearch = null;

  if (enableAISearch) {
    const [
      { AISearch, AISearchPanel, AISearchTrigger },
      { MessageCircleIcon },
      { cn },
      { buttonVariants },
    ] = await Promise.all([
      import("@/components/ai/search"),
      import("lucide-react"),
      import("@/lib/cn"),
      import("fumadocs-ui/components/ui/button"),
    ]);

    aiSearch = (
      <AISearch>
        <AISearchPanel />
        <AISearchTrigger
          position="float"
          className={cn(
            buttonVariants({
              variant: "secondary",
              className: "text-fd-muted-foreground rounded-2xl",
            }),
          )}
        >
          <MessageCircleIcon className="size-4.5" />
          Ask AI
        </AISearchTrigger>
      </AISearch>
    );
  }

  return (
    <DocsLayout
      tree={source.getPageTree(i18n.defaultLanguage)}
      {...baseOptions(i18n.defaultLanguage)}
    >
      {aiSearch}
      {children}
    </DocsLayout>
  );
}
