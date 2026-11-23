import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

/**
 * Vite always inlines assets in library mode. Building the stylesheet as a
 * normal CSS entry keeps Geist in separate woff2 files, matching the original
 * frontend output and avoiding a large base64 payload in `styles.css`.
 */
export default defineConfig({
  // Relative asset URLs let a consumer's Vite base path rewrite them.
  base: './',
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        styles: path.resolve(import.meta.dirname, 'src/styles/index.css'),
      },
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'styles.css' : 'assets/[name]-[hash][extname]',
      },
    },
  },
})
