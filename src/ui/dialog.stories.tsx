import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Input } from './input'
import { Label } from './label'
import { Stack } from './layout'

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger render={<Button variant="outline" />}>Открыть диалог</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Настройки проекта</DialogTitle>
          <DialogDescription>Измените параметры и сохраните результат.</DialogDescription>
        </DialogHeader>
        <Stack direction="column" gap={16}>
          <Stack direction="column" gap={8}>
            <Label htmlFor="project-name">Название</Label>
            <Input id="project-name" defaultValue="ONIX UI Kit" />
          </Stack>
        </Stack>
        <DialogFooter>
          <Button variant="outline">Отмена</Button>
          <Button>Сохранить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
