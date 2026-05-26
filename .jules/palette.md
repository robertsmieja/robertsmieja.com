## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-26 - Add aria-current to active navigation links
**Learning:** Visual indicators for active navigation states (like `class="active"`) do not convey state to screen readers. Navigation elements need programmatic state management to be fully accessible.
**Action:** Always pair visual active classes with `aria-current="page"` (using `undefined` for false states in Astro) on navigation links to ensure screen reader users know their current location.
