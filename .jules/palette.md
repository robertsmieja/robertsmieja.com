## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-04-23 - Astro conditional attributes
**Learning:** In Astro components, when adding conditional HTML attributes like `aria-current`, returning `undefined` for the false state (e.g., `aria-current={condition ? "page" : undefined}`) ensures Astro cleanly omits the attribute entirely from the rendered HTML.
**Action:** Always use `undefined` rather than `false` or `null` for omitted attributes in Astro to avoid rendering invalid states like `aria-current="false"`.
