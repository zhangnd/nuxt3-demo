<template>
  <div class="container">
    <div>{{ message }}</div>
    <div>{{ list.length }}</div>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
let message = ''
let list: Array<any> = []
const getSession = async () => {
  try {
    const res = await $api.getSession()
  } catch (err) {
    console.error(err)
    message = 'hello world'
    list = [{}, {}]
  }
}
await getSession()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>