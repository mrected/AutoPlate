# React migration plan: fresh start from master

Updated September 17, 2026 following the decision to restart from local `master`. Branch preparation and planning only; no application conversion performed.

## Scope and assumptions

Build a fresh React implementation of the ten customer-facing pages while preserving their current design, content, URLs, anchors, downloads, and interactions. Start `react-migration` at local `master` commit `ed138c69`, which already contains the August 23 product updates. Keep the previous attempt as `archive/migrate-to-react-2026-09-17` for reference and recovery; do not merge or cherry-pick its migration commits into the new implementation.

The pages are `index.html`, `screenPrinted.html`, `digital.html`, `polyCard.html`, `mcycle.html`, `rlFrames.html`, `cfFrames.html`, `art.html`, `templates.html`, and `privacyPolicy.html`.

Treat `temp-frame.html`, `temp.html`, and `new-layout.html` as reference layouts. The inherited `memory-bank/activeContext.md` and `progress.md` describe them as experiments. Keep them available during implementation, but exclude them from the production entry list unless their publication is requested.

Assume static hosting at the domain root. Confirm the hosting location and deployment process before release. This plan does not include a redesign, backend, checkout, or replacement analytics configuration.

## Branch baseline

All branch comparisons use locally available refs; the remote was not fetched.

| Ref | Commit | Relationship |
| --- | --- | --- |
| `react-migration` | `ed138c69` | Fresh working branch, starting at local master |
| `archive/migrate-to-react-2026-09-17` | `3b13a585` | Previous migration preserved, including its unpushed commit |
| `origin/migrate-to-react` | `8e664f01` | Does not include the latest local migration commit |
| `origin/master` / common base | `d5ea66da` | June 4 price update |
| local `master` | `ed138c69` | August 23 price/content update and six memory-bank documents; unchanged |

The initial application working tree was clean; this plan was the only untracked project file before switching branches. No applicable `AGENTS.md` was found in the project or its ancestors. Remote branches are unchanged.

The fresh baseline is the static HTML site. It includes the newer prices, original shared JavaScript, and complete product markup. There is no root React/Vite application or package configuration on master. Its abandoned `auto-plate/node_modules` tree is inherited repository clutter to address separately.

## Findings from the archived attempt

The following paths and build results refer to archived commit `3b13a585`, not the new working branch. They explain the restart decision and define regressions to avoid.

- `index.html:30,142` mounts `src/main.jsx`. That entry renders both `Header` and `Nav` (`src/main.jsx:10`), which each contain a fixed navbar with the same collapse ID. Only `Nav` contains the large home-page logo and its scroll behavior. Home-page content and footer remain in HTML.
- `screenPrinted.html:96,113` mounts `ProductPage.jsx` directly, retaining a legacy navbar and footer. `ProductPage.jsx:135` creates its own root instead of exporting a reusable page component.
- The other customer-facing pages remain legacy HTML. `PriceChart.jsx` is shared only within the screen-printed page. `FCDPriceData.json` is not wired to a page.
- Legacy page families include the home carousel/product links, two-section screen-printed and digital pages, single-section PolyCard and motorcycle pages, frame pages with standard-style image cards, art requirements/color swatches, template downloads, and privacy content. `temp-frame.html:99` is a raised-letter frame experiment; it is not a React entry. Frame cards and template previews need to survive the conversion alongside their pricing tables.
- `SPPriceData.json:19` repeats `2.95` at all six quantities for item `075`. Local master has `3.28, 2.46, 2.08, 1.96, 1.89, 1.83`. The JSON also labels `.023` as Medium Weight instead of Light Weight. Its aluminum caption describes poly plates.
- `FCDPriceData.json` retains screen-printed naming, a `6R` badge despite five quantity columns, and screen-printed aluminum values. The legacy digital page has digital aluminum item `024D` and a `5R` chart. Both data files require a full comparison, not just the application of August's diff.
- `ProductPage.jsx:35,103` retains 5–7 working days; local master specifies 7–10. Master also updates other prices, frame surcharges and mold charges, replaces frame quantity 3000 with 5000, and removes frame mold-charge promotions.
- A read-only three-way merge simulation reports a conflict in `screenPrinted.html`: React replaced the section in which master changed prices and lead times. The other five product HTML updates merge mechanically, but still require content verification.
- `public/` is empty. Vite has no explicit multi-page inputs. A baseline production build passed with Vite 8.0.16 and Node 26.2.0, but emitted only `index.html` and bundled assets. Product pages, catalogs, templates, `js/scripts.js`, and the literal JSX logo paths were absent from that output. Vite warned that the legacy script could not be bundled. Build success therefore does not establish deployability.
- There are no test or lint scripts. `node_modules` is ignored but still contains 506 tracked files. The old master tree includes 73,824 tracked dependency files under the dependency directories; keep that dependency history out of functional reviews.

## Implementation sequence

1. **Establish the clean baseline.** Start from `ed138c69` on `react-migration`; preserve the archived attempt without importing its implementation. Capture the ten baseline pages, their visual behavior, and reviewed pricing/content fixtures directly from master's HTML. Keep fixtures independent of the new data files so migration errors cannot become the test expectations. Refresh remote refs and review any newer content changes before implementation advances. Update the inherited memory-bank descriptions as the new architecture takes shape.

2. **Bootstrap a complete build.** Create a new root package manifest, lockfile, React/Vite configuration, and development/build/preview scripts. Use a supported Node version and record it. Configure explicit HTML inputs for all ten public pages; Vite 8 supports `build.rolldownOptions.input`. Keep real `.html` outputs, normal links, and direct-page refresh support. Vite supports multiple HTML entry points; see its [production build guide](https://vite.dev/guide/build.html#multi-page-app). Put assets requiring stable public URLs in `public/images`, `public/catalogs`, and `public/templates`; reconcile references in HTML, CSS, and JSX and retain exact filename casing. Preserve catalog/template paths using Vite's [public directory behavior](https://vite.dev/guide/assets.html#the-public-directory). Temporarily package legacy scripts for unconverted pages. Do not use the repository root as the public directory. Separately untrack the abandoned dependency tree, retain the new lockfile, and ignore dependencies/build output. Verify a clean dependency installation and full build from a disposable checkout before converting page content.

3. **Create one shared React layout.** Give each converted HTML entry a page identifier and mount through a new `src/main.jsx`, with a small page registry selecting the component. Export page components rather than creating roots inside them. Build one navigation component with explicit home-page and inner-page logo variants. Add a shared footer and shared navigation/catalog configuration. Reuse the baseline CSS appearance without copying the archived attempt's global text overrides. First complete the home-page shell and content, then the screen-printed page. Keep page metadata and analytics initialization in the HTML entry layer without duplicate initialization.

4. **Build the product model and migrate all six product pages.** Create a `ProductPage` component accepting product content with sections for descriptions, production/charge information, template links, images, and price charts. Keep rich explanatory content in React components where that is clearer than encoding HTML in JSON. Define chart quantities, caption, badge, material/frame label, and rows per section. Give rows stable identifiers and define blank/missing price behavior; reject malformed values instead of rendering `NaN` or silently inventing zero prices. Extract fresh screen-printed and digital data from the reviewed master baseline, then add PolyCard, motorcycle, raised-letter, and chrome-faced data. Do not reuse the archived JSON. Preserve different quantity counts, additional-color rows, material variants, and frame-specific notes. Migrate in that order, verifying each page before using it as the pattern for the next.

5. **Migrate support pages and finish interactions.** Convert art requirements, templates, and privacy content using the shared layout. Preserve `art.html#stockColors` and the template IDs `polyplate`, `aluplate`, `pcardplate`, `mcycleplate`, `231fr`, `233fr`, `235fr`, `245fr`, `248fr`, `241fr`, and `251fr`. Retain the Dropbox file-request link in `art.html:139` and its new-tab behavior. Move navbar dropdown/collapse, art dialogs, and the home carousel to React-owned behavior as their pages convert, retaining Bootstrap CSS for visual continuity. Include keyboard navigation, Escape handling, accurate expanded states, dialog focus management, and carousel controls. Keep legacy scripts only on pages that still need them during the transition; remove jQuery, Bootstrap JS, and `copyrightDate()` calls once their final consumer is converted. Preserve contact links and the computed footer year.

6. **Verify the release artifact and prepare the merge.** Run the checks below on a clean installation and production output. Update development/build/deployment instructions and memory-bank descriptions. Separate dependency cleanup, build setup, shared layout, and page conversion into reviewable commits. Recheck master changes before the final merge, rerunning affected content checks if it moved. Prepare a preview and rollback artifact from the previous deployable site; confirm deployment details before publishing.

## Migration risks and controls

| Risk | Control |
| --- | --- |
| Reusing archived migration content reintroduces old or incorrect pricing | Extract data from master and compare every chart cell and product note against independent baseline fixtures |
| Fresh components omit business details while extracting repeated layouts | Compare all six product pages, including setup/mold/art charges, quantities, descriptions, badges, lead times, and removed promotions |
| Dev server masks missing production pages/assets | Test the built directory with a plain static server and no SPA fallback; assert real output files and download contents |
| Shared layout changes regress home vs inner-page behavior | Verify both logo variants, one navbar per page, unique IDs, scroll/resize, mobile menus, and no duplicate initialization |
| Old and new code mutate the same DOM | Transfer interaction ownership page by page and remove each obsolete initializer with its final consumer |
| Dependency churn obscures source changes | Review cleanup separately; do not reintroduce the abandoned dependency tree or rewrite repository history |

## Verification and completion criteria

- **Content:** Compare all price cells and quantity headers against fixtures derived from master, including zero/blank handling, two-decimal display, additional-color rows, badges, and all changed business notes. Include regression coverage for item `075`, digital aluminum `024D`, `.023` labeling, 7–10 day lead times, and frame 5000-unit pricing.
- **Build:** A fresh lockfile installation builds all ten HTML pages. No local asset or script references point to missing files or raw JSX. Required downloads retain their filenames and file contents.
- **Navigation and downloads:** Open every page directly and refresh it on a plain static server. Follow every internal navigation link, product template anchor, art anchor, catalog/template download, privacy link, and contact link. Verify the Dropbox link destination without uploading or submitting anything. Check response content as well as status so an HTML fallback cannot pass for a PDF.
- **Browser behavior:** Verify at desktop, tablet, and narrow mobile widths. Exercise dropdowns, collapsed navigation, home carousel, art dialogs, logo scroll/resize, and horizontal price-table scrolling. Confirm readable contrast, usable keyboard focus, matching ARIA states, and no duplicate IDs, React warnings, or application errors. Check image loading and exact path casing for Linux hosting.
- **Visual parity:** Compare all distinct page families with the master baseline; inspect the home page, two-section plate pages, single-section plate pages, frame pages, art color swatches, templates, and privacy content. Explain intentional corrections separately from layout changes.
- **Review:** The diff retains all master business updates and no accidental asset losses. The preview is complete and rollback instructions are documented before production release.

Planning validation completed on the archived attempt: source/branch inspection, read-only merge simulation, and production build/output inspection. The fresh branch begins with master's static site and has no new React build to validate yet. Browser behavior, visual parity, deployment configuration, and remote-ref freshness remain to be verified during implementation.
