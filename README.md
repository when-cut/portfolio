# Venkat Pallantla — Portfolio Website

Responsive, single-page developer portfolio built with HTML, CSS and JavaScript. No build tools required.

## Run locally

Open `index.html` in a browser, or serve it locally for best results:

```bash
cd venkat-portfolio
python3 -m http.server 8080
```

Visit http://localhost:8080.

## Customize before publishing

1. Edit `script.js` and fill in `portfolioConfig.email` and `portfolioConfig.linkedin`. The email button remains disabled and LinkedIn link remains inactive until configured.
2. Edit name, summary, descriptions, technologies and availability wording in `index.html` to reflect your final resume.
3. Add a vetted PDF resume, if desired, and link to it from the navigation or hero.
4. The CommerceFlow card describes a personal project in progress; add a live demo/repository URL only after deployment.
5. The site intentionally does not expose proprietary employer source code or make up performance statistics.

## Publish

**GitHub Pages:** Push these files to a repository, then enable Pages in repository Settings → Pages, with the root directory as publishing source.

**Azure Static Web Apps:** Create a Static Web App, connect the GitHub repository, set app location to `/`, leave API location blank and output location blank. No build command needed.

**Netlify:** Drag the entire folder to Netlify Drop, or connect the repository with publish directory `.`.

## Files

- `index.html` — site content and accessible sections
- `styles.css` — responsive visual design and animations
- `script.js` — mobile navigation, reveal animations and configurable contact actions

External Google Fonts are optional; system fallback fonts are configured.
