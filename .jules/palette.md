## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-19 - Active State Accessibility for Navigation Links
**Learning:** In Astro, navigation links tracking active routes with custom classes (e.g., `class:list={[{ active: ... }]}`) do not automatically manage accessibility state for screen readers. Users must explicitly know which page is currently active.
**Action:** When adding active link styling (via a class like `active`), always conditionally apply the `aria-current="page"` attribute using the same condition. Set it to `"page"` when active, and `undefined` when not, so Astro omits the attribute entirely when false (e.g., `aria-current={condition ? "page" : undefined}`).
