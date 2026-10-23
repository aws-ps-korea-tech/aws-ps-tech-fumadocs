import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    // Languages missing from the Shiki bundle (e.g. wdl) fall back to plain text.
    rehypeCodeOptions: { fallbackLanguage: "text" },
    // Do not fetch remote images at build time (some hosts return 403).
    remarkImageOptions: { external: false },
  },
});
