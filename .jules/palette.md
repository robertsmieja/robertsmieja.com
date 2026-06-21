## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2026-06-21 - Active Navigation Links
**Learning:** Visual-only styling for active navigation links (like `.active` classes) fails to convey the active state to screen readers, creating an accessibility gap.
**Action:** Always use the semantic `aria-current="page"` attribute to indicate active navigation items, and target this attribute in CSS (`a[aria-current="page"]`) instead of relying on custom utility classes.
