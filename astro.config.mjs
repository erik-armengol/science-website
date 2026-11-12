import { defineConfig } from 'astro/config';

// Set SITE_URL and BASE_PATH when moving from GitHub Pages to a custom domain.
export default defineConfig({
  // site: process.env.SITE_URL || 'https://erik-armengol.github.io',
  // base: process.env.BASE_PATH ?? '/science-website',
  site: 'https://armengol.me',
});
