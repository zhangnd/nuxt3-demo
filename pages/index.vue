<template>
  <div class="container">
    <client-only>
      <span class="time">{{ formatTime(Date.now(), 'yyyy-MM-dd hh:mm:ss') }}</span>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import tooool from 'tooool'

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
  console.log(tooool.randomstr(22))
})
</script>

<style lang="scss" scoped>
.container {
  .time {
    position: fixed;
    top: 0;
    right: 0;
  }
}
</style>