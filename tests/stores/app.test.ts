import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useAppStore } from '@/stores/app'

describe('useAppStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('cycles theme correctly starting from default', () => {
    const store = useAppStore()
    const initial = store.themeMode

    store.cycleTheme()
    store.cycleTheme()
    store.cycleTheme()
    expect(store.themeMode).toBe(initial)
  })

  it('sets locale', () => {
    const store = useAppStore()
    store.setLocale('vi')
    expect(store.locale).toBe('vi')
  })

  it('sets font scale', () => {
    const store = useAppStore()
    store.setFontScale('lg')
    expect(store.fontScale).toBe('lg')
  })

  it('computes resolvedTheme', () => {
    const store = useAppStore()

    // Test light
    store.themeMode = 'light'
    expect(store.resolvedTheme).toBe('light')

    // Test dark
    store.themeMode = 'dark'
    expect(store.resolvedTheme).toBe('dark')

    // Test system
    store.themeMode = 'system'
    // It depends on usePreferredDark mocking,
    // but at least accessing it gives coverage.
    expect(['light', 'dark']).toContain(store.resolvedTheme)
  })

  it('toggles contrast mode', () => {
    const store = useAppStore()
    expect(store.contrastMode).toBe('normal')
    store.toggleContrastMode()
    expect(store.contrastMode).toBe('high')
    store.toggleContrastMode()
    expect(store.contrastMode).toBe('normal')
  })
})
