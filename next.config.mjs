import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const hasGithubPagesBasePath = githubPagesBasePath.length > 0;
const repoRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  output:
    process.env.NEXT_PUBLIC_ENABLE_AI_SEARCH === "true" ? undefined : "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: repoRoot,
  },
  basePath: hasGithubPagesBasePath ? githubPagesBasePath : undefined,
  assetPrefix: hasGithubPagesBasePath ? `${githubPagesBasePath}/` : undefined,
};

export default withMDX(config);
