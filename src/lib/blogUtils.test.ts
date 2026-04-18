import test from "node:test"
import assert from "node:assert"
import { sortPostsByDate } from "./blogUtils.ts"
import type { CollectionEntry } from "astro:content"

test("sortPostsByDate sorts posts by date in descending order", () => {
  const posts = [
    { data: { date: "2023-01-01" }, slug: "post-1" },
    { data: { date: "2023-12-31" }, slug: "post-2" },
    { data: { date: "2023-06-15" }, slug: "post-3" },
  ] as CollectionEntry<"blog">[]

  const sortedPosts = sortPostsByDate(posts)

  assert.strictEqual(sortedPosts.length, 3)
  assert.strictEqual(sortedPosts[0].slug, "post-2")
  assert.strictEqual(sortedPosts[1].slug, "post-3")
  assert.strictEqual(sortedPosts[2].slug, "post-1")
})

test("sortPostsByDate handles empty arrays", () => {
  const sortedPosts = sortPostsByDate([])
  assert.strictEqual(sortedPosts.length, 0)
})

test("sortPostsByDate preserves object references", () => {
  const post = {
    data: { date: "2023-01-01" },
    slug: "post-1",
  } as CollectionEntry<"blog">
  const sortedPosts = sortPostsByDate([post])

  assert.strictEqual(sortedPosts[0], post)
})
