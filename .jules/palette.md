## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.
## 2024-06-03 - Setting aria-current correctly in Astro
**Learning:** In Astro components, you should set false conditions for attributes like `aria-current` to `undefined` instead of `false` or an empty string, so that Astro entirely omits the attribute from the rendered HTML.
**Action:** Always use `condition ? "page" : undefined` for boolean or stateful ARIA attributes in `.astro` files.
