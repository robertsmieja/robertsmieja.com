import test from "node:test"
import assert from "node:assert"
import { sortBlogPosts } from "./blogUtils.ts"

test("sortBlogPosts sorts by date descending", () => {
  const posts = [
    { id: 1, data: { date: "2023-01-01" } },
    { id: 2, data: { date: "2024-01-01" } },
    { id: 3, data: { date: "2022-01-01" } },
  ]

  const sorted = sortBlogPosts(posts)

  assert.strictEqual(sorted[0].id, 2) // 2024
  assert.strictEqual(sorted[1].id, 1) // 2023
  assert.strictEqual(sorted[2].id, 3) // 2022
})

test("sortBlogPosts preserves post objects and prototypes", () => {
  class TestPost {
    id: number
    data: { date: string }

    constructor(id: number, date: string) {
      this.id = id
      this.data = { date }
    }

    render() {
      return "rendered"
    }
  }

  const posts = [new TestPost(1, "2023-01-01"), new TestPost(2, "2024-01-01")]

  const sorted = sortBlogPosts(posts)

  assert.strictEqual(sorted[0] instanceof TestPost, true)
  assert.strictEqual(sorted[0].render(), "rendered")
})

test("sortBlogPosts does not mutate the original array", () => {
  const posts = [
    { id: 1, data: { date: "2023-01-01" } },
    { id: 2, data: { date: "2024-01-01" } },
  ]

  const originalCopy = [...posts]
  sortBlogPosts(posts)

  assert.deepStrictEqual(posts, originalCopy)
})
