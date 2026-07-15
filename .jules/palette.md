## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Semantic active states for navigation
**Learning:** Visual active classes (like `.active`) fail to convey active navigation state to screen readers. Relying exclusively on CSS classes for routing active states limits accessibility.
**Action:** Always use the semantic `aria-current="page"` attribute on the active link and target this attribute in CSS for styling, ensuring both visual and screen reader accessibility.
