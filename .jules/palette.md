## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2025-01-20 - Added aria-current to navigation links
**Learning:** Visual active states (like `class="active"`) do not automatically manage accessibility state for screen readers, leaving visually impaired users without important context about their location.
**Action:** Always pair visual active classes on navigation items with `aria-current="page"` (using undefined for false conditions) to ensure screen readers can announce the current active route.
