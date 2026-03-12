// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://RodsMartins.github.io',
  base: '/personal/',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
});
