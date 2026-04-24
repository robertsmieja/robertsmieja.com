import { test, describe } from "node:test"
import assert from "node:assert"
import { sortPosts } from "./blogUtils.ts"

describe("blogUtils", () => {
  test("sortPosts sorts posts by date descending", () => {
    const posts = [
      { data: { date: "2023-01-01" }, id: "1" },
      { data: { date: "2023-01-03" }, id: "3" },
      { data: { date: "2023-01-02" }, id: "2" },
    ]
    const sorted = sortPosts(posts)
    assert.strictEqual(sorted[0].id, "3")
    assert.strictEqual(sorted[1].id, "2")
    assert.strictEqual(sorted[2].id, "1")
  })

  test("sortPosts preserves original object references", () => {
    const post = { data: { date: "2023-01-01" } }
    const sorted = sortPosts([post])
    assert.strictEqual(sorted[0], post)
  })
})
