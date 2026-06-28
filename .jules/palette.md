## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-06-28 - Semantic aria-current for active navigation
**Learning:** Relying solely on visual CSS classes (like `.active`) for active navigation links leaves screen reader users without context about their current location within the site's structure.
**Action:** Always use the `aria-current="page"` attribute to denote the active link and update associated CSS selectors to target `[aria-current="page"]` for styling.
