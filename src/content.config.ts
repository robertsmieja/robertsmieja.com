import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

/**
 * Generates stable entry IDs identical to Astro's legacy content-layer slugs:
 * `/foo/bar.md` -> `foo/bar`, and nested `index.md` -> its parent folder name.
 * This keeps existing blog post URLs unchanged after the v6 content-layer migration.
 */
function legacySlugId({ entry }: { entry: string }): string {
  const withoutExt = entry.replace(/\.md$/i, "")
  return withoutExt.replace(/\/index$/, "")
}

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
    generateId: legacySlugId,
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
})

export const collections = { blog }
