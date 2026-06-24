import type { Metadata } from "next";
import { getDocsMetadata, renderDocsPage } from "@/lib/docs-page.shared";
import { getDefaultDocsStaticParams } from "@/lib/docs-routing.shared";
import { i18n } from "@/lib/i18n";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  return renderDocsPage(params.slug, i18n.defaultLanguage);
}

export function generateStaticParams() {
  return getDefaultDocsStaticParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  return getDocsMetadata(params.slug, i18n.defaultLanguage);
}
