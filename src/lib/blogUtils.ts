import type { CollectionEntry } from "astro:content"

/**
 * Sorts blog posts by date in descending order (newest first).
 * Uses a map-sort-map pattern (Schwartzian transform) to optimize date parsing
 * from O(N log N) to O(N).
 *
 * @param posts The array of blog posts to sort
 * @returns A new sorted array of blog posts
 */
export function sortPostsByDate(
  posts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] {
  return posts
    .map((post) => ({
      post,
      dateValue: new Date(post.data.date).valueOf(),
    }))
    .sort((a, b) => b.dateValue - a.dateValue)
    .map(({ post }) => post)
}
