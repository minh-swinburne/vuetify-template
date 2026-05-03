import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      'theme-light': 'mdi-weather-sunny',
      'theme-dark': 'mdi-weather-night',
      'theme-system': 'mdi-monitor',
      translate: 'mdi-translate',
      'notify-active': 'mdi-bell',
      'hero-rocket': 'mdi-rocket',
      docs: 'mdi-file-document',
      'open-external': 'mdi-open-in-new',
      features: 'mdi-star',
      components: 'mdi-view-dashboard',
      community: 'mdi-account-group',
    },
  },
})

config.global.plugins = [vuetify]

if (typeof window !== 'undefined') {
  window.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}
