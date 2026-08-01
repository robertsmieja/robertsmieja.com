## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-04-10 - Accessible active navigation links
**Learning:** Visual-only indicators for active navigation links (e.g., `.active` CSS classes) are not announced by screen readers, making it harder for visually impaired users to understand their current location in the app.
**Action:** Always use the semantic `aria-current="page"` attribute to denote active navigation links and bind CSS styling directly to `[aria-current="page"]` to ensure accessibility and styling are intrinsically linked.
