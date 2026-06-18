## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-06-18 - Semantic active state for navigation links
**Learning:** Visual-only active states (like CSS classes) are invisible to screen readers, making navigation context inaccessible for visually impaired users.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links and bind CSS styling directly to this attribute.
