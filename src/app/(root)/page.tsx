import { withBasePath } from "@/lib/shared";

export default function RootPage() {
  const defaultHref = withBasePath("/en/");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <meta httpEquiv="refresh" content={`0; url=${defaultHref}`} />
      <h1 className="text-3xl font-semibold">APP.PRO Docs</h1>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a className="underline underline-offset-4" href={defaultHref}>
          English
        </a>
        <a className="underline underline-offset-4" href={withBasePath("/cn/")}>
          Chinese
        </a>
      </div>
    </main>
  );
}
