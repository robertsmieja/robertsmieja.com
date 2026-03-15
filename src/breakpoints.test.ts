import { test } from "node:test"
import assert from "node:assert"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/extensions
import { mq, breakpoints } from "./breakpoints.ts"

test("mq facepaint utility", async (t) => {
  await t.test("it is initialized with correct media queries", () => {
    const expectedMediaQueries = breakpoints.map(
      (bp: string) => `@media (min-width: ${bp})`
    )

    const result = mq({ color: ["red", "green"] })
    assert.deepStrictEqual(result, [
      { color: "red", [expectedMediaQueries[0]]: { color: "green" } },
    ])
  })

  await t.test("it handles styles correctly", () => {
    const expectedMediaQueries = breakpoints.map(
      (bp: string) => `@media (min-width: ${bp})`
    )
    const styles = { fontSize: [12, 14, 16] }
    const result = mq(styles)

    assert.deepStrictEqual(result, [
      {
        fontSize: 12,
        [expectedMediaQueries[0]]: { fontSize: 14 },
        [expectedMediaQueries[1]]: { fontSize: 16 },
      },
    ])
  })
}).catch(() => {
  // Ignored
})
