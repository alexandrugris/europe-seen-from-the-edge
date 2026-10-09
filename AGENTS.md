# Repository Guidelines

## Project Structure & Module Organization

This is a buildless historical narrative. Treat `dist/` as authored source.

- `dist/index.html`: story, citations, and image credits.
- `dist/styles.css`: responsive editorial layout and motion.
- `dist/script.js`: reading progress and reveal behaviour.
- `dist/assets/`: archival images.
- `.openai/hosting.json`: private Sites configuration.

Keep one linear journey; do not introduce dashboards, menus, or competing entry points.

## Development and Validation Commands

No installation or build is required.

```sh
python3 -m http.server 4173 --directory dist
node --check dist/script.js
git diff --check
```

Preview `http://127.0.0.1:4173/`. Check the opening, one archival section, and the ending at desktop and mobile widths. Confirm images load and the console stays clean.

## Coding Style & Naming Conventions

Use 2-space indentation. Prefer semantic HTML, lowercase kebab-case CSS classes, and `camelCase` JavaScript. Keep tokens in `:root`, reuse the paper/navy/red/gold palette, and respect `prefers-reduced-motion`.

## Approved Baseline & Editorial Standards

Tag `pdf-baseline-v1` (`1f0b9df`) is the approved baseline. Build on it; do not rewrite it without explicit direction. The core idea: French revolutionary language, education, and culture gave Romanian elites a vocabulary for freedom that Romania turned into a country. German and other threads remain additions, not competing theses.

Write short, literary passages grounded in facts. Separate events from interpretation, name regimes precisely, and avoid collective blame. Preserve authoritative citations and image credits. Never use generated imagery as historical evidence.

## Planned Additive Features

- Add an image-led contemporary opening: Kyiv, Tbilisi, and Romania’s 2017 anti-corruption protests. Use one title and minimal city/date captions.
- Keep English first with a restrained italic French echo beneath it.
- Place annexes behind one doorway after the story: Hanul lui Manuc; architecture (Little Paris, the Athenaeum, and German/Transylvanian influence); art; language origins; the Paris generation; and territorial maps.
- In the language annex, distinguish inherited Latin vocabulary from later French or learned Latin, Slavic, Turkish, and other layers. Explain why estimates differ between core-vocabulary samples and full dictionaries.
- Let images, objects, buildings, and individual lives carry the story; avoid dense explanatory panels.

## Commit & Pull Request Guidelines

Use concise imperative subjects, such as `Add language annex`. Keep commits focused. Pull requests should summarize changes, validation, and sources, with desktop/mobile screenshots for layout work.

## Security & Deployment

Never commit credentials or tokens. Preserve the existing Sites project ID and private audience unless a change is explicitly requested.
