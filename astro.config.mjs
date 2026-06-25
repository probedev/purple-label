// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://purplelabelmd.com',
  // Canonical policy: no trailing slash. Generated <link rel="canonical"> follows this.
  // Apex-vs-www + redirect rules are a deploy-time decision (see README "Before launch").
  trailingSlash: 'never',
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
