<template>
  <div ref="marquee" class="logo-marquee" :class="extraClass">
    <!-- <div class="logo-overlay"></div> -->
    <div ref="track" class="logo-track">
      <div ref="banner" class="logo-banner">
        <a
          v-for="logo in logos"
          :key="logo.name"
          :href="logo.href"
          rel="noopener noreferrer"
          target="_blank"
          :title="logo.title"
        >
          <img
            :alt="logo.title"
            :class="['logo', 'h-25 lg:h-30', logo.name]"
            :src="`/${logo.name}.svg`"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No need for vue directives imports here since unplugin-auto-import will handle them
// import { computed, onMounted, ref, useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const extraClass = computed(() => attrs.class as any)

const logos = [
  { name: 'vuetify', title: 'Vuetify', href: 'https://vuetifyjs.com/' },
  { name: 'vue', title: 'Vue', href: 'https://vuejs.org/' },
  { name: 'vite', title: 'Vite', href: 'https://vite.dev/' },
  { name: 'pinia', title: 'Pinia', href: 'https://pinia.vuejs.org/' },
  {
    name: 'vue-i18n',
    title: 'Vue i18n',
    href: 'https://vue-i18n.intlify.dev/',
  },
  { name: 'vueuse', title: 'VueUse', href: 'https://vueuse.org/' },
  { name: 'vitest', title: 'Vitest', href: 'https://vitest.dev/' },
  {
    name: 'tailwindcss',
    title: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
  },
  { name: 'eslint', title: 'ESLint', href: 'https://eslint.org/' },
  { name: 'unplugin', title: 'Unplugin', href: 'https://unplugin.unjs.io/' },
  { name: 'unhead', title: 'Unhead', href: 'https://unhead.unjs.io/' },
]

const marquee = ref<HTMLDivElement | null>(null)
const track = ref<HTMLDivElement | null>(null)
const banner = ref<HTMLDivElement | null>(null)

onMounted(() => {
  nextTick(async () => {
    const marqueeEl = marquee.value
    const trackEl = track.value
    const bannerEl = banner.value
    if (!marqueeEl || !trackEl || !bannerEl) return

    // Wait for images inside the banner to load before measuring
    const waitForImages = (container: HTMLElement) => {
      const imgs = Array.from(
        container.querySelectorAll('img'),
      ) as HTMLImageElement[]
      if (imgs.length === 0) return Promise.resolve()
      return Promise.all(
        imgs.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete && img.naturalWidth !== 0) return resolve()
              const onLoad = () => {
                cleanup()
                resolve()
              }
              const onError = () => {
                cleanup()
                resolve()
              }
              const cleanup = () => {
                img.removeEventListener('load', onLoad)
                img.removeEventListener('error', onError)
              }
              img.addEventListener('load', onLoad)
              img.addEventListener('error', onError)
            }),
        ),
      )
    }

    await waitForImages(bannerEl)

    const updateClones = () => {
      const targetWidth = marqueeEl.offsetWidth * 2 + bannerEl.offsetWidth
      let currentTotalWidth = bannerEl.offsetWidth * trackEl.children.length

      while (currentTotalWidth < targetWidth) {
        const clone = bannerEl.cloneNode(true) as HTMLElement
        clone.setAttribute('aria-hidden', 'true')
        trackEl.append(clone)
        currentTotalWidth += bannerEl.offsetWidth
      }
    }

    updateClones()
    window.addEventListener('resize', updateClones)
  })
})
</script>

<style scoped>
.logo-marquee {
  overflow: visible; /* allow visual overflow (shadows) without changing layout height */
  position: relative;
  width: 100%;
  background: transparent;
  padding: 6rem 0;
  margin: -2rem 0;
  display: flex;
  align-items: center;

  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 100% 150%;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: 100% 150%;
}

.logo-track {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.logo-banner {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  gap: 2.5em;
  padding: 0 1.25em;
  animation: marquee 20s linear infinite;
}

.logo-marquee:hover .logo-banner {
  animation-play-state: paused;
}

.logo {
  max-width: 140px;
  margin: 0 1.5rem;
  transition:
    filter 0.3s,
    transform 0.3s;
  will-change: filter, transform;
  opacity: 0.7;
}

.logo:hover {
  opacity: 1;
  transform: scale(1.1);
}

.logo.vite:hover {
  filter: drop-shadow(0 0 2em #41d1ff) drop-shadow(0 0 1em #bd34fe);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883) drop-shadow(0 0 1em #35495e);
}
.logo.vuetify:hover {
  filter: drop-shadow(0 0 2em #1697f6) drop-shadow(0 0 1em #1867c0);
}
.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #ffe56c) drop-shadow(0 -1em 1em #52ce63);
}
.logo.vue-i18n:hover {
  filter: drop-shadow(0 0 2em #42b883) drop-shadow(0 0 1em #35495e);
}
.logo.vueuse:hover {
  filter: drop-shadow(0 0 2em #42b883) drop-shadow(0 0 1em #35495e);
}
.logo.vitest:hover {
  filter: drop-shadow(0 0 2em #fcc72b) drop-shadow(0 0 1em #729b1b);
}
.logo.tailwindcss:hover {
  filter: drop-shadow(0 0 2em #38bdf8) drop-shadow(0 0 1em #0ea5e9);
}
.logo.eslint:hover {
  filter: drop-shadow(0 0 2em #4b32c3) drop-shadow(0 0 1em #35495e);
}
.logo.unplugin:hover {
  filter: drop-shadow(0 0 2em #d4d4d4) drop-shadow(0 0 1em #a0a0a0);
}
.logo.unhead:hover {
  filter: drop-shadow(0 0 2em #fbbf24) drop-shadow(0 1em 1em #f1d74a);
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
