## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2026-07-25 - Use aria-current for active navigation links
**Learning:** Visual-only indicators for active navigation links (like a `.active` class) are inaccessible to screen readers, leaving visually impaired users without context of their current page.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links and style them using attribute selectors (e.g., `[aria-current="page"]`) instead of custom classes.
