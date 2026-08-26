## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-05-19 - Added aria-current to active navigation links
**Learning:** Visual indicators of active navigation state (like bold text or underlines) are not conveyed to screen readers automatically. Without explicit ARIA attributes, visually impaired users cannot easily determine their current location within the site's navigation structure.
**Action:** Always pair visual active classes on navigation links with `aria-current="page"` (conditionally setting it to undefined when false in Astro) to ensure accessibility state matches the visual state.
