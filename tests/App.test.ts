import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { useAppStore } from '@/stores/app'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: true,
          'i18n-t': true,
        },
      },
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('covers vuetify theme fallback branch', async () => {
    const store = useAppStore()
    const originalChange = vuetify.theme.change
    Object.defineProperty(vuetify.theme, 'change', {
      value: undefined,
      configurable: true,
      writable: true,
    })

    mount(App, {
      global: {
        stubs: {
          RouterView: true,
          'i18n-t': true,
        },
      },
    })

    store.themeMode = 'light' // trigger resolvedTheme change

    expect(vuetify.theme.global.name.value).toBe('light')

    Object.defineProperty(vuetify.theme, 'change', {
      value: originalChange,
      configurable: true,
      writable: true,
    })
  })
})
