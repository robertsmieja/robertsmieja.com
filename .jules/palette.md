## 2024-04-15 - [Astro Navigation Links Active State Accessibility]
**Learning:** In Astro, navigation links tracking active routes using custom classes (e.g., `class:list={[{ active: ... }]}`) do not automatically manage accessibility state. They lack `aria-current="page"`.
**Action:** When creating navigation menus in Astro that highlight the active page visually via CSS classes, explicitly bind `aria-current={isActive ? "page" : undefined}` to inform screen readers of the active navigation item. Passing `undefined` correctly omits the attribute when false.
