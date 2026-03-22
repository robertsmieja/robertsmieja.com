import { test } from "node:test"
import assert from "node:assert"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ___setMockData } from "gatsby"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/extensions
import useSiteMetadata from "./useSiteMetadata.ts"

// eslint-disable-next-line @typescript-eslint/no-floating-promises
test("useSiteMetadata hook", async (t) => {
  await t.test(
    "it returns the correct site metadata from useStaticQuery",
    () => {
      const mockMetadata = {
        author: "Test Author",
        description: "Test Description",
        title: "Test Title",
      }

      // Set the mock data directly using our internal helper
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ___setMockData({
        site: {
          siteMetadata: mockMetadata,
        },
      })

      const result = useSiteMetadata()

      assert.deepStrictEqual(result, mockMetadata)
    }
  )
})
