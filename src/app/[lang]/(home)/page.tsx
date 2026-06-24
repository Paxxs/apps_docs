import { HomePageContent } from "@/components/home-page";

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  return <HomePageContent locale={lang} />;
}
