# AGENTS.md

Operational guide for AI agents working in the `robertsmieja.com` repo (personal
site, Astro + pnpm, deployed to S3 via GitHub Actions). Written after the
Astro 5→7 + ESLint 8→10 migrations (Aug 2026) so the next agent doesn't waste
cycles re-learning what those taught us.

## Non-obvious truths (read first)

- **CI does NOT verify quality.** The only workflow that gates PRs,
  `nodejs.yml`, runs `pnpm install` + `pnpm run --if-present build` — nothing
  else. A green CI says "it builds", not "it's correct". Run the full local
  gate on every change before pushing:
  `pnpm run check` (= type-check + lint + format), plus `pnpm build`.
- **ESLint is 10 with flat config** (`eslint.config.js` at repo root, added
  2026-08 via #2212). Do NOT reintroduce `.eslintrc`. Adding a rule/plugin =
  edit `eslint.config.js` and `pnpm add -D <pkg>` (flat config needs
  packages installed as real dev deps).
- **Astro is 7 (was 5).** The repo went through the v6 content-layer
  migration (#2226, 2026-08). Traps:
  - Content config lives at `src/content.config.ts` (NOT
    `src/content/config.ts`), uses the `glob` loader with `generateId` that
    reproduces legacy slugs. Keep URLs stable: `/blog/<slug>/`.
  - Entries use `post.id` (not `post.slug`) — `id` currently equals the
    legacy slug because of `generateId` in the glob loader.
  - Render via `render(post)` from `astro:content` (not `post.render()`).
  - Renaming `src/content/config.ts` back, or switching loaders/IDs without
    preserving the generateId, silently **changes every blog URL** (and any
    `sitemap` needs regen) — check `dist/` page count and URLs after changes.
- **Markdown plugins must go through the `unified()` processor** in
  `astro.config.mjs` (from `@astrojs/markdown-remark`, a dev dependency).
  `markdown.remarkPlugins` etc. at top level are gone in Astro 7.
- **Type-check can lie about scope**: `astro check` returns a summary count —
  verify `0 errors` explicitly, not just exit code.

## Commands

- `pnpm dev` — dev server (default ~4321)
- `pnpm build` — production build (also what CI gates on)
- `pnpm preview` — preview the built `dist/`
- `pnpm run type-check` — `astro check`
- `pnpm lint` — eslint (this is the *actual* lint; see above that CI skips it)
- `pnpm run format` — prettier write
- `pnpm run check` — type-check + lint + format together
- Testing is *declared but not wired*: there are `*.test.ts` files in
  `src/lib/**` (e.g. `blogUtils.test.ts`) but no test runner or script is
  installed (checked 2026-08) — they're dead code until a runner is chosen.

Public repo; changes land via PR + CI (build gate), then merge. Don't
force-push shared branches — work on your own feature branch.

## Dependency hygiene

- FontAwesome (`@fortawesome/*`) packages **must stay at the same major
  version** across the group (`svg-core`, `free-solid`, `free-brands`,
  `common-types`). Version skew (e.g. core@7.2 + icons@7.3) causes
  `astro check` type errors that only show up locally — they look like type
  errors on `.astro` files but are really FA type mismatches. Align the
  whole set when bumping any piece.
  *(This trio is currently `^7.3.1` after #2226.)*
- `pnpm-lock.yaml` will be touched by almost any dep change; don't hand-edit
  it — re-run `pnpm install` and let it settle.
- Dependabot opens group bumps for `npm_and_yarn` in `.github/dependabot.yml`.
  Major bumps (like astro, eslint) are expected to arrive as "deps" PRs that
  actually need a human pass at integration / breaking changes — the bot only
  bumps the version, it doesn't migrate.

## Scratch / cleanliness

- Work in branch-based scratch dirs (e.g. `/tmp/xxx` clones or git
  worktrees) so `npm`/`pnpm` artifacts never creep into `src/`. Never leave
  `_sanity`, `probe` files, or temp JSON in the tree.
- `dist/` is gitignored, generated at build time — don't commit it.

This file itself is meant to be updated when the runtime knowledge changes
(especially around astro build internals and the test toolchain).
