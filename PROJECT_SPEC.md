# Europe, Seen from the Edge — Living Project Spec

This document is the continuity layer for the project. It records the product intent, accepted direction, open reviews, and the next unit of work. Read it before editing the site and update it after every meaningful review or implementation pass.

## Current Checkpoint

- Working branch: `codex/site-polish-review` (user-requested desktop review branch; `master` remains unchanged)
- Approved visual/story baseline: tag `pdf-baseline-v1` (`1f0b9df`)
- Continuation brief commit: `5247e7e`
- Source: `dist/` (buildless HTML, CSS, and JavaScript)
- Live reference: <https://europe-seen-from-the-edge.ambercoin8.chatgpt.site>
- Original reference confirmed by the user: <https://alexandrugris.ro/from-the-edges/>. On 2026-10-10, fetched Story HTML, `styles.css`, and `script.js` from this origin and verified that all three match the restored review source byte-for-byte. Use this public original when comparing behavior, not assumptions about the GitHub copy.
- Working preview: <http://127.0.0.1:4173/>. **R-015** introduced the companion-page layout polish; **R-016** corrects its missing companion reveals and the emoji-rendered landing arrows. The review remains subject to user acceptance. Started from GitHub `master` at `97c3c3f`; the user has now authorized committing and pushing this review edition on `codex/site-polish-review` for desktop inspection. Publication is to the existing private Sites project only; the personal-domain deployment is outside this pass.
- Review restriction: the user has authorized a separate GitHub branch for inspection at home. Commit and push `codex/site-polish-review`; do not merge into `master` before approval. The separate Sites publishing snapshot was also authorized.
- Source of truth for French: the essay *De la Révolution française à la Grande Guerre, 1789–1914* (Claw, octobre 2026) is written in French and is the original of this English rendering. Prefer its French over any translation written from the English.
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

**Current review pass — R-016: remove the landing arrows and carry The Story's reveals across its companion pages.** Preserve the Story's HTML and CSS, publish the private Sites review edition, and retain the changes on the separately authorized `codex/site-polish-review` branch pending desktop review. The earlier M2 acceptance criteria below remain historical context rather than authorization to commit or publish elsewhere.

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

**Status:** implemented; awaiting review
**Priority:** high
**Area:** annex, imagery, sourcing
**Review:** “you have the story of manuc here, also as md in the project file. update the Manuc section of the site, make it really nice. Use words and titles from the story to make a visual story, with images, ... go for it.”
**Acceptance:** The Manuc destination has a distinct, image-led narrative that gives his Armenian-Danubian biography, Bucharest’s multilingual commercial life, the 1812 treaty, and the building’s continuity clear visual and editorial weight. Existing Architecture and Art destinations retain their shared styles.
**Resolution:** Rebuilt the destination as a full story drawn from the Manuc manuscript: a four-panel opening in the same structure as the root landing page, the identical bilingual four-route menu with Manuc marked current, an arrivals sequence, a life ledger, the Old Town guest list, the “costume, language, room” scene, a credited Szathmári image, the 1812 treaty sequence, and a final contemporary courtyard. Added a focused source drawer and preserved the shared annex treatment used by the other destinations.
**Commit:** `1eefd9e`

### R-012 — Bring the story mechanism into the question screen

**Status:** implemented
**Priority:** high
**Area:** main story, layout
**Review:** “this is interesting, but doesn't fit properly on the screen. since this is the core idea of the slide, maybe put it somewhere else? make [it] a bit more standing?” and “this does not represent the slide. maybe call it the path to unification? or the path to modern Romania?”
**Acceptance:** The France/Romania parallel-timeline key reads as the core mechanism of the Paris-question screen without creating a separate overflow strip; the Transylvanian section title reflects its route to 1918; mobile does not compress the key into unreadable columns.
**Resolution:** Moved the two-timeline mechanism into a compact, clearly labelled part of the Paris-question screen and removed the detached dark strip; retitled the Transylvanian coda “The path to unification”; and made the key stack on narrow screens.
**Commit:** `9d74ce8`

### R-013 — Full architecture and art chapters

**Status:** implemented
**Priority:** high
**Area:** annex, imagery, sourcing
**Review:** “based on the markdowns in the folder but also on lots of research, do the full pages for art and for architecture. make them beautiful, historical, long. reference to the french schools of painting and the Hausmann Paris architecture. reference to german influences in philosophy, romantic writing, political agenda in writing, papers.”
**Acceptance:** Architecture is a substantial, image-led historical chapter connecting Brâncovenesc Bucharest, the Parisian lesson in civic scale, the Athenaeum, Calea Victoriei, Neo-Romanian architecture and the distinct Saxon urban inheritance of Transylvania. Art & Poetry gives equal space to Rosenthal, Aman, Grigorescu and Barbizon, Alecsandri, Eminescu’s German intellectual formation, Junimea and the political press. Both pages retain sources, credits, desktop/mobile readability and a single editorial voice.
**Resolution:** Rebuilt both short destination pages as long-form editorial chapters with an intentionally varied typographic rhythm, responsive visual systems, restrained French echoes and new credited images. The architecture page treats Haussmann as an influence on civic scale rather than a claim that Bucharest was remade as Paris; the art page distinguishes the French academic and Barbizon routes from German Romantic, philosophical and journalistic influences. Validated with `node --check`, `git diff --check`, browser-console checks, and visual review at desktop and 390px mobile widths.
**Commit:** `7d9fe1a`

### R-014 — Site-wide navigation, landing structure and bilingual consistency

**Status:** implemented
**Priority:** high
**Area:** interaction, layout, opening
**Review:** "the mobile version of the main page looks like shit, fix it"; "the site is not consistent in navigation — there is no consistent navigation menu between the main pages"; "the main landing page needs another explanation — not clear why the sections are as they are, so the menu appears on the second screen and explains why each section is selected as representative"; "the use of french translation is not at all consistent across the sections — make it consistent and equally prominent to english"; "de-robotize the voice and the text wherever possible".
**Acceptance:** One shared navigation bar present and identical on every page, current page marked; the landing reads as claim → four chapters with the reason each earns its place → annexes; every narrative heading carries a French echo at one consistent scale; the mobile landing is legible and scrollable.
**Resolution:** A full-site audit found five unrelated navigation patterns across seven pages — including no navigation at all on the 19,646px story page — and a finished nav component in `annex.css` that no page had adopted. Promoted it into `dist/site-nav.css` and linked it from all seven pages with `aria-current="page"` on the current one; this also gave the previously orphaned annexes and routes index their inbound links. The landing was rebuilt as three screens: the claim, "Four ways in" with a one-line rationale per chapter, and the annexes doorway. French was consolidated into a single contract, `dist/fr.css` (`.fr-echo` and `.fr-echo--head`), retiring seven competing classes whose scale ratios ranged from 0.16 to 1.00 — two of which had no CSS rule and rendered at display weight, running into their English with no line break. Every narrative heading now carries French. `routes.html` was an empty stub with seven blank sections; it was written out as a real index and restyled from a stray cream theme into the site's dark system. English text is byte-for-byte unchanged throughout.
**Commit:** the commit titled *Unify navigation, rebuild the landing, and standardise French* (the one carrying this entry).

### R-015 — Polish the companion pages against The Story

**Status:** implemented, verified and published privately on Sites; awaiting user review
**Priority:** high
**Area:** layout, typography, imagery, interaction, opening
**Review:** “the only polished page of the site is The Story. Has no e reveal animations, great spacing, great page setup. To a lesser extent, the landing page is not bad either, but could use some polish. Do a great analysis of the site and bring it to the same level of polish as The Story page. As you do your job, you tell me what you change. Publish it here, on sites, but not commit anything until I verify in depth everything.”
**Acceptance:** All six companion pages share a coherent editorial rhythm; preserve The Story’s original reveal animation and remove companion-page hover zooms; readable English/French pairings; intact historical imagery and citations; working navigation and source drawers on desktop and mobile; published to the existing private Sites audience. Follow-up authorization permits committing and pushing the separate review branch only; no merge into `master`.
**Commit:** The commit titled *Polish companion pages for desktop review* on `codex/site-polish-review`. The user explicitly requested this branch for inspection at home; merge approval is still pending.

#### Findings and implementation

The Story's strongest qualities are its restrained serif hierarchy, paper/navy contrast, images with documentary weight, and straightforward reading flow. Correction after motion investigation: its HTML loads `script.js` in the head (line 15). The original script adds `has-js` and uses IntersectionObserver to reveal content. The initial review incorrectly overlooked that include and removed the observer, causing a regression despite unchanged Story HTML/CSS. The exact original script has now been restored.

| Finding | Review-edition change |
| --- | --- |
| Chapter display headings used line heights as low as .78 and large 9.2vw sizing. French clearance depended on compensating margins. | Companion titles now use the Story's approximate scale with .96–.98 line heights, a consistent heading echo, and aligned hero decks. |
| Several wide grids devoted too much width to empty gaps while bilingual prose ran through narrow columns. | Shared 1180px maximum width, responsive gutters, a smaller column gap, and consistent section spacing in `dist/editorial.css`, loaded only by the six companion pages. |
| Pale gold emphasis disappeared against cream backgrounds. | Dark ochre emphasis on paper; light gold retained on navy and red. |
| Generic paragraph selectors overrode French sizes, making the echo inconsistent between adjacent sections. | Explicit body/heading echo sizes within the companion reading areas; Manuc's two legacy hero echoes converted to the shared classes. |
| Manuc's treaty number, heading and French echo were separate grid items, creating a large detached gap. The prose used a percentage margin plus a fixed maximum width. | Grouped the heading/echo, gave the marker its own cell, and aligned the prose with the heading column. |
| Forced minimum image heights cropped architecture and left landscape art inside oversized frames. | Natural image proportions for the Athenaeum, Sibiu and Grigorescu; restrained frames; a bounded, uncropped Rosenthal painting. Added intrinsic dimensions to companion-page image markup. |
| Art's four newspaper columns were too narrow for two languages. | Two columns on desktop, one on small phones, consistent date/title/body hierarchy. |
| The annex architecture grid reserved two rows for one image but left the other two images together above an empty lower row. | One tall image beside two stacked views; responsive stacking below. Removed annex image zoom. The shared reveal observer is retained: The Story uses it; annex CSS deliberately keeps annex content static. Reading progress remains. |
| Chapter endings led straight into long source lists. | A single next-destination link, a return to the four chapters, and native expandable source drawers preserving source links and credits. |
| Landing action said “The story” but scrolled further down the landing; chapter links were understated. | “Begin here” scroll cue, clearer numbered chapter links with restrained arrows, improved English/French hierarchy, and squared-off link treatments. Argument and images preserved. |
| Mobile links could remain hidden when navigation JS failed; focus indication was often removed. | Enable the mobile collapse only when the navigation code runs; visible no-JS navigation, skip links, explicit keyboard focus, and larger touch targets on the companion pages. |
| Two visible French typos survived in the chapters. | Corrected `de/anaconda` to `de Roumanie` in Art and `reconstruie` to `reconstruite` in Manuc. |

At 1440×900, the initial before/after render reduced the page heights from 8,347 to approximately 6,700px for Manuc, 13,820 to 10,475px for Architecture, and 13,233 to 10,435px for Art. This comes from layout and collapsed apparatus, not cuts to narrative paragraphs. It is a rhythm check, not a goal to fit long bilingual chapters into a fixed number of screens.

#### Motion investigation and correction — 2026-10-10

The user's follow-up exposed a gap in the first audit: visibility and error checks do not establish that the original transitions still run. The earlier claim that the Story did not load its reveal script was false; the include is in the document head, not at the end.

- **The Story:** `script.js` adds `has-js`, observes `.reveal`, and adds `is-visible`. `styles.css` supplies the 24px upward movement, .82s opacity transition and .9s transform transition.
- **Manuc, Architecture, Art:** only load `nav.js`, have no `.reveal` elements and no reveal CSS. Their static behavior predates this pass.
- **Annexes:** load the shared script and contain 19 `.reveal` elements, but `annexes/styles.css` explicitly forces opacity 1 and no transform. The observer does not create a visual reveal there.
- **Public personal-domain site:** the fetched Story loads `script.js`; the fetched script is byte-identical to GitHub HEAD's original script. The personal-domain publication was not changed in this task.
- **Regression:** removing the observer from the shared script disabled Story animations in Sites review version 17. Restored `dist/script.js` byte-for-byte from GitHub HEAD, including the red-thread behavior, with no Story HTML/CSS changes.
- **Targeted browser evidence:** before the fix, the heading stayed at opacity 1 with zero transitions; with the original script it starts at opacity 0 / translateY(24px), transitions through intermediate values, and ends at opacity 1 / no transform. Reduced-motion mode remains immediately visible without transitions. Evidence: `/tmp/history-reveal-before.json`; post-restoration check passed in `/tmp/history-reveal-restored.json`: actual transitions restored, final content visible, and reduced-motion behavior intact.
- **Publication:** correction published successfully to the same private Sites URL on 2026-10-10. Sites-only snapshot `e7fdb3d7abbea10054ff9e417d8d43f348c873e9`; saved version `appgprj_6ac8aabaa9288191b0a11f5f5603ee1c~appgver_f76cc490988081919d56b2392a6c02e6`. Story HTML, stylesheet and script now all match GitHub HEAD exactly; GitHub remains uncommitted.

#### Verification and review notes

- Published successfully on 2026-10-10: <https://europe-seen-from-the-edge.ambercoin8.chatgpt.site>. Owner-private audience preserved. Sites-only snapshot: `8729e53a759374e8407f460dfe20f9df460c649b`; saved version: `appgprj_6ac8aabaa9288191b0a11f5f5603ee1c~appgver_544ec2993f64819184218f82ef911623`. GitHub remains at `97c3c3f` with the review changes uncommitted.

- Before/after full-page desktop and 390px mobile captures: `/tmp/history-polish-before/`, `/tmp/history-polish-after/`.
- Opening, representative middle and ending captures, plus detailed responsive results: `/tmp/history-review/`.
- Final verification passed on all seven pages at 320, 390, 768, 1024 and 1440px widths (35 page/viewport combinations): zero horizontal or text overflow, zero browser errors or failed requests, zero missing images/background assets, all local destinations and fragments valid. Mobile menu open/Escape/focus, expandable sources, and navigation without JavaScript passed. `node --check` for both scripts and `git diff --check` passed. The Story HTML and stylesheet have no diff.
- Existing prose contains editorial issues beyond this visual pass: Manuc's Bucharest passages refer to Târgu Cucu and then to the size of Iași's Jewish community without clearly switching cities. Several French passages also expand on the English rather than simply echo it. These need a separately sourced editorial review; this pass does not claim to fact-check or rewrite the historical narrative.

#### Desktop review handoff — 2026-10-10

The user requested: “Can you commit this to a separate branch which I can check on my desktop at home?” This supersedes the earlier no-commit restriction for the review branch only. The branch contains the published polish, the exact original Story HTML/CSS/script, and this audit. GitHub `master` remains at the original base.

On the home desktop, from this repository:

```sh
git fetch origin
git switch --track origin/codex/site-polish-review
python3 -m http.server 4173 --directory dist
```

Open <http://localhost:4173/>. If the branch already exists locally, switch to it and pull with `--ff-only`.

### R-016 — Remove the emoji arrows and enable companion reveals

**Status:** implemented; awaiting user review
**Priority:** high
**Area:** interaction, opening
**Review:** “1/ wtf is that icon there?!?? 2/ I don’t see the animation anywhere else except on the story page. Honestly, your work is really bad !” The supplied iPhone screenshot shows the landing chapter arrows rendered as blue emoji.
**Acceptance:** No diagonal arrow icons beside the chapter links. Actual fade-and-rise transitions while scrolling on the landing, Manuc, Architecture, Art, Annexes and Routes, using The Story's motion. Preserve The Story's original HTML, stylesheet and script. Reduced-motion and JavaScript-disabled readers can see all content.
**Resolution:** Removed the generated arrow and its reserved grid column at every breakpoint. Added the existing deferred `script.js` to the five companion pages that did not load it, and authored 77 reveal groups there. Enabled the annexes' existing 19 groups by removing the CSS rule that suppressed their animation. Shared companion CSS uses the Story's exact 24px movement, .82s opacity and .9s transform transitions; the unchanged observer supplies its original threshold and one-time behavior. English/French pairs remain together, heroes remain immediately visible, keyboard-focused content is visible, and reduced-motion content is static. The Story's three original files are unchanged from `master`.

The earlier R-015 entries record the first pass and its limitations: static companion content was not a completed implementation of the requested polish. This correction supersedes the description of annex content as deliberately static and the decision to add arrows.

**Verification:** Passed Chromium scrolling checks on all seven pages at 390×844 and 1440×900: an offscreen group starts at opacity 0 / translateY(24px), emits opacity and transform transition events, passes through an intermediate opacity, and ends at opacity 1 / no transform. Incremental traversal leaves every reveal visible (96 companion groups plus the Story's 44), with no nested reveals, horizontal overflow, missing images/backgrounds, failed requests or JavaScript errors. All seven pages also passed reduced-motion and JavaScript-disabled visibility checks. Mobile menu/Escape behavior and absent chapter pseudo-element arrows were checked. Inspected mobile chapter links and mobile/desktop reading screenshots in `/tmp/history-r16/`; detailed evidence: `/tmp/history-r16/verification.json`. These are Chromium checks, not an on-device iPhone/Safari test. `node --check` for both scripts, `git diff --check`, and an exact comparison of the three Story files against `master` passed.
**Publication:** Successfully deployed on 2026-10-10 to <https://europe-seen-from-the-edge.ambercoin8.chatgpt.site>, preserving its owner-private audience. Sites snapshot `1f21e3f9d42b215f5d2b3eb182ed5256210fb437`; saved version `appgprj_6ac8aabaa9288191b0a11f5f5603ee1c~appgver_e9600e3de10081918956b44fe3f250e6`. The staged `dist/` matched this checkout exactly before deployment.
**Commit:** Follow-up to `104c29e` on `codex/site-polish-review`; no merge into `master`.

## Decision Log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-10-10 | Apply The Story's reveal behavior to all six companion pages; remove landing link arrows. | User reported that the arrows rendered as unwanted emoji on iPhone and that the companion pages still lacked animations. |
| 2026-10-10 | Commit and push the review edition to `codex/site-polish-review`, leaving `master` unchanged. | User explicitly requested a separate branch to inspect on the home desktop. This supersedes the earlier no-GitHub-commit restriction for that branch only. |
| 2026-10-10 | Use The Story as the visual reference; apply a common editorial stylesheet only to its six companion pages. | Improve spacing, type, images and navigation while preserving the approved reference composition. |
| 2026-10-10 | Keep the GitHub checkout uncommitted; publish only through an isolated Sites source snapshot. | User requested in-depth review before any GitHub commit and explicitly approved the snapshot required for Sites publication. |
| 2026-10-09 | Preserve `pdf-baseline-v1` as the approved foundation. | It is the strongest version of the framing and visual language so far. |
| 2026-10-09 | Keep the French “language for freedom” idea as the single narrative spine. | Other cultural threads should enrich, not diffuse, the story. |
| 2026-10-09 | Put deeper material in annexes behind one end-of-story doorway. | The main experience must remain short, linear, and emotional. |
| 2026-10-09 | Remove overt “Make Europe Great” rhetoric. | European confidence should emerge subtly from the story. |
| 2026-10-09 | Make the contemporary opening a standalone landing page with destination links. | The root should establish the structure; “The Long Way from Paris” must remain the checkpointed baseline in its own untouched destination. |
| 2026-10-09 | Revise the historical hero at the reviewer’s request. | The new wording foregrounds the French Revolution as the source of a political possibility while retaining Romanian agency. |
| 2026-10-09 | Keep a separate English-only Markdown editing copy of the historical story. | It gives the author a simple, round-trip-friendly way to revise prose without touching the page structure or bilingual presentation. |
| 2026-10-09 | Make the Art and Architecture routes into distinct long-form chapters. | The material needs enough room for its sources, historical texture and different French/German threads to become legible without overloading the main story. |
| 2026-10-09 | Give every page the same fixed navigation bar rather than hiding destinations behind one doorway. | Five unrelated nav patterns existed and the story page had none. A bar also makes orphan pages reachable, which supersedes the earlier "behind one end-of-story doorway" decision; the doorway on the landing remains as a signpost, not the only route. |
| 2026-10-09 | Standardise French on two classes with one scale each, instead of one class per page. | Seven competing classes spanned 0.16–1.00 of their English line, so French looked heavier on some pages and like a footnote on others. |
| 2026-10-09 | Treat the French essay, not the English page, as the source of truth for French. | The site is an English rendering of a French original; translating back from English invents French the author never wrote. |

## Resume Protocol

At the start of a new conversation, ask the agent to:

1. Read `AGENTS.md` and this file completely.
2. For the pending R-015/R-016 desktop review, use `codex/site-polish-review`; otherwise the normal working branch is `master`. Understand the working tree before editing. (`codex/pdf-baseline` is the frozen approved-baseline branch and is far behind — do not switch to it to continue work.)
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
