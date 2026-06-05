## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-05-20 - Add aria-current to active navigation links
**Learning:** Screen readers do not inherently announce visual active states (like bold text or underlines) in navigation menus unless explicitly told to do so via ARIA attributes.
**Action:** Always use `aria-current="page"` (conditionally setting to `undefined` when false in Astro) on the currently active navigation link to ensure screen reader users understand their current location within the site hierarchy.
