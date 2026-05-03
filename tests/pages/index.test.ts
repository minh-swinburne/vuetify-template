import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import IndexPage from '@/pages/index.vue'

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ t: (key) => key }),
}))

describe('Index page', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders index page correctly', () => {
    const wrapper = mount(IndexPage, {
      global: {
        stubs: {
          'i18n-t': true,
        },
      },
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
