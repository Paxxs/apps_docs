# apps_apppro_docs

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Use Node.js 22 or newer and the Bun version in `package.json`. Start the development server with:

```bash
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:3000. For GitHub Pages, `bun run build:static` writes the site and bilingual search index to `out/`.

To enable AI chat on a Node.js server, set `NEXT_PUBLIC_ENABLE_AI_SEARCH=true` for both `bun run build` and `bun run start`. Supply `OPENROUTER_API_KEY` to the server at runtime. The default model is `anthropic/claude-sonnet-5.5`. Set `OPENROUTER_MODEL` to choose another model with tool support.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
