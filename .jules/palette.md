## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2026-05-21 - Added aria-current to active navigation links
**Learning:** Navigation links tracking active routes with custom CSS classes do not automatically manage accessibility state for screen readers.
**Action:** Always explicitly set `aria-current="page"` (or undefined for inactive states) on navigation links to ensure screen readers announce the currently active page.
