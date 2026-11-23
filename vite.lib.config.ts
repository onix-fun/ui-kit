import path from 'node:path'
import { defineConfig, mergeConfig } from 'vite'
import baseConfig from './vite.config.ts'

const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react-router',
  'styled-components',
  '@base-ui/react/merge-props',
  '@base-ui/react/use-render',
  '@base-ui/react/button',
  '@base-ui/react/input',
  '@base-ui/react/separator',
  'class-variance-authority',
  'clsx',
  'tailwind-merge',
  'lucide-react',
]

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      cssCodeSplit: false,
      assetsInlineLimit: 0,
      assetsDir: 'assets',
      lib: {
        entry: path.resolve(import.meta.dirname, 'src/index.ts'),
        formats: ['es'],
        fileName: 'index',
        cssFileName: 'styles',
      },
      rollupOptions: {
        external,
      },
    },
  }),
)
