import IndexPage from '@/pages/index.vue'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ t: (key) => key }),
}))

describe('Index page', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders index page correctly', async () => {
    const wrapper = mount(IndexPage, {
      global: {
        stubs: {
          'i18n-t': true,
        },
      },
    })
    expect(wrapper.exists()).toBeTruthy()

    // Cover the toast logic
    await wrapper
      .findComponent({ name: 'VSelect' })
      .vm.$emit('update:modelValue', 'success')
    await wrapper.findComponent({ name: 'VBtn' }).trigger('click')

    await wrapper
      .findComponent({ name: 'VSelect' })
      .vm.$emit('update:modelValue', 'info')
    await wrapper.findComponent({ name: 'VBtn' }).trigger('click')

    await wrapper
      .findComponent({ name: 'VSelect' })
      .vm.$emit('update:modelValue', 'not_real')
    await wrapper.findComponent({ name: 'VBtn' }).trigger('click')

    await wrapper
      .findComponent({ name: 'VSelect' })
      .vm.$emit('update:modelValue', null)
    // Click again to hit the else branch
    await wrapper.findComponent({ name: 'VBtn' }).trigger('click')
  })
})
