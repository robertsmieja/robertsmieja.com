import { describe, it } from "node:test"
import assert from "node:assert"
import { sortBlogPosts, generateBlogPaths } from "./blogUtils.ts"

describe("blogUtils", () => {
  describe("sortBlogPosts", () => {
    it("should sort posts by date in descending order", () => {
      const posts = [
        { slug: "post-1", data: { date: "2024-01-01" } },
        { slug: "post-3", data: { date: "2024-03-01" } },
        { slug: "post-2", data: { date: "2024-02-01" } },
      ]

      const sorted = sortBlogPosts(posts)

      assert.strictEqual(sorted[0].slug, "post-3")
      assert.strictEqual(sorted[1].slug, "post-2")
      assert.strictEqual(sorted[2].slug, "post-1")
    })
  })

  describe("generateBlogPaths", () => {
    it("should generate correct paths with previous and next props", () => {
      const posts = [
        { slug: "post-1", data: { date: "2024-01-01" } },
        { slug: "post-3", data: { date: "2024-03-01" } },
        { slug: "post-2", data: { date: "2024-02-01" } },
      ]

      const paths = generateBlogPaths(posts)

      assert.strictEqual(paths.length, 3)

      // post-3 (newest)
      assert.strictEqual(paths[0].params.slug, "post-3")
      assert.strictEqual(paths[0].props.post.slug, "post-3")
      assert.strictEqual(paths[0].props.previous?.slug, "post-2")
      assert.strictEqual(paths[0].props.next, null)

      // post-2
      assert.strictEqual(paths[1].params.slug, "post-2")
      assert.strictEqual(paths[1].props.post.slug, "post-2")
      assert.strictEqual(paths[1].props.previous?.slug, "post-1")
      assert.strictEqual(paths[1].props.next?.slug, "post-3")

      // post-1 (oldest)
      assert.strictEqual(paths[2].params.slug, "post-1")
      assert.strictEqual(paths[2].props.post.slug, "post-1")
      assert.strictEqual(paths[2].props.previous, null)
      assert.strictEqual(paths[2].props.next?.slug, "post-2")
    })
  })
})
