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
    const setSpy = vi.spyOn(store, 'setLocale')

    // Trigger v-model update from template to cover line 3
    await wrapper
      .findComponent({ name: 'VBtnToggle' })
      .vm.$emit('update:modelValue', 'ja')

    expect(setSpy).toHaveBeenCalledWith('ja')
    expect(store.locale).toBe('ja')
  })
})
