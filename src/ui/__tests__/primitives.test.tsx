import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'
import { Button } from '../button'
import { Badge } from '../badge'

describe('ui kit primitives', () => {
  it('merges conditional classes and resolves Tailwind conflicts', () => {
    expect(cn('px-2', ['text-sm', { 'px-6': true }])).toBe('text-sm px-6')
  })

  it('renders Button and Badge with semantic variant classes', () => {
    render(
      <>
        <Button variant="outline" className="mt-2">
          Открыть
        </Button>
        <Badge variant="secondary">Новое</Badge>
      </>,
    )

    const button = screen.getByRole('button', { name: 'Открыть' })
    expect(button).toHaveAttribute('data-slot', 'button')
    expect(button.className).toContain('border-border')
    expect(button.className).toContain('mt-2')
    expect(screen.getByText('Новое')).toHaveAttribute('data-slot', 'badge')
  })
})
