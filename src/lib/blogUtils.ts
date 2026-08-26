export function sortBlogPosts<T extends { data: { date: Date | string } }>(posts: T[]): T[] {
  // Use a map-sort-map pattern (Schwartzian transform) to cache parsed date values
  // This reduces Date parsing from O(N log N) to O(N), improving performance
  return posts
    .map((post) => ({
      post,
      dateValue: new Date(post.data.date).valueOf(),
    }))
    .sort((a, b) => b.dateValue - a.dateValue)
    .map(({ post }) => post);
}
