## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Added aria-current to active navigation links
**Learning:** Visual active states (like CSS classes) on navigation links are not sufficient for screen reader users to understand their current location within a site.
**Action:** Always pair visual active classes with `aria-current="page"` to ensure equal access to navigational context.
