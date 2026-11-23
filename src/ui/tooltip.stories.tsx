import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

const meta = {
  title: 'UI/Tooltip',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>Наведи</TooltipTrigger>
        <TooltipContent>Подсказка с коротким пояснением</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}
