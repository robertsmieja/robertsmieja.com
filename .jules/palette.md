## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-06-27 - Add aria-current to active navigation links
**Learning:** Visual-only indicators for active navigation links are invisible to screen readers, making it hard for users with visual impairments to understand their current location in the site structure.
**Action:** Always use the `aria-current="page"` attribute on active navigation links instead of relying solely on CSS classes, and use `a[aria-current="page"]` as the CSS selector for active styling.
