## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2026-04-16 - Adding aria-current to active Astro navigation links
**Learning:** In Astro projects using `class:list` to conditionally apply an active class for visual styling on navigation links, the `aria-current="page"` attribute must also be conditionally applied to communicate the active state to screen readers.
**Action:** Whenever applying visual active styling to navigation, always add `aria-current={isActive ? "page" : undefined}` to ensure complete accessibility.
