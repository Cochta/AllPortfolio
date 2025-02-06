// https://astro.build/config

import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";
import rehypeFigure from "rehype-figure";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGfm],  // Enables table support
    rehypePlugins: [rehypeFigure],  // Wraps images in <figure>
  },
});