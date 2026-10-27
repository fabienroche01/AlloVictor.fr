# AlloVictor.fr

Repository: `fabienroche01/AlloVictor.fr`. Production branch: `main`.
Public site: https://allovictor.fr.

## Working rules

- Inspect the existing HTML, CSS and JavaScript before editing. This is a static portal; preserve its existing navigation and working features.
- Implement requested changes directly and keep changes scoped to the relevant project.
- Check desktop and narrow mobile layouts and exercise affected interactions before reporting completion. State any verification limit.
- Keep credentials out of source, output and commits.
- Commit work on a dedicated branch. Publish or merge to production only when the user has authorized that publication. Never describe an unpublished change as live.
- Give a brief result with validation performed and the real commit URL.

## Queen Yemuna priority

The catalogue lives in `yemuna.html` and contains 157 product references.

- Preserve correct individual catalogue photos. Replace only incorrect, generic or empty-container imagery.
- Each product reference must have its own appropriate image. Do not use a shared category image as the final product photo.
- New generated illustrations must be photorealistic, contain no Forever logo, and be identified as illustrations rather than authentic manufacturer packaging.
- Keep exact commercial names and accurate brand/manufacturer information. Never infer a formula, dosage, kit composition or therapeutic benefit from generated imagery.
- Do not change prices, internal IDs, references, checkout or cart behavior without explicit authorization.
- Individual images live in `assets/queen-yemuna/`; `manifest.json` records their reference and whether each is a catalogue photo or an illustration.
- Run `node scripts/check-queen-yemuna.mjs` and browser checks for search, category filtering and cart operations after catalogue changes.
