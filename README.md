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
- `src/content/blog/` – blog posts as Markdown (images in `public/blog/`)
- `src/pages/` – routes; URLs match the old Wix site (`/case-studies`, `/post/<slug>`, `/services/<slug>`, …)
- `src/components/` – shared sections (hero, marquee, showcase cards, FAQ, CTA, …)
- `public/media/`, `public/video/` – images and hero videos pulled from the old site

## Contact form

Set `PUBLIC_FORM_ENDPOINT` at build time to a form backend (e.g. Formspree or Web3Forms)
that accepts `multipart/form-data` POSTs. Without it, the form opens the visitor's email
client addressed to office@techtonnik.com.
