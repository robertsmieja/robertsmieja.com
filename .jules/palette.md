## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Use aria-current for active navigation links
**Learning:** Visual-only active states on navigation links hide critical current-page context from screen reader users.
**Action:** Always use the semantic aria-current="page" attribute on active navigation links and bind CSS styles to that attribute instead of a dedicated class.
