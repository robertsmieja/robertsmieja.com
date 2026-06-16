## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2025-02-13 - Semantic active links with aria-current
**Learning:** Relying purely on visual CSS classes like `.active` for navigation state hides the current page context from screen reader users.
**Action:** Always use the `aria-current="page"` attribute for active navigation links, and tie CSS selectors directly to this semantic state.
