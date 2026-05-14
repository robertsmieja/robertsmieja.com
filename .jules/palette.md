## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-14 - Active navigation links missing accessibility state
**Learning:** Visual active states (like bold text or underlines) on navigation links are not announced to screen readers by default, leaving non-visual users without context of their current location within the site hierarchy.
**Action:** Always add `aria-current="page"` (using `condition ? "page" : undefined` in Astro) to navigation links alongside any visual active classes to ensure accessible state management.
