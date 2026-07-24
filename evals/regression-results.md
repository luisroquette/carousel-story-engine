# Regression results

Date: 2026-07-16

Evaluation method: fresh-context forward tests followed by manual scoring with [`quality-rubric.md`](quality-rubric.md).

| Case | Final average | Critical failures | Retest status |
|---|---:|---:|---|
| Reported regulation | 9.1 | 0 | Passed after count and chronology correction |
| Observed e-commerce case | 9.3 | 0 | Passed after provenance correction |
| Commercial thesis | 9.2 | 0 | Passed after rhythm, asset, and CTA-path corrections |
| Weak-draft repair | 9.1 | 0 | Passed on first regression run |
| Compact technical changelog | 9.2 | 0 | Passed on first regression run |
| Source-led cultural story | 9.0 | 0 | Passed after unit and causality correction |

All six cases met the release standard: every dimension at least 8, average at least 9, and no critical failure. The reported, observed, thesis, and cultural cases were rerun in fresh contexts after corrective revisions.

These scores measure editorial compliance with the repository rubric. They do not predict reach, engagement, leads, or sales.

## Contract tests added after red-team review

| Contract | Result | Evidence |
|---|---|---|
| Public citations | Passed after correction | Compact markers remained adjacent to material claims; full URLs moved to caption/end matter. |
| Structured JSON | Passed | Evidence mode, claim classes, source IDs, visual components, asset origin, fallbacks, dependencies, and CTA path were preserved. |
| LinkedIn preset | Passed | The generated brief used consistent 1080 × 1350 pages and a flattened-PDF delivery plan. |
| Citation density and LinkedIn convention | Passed after correction | Public markers stayed beside claims, full sources moved to the caption, the CTA remained legible, and no hashtags were added. |
| Production-brief completeness | Passed | Every slide declared role, transition, component, composition, asset, public citation, and source note, including explicit `none` values. |
| Render acceptance | Passed after correction | Five 1080 × 1350 PNGs; fonts loaded; zero overflow; contact-sheet and original-resolution inspection completed. |

The render test initially exposed a 6 px title overflow, a swipe instruction, and insufficient CTA-badge contrast. The final pass removed the swipe copy, corrected overflow, and reached a 5.21:1 badge contrast ratio. Final render QA average: 9.5.
