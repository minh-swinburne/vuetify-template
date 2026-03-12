<route lang="yaml">
meta:
  layout: default
  bgColor: yellow # accessible via useRouter().currentRoute.value.meta.bgColor
</route>

<template>
  <!-- LogoBanner is auto-imported via unplugin-vue-components -->
  <LogoBanner class="mt-2!" />

  <v-container class="flex items-center justify-center" max-width="900">
    <div class="w-full">
      <div class="mb-8 text-center">
        <div class="font-light mb-1">{{ tp('heading.subtitle') }}</div>
        <h1 class="text-6xl font-heading font-bold">
          {{ tp('heading.title') }}
        </h1>
      </div>

      <!-- i18n + Pinia demo row -->
      <div class="flex flex-wrap items-center justify-center gap-4 mb-6">
        <v-chip
          class="px-4 py-1"
          color="primary"
          prepend-icon="mdi-translate"
          variant="tonal"
        >
          {{ tp('message.hello') }}
        </v-chip>

        <v-btn-toggle
          v-model="currentLocale"
          class="rounded-lg bg-surface p-1 gap-0.5"
          density="compact"
          mandatory
        >
          <v-btn class="rounded-lg" size="small" value="en">EN</v-btn>
          <v-btn class="rounded-lg" size="small" value="ja">JA</v-btn>
          <v-btn class="rounded-lg" size="small" value="vi">VI</v-btn>
        </v-btn-toggle>

        <v-label class="grow">
          {{ tp('toast.select.label') }}

          <v-select
            v-model="toastType"
            class="no-details ml-2"
            density="compact"
            variant="solo"
            clearable
            :placeholder="tp('toast.select.placeholder')"
            :items="[
              { title: tp('toast.select.default'), value: 'default' },
              { title: tp('toast.select.loading'), value: 'loading' },
              { title: tp('toast.select.success'), value: 'success' },
              { title: tp('toast.select.warning'), value: 'warning' },
              { title: tp('toast.select.error'), value: 'error' },
              { title: tp('toast.select.info'), value: 'info' },
            ]"
            :list-props="{ density: 'compact' }"
          />
        </v-label>

        <v-btn
          color="success"
          prepend-icon="mdi-bell-ring-outline"
          @click="showToast"
        >
          {{ tp('toast.button') }}
        </v-btn>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <v-card
          class="hero-card md:col-span-2 flex items-center"
          image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
          rounded="3xl"
          variant="flat"
        >
          <template #prepend>
            <v-avatar
              class="ml-2 mr-4"
              icon="mdi-rocket-launch-outline"
              size="60"
              variant="tonal"
            />
          </template>

          <template #image>
            <v-img
              class="hidden md:flex object-contain"
              position="center right"
            />
          </template>

          <template #title>
            <h2 class="text-2xl font-medium my-0">
              {{ tp('card.hero.title') }}
            </h2>
          </template>

          <template #subtitle>
            <i18n-t
              class="leading-7"
              :keypath="kp('card.hero.subtitle')"
              tag="div"
            >
              <template #file>
                <v-code>pages/index.vue</v-code>
              </template>
            </i18n-t>
          </template>
        </v-card>

        <v-card
          v-for="link in links"
          :key="link.href"
          class="h-full py-3 rounded-3xl transition-[border-radius] hover:rounded-lg flex items-center [&>.v-card-item]:w-full group"
          :href="link.href"
          rel="noopener noreferrer"
          :subtitle="link.subtitle"
          target="_blank"
          :title="link.title"
          variant="flat"
        >
          <template #prepend>
            <v-avatar
              class="ml-2 mr-4"
              :icon="link.icon"
              size="60"
              variant="tonal"
            />
          </template>
          <template #append>
            <v-icon
              class="ml-1 opacity-0 transition group-hover:opacity-90 group-hover:-translate-x-1"
              icon="mdi-open-in-new"
            />
          </template>
          <template #subtitle>
            <div class="line-clamp-2 text-wrap">{{ link.subtitle }}</div>
          </template>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useI18nPrefix } from '@/composables/useI18nPrefix'
import { toast } from 'vue3-toastify'

const { tp, kp, locale } = useI18nPrefix('pages.index')

const toastType = ref(null)

const currentLocale = computed({
  get: () => locale.value,
  set: (val: string) => {
    locale.value = val
  },
})

function showToast() {
  if (toastType.value && toastType.value in toast)
    (toast[toastType.value] as (message: string) => void)(
      tp('message.hello') + ' 🎉',
    )
  else toast(tp('message.hello') + ' 🎉')
}

const links = computed(() => [
  {
    href: 'https://vuetifyjs.com/',
    icon: 'mdi-text',
    subtitle: tp('card.grid.doc.subtitle'),
    title: tp('card.grid.doc.title'),
  },
  {
    href: 'https://vuetifyjs.com/introduction/why-vuetify/#feature-guides',
    icon: 'mdi-star',
    subtitle: tp('card.grid.feat.subtitle'),
    title: tp('card.grid.feat.title'),
  },
  {
    href: 'https://vuetifyjs.com/components/all',
    icon: 'mdi-widgets-outline',
    subtitle: tp('card.grid.comp.subtitle'),
    title: tp('card.grid.comp.title'),
  },
  {
    href: 'https://discord.vuetifyjs.com',
    icon: 'mdi-account-group-outline',
    subtitle: tp('card.grid.cmty.subtitle'),
    title: tp('card.grid.cmty.title'),
  },
])
</script>

<style scoped>
@reference "../styles/tailwind.css";

.hero-card {
  @apply py-3 md:pr-30 w-full transition-none;
}

:deep(.v-card) {
  @apply bg-gray-200;
  @apply dark:bg-black dark:bg-linear-to-r dark:from-primary/50 dark:to-primary/30 dark:text-white/80;
}
</style>
