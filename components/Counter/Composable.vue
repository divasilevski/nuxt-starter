<template>
  <div>
    <Button @click="increase">Counter composable: {{ counter }}</Button>
  </div>
</template>

<script lang="ts" setup>
const { counter, increase } = useCounter()
</script>
