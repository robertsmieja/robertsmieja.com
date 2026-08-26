## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-04-10 - Navigation Active States Need aria-current
**Learning:** Visual active states (like adding `.active` classes to navigation links) do not automatically translate to accessibility states for screen readers in Astro components.
**Action:** Always pair visual active classes with `aria-current="page"` (using ternary operators `? "page" : undefined` to ensure clean DOM output when false) to guarantee structural accessibility for navigation elements.
