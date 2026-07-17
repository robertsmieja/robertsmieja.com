## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-04-10 - Use aria-current for active navigation links
**Learning:** Visual active states (like `.active` classes) don't provide context to screen reader users. The semantic `aria-current="page"` attribute conveys this state accessibly and can be used as a CSS selector.
**Action:** Always use `aria-current="page"` on active navigation links and update associated CSS selectors to target `a[aria-current="page"]` instead of relying exclusively on visual CSS classes.
