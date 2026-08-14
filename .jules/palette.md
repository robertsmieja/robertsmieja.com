## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-08-14 - Semantic active navigation links
**Learning:** Visual-only indicators for active navigation state (like a `.active` CSS class) are inaccessible to screen reader users who rely on semantic attributes.
**Action:** Always use `aria-current="page"` on the active navigation link and target it in CSS (`a[aria-current="page"]`) to ensure the state is communicated to all users.
