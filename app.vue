<template>
  <header>
    <Icon name="home" />
    <div class="index-page__title">Nuxt app</div>
  </header>

  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  title: 'Nuxt app',
  htmlAttrs: { lang: 'en' },
})
</script>

<style lang="postcss">
/* postcss + tailwind */
body {
  @apply container px-4;

  header {
    @apply flex gap-1 py-4 font-bold uppercase;
  }
}

/* css */
a {
  width: fit-content;
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
