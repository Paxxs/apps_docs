import type { Metadata } from "next";
import { getDocsMetadata, renderDocsPage } from "@/lib/docs-page.shared";
import { getPrefixedDocsStaticParams } from "@/lib/docs-routing.shared";

export default async function Page(
  props: PageProps<"/[lang]/docs/[[...slug]]">,
) {
  const params = await props.params;
  return renderDocsPage(params.slug, params.lang);
}

export async function generateStaticParams() {
  return getPrefixedDocsStaticParams();
}

export async function generateMetadata(
  props: PageProps<"/[lang]/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  return getDocsMetadata(params.slug, params.lang);
}
