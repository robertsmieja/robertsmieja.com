## 2023-10-27 - Header Navigation Accessibility & Semantic Fixes
**Learning:** This app's header previously used a `div` as a direct child of a `ul` to group right-aligned navigation links. This is invalid semantic HTML and breaks screen reader list counting. Furthermore, icon-only buttons like the GitHub and LinkedIn links lacked `aria-label`s, rendering them completely inaccessible to screen readers.
**Action:** Always ensure `ul`/`ol` elements only contain `li` elements. When using flexbox to align items, apply layout utilities (like `margin-left: auto`) directly to the `li` wrapper instead of introducing non-semantic grouping divs. Always provide descriptive `aria-label`s for icon-only links.

## 2024-03-22 - Hide decorative FontAwesome icons from screen readers
**Learning:** FontAwesome icons that are used decoratively next to text (like a briefcase next to "Experience") or inside links that already have an `aria-label` should be explicitly hidden from screen readers using `aria-hidden="true"`. This prevents redundant or confusing announcements.
**Action:** Always add `aria-hidden="true"` to `<FontAwesomeIcon>` components unless they are the sole content of an interactive element that lacks an accessible name.

## 2024-04-09 - Added actionable link to empty 404 state
**Learning:** Empty states in routing (like 404 pages) should always provide a clear path forward to prevent user frustration. Users who encounter a dead end without a recovery path are more likely to bounce.
**Action:** Always include a "Return to Homepage" or similar functional link on error/not found pages to maintain user flow.

## 2024-05-18 - Standardize External Links with Reusable Component
**Learning:** This app previously contained multiple plain `<a>` tags with `target="_blank"` scattered across pages (e.g., `index.tsx`, `projectEntry.tsx`). These links lacked visual indicators showing they open in new tabs, and many lacked descriptive `aria-label`s, which is bad for accessibility (screen readers need to warn users about context changes).
**Action:** Created a reusable `<ExternalLink>` component that standardizes external links. It forces `target="_blank"` and `rel="noopener noreferrer"`, visually appends a decorative FontAwesome external link icon (`faExternalLinkAlt` with `aria-hidden="true"`), and requires an `ariaLabel` prop (e.g., "GitHub (opens in a new tab)"). Always use this component for external links to ensure consistent UX and accessibility.

## 2024-05-20 - Add aria-current to active navigation links
**Learning:** Navigation links that use visual classes to indicate the active route (like `class="active"`) do not automatically convey this state to screen readers. Screen reader users will not know which page they are currently on when navigating the main menu.
**Action:** Always add `aria-current="page"` to the navigation link that matches the current route. In Astro, use a conditional like `aria-current={isActive ? "page" : undefined}` so the attribute is cleanly omitted when not active.
