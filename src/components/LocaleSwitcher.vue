<template>
  <v-btn-toggle
    v-model="localeModel"
    class="rounded-lg bg-surface p-1 gap-0.5"
    density="compact"
    mandatory
  >
    <v-btn class="rounded-lg" size="small" value="en">EN</v-btn>
    <v-btn class="rounded-lg" size="small" value="ja">JA</v-btn>
    <v-btn class="rounded-lg" size="small" value="vi">VI</v-btn>
  </v-btn-toggle>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore()

const localeModel = computed({
  get: () => appStore.locale,
  set: (value: 'en' | 'ja' | 'vi') => {
    appStore.setLocale(value)
  },
})
</script>
