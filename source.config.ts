import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { remarkMermaid } from "@theguild/remark-mermaid";

export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
