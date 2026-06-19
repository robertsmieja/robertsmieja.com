## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-06-19 - Semantic active state for navigation links
**Learning:** Relying solely on visual CSS classes (like `.active`) for active navigation links does not communicate state to screen readers.
**Action:** Use the semantic `aria-current="page"` attribute to both style the active link and provide accessibility for screen readers.
