import { test } from "node:test"
import assert from "node:assert"
import gatsby from "gatsby"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/extensions
import useSiteMetadata from "./useSiteMetadata.ts"

// eslint-disable-next-line no-void
void test("useSiteMetadata hook", async (t) => {
  await t.test(
    "it returns the correct site metadata from useStaticQuery",
    () => {
      const mockMetadata = {
        author: "Test Author",
        description: "Test Description",
        title: "Test Title",
      }

      t.mock.method(gatsby, "useStaticQuery", () => ({
        site: {
          siteMetadata: mockMetadata,
        },
      }))

      const result = useSiteMetadata()

      assert.deepStrictEqual(result, mockMetadata)
    }
  )
})
