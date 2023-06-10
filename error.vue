<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <hr>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})
const message = computed(() => {
  const { error = {} } = props
  const { statusCode = 500, statusMessage } = error
  let message
  switch (statusCode) {
  case 400:
    message = '400 Bad Request'
    break
  case 401:
    message = '401 Unauthorized'
    break
  case 403:
    message = '403 Forbidden'
    break
  case 404:
    message = '404 Not Found'
    break
  case 405:
    message = '405 Method Not Allowed'
    break
  case 500:
    message = '500 Internal Server Error'
    break
  case 502:
    message = '502 Bad Gateway'
    break
  case 503:
    message = '503 Service Unavailable'
    break
  default:
    message = statusMessage
    break
  }
  return message
})
useHead({
  title: message
})
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding: 16px 16px 0;
  hr {
    margin-top: 16px;
  }
}
</style>