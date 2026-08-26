## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-18 - Added aria-current to active navigation links
**Learning:** Visual indicators for active navigation links (like bold text or underlining) are not automatically announced to screen readers. Relying solely on CSS classes for active state fails accessibility guidelines.
**Action:** Always pair visual active classes on navigation links with the explicit attribute aria-current={condition ? "page" : undefined} to ensure assistive technologies correctly announce the active page.
