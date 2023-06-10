<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String
})
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
  fill: currentColor;
  overflow: hidden;
}
</style>