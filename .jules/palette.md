## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-06 - Active navigation links lack accessibility state
**Learning:** Navigation links tracking active routes with custom classes do not automatically manage accessibility state for screen readers. They only update the visual active class, leaving visually impaired users unaware of the current active page.
**Action:** Explicitly set `aria-current="page"` alongside visual active state checks in navigation elements to improve semantic web structure and accessibility.
