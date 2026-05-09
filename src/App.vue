<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import i18n from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

watch(
  () => appStore.locale,
  (locale) => {
    i18n.global.locale.value = locale
    document.documentElement.lang = locale
  },
  { immediate: true },
)

watch(
  () => appStore.resolvedTheme,
  (theme) => {
    if (typeof vuetify.theme.change === 'function') {
      vuetify.theme.change(theme)
    } else {
      vuetify.theme.global.name.value = theme
    }
  },
  { immediate: true },
)

watch(
  () => appStore.fontScale,
  (fontScale) => {
    document.documentElement.classList.remove(
      'font-scale-sm',
      'font-scale-md',
      'font-scale-lg',
    )
    document.documentElement.classList.add(`font-scale-${fontScale}`)
  },
  { immediate: true },
)

watch(
  () => appStore.contrastMode,
  (contrastMode) => {
    document.documentElement.classList.toggle(
      'contrast-high',
      contrastMode === 'high',
    )
  },
  { immediate: true },
)
</script>

<style></style>
