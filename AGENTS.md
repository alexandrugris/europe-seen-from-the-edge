# Repository Guidelines

## Project Structure & Module Organization

This repository is an initial, empty worktree. Establish this layout as implementation begins:

- `src/` — application source, organized by feature or page (for example, `src/timeline/`).
- `assets/` — images, fonts, and other static history-site media.
- `tests/` — automated tests that mirror `src/` paths.
- `public/` — files served unchanged by the site, if the selected framework uses one.
- `docs/` — sources and architecture decisions.

Keep generated output (such as `dist/` and coverage reports) out of version control. Add a README when the stack is chosen.

## Build, Test, and Development Commands

No build system or package manifest exists yet. Once introduced, record its canonical commands in `README.md`. A JavaScript setup should provide:

```sh
npm install       # install dependencies
npm run dev       # start the local development server
npm run build     # create a production build
npm test          # run the automated test suite
```

Do not add commands to this guide until they are backed by project scripts.

## Coding Style & Naming Conventions

Use the project's formatter and linter; do not hand-format around their output. Prefer 2-space indentation for web files unless the toolchain says otherwise. Name components and classes in `PascalCase`, functions and variables in `camelCase`, and files in lowercase kebab-case (for example, `event-card.tsx`). Use descriptive dates in content filenames, such as `1945-05-08-ve-day.md`.

## Testing Guidelines

Add tests alongside each feature or in the matching `tests/` path. Name them after the unit under test (for example, `event-card.test.tsx`) and cover user-visible behavior, edge cases, and data transformations. Run the full test command before opening a pull request.

## Commit & Pull Request Guidelines

There is no commit history yet, so use concise imperative subjects: `Add timeline event card` or `Fix era filter focus state`. Keep commits narrow. Pull requests should explain the change, link related issues when available, list validation, and include screenshots for visual or responsive UI changes. Flag new historical sources, licenses, or attribution requirements.

## Content, Sources, and Security

Preserve citations and licensing information for historical text and media. Never commit API keys or local configuration; use documented environment variables and an ignored `.env` file when needed.
