import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import App from '@/App.vue'

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
})
