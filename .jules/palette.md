## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Added aria-current for active navigation links
**Learning:** Using CSS classes like `.active` for current page state provides only visual feedback, making it inaccessible to screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links, and style the CSS targeting this attribute instead of a visual class.
