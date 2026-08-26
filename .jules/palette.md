## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2026-05-13 - Added aria-current="page" to active navigation links
**Learning:** Visual active states (like an `.active` class) on navigation links are not announced by screen readers, meaning visually impaired users don't know which page is currently active.
**Action:** Always pair visual active classes on navigation links with `aria-current="page"` to ensure screen readers announce the active route correctly. Use ternary operators (e.g. `aria-current={isActive ? "page" : undefined}`) to cleanly omit the attribute when false.
