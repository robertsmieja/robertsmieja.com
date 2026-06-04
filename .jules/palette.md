## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-06-04 - Added aria-current to active navigation links
**Learning:** Screen readers need semantic HTML attributes like `aria-current="page"` to understand which navigation link represents the currently active page. CSS classes like `.active` only provide visual cues.
**Action:** Always add `aria-current="page"` to the currently active link within a navigation menu.
