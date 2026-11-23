import { Story, Variant } from '@histoire/plugin-react'
import { Home, Layers3, Sparkles } from 'lucide-react'
import { Logo } from '@/ui/logo'
import { NavPanel, type Item, type NavPanelSizes, type NavPanelStyleValues } from '@/ui/navPanel'
import { OnixMark } from '@/ui/onix-mark'
import { Stack } from '@/ui/layout'

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

export default function BrandStory() {
  return (
    <Story id="brand" title="Brand/Navigation">
      <Variant id="mark" title="OnixMark">
        <OnixMark style={{ height: 96 }} />
      </Variant>
      <Variant id="logo" title="Logo">
        <Logo sizes={{ height: 32 }} />
      </Variant>
      <Variant id="nav-expanded" title="NavPanel — expanded">
        <NavPanel items={items} activeId="catalog" sizes={sizes} styles={styles} />
      </Variant>
      <Variant id="nav-collapsed" title="NavPanel — collapsed">
        <NavPanel
          items={items}
          activeId="home"
          collapsed
          hoveredId="home"
          collapsedWidth={sizes.burgerSize + sizes.capsulePadding * 2}
          sizes={sizes}
          styles={styles}
        />
      </Variant>
      <Variant id="nav-stacked" title="NavPanel — stacked">
        <div style={{ ['--header-top' as string]: '24px', minHeight: 280 }}>
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
      </Variant>
    </Story>
  )
}
