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

## Contact

The contact page is email-only (office@techtonnik.com): a mailto button, a copy-address
button, and shortcuts that open an email with the subject pre-filled. There is no form.

## Mockups

Device mockups on the home and partners pages use live-site screenshots in `public/mockups/`.
Refresh them with `npm run mockups` (or `npm run mockups -- <name>`); sites are listed in
`scripts/capture-mockups.mjs`.

## Deployment

Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`,
served at https://www.techtonnik.com (custom domain set in the repo's Pages settings, with
`public/CNAME` kept in sync; DNS is managed in Namecheap).

To serve the site from a subpath instead (e.g. `https://<org>.github.io/<repo>/`), set
`SITE_URL` and `BASE_PATH` in the workflow; `integrations/base-path.mjs` then prefixes
root-relative links in the build output, so source code keeps plain `/path` links.
