import test from "node:test"
import assert from "node:assert"
import { sortBlogPosts } from "./blogUtils.ts"

test("sortBlogPosts sorts posts descending by date", () => {
  const posts = [
    { id: 1, data: { date: "2024-01-01" } },
    { id: 2, data: { date: "2024-01-03" } },
    { id: 3, data: { date: "2024-01-02" } },
  ]

  const sorted = sortBlogPosts(posts)

  assert.deepStrictEqual(sorted, [
    { id: 2, data: { date: "2024-01-03" } },
    { id: 3, data: { date: "2024-01-02" } },
    { id: 1, data: { date: "2024-01-01" } },
  ])
})

test("sortBlogPosts preserves original post objects reference", () => {
  const post1 = { id: 1, data: { date: "2024-01-01" } }
  const post2 = { id: 2, data: { date: "2024-01-02" } }

  const posts = [post1, post2]
  const sorted = sortBlogPosts(posts)

  assert.strictEqual(sorted[0], post2)
  assert.strictEqual(sorted[1], post1)
})
