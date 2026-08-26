import type { CollectionEntry } from "astro:content"

/**
 * Sorts blog posts by date in descending order (newest first).
 * Uses a map-sort-map pattern (Schwartzian transform) to cache parsed date values,
 * reducing Date instantiations from O(N log N) to O(N).
 */
export function sortBlogPosts(
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

/**
 * Generates static paths for blog posts, including next/previous links.
 */
export function getBlogStaticPaths(sortedPosts: CollectionEntry<"blog">[]) {
  return sortedPosts.map((post, index) => ({
    params: { slug: post.slug },
    props: {
      post,
      previous: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null,
      next: index > 0 ? sortedPosts[index - 1] : null,
    },
  }))
}
