## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2026-05-05 - Added aria-current to active navigation links
**Learning:** Visual active states (like CSS classes) in navigation menus do not automatically convey accessibility state to screen readers.
**Action:** Always pair visual active classes with `aria-current="page"` (or appropriately setting it to undefined when not active) in navigation components to ensure screen readers correctly announce the active page.
