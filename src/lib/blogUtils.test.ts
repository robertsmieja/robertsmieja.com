import test from "node:test"
import assert from "node:assert/strict"
import { sortPostsByDate } from "./blogUtils.ts"

test("sortPostsByDate sorts posts from newest to oldest", () => {
  const posts = [
    { id: 1, data: { date: "2023-01-01" } },
    { id: 2, data: { date: "2024-01-01" } },
    { id: 3, data: { date: "2022-01-01" } },
  ]

  const sorted = sortPostsByDate(posts)

  assert.deepEqual(sorted, [
    { id: 2, data: { date: "2024-01-01" } },
    { id: 1, data: { date: "2023-01-01" } },
    { id: 3, data: { date: "2022-01-01" } },
  ])
})
