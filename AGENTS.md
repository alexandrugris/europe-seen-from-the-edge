# Repository Guidelines

## Project Structure & Module Organization

This repository contains a buildless, single-page historical narrative:

- `dist/index.html` — semantic story structure, copy, citations, and image credits.
- `dist/styles.css` — responsive editorial layout, palette, and motion.
- `dist/script.js` — reading progress and reveal behaviour.
- `dist/assets/` — locally hosted archival and documentary images.
- `.openai/hosting.json` — private Sites deployment configuration.

Treat `dist/` as the authored static site, not generated output. Keep the experience linear: new material should strengthen the existing narrative rather than introduce dashboards, menus, or parallel entry paths.

## Development and Validation Commands

No dependency installation or build step is required. Preview locally with:

```sh
python3 -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173/`. Before committing, run:

```sh
node --check dist/script.js  # validate JavaScript syntax
git diff --check             # catch whitespace errors
```

Verify the opening, one archival section, and the ending at desktop and mobile widths. Check that all local images load and that the browser console remains clean.

## Coding Style & Naming Conventions

Use 2-space indentation in HTML, CSS, JavaScript, JSON, and SVG. Prefer semantic HTML, descriptive CSS classes in lowercase kebab-case, and JavaScript variables in `camelCase`. Keep CSS tokens in `:root`; reuse the established paper, navy, red, and gold palette. Respect `prefers-reduced-motion` when adding animation.

## Historical and Editorial Standards

Write short, literary passages supported by specific facts. Distinguish documented events from interpretation, avoid collective blame, and name regimes or state policies precisely. Add authoritative sources for factual claims and preserve creator, title, date, and licence information for every image. Never use generated imagery as historical evidence.

## Commit & Pull Request Guidelines

Use concise imperative subjects, such as `Refine 1848 narrative` or `Fix mobile Carol portrait`. Keep commits focused. Pull requests should summarize the narrative or visual change, list validation performed, link relevant sources, and include desktop and mobile screenshots for layout changes.

## Security & Deployment

Never commit credentials or tokens. Preserve the existing Sites project ID and private audience unless a change is explicitly requested.
