import type { CollectionEntry } from "astro:content"

export function sortBlogPosts<
  T extends { data: { date: string | Date } } | CollectionEntry<"blog">,
>(posts: T[]) {
  return posts
    .map((post) => ({
      post,
      dateValue: new Date(post.data.date).valueOf(),
    }))
    .sort((a, b) => b.dateValue - a.dateValue)
    .map(({ post }) => post)
}
