<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
onBeforeMount(() => {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
})
</script>
