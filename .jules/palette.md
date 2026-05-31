## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-31 - Added aria-current to navigation links
**Learning:** Navigation links tracking active routes with custom classes do not automatically manage accessibility state.
**Action:** Explicitly set aria-current={condition ? "page" : undefined} alongside the visual active class so Astro cleanly omits the attribute when false.
