# Europe, Seen from the Edge

**Status: finished.** Published at **[alexandrugris.ro/from-the-edges](https://alexandrugris.ro/from-the-edges/)**.

An English rendering of the French essay *De la Révolution française à la
Grande Guerre, 1789–1914* — European ideas seen from Romania's border,
1789–1914.

## What is here

| | |
|---|---|
| `dist/` | the site. Buildless: plain HTML, CSS and one small JS file. `dist/` is the deliverable; there is nothing to compile. |
| `dist/source/` | the source essay as PDF, linked from the site's own sources drawer |
| `serve.sh` | local preview server |

Seven pages: the landing page, the story, three chapters (Manuc, Architecture,
Art), the annexes, and a routes index.

## Local preview

```bash
./serve.sh          # http://127.0.0.1:4173
```

## Deploying

The live site is **self-hosted**, not a PaaS. See `~/Downloads/Personal Website/AGENTS.md`
for the verified procedure — the short version:

```bash
TS=$(date +%Y%m%d-%H%M%S)
ssh website-root "cp -a /var/www/html /var/www/backup-$TS"

rsync -avz dist/ website-root:/var/www/html/from-the-edges/

ssh website-root 'chown -R root:root /var/www/html/from-the-edges && \
  find /var/www/html/from-the-edges -type d -exec chmod 755 {} + && \
  find /var/www/html/from-the-edges -type f -exec chmod 644 {} +'
```

Two things that will bite you:

- **Give each source its own destination.** `dist/` and the destination both
  end in `/`, so the *contents* land in `from-the-edges/` and the tree is
  preserved. Flattening it drops every `assets/...` URL into the personal
  site's own `assets/` and 404s the images.
- **nginx caches `.gif`, `.jpg` and `.png` for 84 days.** Replacing an image
  under the same filename will not appear for returning visitors. PDFs are
  not covered.

## Source of the French

Passages of French set as block quotations are verbatim from the essay.
The surrounding French, the English translations and the connecting text are
editorial. The site's own colophon says so, on the pages that claim a
source.

Some material — the Jewish, Ukrainian and other communities named in the
cities — is **not** in the essay and is added from the sources listed in the
landing page's "Beyond the essay" section.

## Known follow-up

Nine of the thirty-three images exceed 1 MB (`assets/cec-palace.jpg` is
8.9 MB at 4819 px wide; `assets/` totals 38 MB). The site is correct and
fast enough on desktop, but these are worth recompressing before any
significant traffic — and remember the 84-day nginx image cache when you do.