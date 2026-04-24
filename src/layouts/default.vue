<template>
  <div class="app-layout" @click="closeMenus">
    <div
      v-if="isMobileDrawerOpen"
      class="mobile-overlay fixed inset-0 z-40 bg-black/50 lg:hidden"
      @click.stop="closeMobileDrawer"
    ></div>

    <aside
      class="nav-drawer fixed left-0 top-0 z-50 flex h-full flex-col bg-surface shadow-xl transition-all duration-300"
      :class="{
        'w-64': isDrawerExpanded,
        'w-16': !isDrawerExpanded,
        'translate-x-0': isMobileDrawerOpen,
        '-translate-x-full lg:translate-x-0': !isMobileDrawerOpen,
      }"
    >
      <div
        class="logo-section flex items-center gap-3 overflow-x-hidden border-b border-surface-variant px-4 py-3"
        :class="{ 'justify-center': !isDrawerExpanded }"
      >
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
          V
        </div>
        <span
          v-show="isDrawerExpanded"
          class="whitespace-nowrap text-sm font-semibold text-on-surface"
        >
          Vuetify Template
        </span>
      </div>

      <nav class="flex-1 overflow-y-auto overflow-x-hidden py-4">
        <ul class="space-y-1 px-2">
          <li v-for="item in navItems" :key="item.to">
            <router-link
              class="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-200"
              :class="{
                'bg-primary/12 text-primary': isActiveRoute(item.to),
                'text-on-surface/50 hover:bg-subtle hover:text-on-surface': !isActiveRoute(item.to),
              }"
              :title="item.title"
              :to="item.to"
              @click="closeMobileDrawer"
            >
              <v-icon class="shrink-0" :icon="item.icon" />
              <span
                v-show="isDrawerExpanded"
                class="whitespace-nowrap text-sm font-medium"
              >
                {{ item.title }}
              </span>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="border-t border-subtle p-2">
        <v-btn
          class="w-full"
          :icon="isDrawerExpanded ? '$prev' : '$next'"
          variant="text"
          @click="toggleDesktopDrawer"
        />
      </div>
    </aside>

    <div
      class="app-container flex min-h-screen flex-col transition-all duration-300"
      :class="{
        'lg:ml-64': isDrawerExpanded,
        'lg:ml-16': !isDrawerExpanded,
      }"
    >
      <v-app-bar border class="sticky top-0 z-30" flat>
        <v-app-bar-nav-icon
          v-if="mdAndDown"
          @click.stop="toggleMobileDrawer"
        />

        <v-btn class="hidden font-heading text-none md:flex" to="/" variant="text">
          Vuetify Template
        </v-btn>

        <v-text-field
          class="ml-4 hidden max-w-120 md:block"
          clearable
          density="comfortable"
          hide-details
          placeholder="Search pages..."
          prepend-inner-icon="$search"
          variant="solo"
        />

        <v-spacer />

        <ThemeToggle />
        <LocaleSwitcher />

        <v-menu>
          <template #activator="{ props }">
            <v-btn icon="$notify" v-bind="props" />
          </template>
          <v-list density="comfortable" min-width="220">
            <v-list-item title="No new notifications" />
          </v-list>
        </v-menu>

        <v-menu>
          <template #activator="{ props }">
            <v-btn icon="$user-circle" v-bind="props" />
          </template>
          <v-list density="comfortable" min-width="220">
            <v-list-item prepend-icon="$user-profile" title="Profile" />
            <v-list-item prepend-icon="$preferences" title="Preferences" />
            <v-divider class="my-1" />
            <v-list-item prepend-icon="$sign-out" title="Sign out" />
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main class="main-content">
        <v-container class="py-6" fluid>
          <div class="mb-4">
            <v-breadcrumbs v-if="breadcrumbs.length > 0" :items="breadcrumbs" />

            <div class="flex items-center gap-2">
              <v-icon v-if="pageInfo.icon" class="text-2xl mr-2" :icon="pageInfo.icon" />
              <h1 class="my-0 text-2xl font-heading font-semibold">
                {{ pageInfo.title }}
              </h1>
            </div>
          </div>

          <router-view />
        </v-container>
      </v-main>

      <v-footer border class="px-6" height="48">
        <div class="text-caption text-medium-emphasis">
          Vuetify Template • Phase 1 app shell
        </div>
      </v-footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'

type BreadcrumbItem = {
  title: string
  to?: string
  disabled?: boolean
}

type PageInfo = {
  title: string
  icon?: string
  breadcrumbs?: BreadcrumbItem[]
}

const route = useRoute()
const router = useRouter()
const { mdAndDown } = useDisplay()

const isDrawerExpanded = ref(true)
const isMobileDrawerOpen = ref(false)

const navItems = [
  { icon: '$nav-home', title: 'Home', to: '/' },
  { icon: '$nav-settings', title: 'Settings', to: '/settings' },
  { icon: '$nav-forms', title: 'Forms', to: '/forms' },
  { icon: '$nav-dashboard', title: 'Dashboard', to: '/dashboard' },
  { icon: '$nav-loading', title: 'Loading UI', to: '/ui/loading' },
  { icon: '$nav-tables', title: 'Tables', to: '/ui/tables' },
  { icon: '$nav-realtime', title: 'Realtime', to: '/realtime' },
]

const pageInfo = computed<PageInfo>(() => {
  const metaPageInfo = route.meta.pageInfo as PageInfo | undefined
  return metaPageInfo ?? { title: 'Vuetify Template' }
})

const breadcrumbs = computed<BreadcrumbItem[]>(
  () => pageInfo.value.breadcrumbs ?? [],
)

function isActiveRoute(to: string): boolean {
  return router.currentRoute.value.path === to
}

function toggleDesktopDrawer() {
  isDrawerExpanded.value = !isDrawerExpanded.value
}

function toggleMobileDrawer() {
  isMobileDrawerOpen.value = !isMobileDrawerOpen.value
}

function closeMobileDrawer() {
  isMobileDrawerOpen.value = false
}

function closeMenus() {
  if (mdAndDown.value) closeMobileDrawer()
}

watch(
  mdAndDown,
  (isMobile) => {
    if (!isMobile) {
      isMobileDrawerOpen.value = false
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.app-layout {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.main-content {
  overflow-y: auto;
  flex-grow: 1;
}

.mobile-overlay {
  animation: fade-in 0.2s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.nav-drawer nav::-webkit-scrollbar {
  width: 4px;
}

.nav-drawer nav::-webkit-scrollbar-track {
  background: transparent;
}

.nav-drawer nav::-webkit-scrollbar-thumb {
  background: rgb(var(--v-theme-higher));
  border-radius: 4px;
}

.nav-drawer nav::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--v-theme-highest));
}
</style>
