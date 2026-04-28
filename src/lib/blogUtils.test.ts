import test from "node:test"
import assert from "node:assert"
import { sortPostsByDate, generateBlogPaths } from "./blogUtils.ts"

test("sortPostsByDate sorts posts from newest to oldest", () => {
  const posts = [
    { data: { date: "2023-01-01" } },
    { data: { date: "2024-01-01" } },
    { data: { date: "2022-01-01" } },
  ]
  const sorted = sortPostsByDate(posts)
  assert.strictEqual(sorted[0].data.date, "2024-01-01")
  assert.strictEqual(sorted[1].data.date, "2023-01-01")
  assert.strictEqual(sorted[2].data.date, "2022-01-01")
})

test("generateBlogPaths generates correct paths with previous and next", () => {
  const posts = [{ slug: "post-1" }, { slug: "post-2" }, { slug: "post-3" }]
  const paths = generateBlogPaths(posts)

  assert.strictEqual(paths.length, 3)

  assert.strictEqual(paths[0].params.slug, "post-1")
  assert.strictEqual(paths[0].props.previous?.slug, "post-2")
  assert.strictEqual(paths[0].props.next, null)

  assert.strictEqual(paths[1].params.slug, "post-2")
  assert.strictEqual(paths[1].props.previous?.slug, "post-3")
  assert.strictEqual(paths[1].props.next?.slug, "post-1")

  assert.strictEqual(paths[2].params.slug, "post-3")
  assert.strictEqual(paths[2].props.previous, null)
  assert.strictEqual(paths[2].props.next?.slug, "post-2")
})
