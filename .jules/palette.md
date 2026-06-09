## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-18 - Added aria-current to active navigation links
**Learning:** Using purely visual indicators (like bold text or underlines) for active navigation links is insufficient for screen reader users. They need semantic context to understand which page is currently active.
**Action:** Always use `aria-current="page"` on the active item in a navigation list, and conditionally set it to `undefined` when false so Astro cleanly omits the attribute.
