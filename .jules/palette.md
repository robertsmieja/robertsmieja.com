## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-05-25 - Added aria-current to active navigation links
**Learning:** Visual indicators for active navigation states (like bold text or underlines) are not announced by screen readers. Additionally, in Astro, setting an attribute to `false` might render it as `"false"`, while setting it to `undefined` cleanly omits it from the DOM.
**Action:** Always explicitly set `aria-current="page"` alongside visual active classes, and conditionally render it to `undefined` when not active to ensure clean HTML and proper screen reader announcements.
