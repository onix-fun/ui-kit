import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast } from '@base-ui/react/toast'
import { Button } from './button'
import { ToastClose, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from './toast'

function ToastDemo() {
  const { toasts, add } = Toast.useToastManager()
  return (
    <>
      <Button
        onClick={() =>
          add({
            title: 'Сохранено',
            description: 'Изменения UI kit опубликованы в Storybook.',
          })
        }
      >
        Показать toast
      </Button>
      <ToastViewport>
        {toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast}>
            <div className="grid gap-1">
              <ToastTitle />
              <ToastDescription />
            </div>
            <ToastClose />
          </ToastRoot>
        ))}
      </ToastViewport>
    </>
  )
}

const meta = {
  title: 'UI/Toast',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
}
