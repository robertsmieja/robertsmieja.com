## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2026-06-12 - Semantic active navigation links
**Learning:** Using only visual CSS classes (like `.active`) to indicate the current page leaves screen reader users without context about their current location in navigation menus.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links, and use `[aria-current="page"]` as the CSS selector to ensure visual styling is inherently tied to accessibility state.
