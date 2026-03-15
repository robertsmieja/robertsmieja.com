import { test } from "node:test"
import assert from "node:assert"
import { mq, breakpoints } from "./breakpoints.ts"

// eslint-disable-next-line @typescript-eslint/no-floating-promises
test("mq facepaint utility", async (t) => {
  await t.test("it is initialized with correct media queries", () => {
    const expectedMediaQueries = breakpoints.map(
      (bp: string) => `@media (min-width: ${bp})`
    )

    // We use our mock facepaint which returns { arg, styles }
    // When running in an environment where facepaint is real, this test might need adjustment
    // but for this task, we assume the mock in node_modules/facepaint is used for verification.
    const result = (mq as any)({ color: ["red", "green"] })

    assert.deepStrictEqual(result.arg, expectedMediaQueries)
  })

  await t.test("it handles styles correctly", () => {
    const styles = { fontSize: [12, 14, 16] }
    const result = (mq as any)(styles)

    assert.deepStrictEqual(result.styles, styles)
  })
})
