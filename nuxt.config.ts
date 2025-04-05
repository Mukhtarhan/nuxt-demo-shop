// ./nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@formkit/auto-animate/nuxt", "@nuxt/content", "@nuxthq/studio",'@pinia/nuxt'],

  nitro: {
    prerender: {
      routes: ["/", "/blog"],
    },
  },

  routeRules: {
    "/products/**": { ssr: true },
    "/checkout/**": { ssr: false },
  },

  css: ["~/assets/css/main.css", "vue-toastification/dist/index.css"],
  build: { transpile: ["vue-toastification"] },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  extends: [
    // "../base-layer",
    "@miracleio/my-nuxt-layer",
  ],

  pinia: {
    autoImports: ['defineStore'], // Automatically import defineStore
  },

  compatibilityDate: "2024-12-14",
});