## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-04-10 - Add aria-current to active navigation links
**Learning:** Visual-only indicators for active navigation links (like an `.active` CSS class) are insufficient for screen readers, which rely on semantic attributes to announce the current page.
**Action:** Always use `aria-current="page"` on active navigation links in addition to or instead of visual-only classes, and style using the attribute selector `[aria-current="page"]`.
