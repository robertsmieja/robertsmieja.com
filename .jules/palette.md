## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2026-05-24 - Convey active route state to screen readers
**Learning:** Navigation links tracking active routes visually (e.g. with an "active" class) do not automatically convey this state to screen readers, causing accessibility issues.
**Action:** Always add `aria-current="page"` (using conditional rendering like `aria-current={condition ? "page" : undefined}`) to navigation links that represent the currently active route.
