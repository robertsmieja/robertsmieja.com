## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-04-13 - Added aria-current to Astro navigation links
**Learning:** Astro doesn't automatically manage aria-current="page" based on active routing state like some frameworks (e.g. Gatsby's <Link> component does). When manually tracking active routes with class:list, accessibility requires explicitly setting aria-current alongside the visual active class.
**Action:** Always manually sync aria-current="page" with the visual .active state in custom Astro navigation components.
