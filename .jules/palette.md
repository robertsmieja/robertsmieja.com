## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-06-02 - Added aria-current to active navigation links
**Learning:** Visual active states on navigation links (like custom `active` classes) do not convey state to screen readers. Relying solely on CSS classes for active links creates an accessibility gap.
**Action:** Always pair visual active classes with `aria-current="page"` (conditionally set to `undefined` when false in Astro) to ensure navigation state is accessible to all users.
