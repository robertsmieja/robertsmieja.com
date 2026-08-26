import test from "node:test"
import assert from "node:assert/strict"
import { sortBlogPosts } from "./blogUtils.ts"

test("sortBlogPosts sorts posts by date descending", () => {
  const posts = [
    { id: 1, data: { date: "2023-01-01" } },
    { id: 2, data: { date: "2024-01-01" } },
    { id: 3, data: { date: "2022-01-01" } },
  ]

  const sorted = sortBlogPosts(posts)

  assert.equal(sorted[0].id, 2)
  assert.equal(sorted[1].id, 1)
  assert.equal(sorted[2].id, 3)
})
