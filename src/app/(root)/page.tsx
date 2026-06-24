import { HomeLayout } from "fumadocs-ui/layouts/home";
import { HomePageContent } from "@/components/home-page";
import { i18n } from "@/lib/i18n";
import { baseOptions } from "@/lib/layout.shared";

export default function RootPage() {
  return (
    <HomeLayout {...baseOptions(i18n.defaultLanguage)}>
      <HomePageContent locale={i18n.defaultLanguage} />
    </HomeLayout>
  );
}
