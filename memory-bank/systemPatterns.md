# System Patterns: AutoPlate.net

## System Architecture
```
AutoPlate/                          (repo root)
├── index.html                      (homepage)
├── screenPrinted.html              (product page)
├── digital.html                    (product page)
├── polyCard.html                   (product page)
├── mcycle.html                     (product page)
├── rlFrames.html                   (product page)
├── cfFrames.html                   (product page)
├── art.html                        (art requirements)
├── templates.html                  (template downloads)
├── privacyPolicy.html              (privacy policy)
├── new-layout.html                 (WIP alternate layout for screen printed)
├── temp.html / temp-frame.html     (WIP/test pages)
├── css/
│   ├── style.css                   (main layout + product page CSS Grid)
│   ├── navLogo.css                 (navbar styling + logo animation)
│   ├── style_color.css             (color swatch display styles)
│   └── style-new.css               (empty — possibly for redesign)
├── js/
│   └── scripts.js                  (navbar scroll animation, copyright date)
├── images/                         (product photos, logos, favicon)
├── templates/                      (PDF design templates for customers)
├── catalogs/                       (PDF product catalogs)
│   └── archived/                   (older catalog versions)
├── bill_files/                     (price change notification PDFs)
├── certificate config file/        (legacy .htaccess & index.asp)
├── auto-plate/                     (abandoned CRA project — node_modules only)
└── public/                         (empty)
```

## Key Technical Decisions
1. **Static HTML only** — No build system, no CMS, no backend. Every page is a complete standalone HTML file.
2. **Bootstrap 3.3.7** — Chosen for responsive grid; loaded from CDN along with jQuery 1.12.4
3. **CSS Grid for product layouts** — Product pages use `.info-grid` (CSS Grid) to position product info, pricing info, and product image responsively
4. **Hardcoded pricing** — Prices are directly in HTML `<table>` elements. Updates require editing HTML directly.
5. **CDN-hosted dependencies** — Bootstrap, jQuery, Font Awesome all loaded from CDNs (no local copies)

## Design Patterns in Use

### Page Template Pattern
Every page follows the same structure:
```
<!DOCTYPE html>
<head> — meta tags, CDN stylesheets, local CSS
<body>
  .container-fluid#outerDiv
    nav.navbar (fixed-top, with dropdown menus)
    .container.mainContent (white background, yellow borders)
      .row → page header
      .row/.info-grid → content
    .container-fluid.footerDiv (copyright + privacy link)
  scripts (jQuery CDN, scripts.js, Google Analytics)
```

### Product Page Grid Pattern
Product pages use a 2-column CSS Grid:
- **Left column**: info-div (specifications) + pricing-div (notes)
- **Right column**: image-div (product photo)
- **Full-width bottom**: table-div (responsive pricing table)

### Navbar Pattern
- Fixed-top Bootstrap navbar with dropdown menus (Products, Art & Templates, Download Catalogs)
- Logo animation: small logo shrinks/scales during scroll via `scripts.js`
- Organization info bar below navbar with ASI/SAGE/UPIC codes

## Component Relationships
- All pages share identical navbar and footer — but they are copy-pasted, not templated
- No shared/included components — each HTML file is self-contained
- `scripts.js` provides two functions: navbar scroll behavior and copyright year auto-update

## Critical Implementation Paths
- **Updating prices**: Edit HTML tables directly in product page files
- **Updating catalog**: Replace PDF in `catalogs/`, update download links in nav
- **Adding product**: Create new HTML file following product page pattern, add link to navbar on all pages