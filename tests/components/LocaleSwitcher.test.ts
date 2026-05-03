import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import { useAppStore } from '@/stores/app'

describe('LocaleSwitcher', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly and sets locale', async () => {
    const store = useAppStore()
    expect(store.locale).toBe('en') // default

    const wrapper = mount(LocaleSwitcher)

    // We can interact with component
    // But mostly we just check the computed property and setting store value

    // since accessing component directly requires finding internal state, we can simulate change by directly writing to localeModel
    const setSpy = vi.spyOn(store, 'setLocale')

    // Trigger v-model update
    wrapper.vm.localeModel = 'ja'

    expect(setSpy).toHaveBeenCalledWith('ja')
    expect(store.locale).toBe('ja')

    // Check computed getter
    expect(wrapper.vm.localeModel).toBe('ja')
  })
})
