import { test } from "node:test"
import assert from "node:assert"
import { sortBlogPosts } from "./blogUtils.ts"

test("sortBlogPosts sorts posts by date in descending order", () => {
  const posts = [
    { data: { date: "2023-01-01" }, title: "Oldest" },
    { data: { date: "2023-03-01" }, title: "Newest" },
    { data: { date: "2023-02-01" }, title: "Middle" },
  ]

  const sorted = sortBlogPosts(posts)

  assert.strictEqual(sorted[0].title, "Newest")
  assert.strictEqual(sorted[1].title, "Middle")
  assert.strictEqual(sorted[2].title, "Oldest")
})

test("sortBlogPosts handles Date objects", () => {
  const posts = [
    { data: { date: new Date("2023-01-01") }, title: "Oldest" },
    { data: { date: new Date("2023-03-01") }, title: "Newest" },
  ]

  const sorted = sortBlogPosts(posts)

  assert.strictEqual(sorted[0].title, "Newest")
  assert.strictEqual(sorted[1].title, "Oldest")
})
