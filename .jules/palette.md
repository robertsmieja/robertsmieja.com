## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2025-06-15 - Use semantic aria-current for active links
**Learning:** Relying purely on CSS classes like `.active` for current page styling hides this state from screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links, and target this attribute in CSS (`a[aria-current="page"]`) instead of using a separate visual class.
