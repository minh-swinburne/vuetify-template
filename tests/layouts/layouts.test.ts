import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import AuthLayout from '@/layouts/auth.vue'
import DefaultLayout from '@/layouts/default.vue'
import PublicLayout from '@/layouts/public.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    currentRoute: {
      value: {
        path: '/',
      },
    },
  })),
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ t: (key: string) => key }),
}))

describe('Layouts', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const stubs = {
    RouterView: true,
    RouterLink: true,
    'i18n-t': true,
    VMain: true,
    VApp: true,
    VAppBar: true,
    AppHeader: true,
    AppFooter: true,
  }

  it('renders Auth layout', () => {
    const wrapper = mount(AuthLayout, {
      global: { stubs },
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders Default layout', () => {
    const wrapper = mount(DefaultLayout, {
      global: { stubs },
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders Public layout', () => {
    const wrapper = mount(PublicLayout, {
      global: { stubs },
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
