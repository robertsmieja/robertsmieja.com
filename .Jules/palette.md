## 2023-10-27 - Header Navigation Accessibility & Semantic Fixes
**Learning:** This app's header previously used a `div` as a direct child of a `ul` to group right-aligned navigation links. This is invalid semantic HTML and breaks screen reader list counting. Furthermore, icon-only buttons like the GitHub and LinkedIn links lacked `aria-label`s, rendering them completely inaccessible to screen readers.
**Action:** Always ensure `ul`/`ol` elements only contain `li` elements. When using flexbox to align items, apply layout utilities (like `margin-left: auto`) directly to the `li` wrapper instead of introducing non-semantic grouping divs. Always provide descriptive `aria-label`s for icon-only links.

## 2024-03-22 - Hide decorative FontAwesome icons from screen readers
**Learning:** FontAwesome icons that are used decoratively next to text (like a briefcase next to "Experience") or inside links that already have an `aria-label` should be explicitly hidden from screen readers using `aria-hidden="true"`. This prevents redundant or confusing announcements.
**Action:** Always add `aria-hidden="true"` to `<FontAwesomeIcon>` components unless they are the sole content of an interactive element that lacks an accessible name.

## 2024-05-18 - Standardize External Links with Reusable Component
**Learning:** This app previously contained multiple plain `<a>` tags with `target="_blank"` scattered across pages (e.g., `index.tsx`, `projectEntry.tsx`). These links lacked visual indicators showing they open in new tabs, and many lacked descriptive `aria-label`s, which is bad for accessibility (screen readers need to warn users about context changes).
**Action:** Created a reusable `<ExternalLink>` component that standardizes external links. It forces `target="_blank"` and `rel="noopener noreferrer"`, visually appends a decorative FontAwesome external link icon (`faExternalLinkAlt` with `aria-hidden="true"`), and requires an `ariaLabel` prop (e.g., "GitHub (opens in a new tab)"). Always use this component for external links to ensure consistent UX and accessibility.

## 2024-05-19 - Explicit aria-current for active navigation links
**Learning:** This app uses custom `active` classes on navigation links to visually indicate the current page. However, screen readers don't understand visual CSS classes. Without `aria-current="page"`, screen reader users are unaware of their current location within the navigation menu.
**Action:** Always add `aria-current="page"` (or conditionally `aria-current={isActive ? "page" : undefined}`) to navigation links alongside visual active classes to ensure the current route is properly announced by assistive technologies.
