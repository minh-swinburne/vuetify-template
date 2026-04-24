<template>
  <v-app-bar border flat>
    <v-btn class="font-heading text-none" to="/" variant="text">
      Vuetify Template
    </v-btn>

    <div class="ml-4 hidden sm:flex items-center gap-1">
      <v-btn
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        variant="text"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <v-spacer />

    <ThemeToggle />
    <LocaleSwitcher class="mx-1" />

    <v-btn color="primary" to="/auth/login" variant="flat">Sign In</v-btn>
  </v-app-bar>

  <v-main>
    <v-container class="py-6" fluid>
      <router-view />
    </v-container>
  </v-main>

  <v-footer border class="px-6" height="52">
    <div class="text-caption text-medium-emphasis">Public layout footer</div>
  </v-footer>
</template>

<script setup lang="ts">
const navItems = [
  { title: 'Home', to: '/' },
  { title: 'Docs', to: '/docs' },
]
</script>
