/**
 * ⚡ Bolt Optimization:
 * Repeated `Date` instantiation within sort comparators for blog collections
 * is a performance bottleneck (O(N log N)). This utility uses a map-sort-map
 * pattern (Schwartzian transform) to cache parsed date values, reducing
 * date parsing to O(N).
 */
export function sortPostsByDateDesc<
  T extends { data: { date: Date | string } },
>(posts: T[]): T[] {
  // Map phase: parse and cache the date values
  const withDates = posts.map((post) => ({
    post,
    dateValue: new Date(post.data.date).valueOf(),
  }))

  // Sort phase: sort the cached values
  withDates.sort((a, b) => b.dateValue - a.dateValue)

  // Map phase: extract original objects
  return withDates.map((item) => item.post)
}
