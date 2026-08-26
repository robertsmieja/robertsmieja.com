## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-04-28 - Added `aria-current` to active navigation links
**Learning:** In Astro, navigation links tracking active routes with custom classes (e.g., `class:list={[{ active: ... }]}`) do not automatically manage accessibility state. This leaves screen reader users unaware of which page they are currently on.
**Action:** Explicitly set `aria-current="page"` alongside the visual active class. When conditionally adding HTML attributes like `aria-current`, set the false condition to `undefined` (e.g., `aria-current={condition ? "page" : undefined}`) so Astro cleanly omits the attribute entirely from the rendered HTML.
