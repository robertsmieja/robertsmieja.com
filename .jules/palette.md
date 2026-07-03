## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-10-25 - Use aria-current for active navigation links
**Learning:** Relying exclusively on visual CSS classes (e.g., `.active`) to indicate the current page in navigation lacks semantics for screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute on the active link and target `a[aria-current="page"]` in CSS to ensure correct accessibility.
