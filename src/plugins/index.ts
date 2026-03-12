// Types
import type { App } from 'vue'
import { createPinia } from 'pinia'
import router from '../router'
import i18n from './i18n'

/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import toastify, { toastifyOptions } from './toastify'

// Plugins
import vuetify from './vuetify'

export function registerPlugins(app: App) {
  app.use(vuetify)
  app.use(createPinia())
  app.use(i18n)
  app.use(router)
  app.use(toastify, toastifyOptions)
}
