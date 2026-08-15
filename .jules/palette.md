## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-10-24 - Use aria-current for active navigation links
**Learning:** Relying solely on visual CSS classes (like `.active`) for navigation state excludes screen reader users. The semantic `aria-current="page"` attribute provides both programmatic context for assistive tech and a reliable hook for styling.
**Action:** Always use `aria-current="page"` on the active navigation link instead of visual classes, and use `a[aria-current="page"]` for the active state CSS selector.
