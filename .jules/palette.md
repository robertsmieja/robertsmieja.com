## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-14 - Added aria-current to active navigation links in Astro
**Learning:** In Astro components, links tracking active routes with custom classes (e.g. `class:list={[{ active: ... }]}`) do not automatically manage accessibility state for screen readers. Furthermore, when conditionally adding HTML attributes like `aria-current`, setting the false condition to `undefined` allows Astro to cleanly omit the attribute entirely.
**Action:** When creating active navigation states in Astro, always explicitly pair the visual active class with `aria-current="page"` (using `undefined` for false conditions) to ensure the active state is communicated to assistive technologies.
