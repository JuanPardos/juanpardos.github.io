# Agent Notes

Personal site built with Astro 6 and deployed to GitHub Pages.

## Package manager

- Use **pnpm** (`packageManager`: `pnpm@11.5.3`).
- Both `pnpm-lock.yaml` and `package-lock.json` exist; trust `pnpm-lock.yaml` and ignore the npm lockfile.
- Setup: `pnpm install`

## Development

- `pnpm dev` — start Astro dev server.
- `pnpm build` — static build into `dist/`.
- `pnpm preview` — preview the built site.
- There are **no test, lint, or formatter scripts** configured; only build verification matters.

## Deployment

- GitHub Pages deploy runs from `.github/workflows/deploy.yml` on every push to `master` and daily at 05:00 UTC.
- CI uses `withastro/action@v6`.
- Production URL: `https://juanpardos.github.io`

## External data fetched at build time

- `src/pages/links.astro` fetches AniList stats and currently-watching anime via `https://graphql.anilist.co`.
- It also fetches pinned GitHub repositories. If `GITHUB_TOKEN` is set, it uses the GitHub GraphQL API; otherwise it falls back to `https://pinned.berrysauce.dev/get/JuanPardos`.
- All fetches are wrapped in `try/catch`, so a network/API failure does not fail the build; the section simply renders empty or with defaults.
- In CI, `GITHUB_TOKEN` is provided automatically by GitHub Actions.

## i18n

- The site is Spanish-first with an English toggle.
- Translation is **custom client-side code** in `src/i18n/ui.ts` and `src/i18n/runtime.ts`, not Astro’s built-in i18n routing.
- New translatable strings must be added to both the `es` and `en` dictionaries in `src/i18n/ui.ts`, then referenced via `data-i18n` attributes or `t('key')` in client scripts.

## Blog / content

- Blog posts live in `src/content/blog/` as Markdown files.
- Collection schema is in `src/content.config.ts`.
- Required frontmatter: `titulo`, `descripcion`, `fecha`. Optional: `etiquetas` (array), `borrador` (boolean, defaults to `false`).
- Drafts (`borrador: true`) are excluded from the listing and from `[...slug].astro`.
- The article URL slug is the filename (e.g., `mi-articulo.md` → `/blog/mi-articulo`).

## Images

- Uses `astro:assets` `Image` component.
- Remote AniList cover images are allowed via `image.domains: ["s4.anilist.co"]` in `astro.config.mjs`.

## TypeScript

- Uses Astro’s strict TS config (`astro/tsconfigs/strict`).
- Astro-generated types live in `.astro/` and are ignored by git.
