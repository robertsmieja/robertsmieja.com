## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-18 - Add aria-current to active navigation links
**Learning:** When styling active navigation links, avoid relying exclusively on visual CSS classes (e.g., `.active`). Always use the semantic `aria-current="page"` attribute on the active link to ensure correct accessibility for screen readers.
**Action:** Always use `aria-current="page"` for active navigation links and update associated CSS selectors to target `a[aria-current="page"]` instead of custom classes.
