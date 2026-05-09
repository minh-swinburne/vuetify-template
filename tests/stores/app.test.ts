import { useAppStore } from '@/stores/app'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'

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

    store.themeMode = 'light'
    expect(store.resolvedTheme).toBe('light')

    store.themeMode = 'dark'
    expect(store.resolvedTheme).toBe('dark')

    store.themeMode = 'system'
    expect(['light', 'dark']).toContain(store.resolvedTheme)
  })

  it('computes resolvedTheme covering preferredDark', async () => {
    vi.resetModules()
    vi.doMock('@vueuse/core', () => ({
      usePreferredDark: () => ({ value: true }),
    }))
    const { useAppStore: useMockedStore } = await import('@/stores/app')
    const store = useMockedStore()

    store.themeMode = 'system'
    expect(store.resolvedTheme).toBe('dark')

    vi.doUnmock('@vueuse/core')
  })

  it('handles defaultTheme fallback', async () => {
    vi.resetModules()
    vi.doMock('@/plugins/vuetify', () => ({
      defaultThemeName: 'custom-theme',
    }))
    const { useAppStore: useMockedStore } = await import('@/stores/app')
    const mockStore = useMockedStore()
    expect(mockStore.themeMode).toBe('system')
    vi.doUnmock('@/plugins/vuetify')
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
