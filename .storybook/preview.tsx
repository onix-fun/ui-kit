import type { Decorator, Preview } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import '../src/styles/index.css'

const withProviders: Decorator = (Story, context) => {
  const theme = (context.globals.theme as 'light' | 'dark' | undefined) ?? 'light'
  document.documentElement.dataset.theme = theme
  document.documentElement.style.background = 'var(--surface-solid)'
  document.body.style.background = 'var(--surface-solid)'
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Цветовая тема ONIX',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [withProviders],
  parameters: {
    layout: 'padded',
    backgrounds: { disable: true },
    controls: { expanded: true },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' }, type: 'mobile' },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' }, type: 'tablet' },
        desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' }, type: 'desktop' },
      },
      options: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' } },
      },
    },
  },
}

export default preview
