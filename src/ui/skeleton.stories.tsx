import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './skeleton'
import { Stack } from './layout'

const meta = {
  title: 'UI/Skeleton',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Stack direction="column" gap={16} style={{ maxWidth: 360 }}>
      <Skeleton style={{ height: 40, width: 40, borderRadius: 999 }} />
      <Skeleton style={{ height: 16, width: '70%' }} />
      <Skeleton style={{ height: 16, width: '100%' }} />
      <Skeleton style={{ height: 96, width: '100%' }} />
    </Stack>
  ),
}
