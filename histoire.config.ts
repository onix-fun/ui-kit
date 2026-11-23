import { HstReact } from '@histoire/plugin-react'
import { defineConfig } from 'histoire'

// GitHub Pages serves project sites from /<repo>/. Local builds stay at root.
const base = process.env.HISTOIRE_BASE_PATH ?? '/'

export default defineConfig({
  vite: { base },
  plugins: [HstReact()],
  setupFile: '/src/histoire.setup.tsx',
  // Keeps the generated global setup module explicit; the React adapter imports
  // these hooks even when no plugin contributed inline setup code.
  setupCode: [],
  theme: {
    title: 'ONIX UI Kit',
    defaultColorScheme: 'light',
    hideColorSchemeSwitch: true,
  },
  responsivePresets: [
    { label: 'Mobile', width: 375, height: 812 },
    { label: 'Tablet', width: 768, height: 1024 },
    { label: 'Desktop', width: 1440, height: null },
  ],
})
