import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.techtonnik.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Retired service pages (the site now focuses on software development).
  redirects: {
    '/services/low-code-no-code': '/services',
    '/services/e-commerce': '/services',
  },
});
