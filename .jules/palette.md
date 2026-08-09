## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-05-15 - Add aria-current to active navigation links
**Learning:** Relying exclusively on visual CSS classes like `.active` for navigation links fails to convey the active state to assistive technologies like screen readers.
**Action:** Always use the semantic `aria-current="page"` attribute on active navigation links, and update associated CSS selectors to target `a[aria-current="page"]` to ensure correct accessibility.
