# Technical Context: AutoPlate.net

## Technologies Used

### Core
- **HTML5** — All pages are static HTML5 documents
- **CSS3** — Custom stylesheets with CSS Grid layout, flexbox, media queries
- **JavaScript (ES5)** — Vanilla JS with jQuery for DOM manipulation and scroll animations

### Frameworks & Libraries (CDN-hosted)
- **Bootstrap 3.3.7** — Responsive grid system, navbar, modals, tables
- **jQuery 1.12.4** — DOM manipulation, scroll event handling
- **Font Awesome 4.7.0** — Icon library
- **Google Fonts** — Lato (body), Patua One (headings), Racing Sans One (banner text)

### Analytics
- **Google Analytics** — UA-178033463-1 (gtag.js)

### PDF Templates
- Adobe Illustrator/Photoshop source files (not tracked in git — `.psd`, `.ai` in `.gitignore`)
- Exported PDF templates for customer download in `templates/`

## Development Setup
- **No build system** — Edit HTML/CSS/JS files directly
- **No package manager** — The `auto-plate/node_modules/` was from an abandoned CRA attempt
- **Local development**: Open `.html` files directly in browser, or use any static file server
- **Git**: Standard Git workflow for version control

## Technical Constraints
- **Static only** — No server-side processing, no API, no database
- **Copy-paste maintenance** — Navbar, footer, and shared markup must be manually kept in sync across all pages
- **Hardcoded data** — All product info, pricing, and content is in HTML. No data/configuration separation.
- **CDN dependency** — Bootstrap, jQuery, Font Awesome loaded from external CDNs (requires internet connection)
- **Legacy Bootstrap 3** — Using outdated Bootstrap version; no migration path established
- **No automated testing** — No test framework or test files exist

## Dependencies
| Dependency | Version | Source |
|---|---|---|
| Bootstrap CSS | 3.3.7 | MaxCDN |
| Bootstrap JS | 3.3.7 | MaxCDN |
| jQuery | 1.12.4 | Google AJAX CDN |
| Font Awesome | 4.7.0 | MaxCDN |
| Google Fonts (Lato, Patua One, Racing Sans One) | — | Google Fonts CDN |

## Tool Usage Patterns
- **Local editing**: Any text editor
- **Git commits**: Direct commits to `master` branch (no branching strategy observed)
- **Hosting**: Previously hosted with ASP (`.htaccess`, `index.asp` in `certificate config file/`). Current hosting unknown — assumed static file hosting
- **Image editing**: Source files in Adobe formats (`.psd`, `.ai`) — not stored in repo