## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-18 - Added aria-current to active navigation links
**Learning:** Navigational lists highlighting the active page should use the semantic `aria-current="page"` attribute for screen readers, not just a visual CSS class like `.active`.
**Action:** Always use `aria-current="page"` on active navigation links, and use `a[aria-current="page"]` as the CSS selector for styling the active state.
