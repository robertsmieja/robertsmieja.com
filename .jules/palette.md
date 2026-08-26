## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2026-05-20 - Set aria-current="page" on active navigation links
**Learning:** Visually distinguishing active navigation links using CSS classes is inaccessible; screen readers require `aria-current="page"` to identify the active route.
**Action:** Always use `aria-current={isActive ? "page" : undefined}` alongside visual active classes on navigation links.
