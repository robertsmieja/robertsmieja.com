## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Semantic active state for navigation links
**Learning:** The application's navigation components were relying exclusively on visual CSS classes to indicate the current page, leaving screen reader users without context about their current location.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links (setting false to `undefined` so Astro omits it) and target this attribute in CSS (`a[aria-current="page"]`) instead of using visual-only `.active` classes.
