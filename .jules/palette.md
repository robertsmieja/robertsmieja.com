## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-30 - Added aria-current="page" to active navigation links
**Learning:** Adding an `active` CSS class to navigation links provides visual feedback, but it does not convey the current active page state to screen readers.
**Action:** Always include `aria-current="page"` (conditionally set to `"page"` or `undefined`) on navigation links that indicate the currently active route to ensure screen reader users receive the same context as sighted users.
