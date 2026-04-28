export function sortPostsByDate<T extends { data: { date: Date | string } }>(
  posts: T[]
): T[] {
  return posts
    .map((post) => ({ post, dateValue: new Date(post.data.date).valueOf() }))
    .sort((a, b) => b.dateValue - a.dateValue)
    .map(({ post }) => post)
}

export function generateBlogPaths<T extends { slug: string }>(
  sortedPosts: T[]
) {
  return sortedPosts.map((post, index) => ({
    params: { slug: post.slug },
    props: {
      post,
      previous: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null,
      next: index > 0 ? sortedPosts[index - 1] : null,
    },
  }))
}
