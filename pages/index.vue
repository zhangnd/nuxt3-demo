<template>
  <div>
    <client-only>
      <span class="time">{{ formatTime(Date.now(), 'yyyy-MM-dd hh:mm:ss') }}</span>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
const props = defineProps({

})
const foo = useFoo()
onBeforeMount(() => {
  $api.login()
})
onMounted(() => {

})
</script>

<style lang="scss" scoped>

</style>