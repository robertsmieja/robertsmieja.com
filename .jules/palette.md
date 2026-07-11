## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-07-11 - Add aria-current to active navigation links
**Learning:** Active state visual indicators like CSS classes are invisible to screen readers, removing navigation context.
**Action:** Always use the semantic aria-current="page" attribute on the active link and target it in CSS.
