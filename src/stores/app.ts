// Utilities
import { defaultThemeName } from '@/plugins/vuetify'
import { usePreferredDark } from '@vueuse/core'
import { defineStore } from 'pinia'

type ThemeMode = 'light' | 'dark' | 'system'
type LocaleCode = 'en' | 'ja' | 'vi'
type FontScale = 'sm' | 'md' | 'lg'
type ContrastMode = 'normal' | 'high'

export const useAppStore = defineStore(
  'app',
  () => {
    const initialThemeMode: ThemeMode =
      defaultThemeName === 'light' || defaultThemeName === 'dark'
        ? defaultThemeName
        : 'system'

    const themeMode = ref<ThemeMode>(initialThemeMode)
    const locale = ref<LocaleCode>('en')
    const fontScale = ref<FontScale>('md')
    const contrastMode = ref<ContrastMode>('normal')

    const preferredDark = usePreferredDark()

    const resolvedTheme = computed<'light' | 'dark'>(() => {
      if (themeMode.value === 'system') {
        return preferredDark.value ? 'dark' : 'light'
      }
      return themeMode.value
    })

    function cycleTheme() {
      if (themeMode.value === 'light') {
        themeMode.value = 'dark'
      } else if (themeMode.value === 'dark') {
        themeMode.value = 'system'
      } else {
        themeMode.value = 'light'
      }
    }

    function setLocale(value: LocaleCode) {
      locale.value = value
    }

    function setFontScale(value: FontScale) {
      fontScale.value = value
    }

    function toggleContrastMode() {
      contrastMode.value = contrastMode.value === 'normal' ? 'high' : 'normal'
    }

    return {
      themeMode,
      locale,
      fontScale,
      contrastMode,
      resolvedTheme,
      cycleTheme,
      setLocale,
      setFontScale,
      toggleContrastMode,
    }
  },
  {
    persist: {
      key: 'vuetify-template-app',
      pick: [
        'themeMode',
        'locale',
        'fontScale',
        'contrastMode',
      ],
    },
  },
)
