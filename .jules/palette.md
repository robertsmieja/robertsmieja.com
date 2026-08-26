## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-04-24 - Explicit aria-current for active navigation links
**Learning:** In Astro, navigation links tracking active routes with custom classes (e.g., `class:list={[{ active: ... }]}`) do not automatically manage accessibility state. This leaves screen reader users unaware of the current active page.
**Action:** Always explicitly set `aria-current="page"` alongside the visual active class. Use `aria-current={condition ? "page" : undefined}` so Astro omits the attribute entirely when false.
