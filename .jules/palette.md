## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-04-10 - Add aria-current to active navigation links
**Learning:** Relying exclusively on visual CSS classes like `.active` for navigation links hides the active state from screen readers, creating an accessibility gap.
**Action:** Always use the semantic `aria-current="page"` attribute on active links and update associated CSS selectors to target `a[aria-current="page"]`, ensuring the state is accessible to all users.
