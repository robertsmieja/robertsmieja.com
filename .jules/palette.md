## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-05-18 - Use semantic aria-current for active links
**Learning:** Relying exclusively on visual CSS classes like `.active` to denote active navigation links leaves screen reader users without semantic context of their current location.
**Action:** Always use the `aria-current="page"` attribute for active links and target `a[aria-current="page"]` in CSS rather than arbitrary `.active` classes.
