## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-15 - Add aria-current to active navigation links
**Learning:** Relying solely on visual CSS classes (like `.active`) for active navigation links hides this important context from screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute for active links and target this attribute in CSS instead of visual-only classes.
