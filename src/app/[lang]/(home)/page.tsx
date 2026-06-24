import { getHomeContent } from "@/lib/home.shared";

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  const content = getHomeContent(lang);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center sm:items-start sm:text-left max-w-3xl">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold">{content.brand}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            {content.tagline}
          </p>
        </div>

        <div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-4"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-6 w-full">
          {content.sections.map((section) => (
            <section className="flex flex-col gap-2" key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 sm:w-auto"
            href={content.primaryAction.href}
          >
            {content.primaryAction.label}
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
            href={content.secondaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.secondaryAction.label}
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <span>© {new Date().getFullYear()} APP·PRO</span>
        <span>|</span>
        <span>{content.footerNote}</span>
      </footer>
    </div>
  );
}
