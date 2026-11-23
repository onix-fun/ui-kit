import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox, CheckboxGroup } from './checkbox'
import { Label } from './label'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { Stack } from './layout'
import { Textarea } from './textarea'

const meta = {
  title: 'UI/FormControls',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TextareaStory: Story = {
  name: 'Textarea',
  render: () => (
    <Stack direction="column" gap={8} style={{ maxWidth: 480 }}>
      <Label htmlFor="message">Комментарий</Label>
      <Textarea id="message" placeholder="Опишите задачу или вопрос" />
    </Stack>
  ),
}

export const CheckboxGroups: Story = {
  render: () => (
    <CheckboxGroup defaultValue={['design']}>
      <div className="flex items-center gap-3">
        <Checkbox id="design" value="design" />
        <Label htmlFor="design">Дизайн</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="frontend" value="frontend" />
        <Label htmlFor="frontend">Frontend</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="docs" value="docs" />
        <Label htmlFor="docs">Документация</Label>
      </div>
    </CheckboxGroup>
  ),
}

export const RadioGroups: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem id="r1" value="default" />
        <Label htmlFor="r1">Компактно</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem id="r2" value="comfortable" />
        <Label htmlFor="r2">Комфортно</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem id="r3" value="spacious" />
        <Label htmlFor="r3">Просторно</Label>
      </div>
    </RadioGroup>
  ),
}
