import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.techtonnik.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Retired service pages; their old URLs point to the services overview.
  redirects: {
    '/services/low-code-no-code': '/services',
    '/services/e-commerce': '/services',
    '/services/web-development': '/services',
    '/services/desktop-development': '/services',
  },
});
