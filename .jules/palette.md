## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-18 - Use aria-current for active navigation links
**Learning:** Relying exclusively on visual CSS classes (like `.active`) for active navigation links excludes screen reader users from understanding their current location in the site hierarchy.
**Action:** Always use the semantic `aria-current="page"` attribute on the active link and use the attribute selector (e.g., `a[aria-current="page"]`) for styling to ensure correct accessibility.
