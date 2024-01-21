<template>
  <div>
    <Button @click="store.increase">Counter store: {{ store.counter }}</Button>
  </div>
</template>

<script lang="ts" setup>
const store = useCounterStore()
</script>
