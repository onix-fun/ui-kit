import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'
import { Stack } from './layout'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select'

const meta = {
  title: 'UI/Select',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Stack direction="column" gap={8} style={{ maxWidth: 320 }}>
      <Label>Платформа</Label>
      <Select defaultValue="web">
        <SelectTrigger>
          <SelectValue placeholder="Выберите платформу" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Продукты</SelectLabel>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
            <SelectItem value="desktop">Desktop</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Stack>
  ),
}
