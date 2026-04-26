import test from "node:test"
import assert from "node:assert"
import { sortPostsByDateDesc } from "./blogUtils.ts"

test("sortPostsByDateDesc sorts posts in descending order by date", () => {
  const posts = [
    { id: 1, data: { date: "2023-01-01" } },
    { id: 2, data: { date: "2023-01-03" } },
    { id: 3, data: { date: "2023-01-02" } },
  ]

  const sorted = sortPostsByDateDesc(posts)

  assert.deepStrictEqual(sorted, [
    { id: 2, data: { date: "2023-01-03" } },
    { id: 3, data: { date: "2023-01-02" } },
    { id: 1, data: { date: "2023-01-01" } },
  ])
})
