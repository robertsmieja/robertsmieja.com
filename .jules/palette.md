## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2025-01-20 - Add aria-current to active navigation links
**Learning:** Using purely visual CSS classes (like `.active`) for active navigation links hides this state from screen readers. Active navigation states should be communicated semantically.
**Action:** Always use the `aria-current="page"` attribute for active links and target `a[aria-current="page"]` in CSS instead of relying exclusively on visual classes.
