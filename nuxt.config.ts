import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/html-validator',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['./stores'],
  },
  vite: {
    plugins: [svgLoader({ defaultImport: 'component' })],
  },
})
