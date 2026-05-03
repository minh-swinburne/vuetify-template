import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { VApp } from 'vuetify/components'
import AuthLayout from '@/layouts/auth.vue'
import DefaultLayout from '@/layouts/default.vue'
import PublicLayout from '@/layouts/public.vue'

const mockPageInfo = { title: 'Mocked Title', breadcrumbs: [] as any[] }

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    meta: {
      get pageInfo() {
        return mockPageInfo
      },
    },
  })),
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
  }

  it('renders Auth layout', () => {
    const wrapper = mount(VApp, {
      slots: { default: AuthLayout },
      global: { stubs },
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders Default layout', () => {
    const wrapper = mount(VApp, {
      slots: { default: DefaultLayout },
      global: { stubs },
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  it('covers Default layout methods', async () => {
    const wrapper = mount(VApp, {
      slots: { default: DefaultLayout },
      global: { stubs },
    })

    const layout = wrapper.findComponent(DefaultLayout)

    // Desktop Drawer
    layout.vm.toggleDesktopDrawer()
    await wrapper.vm.$nextTick()
    expect(layout.vm.isDrawerExpanded).toBe(false)
    layout.vm.toggleDesktopDrawer()
    await wrapper.vm.$nextTick()
    expect(layout.vm.isDrawerExpanded).toBe(true)

    // Mobile Drawer
    layout.vm.toggleMobileDrawer()
    await wrapper.vm.$nextTick()
    expect(layout.vm.isMobileDrawerOpen).toBe(true)
    layout.vm.toggleMobileDrawer()
    await wrapper.vm.$nextTick()
    expect(layout.vm.isMobileDrawerOpen).toBe(false)

    // closeMobileDrawer
    layout.vm.isMobileDrawerOpen = true
    layout.vm.closeMobileDrawer()
    expect(layout.vm.isMobileDrawerOpen).toBe(false)

    // closeMenus
    layout.vm.closeMenus()

    // menus
    const buttons = wrapper.findAllComponents({ name: 'VBtn' })
    const notifyBtn = buttons.find((b) => b.props('icon') === '$notify')
    const userBtn = buttons.find((b) => b.props('icon') === '$user-circle')
    if (notifyBtn) await notifyBtn.trigger('click')
    if (userBtn) await userBtn.trigger('click')
    await flushPromises()

    // isActiveRoute
    expect(layout.vm.isActiveRoute('/')).toBe(true)

    mockPageInfo.breadcrumbs = [{ title: 'Home', to: '/' }]
    await wrapper.vm.$nextTick()

    // Test mobile branches
    window.innerWidth = 500
    window.dispatchEvent(new Event('resize'))
    await flushPromises()

    layout.vm.closeMenus()

    wrapper.unmount()
  })

  it('covers Default layout mobile breakpoints during mount', async () => {
    window.innerWidth = 400
    window.dispatchEvent(new Event('resize'))

    const wrapper = mount(VApp, {
      slots: { default: DefaultLayout },
      global: { stubs },
    })

    await flushPromises()

    // resize to trigger !isMobile
    window.innerWidth = 1200
    window.dispatchEvent(new Event('resize'))
    await flushPromises()

    expect(wrapper.exists()).toBeTruthy()
    wrapper.unmount()
  })

  it('renders Public layout', () => {
    const wrapper = mount(VApp, {
      slots: { default: PublicLayout },
      global: { stubs },
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
