# Europe, Seen from the Edge — Living Project Spec

This document is the continuity layer for the project. It records the product intent, accepted direction, open reviews, and the next unit of work. Read it before editing the site and update it after every meaningful review or implementation pass.

## Current Checkpoint

- Working branch: `codex/pdf-baseline`
- Approved visual/story baseline: tag `pdf-baseline-v1` (`1f0b9df`)
- Continuation brief commit: `5247e7e`
- Source: `dist/` (buildless HTML, CSS, and JavaScript)
- Live reference: <https://europe-seen-from-the-edge.ambercoin8.chatgpt.site/?revision=f46bc968>
- Working preview: root landing page and destination routes added locally; awaiting visual review before commit or publication.
- Repository: <https://github.com/alexandrugris/europe-seen-from-the-edge>

The baseline is approved. New work is additive unless a review explicitly asks to revise existing material.

## Product Definition

This is a short, literary, visual story about Europe seen from Romania's border. It is not a reference site, political campaign, or exhaustive chronology. It has one entrance and one narrative current.

The central idea is that French revolutionary ideals, language, education, and culture gave Romanian elites a vocabulary for freedom—and Romania used that vocabulary to make a country. Western anchoring is presented positively: as cultural affinity, chosen inheritance, and a practical condition of independence. Russian expansion and autocratic pressure provide the recurring geopolitical risk, established through specific facts rather than collective blame or polemic.

## Audiences

1. Romanians who know little history or see NATO, the EU, and aid to Ukraine as remote concerns.
2. Western Europeans who can read Romania's story as both a warning from Europe's edge and a reason for confidence in European culture, solidarity, and institutions.

## Narrative and Design Principles

- Begin with **why**; reveal history through people, objects, places, and consequential moments.
- Connect Romanian events to ideas a Western reader already knows: the Enlightenment, the French Revolution, 1848, Paris, Napoleon III, and the nation-state.
- Keep the French thread central. German, Ottoman, Habsburg, Slavic, Turkish, Hungarian, Jewish, Armenian, Greek, American, and other influences add texture without replacing the thesis.
- Prefer atmosphere and implication to slogans. Never use “Make Europe Great” or MAGA-like framing.
- Use few words. Let a title, image, map, or quotation carry each beat.
- Keep English primary; use restrained italic French as an echo, not a full duplicate interface.
- Treat factual claims, quotations, dates, maps, and language statistics as source-dependent. Preserve citations and image credits.
- Do not use generated imagery as historical evidence.

## Planned Experience

### Main Story

1. **Contemporary landing page:** one full-screen, image-led page joining Kyiv and Tbilisi. Use minimal city/date labels and no explanatory wall of text. This landing page is only a doorway to the following destinations:

- **The Long Way from Paris:** the historical French connection; this is a separate destination containing the approved checkpointed baseline exactly as it stands.
- **Hanul lui Manuc:** one place as a story of layered cultures, diplomacy, commerce, and survival.
- **Architecture:** Little Paris, the Romanian Athenaeum, German and Saxon Transylvania, and other regional layers.
- **Language:** inherited Latin versus later French/learned Latin, Slavic, Turkish, Hungarian, German, and other vocabulary. Explain why estimates vary by corpus and method.
- **Art and cultural life:** a visual gallery with concise captions and provenance.
- **The Paris generation:** portraits, education, correspondence, revolutionary episodes, and individual biographies.
- **Territory and pressure:** restrained maps of annexation, occupation, border changes, and forced demographic transformation.
- **Romania at the intersection:** present-day linguistic and cultural plurality, ending with a distinct identity strongly anchored in Europe.

## Active Milestone

**M2 — Build the first three destination stories and make the entrance work on mobile.**

Acceptance criteria:

- The root page remains a full-screen, image-led entrance and presents the four-panel visual legibly on mobile.
- The landing offers working links to the untouched approved baseline plus developed Manuc, architecture, and art/poetry pages.
- Manuc explains confluence, commerce, diplomacy, and continuity with the past; architecture and art/poetry make the Western cultural horizon tangible without reducing Romania to imitation.
- The approved baseline is preserved exactly in its own destination, with no additions or edits.
- New imagery, factual claims, and quotations have sources and credits.

## Review Inbox

Add new feedback here. Keep one review per heading. The person implementing it should preserve the original wording, add acceptance criteria if needed, and change the status rather than deleting the entry.

### Review template — copy for each new note

**ID:** `R-000`  
**Status:** `open` | `accepted` | `implemented` | `deferred` | `rejected`  
**Priority:** `high` | `medium` | `low`  
**Area:** opening | main story | annex | language | imagery | interaction | sourcing  
**Review:** Write the feedback here in the reviewer's own words.  
**Acceptance:** Describe the observable result that would resolve it.  
**Resolution:** Leave blank until decided or implemented.  
**Commit:** Add the implementing commit hash when complete.

### R-001 — Four-item landing menu

**Status:** implemented
**Priority:** high
**Area:** opening
**Review:** “the menu should have only 4 items: the story; manuc's story and his inn; the architecture (little paris); the art (poetry and painting). also, a bit more discreet- either anchored to the bottom or to the top of the page.”
**Acceptance:** The landing page has precisely these four working destinations, presented as a restrained horizontal menu at the top.
**Resolution:** Removed the other top-level links; set the four remaining routes into a compact, top-anchored horizontal row. The historical story destination is unchanged.
**Commit:** `905252ea99a6e4cab218a3f5bf1e18336265fce5` (published Site source).

### R-002 — Flag-led bilingual opening

**Status:** implemented; story removal pending confirmation
**Priority:** high
**Area:** opening
**Review:** Replace the landing title with “At Europe’s edge, the flag carries profound meaning”; use the background from the story’s “At Europe’s edge, the flag still means something” section; give the menu a fitting French translation. Remove the original story section only after confirmation.
**Acceptance:** The landing uses the existing Tbilisi flag photograph, the requested English title, and English/French route labels. The matching story section remains untouched pending explicit approval.
**Resolution:** Applied the opening changes and retained the corresponding section in the checkpointed story.
**Commit:** `7b90a3c9a3c8f93c0b98d51edf5a4a9656fc0f47` (published Site source).

### R-003 — Why Tbilisi belongs on a Romanian story

**Status:** implemented
**Priority:** high
**Area:** opening
**Review:** Connect Tbilisi, Kyiv, and Bucharest’s <i>Noaptea ca hoții</i> protests through the European flag as hope, justice, freedom, and independence from aggressive neighbours and corrupt elites. Explain that the site tells the long regional story through Romania because the author is Romanian, not because Romania’s experience is unique.
**Acceptance:** The landing page makes this connection explicitly in English with French echoes, while the historical story remains unchanged.
**Resolution:** Added a concise bilingual framing statement to the landing page; the checkpointed story was not edited.
**Commit:** `03feda851530002a698527c8159d9e13ac1991c0` (published Site source).

### R-004 — Four-panel contrast and compressed framing

**Status:** implemented
**Priority:** high
**Area:** opening
**Review:** Compress the landing text and title while retaining the meaning. Combine Kyiv, Tbilisi, and Bucharest protest imagery; add a fourth sourced image from Ukraine under war to show the alternative to the European promise.
**Acceptance:** The landing is concise, bilingual, and uses a four-image collage with clear credits: Kyiv, Tbilisi, Bucharest, and Bucha after the 2022 Russian invasion. The historical story remains unchanged.
**Resolution:** Reduced the framing to one English and one French statement; replaced the single image with a credited four-panel collage. The Bucha panel now uses a wider image of burned-out civilian vehicles and war damage, credited to Oleksandr Ratushniak.
**Commit:** `dd891fcbe5befd039c9ffd8d04f3fa4d2893aa7f` (published Site source).

### R-005 — Mobile entrance and first destination stories

**Status:** implemented
**Priority:** high
**Area:** opening, annex
**Review:** Make the landing page mobile friendly. Start crafting linked pages for Manuc’s story, architecture, and art/poetry: Manuc should integrate the past and multiple inheritances; the others should show Romania’s Western tradition of art and expression.
**Acceptance:** On mobile, the landing uses a compact two-by-two image collage, two-column route grid, readable title/copy, and retained credits. The three landing links open authored, sourced pages with responsive layouts and a shared visual language.
**Resolution:** Reworked the mobile landing layout and created Manuc, Little Paris, and Art &amp; Poetry destinations. The historical baseline remains untouched.
**Commit:** `31996e57d73f862eb457846d31b7a65a60b85f46` (published Site source).

### R-006 — Reframe the historical story’s hero

**Status:** implemented
**Priority:** high
**Area:** main story
**Review:** “The title should be something like The French Revolution created the ideas on which a nation has been build. Keep ‘Romania made a country’. Iterate a bit on the heading. Also, make sure this whole page fits on one screen in desktop mode.”
**Acceptance:** The historical story opens with a concise title that makes the French Revolution the source of the political possibility, retains “Romania made it a country,” and keeps the full hero visible in one desktop viewport.
**Resolution:** Recast the title as “The French Revolution made a nation imaginable. Romania made it a country.” The French echo was updated to match. The desktop hero now has a fixed viewport height with compact type and responsive vertical spacing, while the mobile hero remains content-led. Removed the flag section after review; the landing now contrasts the European claim with “war, corruption, oppression” and explicitly right-anchors the desktop route strip.
**Commit:** `4fd97ad`

### R-007 — The danger of the three empires

**Status:** implemented
**Priority:** high
**Area:** main story
**Review:** “the story is that a country that is squeezed between 3 empires without a far away friend and source of inspiration is in a very dangerous place — not just territorial, but also its soul. the french [eighteenth-century] ideas were those ideas. also, [find] a photo which includes the full Moldova, before the annexation of Bessarabia by the Russian Empire.”
**Acceptance:** The opening map section presents the three empires as an existential pressure, explains France as a distant intellectual horizon, and shows Moldavia whole before the 1812 annexation.
**Resolution:** Rewrote the section around law, political imagination, and selfhood; named the French Enlightenment and Revolution as the source of a vocabulary for independence; replaced the 1856 map with a sourced 1810 map showing Moldavia before Bessarabia’s annexation.
**Commit:** `e9d884c`

### R-008 — Editorial expansion and French echoes

**Status:** implemented
**Priority:** high
**Area:** main story
**Review:** “incorporate the changed texts in the page and do the translation to french as well.”
**Acceptance:** The returned English editing copy is integrated into the historical story, with matching French echoes for the new and revised passages.
**Resolution:** Integrated the revised narrative, including the Transylvanian thread from the <i>Supplex</i> through 1918; added French echoes throughout; corrected surface-language and chronology issues in the editing copy; and added sources for the new historical claims.
**Commit:** `e8ac5e6`

### R-009 — Recompose the story screens

**Status:** implemented
**Priority:** high
**Area:** main story, imagery
**Review:** Rework the three-empires screen; use map or background art to make the Paris question legible; make 1848 the “Springtime of Nations”; sharpen the Russian Empire and Moscow framing; make the late-nineteenth-century European-claim section visual and historically precise; revise the crossroads title; keep the Markdown copy current; make the desktop sections fit a screen and retain a working mobile layout.
**Acceptance:** The opening map works as a full-bleed visual rather than a stranded figure; the Paris question has visual texture; revised titles and bilingual copy are present; the archival Calea Victoriei image supports the late-century thesis; and the editing manuscript matches the visible English copy.
**Resolution:** Rebuilt the three-empires section as a full-viewport map screen with a concise three-empire key; added Declaration-of-the-Rights artwork behind the Paris question; reframed 1848 as the Springtime of Nations; revised the Russian-Empire, Moscow, French-patronage, and crossroads copy; used the archival Calea Victoriei photograph as the late-century background; and added mobile-specific treatments for the new visual layers.
**Commit:** `2d7fcef`

### R-010 — Make Paris visible; remove the unexplained quotation

**Status:** implemented
**Priority:** high
**Area:** main story, imagery, sourcing
**Review:** “this requires a bit more work. the background is not great. do something else? maybe some image of paris at the epoch - very muted, but recognizable?” and “what is exactly this? where is the quote from?”
**Acceptance:** The Paris question is set over a recognisable, restrained period view of Paris; no quotation remains unless it has an attributable source.
**Resolution:** Replaced the Rights-of-Man background with Louis Daguerre’s public-domain 1838 Boulevard du Temple photograph, kept it muted beneath the editorial copy, credited it in the source drawer, and removed the unsupported “little Rome” line from the page and English manuscript.
**Commit:** `3234ca6`

### R-011 — Make Manuc’s inn a visual biographical story

**Status:** implemented locally; awaiting review
**Priority:** high
**Area:** annex, imagery, sourcing
**Review:** “you have the story of manuc here, also as md in the project file. update the Manuc section of the site, make it really nice. Use words and titles from the story to make a visual story, with images, ... go for it.”
**Acceptance:** The Manuc destination has a distinct, image-led narrative that gives his Armenian-Danubian biography, Bucharest’s multilingual commercial life, the 1812 treaty, and the building’s continuity clear visual and editorial weight. Existing Architecture and Art destinations retain their shared styles.
**Resolution:** Rebuilt the destination around “A courtyard for a continent,” with a full-bleed inn façade, Manuc’s route as a compact life ledger, an Old Town street-name guest list, a credited Szathmári historic view, a treaty sequence, and a final contemporary courtyard. Added a focused source drawer and preserved the shared annex treatment used by the other destinations.
**Commit:** pending

## Decision Log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-10-09 | Preserve `pdf-baseline-v1` as the approved foundation. | It is the strongest version of the framing and visual language so far. |
| 2026-10-09 | Keep the French “language for freedom” idea as the single narrative spine. | Other cultural threads should enrich, not diffuse, the story. |
| 2026-10-09 | Put deeper material in annexes behind one end-of-story doorway. | The main experience must remain short, linear, and emotional. |
| 2026-10-09 | Remove overt “Make Europe Great” rhetoric. | European confidence should emerge subtly from the story. |
| 2026-10-09 | Make the contemporary opening a standalone landing page with destination links. | The root should establish the structure; “The Long Way from Paris” must remain the checkpointed baseline in its own untouched destination. |
| 2026-10-09 | Revise the historical hero at the reviewer’s request. | The new wording foregrounds the French Revolution as the source of a political possibility while retaining Romanian agency. |
| 2026-10-09 | Keep a separate English-only Markdown editing copy of the historical story. | It gives the author a simple, round-trip-friendly way to revise prose without touching the page structure or bilingual presentation. |

## Resume Protocol

At the start of a new conversation, ask the agent to:

1. Read `AGENTS.md` and this file completely.
2. Confirm the branch is `codex/pdf-baseline` and the working tree is understood before editing.
3. Treat `pdf-baseline-v1` as read-only reference, then inspect the latest commits and open reviews.
4. Work only on the active milestone or explicitly selected review IDs.
5. Preview and validate the result before committing.
6. Update this file: review statuses, decisions, active milestone, current checkpoint, and implementing commit hashes.
7. Commit focused changes and push the branch; do not publish the Site unless explicitly requested.

Suggested opening prompt:

> Resume *Europe, Seen from the Edge*. Read `AGENTS.md` and `PROJECT_SPEC.md`, inspect the current branch and open reviews, then continue with the active milestone. Preserve the approved baseline and update the spec before you finish.

## Definition of Done for Each Pass

- The requested review is visibly resolved.
- Historical assertions and media have credible sources and credits.
- `node --check dist/script.js` and `git diff --check` pass.
- Desktop and mobile previews have been inspected.
- `PROJECT_SPEC.md` reflects what changed and what remains.
- The work is committed with a focused imperative message and pushed to GitHub.
