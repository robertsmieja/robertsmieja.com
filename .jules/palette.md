## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2025-02-05 - Added aria-current to active navigation links
**Learning:** Using purely visual CSS classes (like `.active`) for navigation state ignores screen reader users. The semantic `aria-current="page"` attribute provides both structural meaning for assistive tech and a target for CSS styling.
**Action:** Always use `aria-current="page"` on active navigation links and style them using the `[aria-current="page"]` attribute selector instead of a custom class.
