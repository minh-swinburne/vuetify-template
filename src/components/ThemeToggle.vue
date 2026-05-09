<template>
  <v-tooltip location="bottom" :text="tooltipText">
    <template #activator="{ props }">
      <v-btn
        :aria-label="tooltipText"
        :icon="icon"
        v-bind="props"
        rounded="full"
        @click="appStore.cycleTheme"
      />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const icon = computed(() => {
  if (appStore.themeMode === 'light') return '$theme-light'
  if (appStore.themeMode === 'dark') return '$theme-dark'
  return '$theme-system'
})

const tooltipText = computed(() => {
  if (appStore.themeMode === 'light') return 'Theme: Light'
  if (appStore.themeMode === 'dark') return 'Theme: Dark'
  return 'Theme: System'
})
</script>
