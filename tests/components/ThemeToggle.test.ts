import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useAppStore } from '@/stores/app'

describe('ThemeToggle', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('computes icon and tooltip correctly based on themeMode', async () => {
    const store = useAppStore()
    const wrapper = mount(ThemeToggle)

    store.themeMode = 'light'
    expect(wrapper.vm.icon).toBe('$theme-light')
    expect(wrapper.vm.tooltipText).toBe('Theme: Light')

    store.themeMode = 'dark'
    expect(wrapper.vm.icon).toBe('$theme-dark')
    expect(wrapper.vm.tooltipText).toBe('Theme: Dark')

    store.themeMode = 'system'
    expect(wrapper.vm.icon).toBe('$theme-system')
    expect(wrapper.vm.tooltipText).toBe('Theme: System')

    // trigger click cycleTheme
    const spy = vi.spyOn(store, 'cycleTheme')
    await wrapper.vm.$nextTick()
    await wrapper.find('button.v-btn').trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
