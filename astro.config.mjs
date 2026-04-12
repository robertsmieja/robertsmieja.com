import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import remarkSmartypants from "remark-smartypants"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeExternalLinks from "rehype-external-links"

// https://astro.build/config
export default defineConfig({
  site: "https://robertsmieja.com",
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "one-dark-pro",
    },
    remarkPlugins: [remarkSmartypants],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
  },
})
