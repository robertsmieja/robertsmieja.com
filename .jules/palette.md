## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-06-06 - Added aria-current to active navigation links
**Learning:** For single-page applications or static sites built with Astro where navigation active states are applied via CSS classes (e.g., `class="active"`), screen readers cannot natively announce the currently active page. Relying solely on visual cues excludes visually impaired users.
**Action:** Always conditionally append `aria-current="page"` (using `aria-current={condition ? "page" : undefined}` in Astro to ensure omitted output when false) to navigation links alongside any visual `active` class to provide proper context to assistive technologies.
