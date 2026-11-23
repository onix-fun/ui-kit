import type { Meta, StoryObj } from '@storybook/react-vite'
import { Home, Layers3, Sparkles } from 'lucide-react'
import { Stack } from '@/ui/layout'
import { Logo } from '@/ui/logo'
import { NavPanel, type Item, type NavPanelSizes, type NavPanelStyleValues } from '@/ui/navPanel'
import { OnixMark } from '@/ui/onix-mark'

const items: Item[] = [
  { id: 'home', title: 'Главная', to: '/', icon: Home },
  { id: 'catalog', title: 'Каталог', to: '/catalog', icon: Layers3 },
  { id: 'digital', title: 'Цифровое', to: '/digital', icon: Sparkles },
]

const sizes: NavPanelSizes = {
  itemSize: 48,
  itemLabelMax: 160,
  iconSize: 20,
  burgerSize: 48,
  burgerBarWidth: 20,
  capsulePadding: 4,
  capsuleGap: 4,
  gutter: 24,
}

const styles: NavPanelStyleValues = {
  radiusPill: 'var(--radius-pill)',
  radiusPanelStacked: 'var(--radius-panel)',
  blur: 'var(--header-panel-blur)',
  shadowPanel: 'var(--shadow-capsule)',
  stroke: 'var(--stroke-panel-gradient)',
  shadowItemHover: 'var(--shadow-sm)',
  shadowItemActive: 'var(--shadow-md)',
  surfaceItemHover: 'var(--surface-hover)',
  surfaceItemActive: 'var(--surface-hover)',
  focusColor: 'var(--color-focus)',
  easing: 'var(--ease-out)',
  durationCapsule: 'var(--duration-capsule)',
  durationBurger: 'var(--duration-fast)',
}

const meta = {
  title: 'Brand/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Mark: Story = {
  render: () => <OnixMark style={{ height: 96 }} />,
}

export const LogoStory: Story = {
  name: 'Logo',
  render: () => <Logo sizes={{ height: 32 }} />,
}

export const NavExpanded: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <NavPanel items={items} activeId="catalog" sizes={sizes} styles={styles} />
    </div>
  ),
}

export const NavCollapsed: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <NavPanel
        items={items}
        activeId="home"
        collapsed
        hoveredId="home"
        collapsedWidth={sizes.burgerSize + sizes.capsulePadding * 2}
        sizes={sizes}
        styles={styles}
      />
    </div>
  ),
}

export const NavStacked: Story = {
  render: () => (
    <div style={{ padding: 24, minHeight: 280, ['--header-top' as string]: '24px' }}>
      <Stack direction="row" justify="between">
        <Logo sizes={{ height: 28 }} />
        <NavPanel
          items={items}
          activeId="home"
          collapsed
          open
          stacked
          sizes={sizes}
          styles={styles}
        />
      </Stack>
    </div>
  ),
}
