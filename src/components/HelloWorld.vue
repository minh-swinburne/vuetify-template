<template>
  <LogoBanner class="mt-8" />
  <VContainer class="max-w-full w-full flex flex-col items-center justify-center px-4">
    <div class="max-w-240">
      <div class="mb-8 text-center">
        <!-- <div class="text-body-2 font-weight-light mb-n1">Welcome to</div> -->
        <h1 class="text-6xl font-light">You did it!</h1>
      </div>

      <VRow>
        <VCol cols="12">
          <VCard
            class="p-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="tonal"
          >
            <template #image>
              <VImg position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Get started</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Change this page by updating <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in
                <v-kbd>components/HelloWorld.vue</v-kbd>.
              </div>
            </template>
          </VCard>
        </VCol>

        <VCol v-for="link in links" :key="link.href" cols="6">
          <VCard
            append-icon="mdi-open-in-new"
            class="p-4"
            color="surface-variant"
            :href="link.href"
            :prepend-icon="link.icon"
            rel="noopener noreferrer"
            rounded="lg"
            :subtitle="link.subtitle"
            target="_blank"
            :title="link.title"
            variant="tonal"
          />
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<script setup lang="ts">
import LogoBanner from './LogoBanner.vue'

const links = [
  {
    href: 'https://vuetifyjs.com/',
    icon: 'mdi-text-box-outline',
    subtitle: 'Learn about all things Vuetify in our documentation.',
    title: 'Documentation',
  },
  {
    href: 'https://vuetifyjs.com/introduction/why-vuetify/#feature-guides',
    icon: 'mdi-star-circle-outline',
    subtitle: 'Explore available framework Features.',
    title: 'Features',
  },
  {
    href: 'https://vuetifyjs.com/components/all',
    icon: 'mdi-widgets-outline',
    subtitle: 'Discover components in the API Explorer.',
    title: 'Components',
  },
  {
    href: 'https://discord.vuetifyjs.com',
    icon: 'mdi-account-group-outline',
    subtitle: 'Connect with Vuetify developers.',
    title: 'Community',
  },
]
</script>
