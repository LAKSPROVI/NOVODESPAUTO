# Copilot Instructions for NOVODESPAUTO

## Project Overview
NOVODESPAUTO is a static website focused on legal services related to traffic violations (e.g., CNH suspension, cassation, Lei Seca, point transfers). The site is structured with individual HTML pages for each service, a shared CSS file, and minimal JavaScript for interactivity.

## Architecture & Key Files
- **HTML Pages**: Each service has a dedicated HTML file (e.g., `defesa-cnh-cassada.html`, `defesa-cnh-suspensa.html`, `defesa-lei-seca.html`, `transferencia-pontos.html`).
- **Shared Assets**:
  - CSS: `/assets/css/style.css` (site-wide styles)
  - JS: `/assets/js/script.js` (site-wide scripts)
  - Images: `/assets/images/` (see `README.md` for image specs)
- **SEO & Robots**: `robots.txt`, `sitemap.xml` for search engine indexing.
- **Configuration**: `CONFIG.md` (project-specific config, if present)

## Developer Workflows
- **No build system**: Directly edit HTML/CSS/JS files. No compilation or bundling required.
- **Preview**: Open `index.html` or any service page in a browser to view changes.
- **Image Management**: Follow `/assets/images/README.md` for image requirements and optimization.

## Project-Specific Conventions
- **Page Structure**: Each HTML file uses semantic tags (`<header>`, `<main>`, `<footer>`) and is self-contained.
- **Styling**: All styles are centralized in `assets/css/style.css`. Avoid inline styles and page-specific CSS files.
- **JavaScript**: All scripts go in `assets/js/script.js`. Keep JS minimal and unobtrusive.
- **Accessibility**: Use descriptive alt text for images and semantic HTML for better accessibility.
- **SEO**: Ensure each HTML page has a unique `<title>`, meta description, and relevant keywords.

## Integration Points
- **No external dependencies**: The site does not use frameworks or package managers.
- **Image Optimization**: Use WebP when possible, compress images, and implement lazy loading for non-critical images.

## Examples
- To add a new service page:
  1. Copy an existing HTML file (e.g., `defesa-cnh-cassada.html`).
  2. Update content, title, and meta tags.
  3. Link to shared CSS/JS assets.
- To update site-wide styles, edit `assets/css/style.css`.
- To add a new image, follow `/assets/images/README.md` guidelines.

## References
- Key files: `index.html`, `assets/css/style.css`, `assets/js/script.js`, `assets/images/README.md`
- For image specs and optimization, see `/assets/images/README.md`.

---
**Feedback Requested:**
Please review and suggest updates for any unclear or incomplete sections, or if you have additional project-specific conventions to document.
