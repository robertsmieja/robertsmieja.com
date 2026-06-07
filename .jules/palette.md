## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-06-07 - Added aria-current to active navigation links
**Learning:** Visual cues for active navigation states (like bold text or underlines) are inaccessible to screen reader users. Without semantic indication, visually impaired users cannot easily determine which page they are currently on within a navigation menu.
**Action:** Always conditionally apply `aria-current="page"` to active navigation links to ensure parity between visual and semantic state.
