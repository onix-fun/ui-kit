import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/ui/button'
import { Stack } from '@/ui/layout'

const meta = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Кнопка',
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap={16} wrap>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={16} align="center" wrap>
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Иконка">
        ★
      </Button>
    </Stack>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Недоступно',
  },
}
