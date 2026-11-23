import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useDocumentMeta } from '../useDocumentMeta'

describe('useDocumentMeta', () => {
  it('sets route-specific title, canonical, OG and robots tags', () => {
    renderHook(() =>
      useDocumentMeta({
        title: 'Услуги',
        description: 'Чем занимается ONIX',
        path: '/services',
      }),
    )

    expect(document.title).toBe('Услуги — ONIX')
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `${window.location.origin}/services`,
    )
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      'Чем занимается ONIX',
    )
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'Услуги — ONIX',
    )
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
      'content',
      'index, follow',
    )
  })

  it('does not duplicate the site name in a title', () => {
    renderHook(() =>
      useDocumentMeta({
        title: 'Связаться с ONIX',
        description: 'Форма обратной связи',
        path: '/form',
      }),
    )

    expect(document.title).toBe('Связаться с ONIX')
  })

  it('marks error routes as noindex', () => {
    renderHook(() =>
      useDocumentMeta({
        title: 'Страница не найдена',
        description: 'Страница недоступна',
        path: '/404',
        noindex: true,
      }),
    )

    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow',
    )
  })
})
