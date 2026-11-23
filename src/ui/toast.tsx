'use client'

import { Toast } from '@base-ui/react/toast'
import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button'

function ToastProvider({ ...props }: Toast.Provider.Props) {
  return <Toast.Provider data-slot="toast-provider" {...props} />
}

function ToastViewport({ className, ...props }: Toast.Viewport.Props) {
  return (
    <Toast.Viewport
      data-slot="toast-viewport"
      className={cn(
        'fixed top-auto right-4 bottom-4 z-[100] flex w-full max-w-[360px] flex-col gap-2 outline-none',
        className,
      )}
      {...props}
    />
  )
}

function ToastRoot({ className, ...props }: Toast.Root.Props) {
  return (
    <Toast.Root
      data-slot="toast"
      className={cn(
        'group/toast grid w-full grid-cols-[1fr_auto] items-start gap-3 rounded-lg border bg-background p-4 text-sm shadow-lg transition-all data-[starting-style]:translate-y-2 data-[starting-style]:opacity-0 data-[ending-style]:translate-y-2 data-[ending-style]:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: Toast.Title.Props) {
  return <Toast.Title data-slot="toast-title" className={cn('font-medium', className)} {...props} />
}

function ToastDescription({ className, ...props }: Toast.Description.Props) {
  return (
    <Toast.Description
      data-slot="toast-description"
      className={cn('text-muted-foreground', className)}
      {...props}
    />
  )
}

function ToastAction({ className, ...props }: Toast.Action.Props) {
  return (
    <Toast.Action
      data-slot="toast-action"
      className={cn(buttonVariants({ size: 'sm', variant: 'outline' }), className)}
      {...props}
    />
  )
}

function ToastClose({ className, ...props }: Toast.Close.Props) {
  return (
    <Toast.Close
      data-slot="toast-close"
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-md opacity-70 transition-opacity hover:bg-muted hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      aria-label="Закрыть"
      {...props}
    >
      <XIcon className="size-4" />
    </Toast.Close>
  )
}

export { ToastProvider, ToastViewport, ToastRoot, ToastTitle, ToastDescription, ToastAction, ToastClose }
