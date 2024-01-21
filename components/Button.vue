<template>
  <button type="button" @click="clickHandler">
    <slot />
  </button>
</template>

<script lang="ts" setup>
const isClicked = ref(false)

const clickHandler = () => {
  // eslint-disable-next-line no-console
  console.log('test click')
  isClicked.value = true
}
</script>

<style lang="postcss" scoped>
button {
  @apply bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded;
}
</style>
