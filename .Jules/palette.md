## 2023-10-27 - Header Navigation Accessibility & Semantic Fixes
**Learning:** This app's header previously used a `div` as a direct child of a `ul` to group right-aligned navigation links. This is invalid semantic HTML and breaks screen reader list counting. Furthermore, icon-only buttons like the GitHub and LinkedIn links lacked `aria-label`s, rendering them completely inaccessible to screen readers.
**Action:** Always ensure `ul`/`ol` elements only contain `li` elements. When using flexbox to align items, apply layout utilities (like `margin-left: auto`) directly to the `li` wrapper instead of introducing non-semantic grouping divs. Always provide descriptive `aria-label`s for icon-only links.

## 2024-03-22 - Hide decorative FontAwesome icons from screen readers
**Learning:** FontAwesome icons that are used decoratively next to text (like a briefcase next to "Experience") or inside links that already have an `aria-label` should be explicitly hidden from screen readers using `aria-hidden="true"`. This prevents redundant or confusing announcements.
**Action:** Always add `aria-hidden="true"` to `<FontAwesomeIcon>` components unless they are the sole content of an interactive element that lacks an accessible name.
