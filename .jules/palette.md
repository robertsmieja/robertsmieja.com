## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-05-04 - Added aria-current to active navigation links
**Learning:** Navigation links with visual active states (e.g., using `active` classes based on routing) do not automatically convey their state to screen readers. They require explicit `aria-current="page"` attributes to be fully accessible.
**Action:** Always include `aria-current` alongside visual active classes for navigation links.
