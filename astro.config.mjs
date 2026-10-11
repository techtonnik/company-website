import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import basePath from './integrations/base-path.mjs';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow; locally the site runs at the root.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.techtonnik.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), basePath()],
  // Retired service pages; their old URLs point to the services overview.
  redirects: {
    '/services/low-code-no-code': '/services',
    '/services/e-commerce': '/services',
    '/services/web-development': '/services',
    '/services/desktop-development': '/services',
  },
});
