# Active Context: AutoPlate.net

## Current Work Focus
The site is in **maintenance mode** — primarily receiving periodic price list and catalog updates. The most recent changes have been pricing adjustments and catalog updates for 2026.

## Recent Changes (from git log)
- **2026-06-04**: Price updates (latest commit `d5ea66d`)
- **2026-03-23**: Updated working time for both frame pages
- **2026-01-13**: Combined catalog into single file, updated links
- **2026-01-08**: Updated catalog links to 2026
- **2026-01-07**: Updated catalog to 2026 version
- **2025-05-06**: Updated carousel image
- **2025-05-01**: General 2025 updates
- **2024-2025**: Periodic price updates, logo updates, material updates

## Next Steps
- Continue periodic price updates as needed
- Update catalog when new versions are available
- No active feature development planned

## Active Decisions & Considerations
- The site remains static HTML — no build system, no CMS, no backend
- Pricing is hardcoded into HTML tables on each product page
- The `auto-plate/` subdirectory contains an abandoned React/Create-React-App project (only `node_modules`, no source code)
- `new-layout.html` and `temp*.html` are experimental/alternate page layouts not yet deployed

## Important Patterns & Preferences
- All pages share identical `<head>`, navbar, and footer sections
- CSS is split: `style.css` (main layout), `navLogo.css` (navbar), `style_color.css` (color swatches)
- `style-new.css` exists but appears empty/unused — possibly intended for a redesign
- Product pages use a CSS Grid layout (`.info-grid`) for responsive positioning of info, pricing, and image sections
- Google Analytics (UA-178033463-1) is embedded on all pages

## Learnings & Project Insights
- The site has been maintained since at least 2000 (copyright starts at 2000)
- The `certificate config file/` directory contains legacy `.htaccess` and `index.asp` files from a previous hosting setup
- The `.gitignore` ignores native design files (`.psd`, `.ai`, `.NEF`) — source artwork is not in the repo
- `bill_files/` contains recent price change notification PDFs used as reference for updates