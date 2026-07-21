## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-07-21 - Use aria-current for active navigation links
**Learning:** Using purely visual CSS classes like `.active` to style active navigation links hides this state from screen readers, creating an accessibility gap.
**Action:** Always use the semantic `aria-current="page"` attribute to indicate the active link and target it in CSS (`a[aria-current="page"]`) instead of using custom classes.
