## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Added aria-current to active navigation links
**Learning:** The navigation menu previously relied exclusively on visual CSS classes (`.active`) to indicate the active page, which is inaccessible to screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute on active links and target this attribute in CSS, conditionally setting it to `undefined` in Astro components when false.
