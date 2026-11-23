import { useEffect, useState, type PropsWithChildren } from 'react'
import { defineSetupReact } from '@histoire/plugin-react'
import { MemoryRouter } from 'react-router'
import './styles/index.css'

type Theme = 'light' | 'dark'

function ThemeWrapper({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <MemoryRouter>
      <button
        type="button"
        onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        style={{
          position: 'fixed',
          top: 8,
          right: 8,
          zIndex: 9999,
          border: '1px solid var(--color-hairline)',
          borderRadius: 'var(--radius-pill)',
          padding: '6px 12px',
          background: 'var(--surface-solid)',
          color: 'var(--color-text)',
          cursor: 'pointer',
          font: 'inherit',
        }}
      >
        {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
      </button>
      {children}
    </MemoryRouter>
  )
}

export const setupReact = defineSetupReact(() => ThemeWrapper)
