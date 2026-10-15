// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sincronizarTema } from './scripts/sync-theme.mjs';

function pluginSincronizarTema() {
  return {
    name: 'sincronizar-tema-plugin',
    buildStart() {
      sincronizarTema();
    },
    handleHotUpdate({ file }) {
      if (file.endsWith('site.json')) {
        sincronizarTema();
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://cileide-ferreira.amostra-site.workers.dev/',

  vite: {
    plugins: [
      pluginSincronizarTema(),
      tailwindcss()
    ]
  },

  integrations: [sitemap()]
});