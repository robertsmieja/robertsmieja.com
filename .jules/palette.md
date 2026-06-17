## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Replaced visual-only active links with aria-current
**Learning:** The site's navigation previously relied on a visual-only `.active` class to indicate the current page, which is a specific pattern in this app's components that fails to inform assistive technologies.
**Action:** Always use the semantic `aria-current="page"` attribute for active navigation links and bind CSS styles to `a[aria-current="page"]` rather than custom classes.
