# techtonnik.com

Static rebuild of the techtonnik website (migrated from Wix), built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Structure

- `src/data/` – all page copy and image references (home, case studies, products, partners, services)
- `src/pages/` – routes; URLs match the old Wix site (`/case-studies`, `/services/<slug>`, …)
- `src/components/` – shared sections (hero, marquee, showcase cards, FAQ, CTA, …)
- `public/media/`, `public/video/` – images and hero videos pulled from the old site

## Contact form

Submitting the form opens the visitor's email client with a pre-filled message to
office@techtonnik.com. No form backend is needed.
