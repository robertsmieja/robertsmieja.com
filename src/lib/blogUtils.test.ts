import { describe, it } from "node:test"
import assert from "node:assert"
import { sortPostsByDate } from "./blogUtils.ts"

describe("sortPostsByDate", () => {
  it("should sort posts by date in descending order", () => {
    const posts = [
      { id: 1, data: { date: "2026-04-10T00:00:00Z" } },
      { id: 2, data: { date: "2026-04-19T00:00:00Z" } },
      { id: 3, data: { date: "2026-04-15T00:00:00Z" } },
    ]

    const sorted = sortPostsByDate(posts)

    assert.strictEqual(sorted[0].id, 2)
    assert.strictEqual(sorted[1].id, 3)
    assert.strictEqual(sorted[2].id, 1)
  })

  it("should handle same dates correctly", () => {
    const posts = [
      { id: 1, data: { date: "2026-04-10T00:00:00Z" } },
      { id: 2, data: { date: "2026-04-10T00:00:00Z" } },
    ]

    const sorted = sortPostsByDate(posts)

    assert.strictEqual(sorted.length, 2)
    // Order doesn't strictly matter for identical dates, just checking it doesn't crash
    assert.ok(sorted.find((p) => p.id === 1))
    assert.ok(sorted.find((p) => p.id === 2))
  })

  it("should preserve all post properties", () => {
    const posts = [
      { id: 1, render: () => "content", data: { date: "2026-04-10" } },
    ]

    const sorted = sortPostsByDate(posts)

    assert.strictEqual(sorted[0].id, 1)
    assert.strictEqual(typeof sorted[0].render, "function")
  })
})
