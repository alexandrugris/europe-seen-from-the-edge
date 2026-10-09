# Europe, Seen from the Edge — Living Project Spec

This document is the continuity layer for the project. It records the product intent, accepted direction, open reviews, and the next unit of work. Read it before editing the site and update it after every meaningful review or implementation pass.

## Current Checkpoint

- Working branch: `codex/pdf-baseline`
- Approved visual/story baseline: tag `pdf-baseline-v1` (`1f0b9df`)
- Continuation brief commit: `5247e7e`
- Source: `dist/` (buildless HTML, CSS, and JavaScript)
- Live reference: <https://europe-seen-from-the-edge.ambercoin8.chatgpt.site/?revision=f46bc968>
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

1. **Contemporary opening:** an image-led sequence joining Kyiv, Tbilisi, and Romania's 2017 anti-corruption protests. Use minimal city/date labels and no explanatory wall of text.
2. **Pressure at the border:** maps showing Ottoman, Habsburg, and Russian pressure and why a bridge to Western Europe mattered.
3. **The Paris generation:** Romanian elites educated in Paris; revolutionary ideas crossing borders; participation in 1848; the story of taking a fragment of Louis-Philippe's throne.
4. **Ideas become institutions:** Napoleon III, union, the German dynasty, independence, and the strategic logic behind Western alliances.
5. **A culture made visible:** French influence on language, Bucharest as “Little Paris,” Haussmann-era urban aspiration, art, architecture, and civic life.
6. **The eastern recurrence:** territorial losses, Russification, forced migration, Bessarabia/Moldova, Transnistria, communism, and the return of imperial pressure—carefully sourced and precisely worded.
7. **Return to the present:** Europe as a living inheritance worth maintaining, expressed through the story rather than a slogan.

### Annexes

Reach all annexes through one quiet doorway at the end of the main story.

- **Hanul lui Manuc:** one place as a story of layered cultures, diplomacy, commerce, and survival.
- **Architecture:** Little Paris, the Romanian Athenaeum, German and Saxon Transylvania, and other regional layers.
- **Language:** inherited Latin versus later French/learned Latin, Slavic, Turkish, Hungarian, German, and other vocabulary. Explain why estimates vary by corpus and method.
- **Art and cultural life:** a visual gallery with concise captions and provenance.
- **The Paris generation:** portraits, education, correspondence, revolutionary episodes, and individual biographies.
- **Territory and pressure:** restrained maps of annexation, occupation, border changes, and forced demographic transformation.
- **Romania at the intersection:** present-day linguistic and cultural plurality, ending with a distinct identity strongly anchored in Europe.

## Active Milestone

**M1 — Add the contemporary opening without disturbing the approved baseline.**

Acceptance criteria:

- Opens with Kyiv, Tbilisi, and the 2017 Romanian protests.
- Uses strong archival/documentary imagery, one title, and only essential labels.
- Establishes the present-day stakes before moving into the existing story.
- Works at desktop and mobile widths, respects reduced motion, and includes image credits.
- Existing baseline sections remain intact unless a review below explicitly says otherwise.

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

## Decision Log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-10-09 | Preserve `pdf-baseline-v1` as the approved foundation. | It is the strongest version of the framing and visual language so far. |
| 2026-10-09 | Keep the French “language for freedom” idea as the single narrative spine. | Other cultural threads should enrich, not diffuse, the story. |
| 2026-10-09 | Put deeper material in annexes behind one end-of-story doorway. | The main experience must remain short, linear, and emotional. |
| 2026-10-09 | Remove overt “Make Europe Great” rhetoric. | European confidence should emerge subtly from the story. |

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
