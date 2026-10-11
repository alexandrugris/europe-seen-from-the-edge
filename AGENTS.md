# Repository Guidelines

## Continuity & Source of Truth

Before editing, read `PROJECT_SPEC.md`: the living spec, review inbox, decision log, active milestone, and restart guide. Update it after each meaningful pass and before committing.

The working branch is **`master`**. `codex/pdf-baseline` is the frozen approved-baseline branch and is 22+ commits behind — do not switch to it to continue work.

## Project Structure & Module Organization

This is a buildless historical narrative. Treat `dist/` as authored source. Since the R-001/R-005 reviews the site is **multi-destination**: a full-screen landing page that routes to authored chapters.

| File | Role | Stylesheet |
| --- | --- | --- |
| `dist/index.html` | Landing, in four screens: the claim; the shared text (the Revolution); the vantage point, the unity-preserves-individuality principle, and the four chapters at four scales; then the annexes doorway and the closing warning | `landing.css` |
| `dist/the-long-way-from-paris.html` | **The historical story** — the approved baseline, preserved intact | `styles.css` |
| `dist/manuc.html` | Hanul lui Manuc — layered cultures, diplomacy, 1812 treaty | `landing.css` + `annex.css` |
| `dist/architecture.html` | Little Paris, Athenaeum, Saxon Transylvania | `annex.css` |
| `dist/art.html` | Poetry & painting: Rosenthal, Aman, Grigorescu, Barbizon, Junimea | `annex.css` |
| `dist/annexes/index.html` | Six-room cabinet: Manuc, architecture, art, language, Paris, maps | `annexes/styles.css` |
| `dist/routes.html` | Full index: what is written, what is still to come | `routes.css` |
| `dist/site-nav.css` | The shared nav bar — linked by **every** page | — |
| `dist/fr.css` | The bilingual contract — `.fr-echo` and `.fr-echo--head` | — |
| `dist/script.js` | Reading progress + `.reveal` IntersectionObserver (story and annexes only) | — |
| `dist/assets/` | 33 images, ~38 MB | — |
| `serve.sh` | One-command preview server, idempotent | — |
| `.openai/hosting.json` | Private Sites configuration | — |

The four landing routes are the intended entrances. Keep the story's linear journey intact within each chapter; do not introduce dashboards or nested menus inside a chapter.

## The argument the landing carries

The landing is an argument, not a table of contents. Its shape, in order:

1. **The claim.** The four collage images are Europe's edge — a European flag in a demonstration (Kyiv), an anti-corruption protest (Bucharest), a European-leaning crowd (Tbilisi), and a war aftermath (Bucha). The copy names **no empire**; "a new age of empires" appears once, unglossed, and the pictures do the arguing. Do not add imagery outside Europe's border to illustrate this.
2. **The shared text.** The French Revolution as Europe's founding document: the end of absolutism, a country being its people rather than its prince.
3. **The vantage point.** The author cannot tell Europe's story — too large, belongs to no country — but can show what it looked like from the edge, from a country that stood where Europe stands now, two centuries ago.
4. **The principle.** A united Europe is glorious, but unity must preserve individuality. Romania is not France and does not want to be, as no country does.
5. **The four scales.** A state. A courtyard. A city. A culture. One argument, shown at four magnifications.

The thesis is deliberately *European*, not Romanian. The earlier framing — "France gave Romanian elites a language for freedom" — ends at the Romanian border and is not what the landing claims. If you change the copy, keep that orientation: Romania illustrates Europe, it does not stand in for it.

The essay remains the historical spine of the story page, but **it is not the source of the landing's argument** and does not contain it.

## Navigation

Every page carries the identical `<nav class="site-nav">` immediately after `<body>`: home, then The story, Manuc, Architecture, Art, Annexes, Routes. It is fixed, and the current page is marked with `aria-current="page"`.

Rules that must hold:

- The nav is **identical on all seven pages** except for path depth — `annexes/index.html` sits one level deeper and uses `../`.
- **Never remove a page from the nav.** The annexes and the routes index were unreachable for most of this project's life because nothing linked to them; the bar is what fixed that. If a page is retired, remove it here and nowhere else.
- If you add a page, add it here too, or it is orphaned.
- `.room-index` on the annexes page is separate sectional navigation and stays as it is.

## Bilingual French

`dist/fr.css` is the whole contract. French appears in exactly two roles:

```html
<p class="fr-echo" lang="fr">…</p>              <!-- echoes a paragraph -->
<p class="fr-echo fr-echo--head" lang="fr">…</p> <!-- echoes a heading -->
```

- Place the French `<p>` **immediately after** the element it echoes. Never put French inside a heading tag — no `<h1>`/`<h2>`/`<h3>` on this site contains French.
- Every narrative heading carries a French echo. Image credits, `<figcaption>` and the sources drawer do not — that is apparatus, not narrative.
- Colours are contextual in `fr.css` (sections sit on paper, navy or red). Scale is not contextual: one size rule per role.
- The legacy classes `title-fr`, `hero-title-fr`, `hero-deck--fr`, `fr-mini`, `chapter-fr`, `annex-fr` and bare `fr` are **retired**. Their rules are mostly deleted; a few leftover selectors in `annex.css` / `annexes/styles.css` still read `:not(.fr-echo)` — keep that exclusion when editing those files or French will inherit English body styling.

**The essay is the source of truth for French.** `De la Révolution française à la Grande Guerre, 1789–1914` (Claw, October 2026) is written in French; the site is its English rendering. Prefer the essay's own French for any passage it covers — do not invent a translation from the English when the original exists.

## Development and Validation Commands

```sh
./serve.sh                 # serve dist/ on :4173 (idempotent, replaces old server)
PORT=8080 ./serve.sh       # or another port
node --check dist/script.js
git diff --check
```

Preview `http://127.0.0.1:4173/`. To stop: `pkill -f "http.server 4173"`.

Only run the full multi-page crawl when a change could plausibly affect more than the page you edited. For a text or copy change, serve and look at that one page.

Validation gotchas learned in the field:

- `styles.css` sets `scroll-behavior: smooth`. Programmatic jump-scrolling therefore **skips** `.reveal` elements — an IntersectionObserver never sees them, and they stay at `opacity: 0`. This looks like a broken page but is a harness artifact. Scroll in small increments, or force `html { scroll-behavior: auto }`, before asserting on reveal state.
- CSS `background-image` assets are invisible to `document.images`. Check hero/section backgrounds with a `fetch()` on the URL, not an `<img>` audit.
- This shell sets `NO_PROXY=localhost,127.0.0.1,::1` only. Plain `curl http://<lan-ip>:4173/` routes through an HTTP proxy and fails spuriously. Use `curl --noproxy '*'` for anything non-loopback.
- Check for horizontal overflow explicitly (`scrollWidth > clientWidth`); it is the defect that does not show up in a console log.

## Coding Style & Naming Conventions

Use 2-space indentation. Prefer semantic HTML, lowercase kebab-case CSS classes, and `camelCase` JavaScript. Keep tokens in `:root`, reuse the paper/navy/red/gold palette, and respect `prefers-reduced-motion`.

## Approved Baseline & Editorial Standards

Tag `pdf-baseline-v1` (`1f0b9df`) is the approved baseline; it lives on `codex/pdf-baseline`. Its content is preserved intact in `dist/the-long-way-from-paris.html` — build on it, do not rewrite it without explicit direction. The core idea: French revolutionary language, education, and culture gave Romanian elites a vocabulary for freedom that Romania turned into a country. German and other threads remain additions, not competing theses.

Write literary passages grounded in facts. Separate events from interpretation, name regimes precisely, and avoid collective blame. Preserve citations and image credits. Never use generated imagery as historical evidence.

### The Story page is the frozen reference

The Story (`dist/the-long-way-from-paris.html`, styled only by `dist/styles.css`) is the best of the seven pages and is deliberately frozen. It is the standard the others are being brought up to.

- Do not restyle it, extend its vertical rhythm, patch its CSS, or fold it into any shared scale.
- Improvements travel *toward* it. The other six pages move to match it; it is not edited to match them.
- `dist/editorial.css` therefore covers only the six companion pages, and the visible difference between the Story and the rest is expected — not a regression to be closed.

The freeze lifts only when the other six pages have reached the same standard, and only on the author's explicit word.

## Known Gaps

Verified by a full-site crawl (all seven pages, desktop 1440 and mobile 390: zero console errors, zero failed requests, zero broken images, zero horizontal overflow, one nav per page, correct `aria-current`).

- **`annexes/` and `routes.html` are no longer orphaned.** Both are reachable from the shared nav, and the annexes additionally have a doorway on landing screen three. Nothing on the site lacks an inbound link.
- **Language, the Paris generation and territory still have no chapter of their own.** They exist only as rooms inside `annexes/` and as "still to come" entries on `routes.html`. Promoting them to destinations is the main remaining structural gap.
- **Figure captions, image credits and the sources drawer carry no French.** Deliberate — apparatus, not narrative — but it is a visible asymmetry.
- The essay carries three defects that have propagated nowhere yet but should be fixed at source: a garbled doubled clause on the Italian campaign (p.4), `« l'infusion raciale »` (p.15), and a triplicated `« l'attraction du Sénat »` (p.17).
- **The Story page has no keyboard focus ring.** `dist/styles.css` sets `outline: 0` on `:focus-visible`; the six companion pages get a visible outline from `dist/editorial.css`. Left deliberately under the reference freeze above, and recorded here so it reads as an accepted accessibility gap rather than an oversight.
- **Section rhythm differs by page, on purpose.** The annex rhythm is `clamp(4.5rem, 8vw, 7.5rem)` in `annex.css` (architecture, art, manuc). `dist/styles.css` (Story — frozen) and `dist/annexes/styles.css` (annexes index) still carry the older, larger spacing. Do not "correct" the Story one.
- **Three unused images remain on disk** (~896 KB): `bucharest-wall-of-light-2017.webp` (actually a protest crowd, and mislabelled), `noaptea-ca-hotii-2017.webp` (Casa Scînteii at night), `tbilisi-2024.webp` (the wrong city). None is referenced by any page. Deletion is uncontroversial but was deferred by the author for time, not on editorial grounds.

## Planned Additive Features

- Give the Paris generation and territory/pressure subjects their own destinations if they outgrow the annex rooms.
- In the language annex, distinguish inherited Latin vocabulary from later French or learned Latin, Slavic, Turkish, and other layers. Explain why estimates differ between core-vocabulary samples and full dictionaries.
- Let images, objects, buildings, and individual lives carry the story; avoid dense explanatory panels.

## Commit & Pull Request Guidelines

Use concise imperative subjects, such as `Add language annex`. Keep commits focused. Pull requests should summarize changes, validation, and sources, with desktop/mobile screenshots for layout work.

Note that `master` receives bulk pushes from the publishing pipeline ("Update Site source", "Record … checkpoint"). Expect it to move while you work; `git pull` before editing and re-read `PROJECT_SPEC.md` if a checkpoint lands mid-task.

## Security & Deployment

Never commit credentials or tokens. Preserve the Sites project ID and private audience unless a change is explicitly requested.

`serve.sh` binds `0.0.0.0`, so the site is reachable from the LAN and Tailscale. That is convenient for phone testing and fine for unpublished draft content; do not leave it running while the site holds work you do not want on the network.

### This site is one of four

`/from-the-edges/` is a sub-site of `alexandrugris.ro`. It shares one docroot with the
personal site, The Light Bringer and the literature site, each owned by its own repository.
**Do not rsync to the docroot wholesale and never use `--delete`** — the docroot holds three
sub-sites this repository does not contain.

Deploy everything with one command, which backs up, deploys all four sites, rebuilds
`sitemap.xml` and verifies the result:

```bash
"~/Downloads/Personal Website/tools/deploy.sh"
```

`dist/` here is hand-edited, not generated — there is no build step, so anything you add to
`dist/` survives. That is *not* true of the literature site, whose `build.py` wipes its `dist/`
on every run. The full estate map, SSH aliases and verification procedure live in
`~/Downloads/Personal Website/AGENTS.md`.