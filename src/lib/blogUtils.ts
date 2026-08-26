export function sortPostsByDate<T extends { data: { date: Date | string } }>(
  posts: T[]
): T[] {
  return posts
    .map((post) => ({
      post,
      dateValue: new Date(post.data.date).valueOf(),
    }))
    .sort((a, b) => b.dateValue - a.dateValue)
    .map(({ post }) => post)
}
