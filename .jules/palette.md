## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-15 - Use aria-current for active navigation links
**Learning:** Relying solely on visual CSS classes (like `.active`) for navigation state leaves screen reader users without context about their current page location.
**Action:** Always use the semantic `aria-current="page"` attribute to denote the active route in navigation menus, and style based on that attribute (`[aria-current="page"]`).
