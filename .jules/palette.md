## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-28 - Added aria-current to active navigation links
**Learning:** In this Astro project, navigation components rely on custom CSS classes (`active`) for visual state, but do not automatically sync this state to assistive technologies.
**Action:** Always pair visual active classes with `aria-current="page"` conditionally (e.g., `aria-current={isActive ? "page" : undefined}`) to ensure screen readers announce the current page correctly.
