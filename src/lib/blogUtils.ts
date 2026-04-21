import type { CollectionEntry } from "astro:content"

/**
 * Sorts blog posts by date in descending order (newest first).
 * Uses the Schwartzian transform (map-sort-map) to cache parsed date values,
 * which significantly improves sort performance for large collections
 * by avoiding repeated Date parsing during comparison.
 */
export function sortPostsByDateDescending(
  posts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] {
  return posts
    .map((post) => ({ post, dateValue: new Date(post.data.date).valueOf() }))
    .sort((a, b) => b.dateValue - a.dateValue)
    .map(({ post }) => post)
}
