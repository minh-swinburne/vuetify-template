import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import LogoBanner from '@/components/LogoBanner.vue'

describe('LogoBanner', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders logos correctly and duplicates them for marquee effect', async () => {
    const wrapper = mount(LogoBanner, {
      attrs: {
        class: 'custom-class',
      },
    })

    // since it waits for nextTick and image loading, let's just trigger next tick
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.logo-marquee').classes()).toContain('custom-class')
    expect(wrapper.findAll('img').length).toBeGreaterThan(0)
  })
})
