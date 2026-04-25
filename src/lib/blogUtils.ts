// Avoid importing from "astro:content" to allow testing without Astro module resolution errors

// Use a generic to preserve the exact type from Astro collections
export function sortBlogPosts<T extends { data: { date: Date | string } }>(
  posts: T[]
): T[] {
  // 1. Map to include parsed date values
  const mapped = posts.map((post) => ({
    post,
    dateValue: new Date(post.data.date).valueOf(),
  }))

  // 2. Sort by the cached date values
  mapped.sort((a, b) => b.dateValue - a.dateValue)

  // 3. Map back to original post objects
  return mapped.map((item) => item.post)
}

/**
 * Generates static paths for the blog post dynamic route.
 */
export function generateBlogPaths<
  T extends { slug: string; data: { date: Date | string } },
>(posts: T[]) {
  const sortedPosts = sortBlogPosts(posts)

  return sortedPosts.map((post, index) => ({
    params: { slug: post.slug },
    props: {
      post,
      previous: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null,
      next: index > 0 ? sortedPosts[index - 1] : null,
    },
  }))
}
