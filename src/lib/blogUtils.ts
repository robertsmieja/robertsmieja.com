/**
 * Sorts blog posts by date from newest to oldest.
 *
 * ⚡ Bolt Optimization: Uses a Schwartzian transform (map-sort-map) to avoid parsing
 * Date objects O(N log N) times during the sort comparison. By pre-calculating the
 * numeric timestamp once per item (O(N)), the actual sort is performed on primitive
 * numbers, which is significantly faster for large collections.
 */
export function sortPostsByDate<T extends { data: { date: Date | string } }>(posts: T[]): T[] {
  return posts
    .map(post => ({ post, dateValue: new Date(post.data.date).valueOf() }))
    .sort((a, b) => b.dateValue - a.dateValue)
    .map(({ post }) => post);
}
