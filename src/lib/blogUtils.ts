/**
 * Sorts blog posts by date in descending order using the Schwartzian transform
 * to avoid redundant Date parsing during comparison.
 */
export function sortBlogPosts<T extends { data: { date: string | Date } }>(
  posts: T[]
): T[] {
  return posts
    .map((post) => ({
      post,
      dateValue: new Date(post.data.date).valueOf(),
    }))
    .sort((a, b) => b.dateValue - a.dateValue)
    .map((item) => item.post)
}
