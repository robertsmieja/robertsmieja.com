## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-10-25 - Use aria-current instead of visual active classes
**Learning:** Relying purely on visual classes like `.active` for navigation state fails to communicate context to screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute (setting it to `undefined` when false in Astro) to indicate the active navigation link, and style against this attribute `[aria-current="page"]` rather than custom classes.
