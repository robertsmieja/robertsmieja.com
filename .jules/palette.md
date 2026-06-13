## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-06-13 - Improved active navigation link accessibility
**Learning:** Relying solely on visual CSS classes (like `.active`) for navigation state leaves screen reader users without context about their current location in the app.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links and bind styling to this attribute instead of a dedicated CSS class.
