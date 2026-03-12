/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '../styles/layers.css'
import 'vuetify/styles'

const defaultColorPalette = {
  // primary:              '#775fff',
  // 'primary-dark':       '#6250cc',
  // 'primary-light':      '#b298ff',
  secondary:            '#a54bff',
  'secondary-dark':     '#8840d0',
  'secondary-light':    '#cc99ff',
  tertiary:             '#00bfa5',
  'tertiary-dark':      '#009e87',
  'tertiary-light':     '#3bdbc8',
  success:              '#34aa52',
  warning:              '#ffaa00',
  error:                '#ff2345',
  info:                 '#2196f3',
  accent:               '#ff4096',
  light:                '#ffffff',
  dark:                 '#202020',
  'on-primary':         '#ffffff',
  'on-secondary':       '#ffffff',
  'on-tertiary':        '#ffffff',
  'on-success':         '#ffffff',
  'on-error':           '#ffffff',
  'on-warning':         '#ffffff',
  'on-info':            '#ffffff',
  'on-accent':          '#ffffff',
  'on-light':           '#545454',
  'on-dark':            '#aba3ba',
}

export default createVuetify({
  theme: {
    defaultTheme: 'system',
    utilities: false,
    themes: {
      light: {
        dark: false,
        colors: {
          ...defaultColorPalette,
          background:           '#f6f4fd',
          surface:              '#ffffff',
          'surface-variant':    '#545454',
          lowest:               '#ffffff',
          lower:                '#f5f5f5',
          subtle:               '#ebebeb',
          higher:               '#e1e1e1',
          highest:              '#d7d7d7',
          muted:                '#726c7d',
          'on-background':      '#131313',
          'on-surface':         '#131313',
          'on-surface-variant': '#eeeeee',
        },
      },
      dark: {
        dark: true,
        colors: {
          ...defaultColorPalette,
          background:           '#131313',
          surface:              '#202020',
          'surface-variant':    '#aba3ba',
          lowest:               '#131313',
          lower:                '#1f1f1f',
          subtle:               '#2b2b2b',
          higher:               '#333333',
          highest:              '#3c3c3c',
          muted:                '#726c7d',
          'on-background':      '#f5f5f5',
          'on-surface':         '#f5f5f5',
          'on-surface-variant': '#202020',
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1145,
      xl: 1545,
      xxl: 2138,
    },
  },
})
