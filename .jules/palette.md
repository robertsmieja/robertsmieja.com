## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-24 - Active state navigation needs aria-current
**Learning:** Custom CSS classes for active navigation states (like `.active`) do not convey state to screen readers. Relying solely on visual cues excludes users with assistive technologies.
**Action:** Always pair visual active state classes in navigation with `aria-current="page"` (using `condition ? "page" : undefined` in Astro) to ensure accessibility.
