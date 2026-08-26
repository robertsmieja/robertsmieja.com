## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-05-18 - Added aria-current to active navigation links
**Learning:** Visual active states (like CSS classes) on navigation links do not automatically communicate the current page to screen reader users, causing an accessibility gap.
**Action:** Always explicitly set `aria-current="page"` (using `undefined` for false conditions in Astro to omit the attribute) alongside visual active classes on navigation items.
