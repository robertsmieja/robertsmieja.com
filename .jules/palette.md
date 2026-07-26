## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-15 - Semantic aria-current for active links
**Learning:** Relying solely on visual CSS classes like `.active` for navigation state hides critical context from screen readers, creating an inaccessible navigation experience.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links and bind CSS styling directly to this attribute.
