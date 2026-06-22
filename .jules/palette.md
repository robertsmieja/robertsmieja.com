## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2025-03-05 - Use aria-current for active navigation links
**Learning:** Relying exclusively on visual CSS classes (like `.active`) for active navigation links leaves screen reader users without context about their current location within a site.
**Action:** Always use the semantic `aria-current="page"` attribute on the active link and target it in CSS (`a[aria-current="page"]`) to ensure correct accessibility.
