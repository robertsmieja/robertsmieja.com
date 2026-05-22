## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-22 - Added aria-current to active navigation links
**Learning:** Active state styling via CSS classes provides visual feedback but fails to communicate the current page to screen readers, breaking navigational context for visually impaired users.
**Action:** Always apply `aria-current="page"` to the active link within navigation components alongside visual active state classes.
