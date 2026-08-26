import test from "node:test"
import assert from "node:assert/strict"
import { sortPostsByDateDescending } from "./blogUtils.ts"
import type { CollectionEntry } from "astro:content"

test("sortPostsByDateDescending sorts posts by date descending", () => {
  const posts = [
    { data: { date: "2023-01-01" }, id: "1" },
    { data: { date: "2023-01-03" }, id: "3" },
    { data: { date: "2023-01-02" }, id: "2" },
  ] as unknown as CollectionEntry<"blog">[]

  const sorted = sortPostsByDateDescending(posts)

  assert.equal(sorted[0].id, "3")
  assert.equal(sorted[1].id, "2")
  assert.equal(sorted[2].id, "1")
})
