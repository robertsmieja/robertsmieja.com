## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-07-07 - Add aria-current to active navigation links
**Learning:** Relying purely on visual CSS classes like `.active` for navigation state hides important context from assistive technologies. Screen readers need semantic attributes to announce the active page.
**Action:** Always use the `aria-current="page"` attribute for active navigation links and bind CSS styling directly to this semantic attribute (`a[aria-current="page"]`) instead of maintaining duplicate visual classes.
