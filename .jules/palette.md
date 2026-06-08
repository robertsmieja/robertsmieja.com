## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-04-10 - Add aria-current to active navigation links
**Learning:** Screen readers rely on the `aria-current` attribute to definitively understand the currently active item in a navigation set, rather than visual cues like bold text or custom `active` classes. In Astro, setting an attribute to `undefined` will cleanly omit it from the rendered HTML.
**Action:** Always conditionally apply `aria-current="page"` (or setting it to `undefined` when false) alongside visual active state indicators in navigation menus to ensure equitable experiences for assistive technology users.
