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
const getSession = async () => {
  try {
    await $api.getSession()
  } catch (err) {
    console.error(err)
  }
}
await getSession()
onBeforeMount(() => {
  import('jswx').then(module => {
    const wx = module.default
    wx.config({
      debug: true
    })
    wx.ready(() => {
      console.log('wx ready!')
    })
  })
})
onMounted(() => {

})
</script>

<style lang="scss" scoped>

</style>