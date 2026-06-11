## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-06-11 - Use aria-current for active navigation links
**Learning:** Visual-only active states (like CSS classes) are invisible to screen readers, making it hard for visually impaired users to know which page they are on.
**Action:** Always use the semantic `aria-current="page"` attribute to denote active navigation links, and style them using the `a[aria-current="page"]` CSS selector.
