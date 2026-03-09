<route lang="yaml">
meta:
  layout: default
  bgColor: yellow   # accessible via useRouter().currentRoute.value.meta.bgColor
</route>

<template>
  <HelloWorld />
</template>

<script lang="ts" setup>
  // HelloWorld is auto-imported via unplugin-vue-components
</script>
