## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-07-06 - Add aria-current to active navigation links
**Learning:** Using purely visual CSS classes for active navigation links hides the link's state from screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute to denote active navigation links, styling them via the `a[aria-current="page"]` CSS selector.
