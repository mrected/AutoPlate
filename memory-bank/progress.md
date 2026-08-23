# Progress: AutoPlate.net

## What Works
- All product pages load and display correctly with pricing tables
- Responsive layout works across desktop, tablet, and mobile viewports
- Navigation with dropdown menus functional on all pages
- Navbar logo scroll animation functional
- Copyright year auto-updates via JavaScript
- PDF catalog download link functional
- PDF template downloads available
- Google Analytics tracking active
- All images load correctly
- Privacy policy page present

## What's Left to Build
- **Nothing actively planned** — Site is in maintenance-only mode

### Known Incomplete / Experimental Work
- `new-layout.html` — An alternate product page layout for screen printed plates (grid-based redesign). Not deployed to production. Missing footer scripts.
- `temp.html` / `temp-frame.html` — Test/experimental pages
- `style-new.css` — Empty file, presumably intended for a styling refresh
- `auto-plate/` — Abandoned React/CRA project directory (only node_modules, no source code)
- `public/` — Empty directory, possibly intended for CRA build output

## Known Issues
1. **Navbar duplication**: All pages contain copy-pasted navbar/footer. Any nav change requires editing ~10 files.
2. **Duplicate jQuery load**: `index.html` loads jQuery twice (lines 18 and 218)
3. **Hardcoded pricing**: Price changes require manual HTML editing across multiple pages — error-prone
4. **No templating**: No way to reuse shared layout components; DRY violations throughout
5. **Abandoned React migration**: `auto-plate/` node_modules exist but no source — unclear if this was started intentionally
6. **Legacy dependencies**: Bootstrap 3.3.7 and jQuery 1.12.4 are outdated
7. **Empty public/ directory**: Unclear purpose, possibly leftover from abandoned CRA setup
8. **Certificate config file**: Contains `.htaccess` and `index.asp` from legacy hosting — may not match current deployment

## Current Status
- **Phase**: Stable maintenance
- **Last significant code change**: 2026-06-04 (price updates)
- **Active development**: No — only periodic price/catalog updates
- **Deployment status**: Assumed live at autoplate.net (domain referenced in title tags)

## Evolution of Project Decisions
- **Original (pre-2000)**: Started as ASP-based site (evidenced by `index.asp` and `.htaccess`)
- **~2015-2016**: Migrated to static Bootstrap 3 HTML (current architecture)
- **~2019-2020**: `auto-plate/` directory suggests an attempted React rewrite was started but abandoned
- **2020-2026**: Continued as static HTML with periodic content updates
- **2026**: Most recent pricing and catalog updates