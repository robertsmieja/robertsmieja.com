## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-29 - Navigation Active State Accessibility
**Learning:** In Astro, visual active classes on navigation links do not automatically manage accessibility state for screen readers.
**Action:** Always pair visual active classes with `aria-current="page"` (using `condition ? "page" : undefined` to cleanly omit when false) on primary navigation elements.
