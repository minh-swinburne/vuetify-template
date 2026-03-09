<template>
  <div ref="marquee" class="logo-marquee" :class="extraClass">
    <div ref="track" class="logo-track">
      <div ref=""></div>
      <a
        v-for="logo in logos"
        :key="logo.name"
        :href="logo.href"
        :title="logo.title"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="`/${logo.name}.svg`"
          :alt="logo.title"
          :class="['logo', logo.name]"
        />
      </a>
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
  { name: 'vite', title: 'Vite', href: 'https://vite.dev/' },
  { name: 'vue', title: 'Vue', href: 'https://vuejs.org/' },
  { name: 'vuetify', title: 'Vuetify', href: 'https://vuetifyjs.com/' },
  { name: 'tailwindcss', title: 'TailwindCSS', href: 'https://tailwindcss.com/' },
  { name: 'pinia', title: 'Pinia', href: 'https://pinia.vuejs.org/' },
  { name: 'vitest', title: 'Vitest', href: 'https://vitest.dev/' },
  { name: 'eslint', title: 'ESLint', href: 'https://eslint.org/' },
  { name: 'unplugin', title: 'Unplugin', href: 'https://unplugin.unjs.io/' },
]

const marquee = ref<HTMLDivElement | null>(null)
const track = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const marqueeEl = marquee.value
  const trackEl = track.value
  if (!marqueeEl || !trackEl) return
  const bannerWidth = trackEl.clientWidth
  let totalWidth = bannerWidth
  // Clone the track enough times for seamless looping
  while (totalWidth < window.innerWidth * 2) {
    const clone = trackEl.cloneNode(true) as HTMLElement
    clone.setAttribute('aria-hidden', 'true')
    marqueeEl.appendChild(clone)
    totalWidth += bannerWidth
  }
  console.log(totalWidth, window.innerWidth)
})
</script>

<style scoped>
.logo-marquee {
  overflow: hidden;
  width: 100%;
  background: transparent;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.logo-track {
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  gap: 2.5em;
  padding: 0 1.25em;
  animation: marquee 10s linear infinite;
}

.logo-marquee:hover .logo-track {
  animation-play-state: paused;
}

.logo {
  height: 120px;
  margin: 0 1.5rem;
  transition: filter 0.3s, transform 0.3s;
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
.logo.tailwindcss:hover {
  filter: drop-shadow(0 0 2em #38bdf8) drop-shadow(0 0 1em #0ea5e9);
}
.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #ffe56c) drop-shadow(0 -1em 1em #52ce63);
}
.logo.vitest:hover {
  filter: drop-shadow(0 0 2em #fcc72b) drop-shadow(0 0 1em #729b1b);
}
.logo.eslint:hover {
  filter: drop-shadow(0 0 2em #4b32c3) drop-shadow(0 0 1em #35495e);
}
.logo.unplugin:hover {
  filter: drop-shadow(0 0 2em #d4d4d4) drop-shadow(0 0 1em #a0a0a0);
}

@keyframes marquee {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
