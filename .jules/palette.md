## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-05-03 - Added aria-current to active navigation
**Learning:** In Astro navigation components, applying an `active` CSS class provides visual feedback, but it does not convey the active state to screen readers.
**Action:** Always add the semantic `aria-current="page"` attribute to navigation links alongside any visual `active` state toggling. In Astro, use `condition ? "page" : undefined` to cleanly render or omit the attribute.
