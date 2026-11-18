export const appName = "My App";
export const docsRoute = "/docs";
export const docsImageRoute = "/og/docs";
export const docsContentRoute = "/llms.mdx/docs";
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (basePath.length === 0 || /^[a-z][a-z\d+.-]*:/i.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`.replace(/\/+/g, "/");
}

export const gitConfig = {
  user: "Paxxs",
  repo: "apps_docs",
  branch: "main",
};
