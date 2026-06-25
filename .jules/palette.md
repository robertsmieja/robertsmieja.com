## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-06-25 - Use aria-current for active navigation links
**Learning:** Relying exclusively on visual CSS classes (like `.active`) for active navigation state does not convey this context to screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute on active navigation links, and tie CSS styling to this attribute to ensure both visual and accessible states are synchronized.
