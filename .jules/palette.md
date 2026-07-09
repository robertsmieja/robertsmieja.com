## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Use aria-current for active navigation links
**Learning:** Visual-only indicators for active navigation links (like an `.active` CSS class) are invisible to screen readers, depriving users of context about their current location within the site hierarchy.
**Action:** Always use the semantic `aria-current="page"` attribute to denote the active page, and tie CSS styling to this attribute rather than relying on visual-only CSS classes.
