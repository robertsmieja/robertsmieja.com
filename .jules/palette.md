## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Added aria-current to navigation links
**Learning:** Navigation links tracking active routes with custom classes do not automatically manage accessibility state for screen readers.
**Action:** Always explicitly set aria-current="page" alongside the visual active class for navigation elements to ensure screen readers announce the current page correctly.
