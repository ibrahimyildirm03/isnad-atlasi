// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GitHub Pages: site https://ibrahimyildirm03.github.io/isnad-atlasi/ adresinde yayımlanır.
// Sitedeki bütün bağlantılar yol() ile bu alt klasöre göre üretilir (src/lib/veri.ts).
export default defineConfig({
  site: 'https://ibrahimyildirm03.github.io',
  base: '/isnad-atlasi',
});
