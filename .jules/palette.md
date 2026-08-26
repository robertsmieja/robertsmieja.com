## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-02 - Ensure aria-current is explicitly set on active navigation links
**Learning:** This app's navigation links tracking active routes used custom classes like `class:list={[{ active: ... }]}` but did not automatically manage accessibility state. Screen readers had no semantic indication of the currently active page.
**Action:** When tracking the active navigation route with visual classes, always explicitly set `aria-current="page"` (using undefined for false cases so Astro cleanly omits the attribute) to properly inform screen readers of the active context.
