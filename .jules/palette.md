## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2025-02-09 - Use aria-current for active links
**Learning:** Using only visual CSS classes (like `.active`) for navigation links fails to convey the active page status to screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute for the currently active link in a navigation menu, and target this attribute in CSS (`a[aria-current="page"]`) for visual styling.
