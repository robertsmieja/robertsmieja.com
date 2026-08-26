/**
 * Sorts an array of blog posts by date in descending order.
 * Uses a Schwartzian transform (map-sort-map) to avoid repeated `Date` instantiation
 * during the sort, improving performance for large collections.
 *
 * @param posts Array of posts to sort. The posts are not mutated.
 * @returns A new array of posts sorted by date, descending.
 */
export function sortBlogPosts<T extends { data: { date: Date | string } }>(
  posts: T[]
): T[] {
  // Map to a wrapper containing the post and the pre-computed timestamp
  const mapped = posts.map((post) => ({
    post,
    dateValue: new Date(post.data.date).valueOf(),
  }))

  // Sort based on the pre-computed timestamp (descending)
  mapped.sort((a, b) => b.dateValue - a.dateValue)

  // Map back to the original post object, preserving prototypes
  return mapped.map((item) => item.post)
}
