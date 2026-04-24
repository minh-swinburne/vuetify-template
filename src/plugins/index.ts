/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Types
import type { App } from 'vue'

// Plugins
import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import vuetify from './vuetify'
import router from '../router'
import i18n from './i18n'
import toastify, { toastifyOptions } from './toastify'


export function registerPlugins(app: App) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)

  const head = createHead()

  app.use(vuetify)
  app.use(pinia)
  app.use(i18n)
  app.use(head)
  app.use(router)
  app.use(toastify, toastifyOptions)
}
