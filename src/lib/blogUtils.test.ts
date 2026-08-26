import { describe, it } from "node:test"
import assert from "node:assert"
import { sortBlogPosts, getBlogStaticPaths } from "./blogUtils.ts"

describe("blogUtils", () => {
  describe("sortBlogPosts", () => {
    it("sorts posts by date in descending order using Schwartzian transform", () => {
      const posts: any[] = [
        { data: { date: "2023-01-01" }, slug: "post-1" },
        { data: { date: "2023-01-03" }, slug: "post-3" },
        { data: { date: "2023-01-02" }, slug: "post-2" },
      ]

      const sorted = sortBlogPosts(posts)

      assert.strictEqual(sorted[0].slug, "post-3")
      assert.strictEqual(sorted[1].slug, "post-2")
      assert.strictEqual(sorted[2].slug, "post-1")
    })

    it("preserves prototype methods by using wrapper object rather than spread", () => {
      class MockPost {
        data: any
        slug: string
        constructor(data: any, slug: string) {
          this.data = data
          this.slug = slug
        }
        render() {
          return "rendered"
        }
      }
      const posts: any[] = [
        new MockPost({ date: "2023-01-01" }, "post-1"),
        new MockPost({ date: "2023-01-02" }, "post-2"),
      ]
      const sorted = sortBlogPosts(posts)
      assert.strictEqual(sorted[0].render(), "rendered")
    })
  })

  describe("getBlogStaticPaths", () => {
    it("generates correct paths and next/previous props", () => {
      const sortedPosts: any[] = [
        { data: { date: "2023-01-03" }, slug: "post-3" },
        { data: { date: "2023-01-02" }, slug: "post-2" },
        { data: { date: "2023-01-01" }, slug: "post-1" },
      ]

      const paths = getBlogStaticPaths(sortedPosts)

      assert.strictEqual(paths.length, 3)

      // First post
      assert.strictEqual(paths[0].params.slug, "post-3")
      assert.strictEqual(paths[0].props.post.slug, "post-3")
      assert.strictEqual(paths[0].props.previous?.slug, "post-2")
      assert.strictEqual(paths[0].props.next, null)

      // Middle post
      assert.strictEqual(paths[1].params.slug, "post-2")
      assert.strictEqual(paths[1].props.previous?.slug, "post-1")
      assert.strictEqual(paths[1].props.next?.slug, "post-3")

      // Last post
      assert.strictEqual(paths[2].params.slug, "post-1")
      assert.strictEqual(paths[2].props.previous, null)
      assert.strictEqual(paths[2].props.next?.slug, "post-2")
    })
  })
})
