<template>
  <div class="container">
    <div>{{ message }}</div>
    <div>{{ list.length }}</div>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
const message = ref('')
const list: Ref<Array<any>> = ref([])
const getSession = () => {
  $api.getSession()
    .then(res => {

    })
    .catch(err => {
      console.error(err)
      message.value = 'hello world'
      list.value = [{}, {}]
    })
}
if (process.server) {
  getSession()
}
// getSession()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>